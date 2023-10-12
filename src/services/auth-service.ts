import { UserManager, UserManagerSettings } from 'oidc-client'
import { setAuthHeader } from '../auth/auth-headers'

const userManagerSettings: UserManagerSettings = {
	client_id: 'notes-web-api',
	redirect_uri: 'http://localhost:5173/signin-oidc',
	response_type: 'code',
	scope: 'openid profile NotesWebAPI',
	authority: 'https://localhost:7122/',
	post_logout_redirect_uri: 'http://localhost:5173/signout-oidc',
}

const userManager = new UserManager(userManagerSettings)

export const loadUser = async () => {
	const user = await userManager.getUser()
	console.log(`User: ${user?.profile.name}`)
	const token = user?.access_token
	setAuthHeader(token)
}

export const signInRedirect = () => userManager.signinRedirect()

export const signInRedirectCallback = () => userManager.signinRedirectCallback()

export const signOutRedirect = (args?: any) => {
	userManager.clearStaleState()
	userManager.removeUser()
	return userManager.signoutRedirect(args)
}

export const signOutRedirectCallback = () => {
	userManager.clearStaleState()
	userManager.removeUser()
	userManager.signoutRedirectCallback()
}

export default userManager
