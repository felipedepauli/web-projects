import React from 'react'

import './repos.css'

import { Tabs, TabList, Tab, TabPanel } from '../styles/repos.js'

import GithubProvider from '../components/providers/github-provider.js'
import useGithub from '../hooks/github-hooks.js'

const RepositoryItem = (props) => {
    return (
        <div className="box__repos--repo">
            <h2>{props.name}</h2>
            <a href={props.linkToRepo} target="_blank">Link</a>
        </div>
    )
}

const Repos = () => {
    const { githubState } = useGithub()

    const renderRepos = (repositories) => {

        if (repositories.length > 0) {
            return <div className="box__repos">
            { repositories.map((repo, key) => {
               return <RepositoryItem
                            key         = {key}
                            name        = {repo.name}
                            linkToRepo  = {repo.html_url}
                            fullName    = {repo.full_name}
                            />
            })}
            </div>
        } else    return null
    }
    const renderStarred = (starred) => {

        if (starred.length > 0) {
    
            return <div className="box__repos">
            { starred.map((repo, key) => {
               return <RepositoryItem
                            key         = {key}
                            name        = {repo.name}
                            linkToRepo  = {repo.html_url}
                            fullName    = {repo.full_name}
                            />
            })}
            </div>
         } else   {
            return null
         } 
    }
    return (
        <GithubProvider>
            <Tabs
                selectedTabClassName = "is-selected"
                selectedTabPanelClassName = "is-selected"
                >
                <TabList>
                    <Tab>Repos</Tab>
                    <Tab>Starred</Tab>
                </TabList>
                <TabPanel>
                    {renderRepos(githubState.repositories)}
                </TabPanel>
                <TabPanel>
                    {renderStarred(githubState.starred)}
                </TabPanel>
            </Tabs>
        </GithubProvider>
    )
}

export default Repos
