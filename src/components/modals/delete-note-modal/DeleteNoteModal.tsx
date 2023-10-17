import { FC } from 'react'
import styles from '../Modal.module.css'
import { useDeleteNote } from './useDeleteNote'

interface IDeleteNoteModal {
	id: string
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteNoteModal: FC<IDeleteNoteModal> = ({ id, setOpenModal }) => {
	const deleteNote = useDeleteNote(setOpenModal)

	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<div className={styles.content}>
					<header>
						<h2>Removing a note</h2>
						<i
							className='uil uil-times'
							onClick={() => setOpenModal(false)}
						></i>
					</header>
					<p>Do you confirm the remove of this note?</p>
					<div className={styles.buttonsSection}>
						<button
							className={styles.cancelBtn}
							onClick={() => setOpenModal(false)}
						>
							Cancel
						</button>
						<button
							className={styles.confirmBtn}
							onClick={() => deleteNote(id)}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeleteNoteModal
