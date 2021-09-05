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
    axios.get ('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
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
