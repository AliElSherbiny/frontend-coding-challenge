import { Component } from "react";
import  './Card.css'



class Card extends Component
{
render()
{ 
    /*Calculate the number of months since repo last updated */
    let months = Math.floor(((Date.now()-Date.parse(this.props.repo.updated_at))/1000)/60/60/24/30) ; 

    /*The card component is divided into image part and text part, text part has the repo name , repo description 
    and more text section. more text section has the number of stars / issues and the username and the update time */
    return (

        <li key={this.props.repo.key} >
         
            <div className='card'>
                <div className='imgContainer' >{ <img className='img'src={`${this.props.repo.owner.avatar_url}.png`} alt="User Profile Pic"  /> } </div>
                <div className='text'>
                    <div className='reponame'>{this.props.repo.name}</div>
                    <div className='repodesc'>{this.props.repo.description?(this.props.repo.description):('No Description provided')}</div>
                    <div className='more-text'>
                        <div className=' star-issue'>{this.props.repo.stargazers_count+' STARS'}</div>
                        <div className=' star-issue'>{this.props.repo.open_issues_count+' ISSUES'}</div>
                        <div className=' date'>{'UPDATED '+months+' months ago by '+this.props.repo.owner.login}</div>                  
                    </div>
                </div>
             </div>

        </li>
    )
}

}

export default Card