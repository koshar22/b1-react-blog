import React from 'react'
import classes from './Login.module.scss'

export default function Login() {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <label htmlFor='email'>Email :</label>
        <input id='email' type='email' name='email'></input>
      </div>
      <div className={classes.box}>
        <label htmlFor='password'>Password :</label>
        <input id='password' type='password' name='password'></input>
      </div>
      <div>
        <button className={classes.button}>SUBMIT</button>
      </div>
    </div>
  )
}
