import React, { Component, Fragment } from 'react'
import './Nav.css'


class Nav extends Component
{

MaxPageReached = ()=>
{
    const displayedContacts = 30 ; 
if ((this.props.currentPage) === (Math.floor(this.props.totalPages/displayedContacts)))
return 1;
else
return 0 ; 
}

initPageReached = () =>
{
    const initPage = 1; 
if (this.props.currentPage === initPage)
return 1;
else
return 0;
}

render()
{

    return(
<div className='button' > 
    <button className='prev ' disabled={this.initPageReached()} onClick={()=>this.props.navigate('-')}>Previous</button>
    <button className='next ' disabled={this.MaxPageReached()} onClick={()=>this.props.navigate('+')}>Next</button>  
</div>

    )
}

}

export default Nav