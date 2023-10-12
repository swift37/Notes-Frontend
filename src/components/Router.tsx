import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoteList from './note-list/NoteList'
import SignInOidc from './sign-in-oidc/SignInOidc'
import SignOutOidc from './sign-out-oidc/SignOutOidc'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NoteList />} path='/' />
				<Route element={<SignInOidc />} path='/signin-oidc' />
				<Route element={<SignOutOidc />} path='/signout-oidc' />

				<Route path='*' element={<div>Note Found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
