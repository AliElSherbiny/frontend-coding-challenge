import { Component } from "react";


class Card extends Component
{
render()
{ 
  let months = Math.floor(((Date.now()-Date.parse(this.props.repo.updated_at))/1000)/60/60/24/30) ; 
    return (

        <li>
            <ul>
             <li>{'REPO NAME:       '+this.props.repo.name}</li>
             <li>{'USER NAME:       '+this.props.repo.owner.login}</li>
             <li>{'REPO DESC:       '+this.props.repo.description}</li>
             <li>{'NO. OF OPEN ISSUES:       '+this.props.repo.open_issues_count}</li>
             <li>{'NO. OF STARS:       '+this.props.repo.stargazers_count}</li>
             <li>{'NO. OF MONTHS SINCE LAST UPDATED:       '+months}</li>   
             <li>{}</li>    
             <li>{ <img src={`${this.props.repo.owner.avatar_url}.png`} alt="User Profile Pic" width="100" height="100" /> } </li>
             <li>{}</li>
             <li>{}</li>
             </ul>
        </li>
    )
}

}

export default Card