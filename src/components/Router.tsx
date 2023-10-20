import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInOidc from './sign-in-oidc/SignInOidc'
import SignOutOidc from './sign-out-oidc/SignOutOidc'
import Home from './screens/home/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<SignInOidc />} path='/signin-oidc' />
				<Route element={<SignOutOidc />} path='/signout-oidc' />

				<Route path='*' element={<div>Note Found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
