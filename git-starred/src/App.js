import './App.css';
import React, { Component } from 'react'
import CardsList from './Components/CardsList'
import Nav from './Components/Nav'
import axios from 'axios'
import logo from './Logos/github.png';
import Loader from 'react-loader-spinner';



class App extends Component {

/*Creating the app state that tracks what is shown on the screen */
state = {
  total:'', /* total starred repos at the backend API side */
  pageNumber:1, /* Current displayed page */
  repos:[], /* The repos received from the aPI per 'get' call */
  update:'false', /*Determines if the component shall update or now*/
  loading:true /*Determines if the loading spinner shall be displayed or not */
}

/*LifeCycle hook for when the components mounts*/
  componentDidMount()
  {
    /*Description: This hook gets the repos from the github API and updates the state's repos , total , loading keys accordingly */
  

    (axios.get ('repositories?q=created:>2017-10-22&sort=stars&order=desc&page='+this.state.pageNumber))
    .then ((repos)=>(this.setState((prevState)=>({total:repos.data.total_count,repos:repos.data.items,loading:false}),()=>(console.log(this.state)))))  
  }

/*LifeCycle hook for when the components updates*/
  componentDidUpdate()
  {
   /*Description: This hook checks first if the state update option, 
    which indicates if new data is received and hence the component need the update.
    if it needs update , it gets the repos from the github API and updates the state's
    repos , total , loading keys accordingly then shuts the update option off and moves the top of the page*/

    if(this.state.update)
    {
    this.setState({loading:true});
    axios.get ('repositories?q=created:>2017-10-22&sort=stars&order=desc&page='+this.state.pageNumber)
    .then ((repos)=>(this.setState((prevState)=>({total:repos.data.total_count,repos:repos.data.items,loading:false}),()=>(console.log("update")))))
    .then(this.setState({update:false}))
    .then(window.scrollTo(0, 0));
    }
  }

  
  nav = (sign)=>
  {
    /*Description: This function is called if the next or previos buttons are clicked. next button calls it with '+' sign to
    increment the page number in the state and opens update option for the component to update. prev button calls it with
    '-' sign to decrement the page and follow same sequence. */

    const displayedContacts = 30 ;
    const initialPage = 1 ;
    const lastPage = Math.floor(this.state.total/displayedContacts);

    if (sign === '+')
    {
    if (this.state.pageNumber < lastPage )
    { 
      /*Make sure the app didnt reach the last page */
      this.setState((prevState)=>({pageNumber:prevState.pageNumber+1,update:true}),()=>(console.log(this.state.pageNumber)))
    }
    else
    {
      /*return to initial page if the app reached the last page */
      this.setState((prevState)=>({pageNumber:1}))
    }
  }

  else if (sign ==='-')
  {
    if (this.state.pageNumber> initialPage )
    {
      /*Make sure the current page is not the initial page*/
      this.setState((prevState)=>({pageNumber:prevState.pageNumber-1,update:true}),()=>(console.log(this.state.pageNumber)))
    }
    else
    {
      /* default current page to initial page if the app is in the initial page */
      this.setState((prevState)=>({pageNumber:1}))
    }
  }

  else {

  }

  }

 
  render(){
  return (
    <div className="App">

      {/*Render the header component containing the title and logo*/}
      <div className="header">
         <div className="content">GIT MOST STARRED REPOS</div>
         <img src={logo} alt="github logo" className="headerimg"/>
      </div>

      {/*If the App is loading, render loading spinner, otherwise, render the cardslist component that has all the repos */}
      {
      this.state.loading?
      (<Loader type="ThreeDots" color="black" height="800" width="800" />):(<CardsList repos={this.state.repos}/>)
      }

     {/*Render the nav component that has the next and previous buttons */}  
     <Nav navigate={this.nav} currentPage={this.state.pageNumber} totalPages={this.state.total}/>

    </div>
  );
}
}

export default App;
