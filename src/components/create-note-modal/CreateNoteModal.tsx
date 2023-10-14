import { useForm } from 'react-hook-form'
import styles from './CreateNoteModal.module.css'
import { CreateNoteDTO } from '../../api/api'

const CreateNoteModal = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateNoteDTO>({
		mode: 'onChange',
	})

	return (
		<div className={styles.container}>
			<div className={styles.modal}>
				<div className={styles.content}>
					<header>
						<h2>Create a new note</h2>
						<i className='uil uil-times'></i>
					</header>
					<form action='#'>
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
						<button>Create Note</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateNoteModal
