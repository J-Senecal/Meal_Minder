import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getRecipeById } from '../services/RecipeAPI'
import Header from '../components/Header'
import '../CSS/RecipeDetails.css'

const Update = (props) => {
    const { user } = props
    const { idMeal } = useParams()

    const [recipeDisplay, setRecipeDisplay] = useState({
        idMeal:"",
        name:"",
        directions:"",
        ingredients:"",
        thumbnail:""
    })

    const [ingredientList, setIngredientList] = useState([])

    
    const createIngredientList = (res) => {
        let arr = []
        for(let n=1; n <=20; n++){
            arr.push(res[`strIngredient${n}`]) //interp with object uses brackets. no dot
        }
        setIngredientList(arr)
    }
    
    useEffect( () => {
        getRecipeById(idMeal)  
            .then( (res) => {
                console.log('id was found in the database!!!', res);
                console.log(res);
                setRecipeDisplay(res)
                setIngredientList(res.ingredients)
                
            })
            .catch( (err) => {
                console.log('could not find recipe in database' , err)
                axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                .then( response => {
                    console.log('API call response' , response.data.meals[0]);
                    const apiRes =response.data.meals[0]
                    let ingredientArray = []
                    for ( let i=1; i<=20; i++) {
                        console.log(apiRes[`strIngredient${i}`]);
                        ingredientArray.push(apiRes[`strIngredient${i}`])
                    }
                    setIngredientList(ingredientArray)
                    let thumbnail = `${apiRes.strMealThumb}/preview`
                    setRecipeDisplay({idMeal:apiRes.idMeal, name:apiRes.strMeal, directions:apiRes.strInstructions, ingredients:ingredientArray, thumbnail:thumbnail});
                })
                .catch( error => {
                    console.log('API request error', error);
                })
            })
    }, [ ]);

    
    //need to set values to all lower to compare in case of capitalization differences
    const restrictionStyler = (item) => {
        console.log('user restrictions', user.restrictions)
        const foodArray = user.restrictions
        console.log('foodArray', foodArray);
        let result = true
        for( let i=0; i<foodArray.length; i++) {
            console.log('i in loop is', foodArray[i].food);
            console.log('item is', item);
            if( foodArray[i].food.toLowerCase() === item.toLowerCase() ) {
                result = false
            }
        }
        return result
    }


  return (
    <div>
        <Header id={idMeal}/>
        <div className='detailsDisplay'>
            <div className='detailsTitleBox'>
                <h1 className='title'>{recipeDisplay.name}</h1>
                <button id='favBtn' className='btn btn-warning'>Add To Favorites</button>
            </div>
            <div className='displayBox'>
                <div className='leftDetails'>
                    <h2 className='subHeading1'>Directions:</h2>
                    <div className='scrollBox'>
                        <p>{recipeDisplay.directions}</p>
                    </div>
                    <h2 className='subHeading1'>Ingredients:</h2>
                </div>
                <div className='rightDetails'>
                    <img id='thumbnail' src={recipeDisplay.thumbnail} alt="" />
                </div>
            </div>
            <div className='ingredientList'>
                {
                    ingredientList.map( (food, index) => (
                        <ul key={index}>
                            <li className={restrictionStyler(food)? 'unrestricted' : 'restricted'} >{food}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
        <div className='right-display'>
            <h1 className='title'>Add Your Own</h1>
            <form className='recipeForm' onSubmit={handleSubmit}>
                <div>
                    <label className='formLabel'>Name:</label>
                    <input id='nameInput' className='form-control' type="text" />
                </div>
                <div>
                    <label className='formLabel'>Directions:</label>
                    <textarea style={{marginBottom:'10px', border:'3px solid black'}}className='form-control' name="directions" rows="4" cols="50"/>
                </div>
                <label  className='formLabel'>Ingredients:</label>
                <input id='ingredientInput' className='form-control' type="text" onChange={ () => setAddInput(true) }/>
                {
                    (addInput == true)
                    ?
                        <input id='ingredientInput' className='form-control' type="text" onChange={ () => setAddInput(true) }/> 
                    :
                    null
                }
                <button className='btn btn-success'>Add New</button>
            </form>
        </div>
    </div>
  )
}

export default Update
