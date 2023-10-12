import { FC } from 'react'
import './App.css'
import userManager, {
	loadUser,
	signInRedirect,
	signOutRedirect,
} from './services/auth-service'
import AuthProvider from './auth/auth-provider'
import Router from './components/Router'

const App: FC<{}> = () => {
	loadUser()

	const signOut = async () => {
		const user = await userManager.getUser()
		const idTokenHint = user?.id_token
		signOutRedirect({ id_token_hint: idTokenHint })
	}

	return (
		<>
			<header>
				<button onClick={signInRedirect}>Login</button>
				<button onClick={signOut}>Logout</button>
				<AuthProvider userManager={userManager}>
					<Router />
				</AuthProvider>
			</header>
		</>
	)
}

export default App
