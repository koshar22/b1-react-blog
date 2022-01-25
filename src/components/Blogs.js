import React, { useState } from 'react';
import classes from './scss/Blogs.module.scss'
import Card from './Card';
import axios from 'axios';

const postUrl = 'https://jsonplaceholder.typicode.com/posts'
const userUrl = 'https://jsonplaceholder.typicode.com/users'

export default function Blogs() {
    const [blog, setBlog] = useState({data: []})
    axios.get(postUrl)
    .then(res =>{
        console.log({data: res.data});
        console.log(blog);
    })
  return(
      <div className={classes.container}>
          <div className={classes.grid}>
            <Card class_name={classes.card}/>
            <Card class_name={classes.card}/>
            <Card class_name={classes.card}/>
            <Card class_name={classes.card}/>
            <Card class_name={classes.card}/>
            <Card class_name={classes.card}/> 
          </div>
      </div>
  );
}
