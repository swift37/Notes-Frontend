import { User, UserManager } from 'oidc-client'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { setAuthHeader } from './auth-headers'
import React from 'react'

type AuthProviderProps = {
	userManager: UserManager
}

const AuthProvider: FC<PropsWithChildren<AuthProviderProps>> = ({
	userManager: manager,
	children,
}): any => {
	let userManager = useRef<UserManager>()
	useEffect(() => {
		userManager.current = manager
		const onUserLoaded = (user: User) => {
			setAuthHeader(user.access_token)
			console.log(`User loaded: ${user}`)
		}
		const onUserUnloaded = () => {
			setAuthHeader(null)
			console.log('User unloaded')
		}
		const onAccessTokenExpiring = () => {
			console.log('Access token expiring')
		}
		const onAccessTokenExpired = () => {
			console.log('Access token expired')
		}
		const onUserSignedOut = () => {
			console.log('User signed out')
		}

		userManager.current.events.addUserLoaded(onUserLoaded)
		userManager.current.events.addUserUnloaded(onUserUnloaded)
		userManager.current.events.addAccessTokenExpiring(onAccessTokenExpiring)
		userManager.current.events.addAccessTokenExpired(onAccessTokenExpired)
		userManager.current.events.addUserSignedOut(onUserSignedOut)

		return function cleanup() {
			if (userManager && userManager.current) {
				userManager.current.events.removeUserLoaded(onUserLoaded)
				userManager.current.events.removeUserUnloaded(onUserUnloaded)
				userManager.current.events.removeAccessTokenExpiring(
					onAccessTokenExpiring
				)
				userManager.current.events.removeAccessTokenExpired(
					onAccessTokenExpired
				)
				userManager.current.events.removeUserSignedOut(onUserSignedOut)
			}
		}
	}, [manager])

	return React.Children.only(children)
}

export default AuthProvider
