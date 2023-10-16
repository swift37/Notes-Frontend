import { FC, useState } from 'react'
import { NoteLookupDTO, UpdateNoteDTO } from '../../../api/api'
import styles from '../NoteList.module.css'
import UpdateNoteModal from '../../modals/update-note-modal/UpdateNoteModal'

const Note: FC<{ note: NoteLookupDTO }> = ({ note }) => {
	const [updateNoteModal, setUpdateNoteModal] = useState(false)
	const [updateNoteDTO, setUpdateNoteDTO] = useState<UpdateNoteDTO>({})

	const updateNoteDTO2: UpdateNoteDTO = {
		id: note.id,
		title: note.title,
		details: note.details,
	}

	return (
		<>
			{updateNoteModal && (
				<UpdateNoteModal
					note={updateNoteDTO2}
					setOpenModal={setUpdateNoteModal}
				/>
			)}
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
							<div
								className={styles.menuItem}
								onClick={() => setUpdateNoteModal(true)}
							>
								<i className='uil uil-pen'></i>
								Edit
							</div>
							<div className={styles.menuItem}>
								<i className='uil uil-trash'></i>Remove
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Note
