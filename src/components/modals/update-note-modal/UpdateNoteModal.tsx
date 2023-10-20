import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { UpdateNoteDTO } from '../../../api/api'
import { useUpdateNote } from './useUpdateNote'
import styles from '../Modal.module.css'
import ErrorMsg from '../error-msg/ErrorMsg'

interface IUpdateNoteModal {
	note: UpdateNoteDTO
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateNoteModal: FC<IUpdateNoteModal> = ({ note, setOpenModal }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateNoteDTO>({
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
					<header className={styles.header}>
						<h2>Updating a note</h2>
						<i
							className='uil uil-times'
							onClick={() => setOpenModal(false)}
						></i>
					</header>
					<form className={styles.form} onSubmit={handleSubmit(updateNote)}>
						<div className={styles.field}>
							<label>Title</label>
							<input
								type='text'
								{...register('title', {
									required: 'Title is required',
									maxLength: {
										value: 32,
										message: 'Length mustn`t exceed 32 chars',
									},
								})}
								placeholder='Enter title'
							/>
						</div>
						<ErrorMsg message={errors?.title?.message} />
						<div className={styles.field}>
							<label>Details</label>
							<textarea
								{...register('details', {
									maxLength: {
										value: 128,
										message: 'Length mustn`t exceed 128 chars',
									},
								})}
								placeholder='Enter details'
							/>
						</div>
						<ErrorMsg message={errors?.details?.message} />
						<button className={styles.button}>Update Note</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateNoteModal
