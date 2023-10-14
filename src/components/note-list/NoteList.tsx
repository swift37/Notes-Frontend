import { FC } from 'react'
import { Client } from '../../api/api'
import styles from './NoteList.module.css'
import { useQuery } from '@tanstack/react-query'
import Note from './note/Note'

const apiClient = new Client('https://localhost:7053')

const NoteList: FC<{}> = () => {
	const { data } = useQuery(
		['notesList'],
		async () => await apiClient.getAll('1.0')
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.newNote}>
				<div className={styles.addIcon}>
					<i className='uil uil-plus'></i>
				</div>
				<p>Create a new note</p>
			</div>
			{data?.notes?.map(note => (
				<Note key={note.id} note={note} />
			))}
		</div>
	)
}

export default NoteList
