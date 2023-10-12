import { FC, useEffect, useRef, useState } from 'react'
import { Client, CreateNoteDTO, NoteLookupDTO } from '../../api/api'

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
			getNotes()
		}
	}

	return (
		<div>
			Notes
			<div>
				<input ref={textInput} onKeyPress={handleKeyPress} />
			</div>
			<div>
				{notes?.map(note => (
					<div key={note.id}>{note.title}</div>
				))}
			</div>
		</div>
	)
}

export default NoteList
