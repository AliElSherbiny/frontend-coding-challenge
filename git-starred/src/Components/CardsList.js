import { Component } from "react";
import Card from "./Card.js"
import  './CardsList.css'




class CardsList extends Component
{
render()
{
    /*Renders a list of cards, each card resembles a repo */
    return (

        <ol className='List'>
            {
                this.props.repos.map((repo)=>
                 <Card key={repo.name}repo={repo}/>)
            }

        </ol>
    )
}

}

export default CardsList