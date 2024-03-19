import {React, useEffect, useState} from 'react'
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'
import { updateRestriction, deleteRestriction, addRestriction } from '../services/RestrictionAPI'
import { getAllRecipesInDB } from '../services/RecipeAPI'
import { getUserById } from '../services/UserAPI'
import Header from '../components/Header'
import '../CSS/dashboard.css'

const Dashboard = (props) => {
    const [restrictionList, setRestrictionList] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [renderComponent, setRenderComponent] = useState("")
    const [newRestriction, setNewRestriction] = useState( {food:""} )
    const [editRestriction, setEditRestriction] = useState( {food:""} )
    const [errors, setErrors] = useState({})
    const {user, setUser} = props

    const token = "65f658c03cd946af0e3403cb"

    // useEffect( () => {
    //     getAllRestrictionsByUser(token)
    //         .then( (res) => {
    //             console.log('then res', res);
    //             setRestrictionList(res.restrictions)
    //         })
    //         .catch( (error) => {
    //             console.log(error)
    //         })
    // }, [ refresh ])

    useEffect( () => {
        getUserById(token)
            .then( (res) => {
                console.log('then res', res);
                setRestrictionList(res.restrictions)
                setUser(res)
                console.log('user state object', user);
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [ refresh ])


    const submitRestrictions = (e) => {
        e.preventDefault()
        addRestriction( {food:newRestriction.food} )
        .then( response => {
            console.log(response)
            setRefresh(!refresh)
            setNewRestriction( {food:""} )
            setErrors({})
        })
        .catch( (error) => {
            console.log(error.response.data)
            setErrors(error.response.data.errors)
        })
    } 

    const newChangeHandler = (e) => {
        setNewRestriction({...newRestriction, [e.target.name]: e.target.value})
    }

    const restrictionUpdater = (id) => {
        updateRestriction({_id:id, ...editRestriction })
            .then( (response) => {
                console.log('updateRestrictions response -->',response);
            })
            .catch( (err) => {
                console.log('in errors');
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }

    const editChangeHandler = (e) => {
        setEditRestriction({...editRestriction, [e.target.name]: e.target.value})
    }

    const renderForm = (food) => {
        setRenderComponent(food)
        setEditRestriction( {food} )
    }
    const restrictionDeleter = (id) => {
        deleteRestriction(id)
            .then(res => {
                console.log(res)
                setRefresh(!refresh)
            })
            .catch( error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Header />
        <div className='dashDisplay'>
            <h1 className='title'>Welcome {user.firstName}</h1>
            <div className='titleBox'>
                <h2 className='subHeading1'>Favorite Recipes</h2>
                <h2 className='subHeading1'>Restrictions</h2>
            </div>
            <div className='container'>
                <div className='display-left'>
                    <table className="table table-striped">
                        <thead >
                            <tr>
                                <th>Recipe</th>
                                <th>Restrictions</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to='/recipe/52812/details'>Beef Brisket Pot Roast</Link></td>
                                <td>Yes</td>
                                <td><button className='btn btn-info'><Link className='favLinks' to='/'>Edit</Link></button></td>
                                <td><button className='btn btn-danger'><Link className='favLinks' to='/'>Delete</Link></button></td>
                            </tr>
                            <tr>
                                <td><Link to='/recipe/52964/details'>Smoked Haddock Kedgeree</Link></td>
                                <td>Yes</td>
                                <td><button className='btn btn-info'><Link className='favLinks' to='/'>Edit</Link></button></td>
                                <td><button className='btn btn-danger'><Link className='favLinks' to='/'>Delete</Link></button></td>
                            </tr>
                            <tr>
                            <td><Link to='/recipe/52855/details'>Banana Pancakes</Link></td>
                                <td>No</td>
                                <td><button className='btn btn-info'><Link className='favLinks' to='/'>Edit</Link></button></td>
                                <td><button className='btn btn-danger'><Link className='favLinks' to='/'>Delete</Link></button></td>
                            </tr>
                            <tr>
                            <td><Link to='/recipe/52937/details'>Jerk Chicken With Rice & Peas</Link></td>
                                <td>Yes</td>
                                <td><button className='btn btn-info'><Link className='favLinks' to='/'>Edit</Link></button></td>
                                <td><button className='btn btn-danger'><Link className='favLinks' to='/'>Delete</Link></button></td>                                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='display-right'>
                    <div className='resList'>
                    {   
                        restrictionList.map( (item) => (
                            (renderComponent == item.food) 
                            ?
                            <ul  key={item._id}>
                                <div className='resListItem'>
                                    <li>{item.food}</li>
                                    <div className='listBtn'>
                                        <button onClick={() => renderForm(item.food)} style={{color:'white'}} className='btn btn-info'>Edit</button>
                                        <button className='btn btn-danger' disabled >Delete</button>
                                    </div>
                                </div>
                                <div className='resListUpdate'>
                                    <form className='resUpdateForm' onSubmit={restrictionUpdater(item._id, item.food)}>
                                        <div>
                                        <input style={{width:'105%'}} className='form-control' type="text" name="food" value={editRestriction.food} onChange={editChangeHandler}/>
                                        </div>
                                        <div>
                                            <button className='btn btn-success'>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </ul>
                            :
                            <ul className='resListItem' key={item._id}>
                                <li>{item.food}</li>
                                <div className='listBtn'>
                                    <button onClick={ () => renderForm(item.food) } style={{color:'white'}} className='btn btn-info'>Edit</button>
                                    <button onClick={() => restrictionDeleter(item._id)} className='btn btn-danger'>Delete</button>
                                </div>
                            </ul>
                        ))
                    }
                    </div>
                    <form onSubmit={submitRestrictions}>
                        <div className='restrictForm'>
                            <input style={{width:'60%', border:'3px solid black'}} className='form-control' type="text" name='food' value={newRestriction.food} onChange={newChangeHandler}/>
                        <button className='btn btn-success'>Add New</button>
                        </div>
                            {errors.food&& <p className='error'>{errors.food.message}</p>}
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard