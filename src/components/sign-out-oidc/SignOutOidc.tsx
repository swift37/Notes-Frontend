import { useNavigate } from 'react-router-dom'
import { signOutRedirectCallback } from '../../services/auth-service'
import { FC, useEffect } from 'react'

const SignOutOidc: FC<{}> = () => {
	const navigate = useNavigate()
	useEffect(() => {
		const signOutAsync = async () => {
			await signOutRedirectCallback()
			navigate('/')
		}
		signOutAsync()
	}, [navigate])

	return <div>Redirecting...</div>
}

export default SignOutOidc
