import { Component } from "react";
import  './Card.css'



class Card extends Component
{
render()
{ 
  let months = Math.floor(((Date.now()-Date.parse(this.props.repo.updated_at))/1000)/60/60/24/30) ; 
    return (

        <li key={this.props.repo.key} >
         
            <div className='card'>
            <div className='imgDiv' >{ <img className='img'src={`${this.props.repo.owner.avatar_url}.png`} alt="User Profile Pic"  /> } </div>
                <div className='text'>
                    <div className='reponame'>{this.props.repo.name}</div>
                    <div className='repodesc'>{this.props.repo.description?(this.props.repo.description):('No Description provided')}</div>
                    <div className='etc'>
                        <div className='etc-child star'>{this.props.repo.stargazers_count+' STARS'}</div>
                        <div className='etc-child star'>{this.props.repo.open_issues_count+' ISSUES'}</div>
                        <div className='etc-child date'>{'UPDATED '+months+' months ago by '+this.props.repo.owner.login}</div>                  
                    </div>
                </div>
             </div>
        </li>
    )
}

}

export default Card