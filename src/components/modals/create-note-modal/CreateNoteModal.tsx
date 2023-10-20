import { useForm } from 'react-hook-form'
import styles from '../Modal.module.css'
import { CreateNoteDTO } from '../../../api/api'
import { useCreateNote } from './useCreateNote'
import { FC } from 'react'

interface ICreateNoteModal {
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateNoteModal: FC<ICreateNoteModal> = ({ setOpenModal }) => {
	const { register, reset, handleSubmit } = useForm<CreateNoteDTO>({
		mode: 'onChange',
	})

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
						<button className={styles.button}>Create Note</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateNoteModal
