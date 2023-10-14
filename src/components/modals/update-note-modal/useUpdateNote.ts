import { SubmitHandler, UseFormReset } from 'react-hook-form'
import { UpdateNoteDTO } from '../../../api/api'
import { NotesService } from '../../../services/notes-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateNote = (reset: UseFormReset<UpdateNoteDTO>) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['update note'],
		(note: UpdateNoteDTO) => NotesService.update(note),
		{
			onSuccess() {
				queryClient.invalidateQueries(['notes list'])
				reset()
			},
		}
	)

	const updateNote: SubmitHandler<UpdateNoteDTO> = note => mutate(note)

	return updateNote
}
