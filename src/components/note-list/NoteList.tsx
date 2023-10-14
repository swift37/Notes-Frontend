import { FC, useState } from 'react'
import { NotesService } from '../../services/notes-service'
import styles from './NoteList.module.css'
import { useQuery } from '@tanstack/react-query'
import Note from './note/Note'
import NewNote from './new-note/NewNote'
import CreateNoteModal from '../create-note-modal/CreateNoteModal'

const NoteList: FC<{}> = () => {
	const { data } = useQuery(
		['notes list'],
		async () => await NotesService.getAll()
	)

	const [modal, setModal] = useState(false)

	return (
		<>
			{modal && <CreateNoteModal setModal={setModal} />}
			<div className={styles.wrapper}>
				<NewNote setModal={setModal} />
				{data?.notes?.map(note => (
					<Note key={note.id} note={note} />
				))}
			</div>
		</>
	)
}

export default NoteList
