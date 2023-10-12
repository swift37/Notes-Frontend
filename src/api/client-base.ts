import { AxiosRequestConfig } from 'axios'

export class ClientBase {
	protected transformOptions(options: AxiosRequestConfig) {
		const token = localStorage.getItem('token')
		options.headers = {
			...options.headers,
			Authorization: 'Bearer ' + token,
		}
		return Promise.resolve(options)
	}
}
