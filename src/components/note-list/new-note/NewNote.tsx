import { FC } from 'react'
import styles from '../NoteList.module.css'

interface INewNote {
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NewNote: FC<INewNote> = ({ setModal }) => {
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
