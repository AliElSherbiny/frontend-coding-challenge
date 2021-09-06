import './App.css';
import React, { Component } from 'react'
import CardsList from './Components/CardsList'
import axios from 'axios'
import logo from './Logos/github.png';

class App extends Component {
state = {
  total:'',
  displayed:0,
  repos:[]
}
  componentDidMount()
  {
    axios.get ('&page=1')
    .then ((repos)=>(this.setState((prevState)=>({total:repos.data.total_count,displayed:prevState.displayed+30,repos:repos.data.items}),()=>(console.log(this.state)))))  
  }
  render(){
  return (
    <div className="App">
      <div className="header">
         <div className="content">GIT MOST STARRED REPOS</div>
         <img src={logo} alt="github logo" className="headerimg"/>
         </div>
      {
      this.state.total?
      (<CardsList repos={this.state.repos}/>):(null)
      }
     
    </div>
  );
}
}

export default App;
