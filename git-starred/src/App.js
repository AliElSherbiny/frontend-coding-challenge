import './App.css';
import React, { Component } from 'react'
import CardsList from './Components/CardsList'
import axios from 'axios'

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
      {
      this.state.total?
      (<CardsList repos={this.state.repos}/>):(null)
      }
    </div>
  );
}
}

export default App;
