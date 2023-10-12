import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInRedirectCallback } from '../../services/auth-service'

const SignInOidc: FC<{}> = () => {
	const navigate = useNavigate()
	useEffect(() => {
		const signInAsync = async () => {
			await signInRedirectCallback()
			navigate('/')
		}
		signInAsync()
	}, [navigate])
	return <div>Redirecting...</div>
}

export default SignInOidc
