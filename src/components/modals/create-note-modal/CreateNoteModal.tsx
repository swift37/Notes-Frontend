import { useForm } from 'react-hook-form'
import styles from '../Modal.module.css'
import { CreateNoteDTO } from '../../../api/api'
import { useCreateNote } from './useCreateNote'
import { FC } from 'react'
import ErrorMsg from '../error-msg/ErrorMsg'

interface ICreateNoteModal {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateNoteModal: FC<ICreateNoteModal> = ({ setOpenModal }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateNoteDTO>({
		mode: 'onChange',
	})
	console.log(errors)
	const createNote = useCreateNote(reset)

	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<div className={styles.content}>
					<header className={styles.header}>
						<h2>Create a new note</h2>
						<i
							className='uil uil-times'
							onClick={() => setOpenModal(false)}
						></i>
					</header>
					<form className={styles.form} onSubmit={handleSubmit(createNote)}>
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
						<button className={styles.button}>Create Note</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateNoteModal
