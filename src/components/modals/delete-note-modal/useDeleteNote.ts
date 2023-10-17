import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NotesService } from '../../../services/notes-service'

export const useDeleteNote = (
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['delete note'],
		(id: string) => NotesService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['notes list'])
				setOpenModal(false)
			},
		}
	)

	return mutate
}
