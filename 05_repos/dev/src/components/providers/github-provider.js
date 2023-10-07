import React, { useCallback, createContext, useState, useEffect } from 'react'
import api from '../../services/api'

const GithubProvider = (props) => {
    const [ githubState, setGithubState ] = useState(Initial_Value)
    const resetState = () => {
        setGithubState(Initial_Value)
    }
    const getUser = ( username ) => {
        console.log(`Procurando pelo usuário ${username}...`)
        setGithubState({
            ...githubState,
            loading: true
        })
        getUserRepos(username)
        getReposStarred(username)
        api.get(`users/${username}`)
           .then((response) => {
               console.log('Usuário encontrado!')
               setGithubState({
                loading: false,
                user: {
                    login: response.data.login,
                    name: response.data.name,
                    publicUrl: undefined,
                    avatar_url: response.data.avatar_url,
                    blog: undefined,
                    company: response.data.company,
                    location: response.data.location,
                    followers: 0,
                    following: 1,
                    public_gists: 2,
                    public_repos: 3,
                    nets: [{
                        kind: "Followers",
                        qtd : response.data.followers
                    },
                    {
                        kind: "Following",
                        qtd : response.data.following
                    },
                    {
                        kind: "Gists",
                        qtd : response.data.public_gists
                    },
                    {
                        kind: "Repos",
                        qtd : response.data.public_repos
                    }]
                },
                repositories: [],
                starred: []
            })
                return username
            }
           )
           .catch(error => {
                console.log('Usuário não encontrado.')
                setGithubState({
                    ...githubState,
                    loading: false
                })
                resetState()
                window.alert('Usuário não encontrado')
                console.exception("I didn't find that crazy, no!")
           })
    }

    const getUserRepos = ( username ) => {
        console.log(`Repos requested for ${username}`)
        api.get(`users/${username}/repos`)
            .then(({data}) => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: false,
                    repositories: [
                        ...data
                    ]
                }))
            })
            .catch(error => {
                window.alert("Erro na requisição de repositórios.")
                console.exception("Error catching repos.")
            })
    }
    const getReposStarred = ( username ) => {
        console.log(`Repos requested for ${username}`)
        api.get(`users/${username}/starred`)
            .then(({data}) => {
                setGithubState((prevState) => ({
                    loading: false,
                    ...prevState,
                    starred: [
                        ...data
                    ]
                }))
            })
            .catch(error => {
                window.alert("Erro na requisição de repositórios estrelados.")
                console.exception("Error catching starred repos.")
            })
    }
    const contextValue = {
        githubState,
        getUser: useCallback((data) => getUser(data), [])
    }

    return <GithubContext.Provider value={contextValue}>
        {props.children}
    </GithubContext.Provider>
}

const Initial_Value = {
    loading: false,
    user: {
        login: undefined,
        name: undefined,
        publicUrl: undefined,
        avatar_url: undefined,
        blog: undefined,
        company: undefined,
        location: undefined,
        followers: 0,
        following: 0,
        public_gists: 0,
        public_repos: 0,
        nets: [{
            kind: "Followers",
            qtd : 0
        },
        {
            kind: "Following",
            qtd : 0
        },
        {
            kind: "Gists",
            qtd : 0
        },
        {
            kind: "Repos",
            qtd : 0
        }]
    },
    repositories: [],
    starred: []
}

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: []
})
export default GithubProvider