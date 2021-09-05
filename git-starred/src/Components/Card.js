import { Component } from "react";


class Card extends Component
{
render()
{

    return (

        <li>
             {this.props.repo}
        </li>
    )
}

}

export default Card