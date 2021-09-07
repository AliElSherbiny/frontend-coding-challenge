import React, { Component } from 'react'
import './Nav.css'


class Nav extends Component
{


MaxPageReached = ()=>
{
    /*Description: function decides wheather the next button shall be disabled or not by checking the current page boundary */
    
    const displayedContacts = 30 ; 
    if ((this.props.currentPage) === (Math.floor(this.props.totalPages/displayedContacts)))
    return 1;
    else
    return 0 ; 
}

initPageReached = () =>
{
    /*Description: function decides wheather the prev button shall be disabled or not by checking the current page boundary */

    const initPage = 1; 
    if (this.props.currentPage === initPage)
    return 1;
    else
    return 0;
}

render()
{

    return(
<div className='bottom' > 

    {/*Render the next and prev buttons,
    Buttons call the nav function with a sign resembling if it is the next button calling or the prev button calling*/}

    <button className='prev ' disabled={this.initPageReached()} onClick={()=>this.props.navigate('-')}>Previous</button>
    <button className='next ' disabled={this.MaxPageReached()} onClick={()=>this.props.navigate('+')}>Next</button>  

</div>

    )
}

}

export default Nav