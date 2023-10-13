import styles from './CreateNoteModal.module.css'

const CreateNoteModal = () => {
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
							<input type='text' placeholder='Enter title' />
						</div>
						<div className={styles.field}>
							<label>Description</label>
							<textarea placeholder='Enter description' />
						</div>
						<button>Create Note</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateNoteModal
