import React, { Component } from 'react';
import axios from 'axios';

export default class Fetch extends Component {
  
  getPlayer =async () => {
    const myData = await axios.get(
      "https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json"
    )
    console.log(myData)
  }
  
  render() {
    return (
      <div>
       
      </div>
    )
  }
}
