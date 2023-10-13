import { FC, useEffect, useRef, useState } from 'react'
import { Client, CreateNoteDTO, NoteLookupDTO } from '../../api/api'
import styles from './NoteList.module.css'

const apiClient = new Client('https://localhost:7053')

const createNote = async (note: CreateNoteDTO) => {
	await apiClient.create('1.0', note)
	console.log('Note was created successfully.')
}

const NoteList: FC<{}> = () => {
	let textInput = useRef(null)
	const [notes, setNotes] = useState<NoteLookupDTO[] | undefined>(undefined)

	const getNotes = async () => {
		const noteListVM = await apiClient.getAll('1.0')
		setNotes(noteListVM.notes)
	}

	useEffect(() => {
		getNotes()
	}, [])

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			const note: CreateNoteDTO = {
				title: event.currentTarget.value,
			}
			createNote(note)
			event.currentTarget.value = ''
			setTimeout(getNotes, 500)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.newNote}>
				<div className={styles.addIcon}>
					<i className='uil uil-plus'></i>
				</div>
				<p>Add a new note</p>
			</div>
			<div className={styles.note}>
				<div className={styles.content}>
					<h2>Title</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className={styles.additionally}>
					<p>October 12, 2023</p>
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
		</div>
	)
}

export default NoteList
