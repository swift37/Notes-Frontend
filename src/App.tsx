import { FC } from 'react'
import './App.css'
import userManager, { loadUser, signInRedirect } from './services/auth-service'
import AuthProvider from './auth/auth-provider'
import Router from './components/Router'

const App: FC<{}> = () => {
	loadUser()
	return (
		<>
			<header>
				<button onClick={signInRedirect}>Login</button>
				<AuthProvider userManager={userManager}>
					<Router />
				</AuthProvider>
			</header>
		</>
	)
}

export default App
