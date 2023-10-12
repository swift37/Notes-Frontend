import { useNavigate } from 'react-router-dom'
import { signOutRedirectCallback } from '../../services/auth-service'
import { useEffect } from 'react'

const SignOutOidc = () => {
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
