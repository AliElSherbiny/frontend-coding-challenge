import React, { Component } from 'react'
import './Nav.css'


class Nav extends Component
{

render()
{

    return(
<div> 
    <button onClick={this.props.navigate}>Add</button>
</div>

    )
}

}

export default Nav