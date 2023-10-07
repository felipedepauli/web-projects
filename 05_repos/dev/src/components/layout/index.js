import React from 'react'

import GithubProvider from '../providers/github-provider'
import useGithub from '../../hooks/github-hooks'

function Layout(props) {
    const { githubState } = useGithub()
    const {children} = props
    return (
        <GithubProvider>
        <section>
            { githubState.loading ? `loading...` : children }
        </section>
        </GithubProvider>
    )
}

export default Layout