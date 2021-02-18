import React,{useState, useEffect} from 'react';
import './App.css';
import Recipe from "./Recipe";

function App() {
    const [recipe,setRecipes]=useState([])
    const [search,setSearch]=useState('')
    const [query,setQuery]=useState('')

    const APP_ID = "20f1b31d";
    const APP_KEY = "99928e24420521c69496c610dd600c0b";

    useEffect(()=>{
        getRecipe();
    },[query])

    // const Req =
    //     `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

    const getRecipe = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await res.json();
        console.log(data.hits);
        setRecipes(data.hits);

    }
    // fetch(`https://api.edamam.com/search`)
    //     .then((response) => response.json()) 
    //     .then(data => {
    //         setPost(data)
    //     })
    //     .then((data) => console.log('This is your data', data));

    const updateSearch =event=>{
        setSearch(event.target.value)
        console.log(search);
    }

    const getSearch=event=>{
        event.preventDefault(); 
        setQuery(search);
    }

  return (
    <div className="App">

      <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="submit-button" type="submit">Search</button>
      </form>
        <div className="wrapper">
            {/*<div className='column'>*/}
                {recipe.map(recipe=>(
                    <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} ingredient={recipe.recipe.ingredients} />
                ))}
            {/*</div>*/}
        </div>
    </div>
  );
}

export default App;
