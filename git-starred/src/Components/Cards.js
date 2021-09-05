import { Component } from "react";
import Card from "./Card.js"



class CardsList extends Component
{
render()
{

    return (

        <ol>
            {
                this.props.repos.map((repo)=>
                 <Card repo={repo}/>)
            }

        </ol>
    )
}

}

export default CardsList