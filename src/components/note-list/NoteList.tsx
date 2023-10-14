import { FC, useState } from 'react'
import { NotesService } from '../../services/notes-service'
import styles from './NoteList.module.css'
import { useQuery } from '@tanstack/react-query'
import Note from './note/Note'
import NewNote from './new-note/NewNote'
import CreateNoteModal from '../modals/create-note-modal/CreateNoteModal'

const NoteList: FC<{}> = () => {
	const { data } = useQuery(
		['notes list'],
		async () => await NotesService.getAll()
	)

	const [createNoteModal, setCreateNoteModal] = useState(false)

	return (
		<>
			{createNoteModal && <CreateNoteModal setModal={setCreateNoteModal} />}
			<div className={styles.wrapper}>
				<NewNote setModal={setCreateNoteModal} />
				{data?.notes?.map(note => (
					<Note key={note.id} note={note} />
				))}
			</div>
		</>
	)
}

export default NoteList
