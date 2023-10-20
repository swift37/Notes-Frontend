import { FC, useEffect, useState } from 'react'
import NoteList from '../../note-list/NoteList'
import userManager, {
	signInRedirect,
	signOutRedirect,
} from '../../../services/auth-service'
import styles from './Home.module.css'

const Home: FC<{}> = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>()
	const [username, setUsername] = useState<string>('')

	useEffect(() => {
		const checkUserAuth = async () => {
			const user = await userManager.getUser()
			setIsAuthenticated(!!user)
			setUsername(user?.profile.name ?? '')
		}

		checkUserAuth()
	})

	const signOut = async () => {
		const user = await userManager.getUser()
		const idTokenHint = user?.id_token
		signOutRedirect({ id_token_hint: idTokenHint })
	}

	return (
		<>
			{isAuthenticated ? (
				<>
					<header className={styles.header}>
						<div className={`${styles.container} ${styles.inline}`}>
							<p className={styles.title}>Welcome to Notes, {username}!</p>
							<button className={styles.button} onClick={signOut}>
								Logout
							</button>
						</div>
					</header>
					<NoteList />
				</>
			) : (
				<header className={`${styles.header} ${styles.centred}`}>
					<div className={styles.container}>
						<p className={styles.title}>Welcome to Notes</p>
						<p className={styles.subtitle}>Please sign in to get started</p>
						<button className={styles.button} onClick={signInRedirect}>
							Sign in
						</button>
					</div>
				</header>
			)}
		</>
	)
}

export default Home
