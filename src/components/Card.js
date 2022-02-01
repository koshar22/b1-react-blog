import React, { useEffect, useState } from 'react';
import { CardContent, Card as Card_, CardHeader, Typography, CardActions } from '@mui/material';
import { Button, Avatar } from '@mui/material';
import axios from 'axios';

let baseUrl = 'https://jsonplaceholder.typicode.com/users'

export default function Card({blog}) {
  // let name = `${user.firstName} ${user.lastName}`
  let userId = blog.userId - 1
  // let userUrl = `${baseUrl}/${userId}`
  let name = 'Hello'
  let [user, setUser] = useState([])
  useEffect(()=>{
    axios.get(baseUrl)
    .then(res => {
      setUser(res.data)
      console.log(res.data);
    })
  }, [])
  // axios.get(`${userUrl}/${blog.userId}`)
  // .then(res=>{
  //   console.log(res.data);
  // })
  // let currentUser = user[userId]
  // let u_name = currentUser.name
  let ref = `#${blog.id}`
  return(
      <Card_>
          <CardHeader
          avatar={
            <Avatar alt={user.name}/>
          }
          title={user.name}
          subheader="September 14, 2016"
          />
          <CardContent>
            <Typography variant='h5'>{blog.title}</Typography>
            <Typography variant='subtitle1'>Sports</Typography>
            <Typography sx={{marginTop: '10px'}}>{blog.body}</Typography>
          </CardContent>
          <CardActions>
            <Button href={ref}>Read More</Button>
          </CardActions>
      </Card_>
  );
}
