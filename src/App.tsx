import { FC } from 'react'
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
			<AuthProvider userManager={userManager}>
				<Router />
			</AuthProvider>
		</>
	)
}

export default App
