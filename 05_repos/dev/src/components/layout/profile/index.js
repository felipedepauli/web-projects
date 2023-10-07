import React from 'react'

import useGithub from '../../../hooks/github-hooks'

import './styles.scss'

const Profile = () => {
    const { githubState } = useGithub()
    function renderNets() {
        return (
            <div className="wrapper">
            {   
                githubState.user.nets.map(({kind, qtd}, key)=>(
                    <div key={key} className="profile__info--net">
                        <h4>{kind}</h4>
                        <span>{qtd}</span>
                    </div>
                ))
            } 
            </div>
        )
    }
    console.log(githubState)
    return (
    <div className="wrapper second-header">
        { githubState.user.avatar_url? <img className="profile__img" src={githubState.user.avatar_url} alt="User Avatar"/> : <img className="profile__img"/>}
        <div className="profile__info">
            <div className="bar">
                <h1 className="profile__info--name">{githubState.user.name}</h1>
                <div className="profile__info--user">{`Username: `}
                <a href={`https://github.com/${githubState.user.login}`} target="_blank">{githubState.user.login}</a></div>
                <div className='wrapper_plus_content'>
                    <div>Company:</div><div>{githubState.user.company}</div>
                    <div>Location:</div><div>{githubState.user.location}</div>
                </div>
            </div>
            {renderNets()}
        </div>
    </div>
    )
}

export default Profile