import { FC } from 'react'
import styles from '../NoteList.module.css'

const NewNote: FC<{
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setModal }) => {
	return (
		<div className={styles.newNote} onClick={() => setModal(true)}>
			<div className={styles.addIcon}>
				<i className='uil uil-plus'></i>
			</div>
			<p>Create a new note</p>
		</div>
	)
}

export default NewNote
