import { Component } from "react";
import Card from "./Card.js"
import  './CardsList.css'




class CardsList extends Component
{
render()
{

    return (

        <ol className='List'>
            {
                this.props.repos.map((repo)=>
                 <Card repo={repo}/>)
            }

        </ol>
    )
}

}

export default CardsList