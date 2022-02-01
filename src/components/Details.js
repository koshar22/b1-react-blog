import React, { Component } from 'react';
import classes from './scss/Details.module.scss'


let blog_id = 6
const postUrl = 'https://jsonplaceholder.typicode.com/posts'
let userUrl = 'https://jsonplaceholder.typicode.com/users'


let data = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

class Details extends Component {
    state = this.state
  render() {
    return <div className={classes.container}>
        <h2 className={classes.title}>{data.title}</h2>
        <hr/>
        <div className={classes.padding}>
            <h4 className={classes.subtitle}>{data.title}</h4>
            <p className={classes.username}>{user.name}</p>
            <p className={classes.content}>{data.body} {data.body} {data.body} {data.body} {data.body} {data.body} {data.body}</p>
        </div>
    </div>;
  }
}

export default Details;