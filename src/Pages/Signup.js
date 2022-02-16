import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert';
import classes from './Signup.module.scss'

const url = 'https://3d28-2405-201-4030-e042-a689-31cd-3072-9955.ngrok.io';
const endpoint = 'user';
export default function Signup() {
    const [data, setData] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(values => ({...values, [name]:value}))
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(data);
        axios.post(`${url}/${endpoint}`, data)
        // .then((res=>{
        //     let res_id = res.data.id
        //     swal("Good job!", `Form Submitted! Your User ID is ${res_id}`, "success");
        //     console.log(res);
        //     setData({})
        // }))
        // .catch((err)=>{
        //     swal("Bad job!", "Form is not Submitted !", "error");
        //     console.log(err);
        // })
    }
  return (
    <div>
        <form className={classes.form} onSubmit={submitForm}>
            <div className={classes.form_group}>
                <label htmlFor='uname'>Username :</label>
                <input onChange={handleChange}  id='uname' type='text' value={data.username || ''} name='username'></input>
            </div>
            <br/>
            <div className={classes.form_group}>
                <label htmlFor='password'>Password :</label>
                <input onChange={handleChange}  id='password' type='password' value={data.password || ''} name='password'></input>
            </div>
            <br/>
            <div className={classes.form_group}>
                <label htmlFor='email'>Email :</label>
                <input onChange={handleChange}  id='email' type='email' value={data.email || ''} name='email'></input>
            </div>
            <br/>
            <div className={classes.form_group}>
                <label htmlFor='name'>Full Name :</label>
                <input onChange={handleChange}  id='name' type='text' value={data.name || ''} name='name'></input>
            </div>
            <br/>
            <div>
                <input className={classes.button} type='submit' name='submit' value='SUBMIT FORM'></input>
            </div>
        </form>
    </div>
  )
}