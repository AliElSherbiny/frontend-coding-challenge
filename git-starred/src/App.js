import './App.css';
import React, { Component } from 'react'
import CardsList from './Components/CardsList'
import axios from 'axios'
import logo from './Logos/github.png';

class App extends Component {
state = {
  total:'',
  pageNumber:1,
  repos:[],
  update:'false'
}
  componentDidMount()
  {
    (axios.get ('repositories?q=created:>2017-10-22&sort=stars&order=desc&page='+this.state.pageNumber))
    .then ((repos)=>(this.setState((prevState)=>({total:repos.data.total_count,repos:repos.data.items}),()=>(console.log(this.state)))))  
  }

  componentDidUpdate()
  {
    (this.state.update)&&
    (axios.get ('repositories?q=created:>2017-10-22&sort=stars&order=desc&page='+this.state.pageNumber)
    .then ((repos)=>(this.setState((prevState)=>({total:repos.data.total_count,repos:repos.data.items}),()=>(console.log("update")))))
    .then(this.setState({update:false})))  
  }

  inc = ()=>
  {
    const displayedContacts = 30 ;
    const initialPage = 1 ;
    console.log("state")
    console.log(this.state);
    if (this.state.pageNumber<= (this.state.total/displayedContacts))
    {
      this.setState((prevState)=>({pageNumber:prevState.pageNumber+1,update:true}),()=>(console.log(this.state.pageNumber)))

    }
    else
    {
      this.setState((prevState)=>({pageNumber:1}))

    }

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
     <button onClick={this.inc}>NEXT</button>
    </div>
  );
}
}

export default App;
