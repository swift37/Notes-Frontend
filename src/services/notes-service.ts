import { Client, CreateNoteDTO, UpdateNoteDTO } from '../api/api'

const apiClient = new Client('https://localhost:7053')

export const NotesService = {
	async getAll() {
		return await apiClient.getAll('1.0')
	},

	async get(id: string) {
		return await apiClient.get(id, '1,0')
	},

	async create(note: CreateNoteDTO) {
		return await apiClient.create(note, '1.0')
	},

	async update(note: UpdateNoteDTO) {
		return await apiClient.update(note, '1.0')
	},

	async delete(id: string) {
		return await apiClient.delete(id, '1.0')
	},
}
