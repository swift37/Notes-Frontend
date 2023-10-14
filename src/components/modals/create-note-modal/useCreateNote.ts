import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { CreateNoteDTO } from '../../../api/api'
import { NotesService } from '../../../services/notes-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateNote = (reset: UseFormReset<CreateNoteDTO>) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['create note'],
		(note: CreateNoteDTO) => NotesService.create(note),
		{
			onSuccess() {
				queryClient.invalidateQueries(['notes list'])
				reset()
			},
		}
	)

	const createNote: SubmitHandler<CreateNoteDTO> = note => mutate(note)

	return createNote
}
