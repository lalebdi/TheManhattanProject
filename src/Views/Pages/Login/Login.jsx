import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../Controllers/Redux/authSlice';
import './login.css';

const Login = () => {
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: "",
        password: ""
    });

    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value // whatever triggers this function it will be getting from the name
        })
    }

    // using the local state and send it to the redux action
    function submit(e){
        // to call the action from redux they use dispatch which dispatches the action when submit
        dispatch(signIn(formInput)) // need to pass the payload and it will pass the name and object
        e.preventDefault();
    } 

    return (
        <div className="loginBG" >
            <form className="login-panel">
                <h1>Login:</h1>
                <input name="name" placeholder="Name" onChange={inputChanged} value={formInput.name}></input>
                <input name="password" placeholder="password" type="password" onChange={inputChanged} value={formInput.password}></input>
                <button type="submit" onClick={submit}> Login </button>
            </form>
        </div>
    )
}

export default Login
