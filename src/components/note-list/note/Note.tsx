import { FC, useState } from 'react'
import { NoteLookupDTO, UpdateNoteDTO } from '../../../api/api'
import styles from '../NoteList.module.css'
import UpdateNoteModal from '../../modals/update-note-modal/UpdateNoteModal'
import DeleteNoteModal from '../../modals/delete-note-modal/DeleteNoteModal'

const Note: FC<{ note: NoteLookupDTO }> = ({ note }) => {
	const [updateNoteModal, setUpdateNoteModal] = useState(false)
	const [deleteNoteModal, setDeleteNoteModal] = useState(false)

	const updateNoteDTO: UpdateNoteDTO = {
		id: note.id,
		title: note.title,
		details: note.details,
	}

	return (
		<>
			{updateNoteModal && (
				<UpdateNoteModal
					note={updateNoteDTO}
					setOpenModal={setUpdateNoteModal}
				/>
			)}
			{deleteNoteModal && note?.id && (
				<DeleteNoteModal id={note.id} setOpenModal={setDeleteNoteModal} />
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
							<div
								className={styles.menuItem}
								onClick={() => setDeleteNoteModal(true)}
							>
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
