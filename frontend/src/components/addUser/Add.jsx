import React, { useState } from 'react'
import "./add.css"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';


const Add = () => {

    const users = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        // console.log(name + " : " + value);
        setUser({ ...user, [name]: value });
        // console.log(user);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/api/create", user)
            .then((response) => {
                // console.log(response);
                toast.success(response.data.msg, { position: "top-right" });
                navigate("/");
            }).catch(error => console.log(error))
    }

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add New User</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label >First Name :</label>
                    <input type='text' id='fname'
                        name='fname' autoComplete='off'
                        placeholder='first name'
                        onChange={inputHandler}
                    />
                </div>
                <div className="inputGroup">
                    <label >Last Name :</label>
                    <input type='text' id='lname'
                        name='lname' autoComplete='off'
                        placeholder='last name'
                        onChange={inputHandler}
                    />
                </div>
                <div className="inputGroup">
                    <label >Email :</label>
                    <input type='email' id='email'
                        name='email' autoComplete='off'
                        placeholder='email'
                        onChange={inputHandler}
                    />
                </div>
                <div className="inputGroup">
                    <label >Password :</label>
                    <input type='password' id='password'
                        name='password' autoComplete='off'
                        placeholder='password'
                        onChange={inputHandler}
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit">ADD USER</button>
                </div>
            </form>
        </div>
    )
}

export default Add
