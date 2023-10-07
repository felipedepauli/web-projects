import React from 'react'

import Header from './components/layout/header'
import Layout from './components/layout'
import Profile from './components/layout/profile'
import Repos from './repos'

import GithubProvider from './components/providers/github-provider'

import './App.css';

function App() {
	return (
		<div className="App">
			<GithubProvider>
			<Layout>
				<Header/>
				<Profile/>
				<Repos/>
			</Layout>
			</GithubProvider>
		</div>
	);
}




export default App;
