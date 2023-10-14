import { FC } from 'react'
import { NoteLookupDTO } from '../../../api/api'
import styles from '../NoteList.module.css'

const Note: FC<{ note: NoteLookupDTO }> = ({ note }) => {
	return (
		<div className={styles.note}>
			<div className={styles.content}>
				<h2>{note?.title}</h2>
				<p>{note?.details}</p>
			</div>
			<div className={styles.additionally}>
				<p>
					{note?.creationDate
						? new Date(note.creationDate).toLocaleString()
						: 'Failed to display date'}
				</p>
				<div className={styles.options}>
					<i className='uil uil-ellipsis-h'></i>
					<div className={styles.menu}>
						<div className={styles.menuItem}>
							<i className='uil uil-pen'></i>Edit
						</div>
						<div className={styles.menuItem}>
							<i className='uil uil-trash'></i>Remove
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Note
