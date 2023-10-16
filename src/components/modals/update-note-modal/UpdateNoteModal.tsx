import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { UpdateNoteDTO } from '../../../api/api'
import { useUpdateNote } from './useUpdateNote'
import styles from '../Modal.module.css'

interface IUpdateNoteModal {
	note: UpdateNoteDTO
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateNoteModal: FC<IUpdateNoteModal> = ({ note, setOpenModal }) => {
	const { register, handleSubmit } = useForm<UpdateNoteDTO>({
		mode: 'onChange',
		defaultValues: {
			id: note.id,
			title: note.title,
			details: note.details,
		},
	})

	const updateNote = useUpdateNote(setOpenModal)

	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<div className={styles.content}>
					<header>
						<h2>Updating a note</h2>
						<i
							className='uil uil-times'
							onClick={() => setOpenModal(false)}
						></i>
					</header>
					<form onSubmit={handleSubmit(updateNote)}>
						<div className={styles.field}>
							<label>Title</label>
							<input
								type='text'
								{...register('title', { required: true })}
								placeholder='Enter title'
							/>
						</div>
						<div className={styles.field}>
							<label>Details</label>
							<textarea
								{...register('details', { required: true })}
								placeholder='Enter details'
							/>
						</div>
						<button>Update Note</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateNoteModal
