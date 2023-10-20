import { FC } from 'react'
import styles from './ErrorMsg.module.css'

interface IErrorMsg {
	message?: string
}

const ErrorMsg: FC<IErrorMsg> = ({ message }) => {
	if (!message) return null
	return <p className={styles.message}>{message}</p>
}

export default ErrorMsg
