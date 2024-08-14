import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import "../addUser/add.css";
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Edit = () => {

    const users = {
        fname: "",
        lname: "",
        email: ""
    }

    const { id } = useParams();
    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/getone/${id}`)
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);

            })
    }, [id])

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:4000/api/update/${id}`, user)
            .then((response) => {
                // console.log(response);
                toast.success(response.data.msg, { position: "top-right" });
                navigate("/");
            }).catch(error => console.log(error))
    }

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Update User</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label >First Name :</label>
                    <input type='text' id='fname'
                        name='fname' autoComplete='off'
                        placeholder='first name'
                        value={user.fname}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="inputGroup">
                    <label >Last Name :</label>
                    <input type='text' id='lname'
                        name='lname' autoComplete='off'
                        placeholder='last name'
                        value={user.lname}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="inputGroup">
                    <label >Email :</label>
                    <input type='email' id='email'
                        name='email' autoComplete='off'
                        placeholder='email'
                        value={user.email}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="inputGroup">
                    <button type="submit">UPDATE USER</button>
                </div>
            </form>
        </div>
    )
}

export default Edit
