import React, { useState, useEffect } from 'react';
import classes from './scss/Blogs.module.scss'
import Card from './Card';
import axios from 'axios';

const postUrl = 'https://jsonplaceholder.typicode.com/posts'


export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
      axios.get(postUrl)
      .then(res => {
        let data = res.data
        console.log(data);
        setBlogs(data)
      })
    }, [])

    // useEffect(fun)
    // useEffect(fun, [])
    // useEffect(fun, [n, x])

    let blog_list = blogs.map((blog)=>(
      <Card blog={blog} key={blog.id}/>
    ))
  return(
      <div className={classes.container}>
          <div className={classes.grid}>
            {blog_list}
          </div>
      </div>
  );
}
