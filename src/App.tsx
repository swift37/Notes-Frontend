import { FC } from 'react'
import userManager, { loadUser } from './services/auth-service'
import AuthProvider from './auth/auth-provider'
import Router from './components/Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App: FC<{}> = () => {
	loadUser()

	const queryClient = new QueryClient()

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider userManager={userManager}>
					<Router />
				</AuthProvider>
			</QueryClientProvider>
		</>
	)
}

export default App
