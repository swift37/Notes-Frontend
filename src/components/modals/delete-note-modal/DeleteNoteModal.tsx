import { FC } from 'react'
import styles from '../Modal.module.css'

interface IDeleteNoteModal {
	id: string
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteNoteModal: FC<IDeleteNoteModal> = ({ id, setOpenModal }) => {
	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<div className={styles.content}>
					<header>
						<h2>Deleting a note</h2>
						<i
							className='uil uil-times'
							onClick={() => setOpenModal(false)}
						></i>
					</header>
					<p>Do you confirm the deletion of this note?</p>
					<div className={styles.buttonsSection}>
						<button className={styles.cancelBtn}>Cancel</button>
						<button className={styles.confirmBtn}>Confirm</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeleteNoteModal
