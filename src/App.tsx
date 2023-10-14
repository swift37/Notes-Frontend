import { FC } from 'react'
import userManager, {
	loadUser,
	signInRedirect,
	signOutRedirect,
} from './services/auth-service'
import AuthProvider from './auth/auth-provider'
import Router from './components/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App: FC<{}> = () => {
	loadUser()

	const signOut = async () => {
		const user = await userManager.getUser()
		const idTokenHint = user?.id_token
		signOutRedirect({ id_token_hint: idTokenHint })
	}

	const queryClient = new QueryClient()

	return (
		<>
			<button onClick={signInRedirect}>Login</button>
			<QueryClientProvider client={queryClient}>
				<AuthProvider userManager={userManager}>
					<Router />
				</AuthProvider>
			</QueryClientProvider>
		</>
	)
}

export default App
