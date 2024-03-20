import {React, useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import { createRecipe } from '../services/RecipeAPI'
import '../CSS/newRecipe.css'

const NewRecipe = () => {
    
    const [options, setOptions] = useState([
        'beef', 'breakfast', 'chicken', 'dessert', 'goat', 'lamb', 
        'miscellaneous', 'pasta', 'pork', 'seafood', 'side', 'starter', 
        'vegan', 'vegetarian'
    ])

    const [recipeList, setRecipeList] = useState([])
    const [addInput, setAddInput] = useState(false)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [newRecipe, setNewRecipe] = useState({
        name: '',
        directions: '',
        ingredients: []
    })

    const APIhandler = (e) => {
        e.preventDefault()
        const selectElement = document.querySelector('#categorySelect')
        let category = selectElement.value
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then( response => {
                console.log(response.data.meals);
                setRecipeList(response.data.meals);
            })
            .catch( error => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createRecipe({ name:newRecipe.name, 
            directions:newRecipe.directions, 
            ingredients:newRecipe.ingredients
        })
            .then( response => {
                console.log(response)
                navigate("/")
            })
            .catch( (error) => {
                console.log('handleSubmit error' , error);
                // console.log(error.response.data)
                setErrors(error.response.data.errors)
            })
    }

    
        const changeHandler = (e) => {
            setNewRecipe({...newRecipe, [e.target.name]: e.target.value})
        }


  return (
    <div>
        <Header />
    <div className='formsDisplay'>
        <div className='left-display'>
            <h1 className='title'>Find A New Recipe</h1>
            <form id='API-form' onSubmit={APIhandler}>
                <div>
                    <label id='API-label' >Select A Category:</label>
                    <select id='categorySelect'name="category">
                        {
                            options.map( (item) => (
                                <option value={item}>{item}</option>
                                ))
                            }
                    </select>
                </div>
                <div>
                    <button className='btn btn-success' type='submit'>Search</button>
                </div>
            </form>
            <div className='scroll'>
                {
                    recipeList.map( (recipe) => (
                        <ul key={recipe.idMeal}>
                            <li className='recipeList'><Link style={{color:'black'}} to={`/recipe/${recipe.idMeal}/details`}>{recipe.strMeal}</Link></li>
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
                    <input id='nameInput' className='form-control' type="text" name='name' value={newRecipe.name} onChange={changeHandler}/>
                </div>
                    {errors.name&& <p className='error'>{errors.name.message}</p>}
                <div>
                    <label  className='formLabel'>Directions:</label>
                    <textarea style={{marginBottom:'10px', border:'3px solid black'}} className='form-control' name="directions" rows="4" cols="50" value={newRecipe.directions} onChange={changeHandler}/>
                </div>
                    {errors.directions&& <p className='error'>{errors.directions.message}</p>}
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
   
    </div>
  )
}

export default NewRecipe