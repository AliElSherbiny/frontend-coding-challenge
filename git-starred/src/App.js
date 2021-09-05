import './App.css';
import React, { Component } from 'react'
import CardsList from './Components/Cards'
import axios from 'axios'

class App extends Component {
state = {
  total:'',
  repos:[]
}
  componentDidMount()
  {
    axios.get ('&page=1')
    .then ((repos)=>(this.setState({total:repos.data.total_count,repos:repos.data.items},()=>(console.log(this.state)))))
    //(this.setState({total:repos.data.total_count,repos:repos.data.items},()=>(console.log(this.state))))
    
  }
  render(){
  return (
    <div className="App">
      {/*this.state.repos*/}
      <CardsList repos={[]}/>
    </div>
  );
}
}

export default App;
