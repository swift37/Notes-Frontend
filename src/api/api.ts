import { ClientBase } from './client-base'

import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	CancelToken,
} from 'axios'

export class Client extends ClientBase {
	private instance: AxiosInstance
	private baseUrl: string
	protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
		undefined

	constructor(baseUrl?: string, instance?: AxiosInstance) {
		super()

		this.instance = instance ? instance : axios.create()

		this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : ''
	}

	/**
	 * @return Success
	 */
	getAll(
		version: string,
		cancelToken?: CancelToken | undefined
	): Promise<NoteListVM> {
		let url_ = this.baseUrl + '/api/{version}/Note'
		if (version === undefined || version === null)
			throw new Error("The parameter 'version' must be defined.")
		url_ = url_.replace('{version}', encodeURIComponent('' + version))
		url_ = url_.replace(/[?&]$/, '')

		let options_: AxiosRequestConfig = {
			method: 'GET',
			url: url_,
			headers: {
				Accept: 'application/json',
			},
			cancelToken,
		}

		return this.transformOptions(options_)
			.then(transformedOptions_ => {
				return this.instance.request(transformedOptions_)
			})
			.catch((_error: any) => {
				if (isAxiosError(_error) && _error.response) {
					return _error.response
				} else {
					throw _error
				}
			})
			.then((_response: AxiosResponse) => {
				return this.processGetAll(_response)
			})
	}

	protected processGetAll(response: AxiosResponse): Promise<NoteListVM> {
		const status = response.status
		let _headers: any = {}
		if (response.headers && typeof response.headers === 'object') {
			for (let k in response.headers) {
				if (response.headers.hasOwnProperty(k)) {
					_headers[k] = response.headers[k]
				}
			}
		}
		if (status === 200) {
			const responseData200: any = response.data
			return Promise.resolve<NoteListVM>(responseData200)
		} else if (status === 401) {
			const response401: any = response
			const responseData401: any = response.data
			return throwException(
				'Unauthorized',
				status,
				response401,
				_headers,
				responseData401
			)
		} else if (status !== 200 && status !== 204) {
			const responseData: any = response.data
			return throwException(
				'An unexpected server error occurred.',
				status,
				responseData,
				_headers
			)
		}
		return Promise.resolve<NoteListVM>(null as any)
	}

	/**
	 * @param body (optional)
	 * @return Success
	 */
	create(
		body: CreateNoteDTO,
		version: string,
		cancelToken?: CancelToken | undefined
	): Promise<string> {
		let url_ = this.baseUrl + '/api/{version}/Note'
		if (version === undefined || version === null)
			throw new Error("The parameter 'version' must be defined.")
		url_ = url_.replace('{version}', encodeURIComponent('' + version))
		if (body === undefined || body === null)
			throw new Error("The parameter 'body' must be defined.")
		url_ = url_.replace(/[?&]$/, '')

		const content_ = JSON.stringify(body)

		let options_: AxiosRequestConfig = {
			data: content_,
			method: 'POST',
			url: url_,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			cancelToken,
		}

		return this.transformOptions(options_)
			.then(transformedOptions_ => {
				return this.instance.request(transformedOptions_)
			})
			.catch((_error: any) => {
				if (isAxiosError(_error) && _error.response) {
					return _error.response
				} else {
					throw _error
				}
			})
			.then((_response: AxiosResponse) => {
				return this.processCreate(_response)
			})
	}

	protected processCreate(response: AxiosResponse): Promise<string> {
		const status = response.status
		let _headers: any = {}
		if (response.headers && typeof response.headers === 'object') {
			for (let k in response.headers) {
				if (response.headers.hasOwnProperty(k)) {
					_headers[k] = response.headers[k]
				}
			}
		}
		if (status === 200) {
			const responseData200: any = response.data
			return Promise.resolve<string>(responseData200)
		} else if (status === 401) {
			const response401: any = response
			const responseData401: any = response.data
			return throwException(
				'Unauthorized',
				status,
				response401,
				_headers,
				responseData401
			)
		} else if (status !== 200 && status !== 204) {
			const responseData: any = response.data
			return throwException(
				'An unexpected server error occurred.',
				status,
				responseData,
				_headers
			)
		}
		return Promise.resolve<string>(null as any)
	}

	/**
	 * @param body (optional)
	 * @return No Content
	 */
	update(
		body: UpdateNoteDTO,
		version: string,
		cancelToken?: CancelToken | undefined
	): Promise<void> {
		let url_ = this.baseUrl + '/api/{version}/Note'
		if (version === undefined || version === null)
			throw new Error("The parameter 'version' must be defined.")
		url_ = url_.replace('{version}', encodeURIComponent('' + version))
		if (body === undefined || body === null)
			throw new Error("The parameter 'body' must be defined.")
		url_ = url_.replace(/[?&]$/, '')

		const content_ = JSON.stringify(body)

		let options_: AxiosRequestConfig = {
			data: content_,
			method: 'PUT',
			url: url_,
			headers: {
				'Content-Type': 'application/json',
			},
			cancelToken,
		}

		return this.transformOptions(options_)
			.then(transformedOptions_ => {
				return this.instance.request(transformedOptions_)
			})
			.catch((_error: any) => {
				if (isAxiosError(_error) && _error.response) {
					return _error.response
				} else {
					throw _error
				}
			})
			.then((_response: AxiosResponse) => {
				return this.processUpdate(_response)
			})
	}

	protected processUpdate(response: AxiosResponse): Promise<void> {
		const status = response.status
		let _headers: any = {}
		if (response.headers && typeof response.headers === 'object') {
			for (let k in response.headers) {
				if (response.headers.hasOwnProperty(k)) {
					_headers[k] = response.headers[k]
				}
			}
		}
		if (status === 204) {
			/*const _responseText = response.data*/
			return Promise.resolve<void>(null as any)
		} else if (status === 401) {
			const response401: any = response
			const responseData401: any = response.data
			return throwException(
				'Unauthorized',
				status,
				response401,
				_headers,
				responseData401
			)
		} else if (status !== 200 && status !== 204) {
			const responseData: any = response.data
			return throwException(
				'An unexpected server error occurred.',
				status,
				responseData,
				_headers
			)
		}
		return Promise.resolve<void>(null as any)
	}

	/**
	 * @return Success
	 */
	get(
		id: string,
		version: string,
		cancelToken?: CancelToken | undefined
	): Promise<NoteDetailsVM> {
		let url_ = this.baseUrl + '/api/{version}/Note/{id}'
		if (id === undefined || id === null)
			throw new Error("The parameter 'id' must be defined.")
		url_ = url_.replace('{id}', encodeURIComponent('' + id))
		if (version === undefined || version === null)
			throw new Error("The parameter 'version' must be defined.")
		url_ = url_.replace('{version}', encodeURIComponent('' + version))
		url_ = url_.replace(/[?&]$/, '')

		let options_: AxiosRequestConfig = {
			method: 'GET',
			url: url_,
			headers: {
				Accept: 'application/json',
			},
			cancelToken,
		}

		return this.transformOptions(options_)
			.then(transformedOptions_ => {
				return this.instance.request(transformedOptions_)
			})
			.catch((_error: any) => {
				if (isAxiosError(_error) && _error.response) {
					return _error.response
				} else {
					throw _error
				}
			})
			.then((_response: AxiosResponse) => {
				return this.processGet(_response)
			})
	}

	protected processGet(response: AxiosResponse): Promise<NoteDetailsVM> {
		const status = response.status
		let _headers: any = {}
		if (response.headers && typeof response.headers === 'object') {
			for (let k in response.headers) {
				if (response.headers.hasOwnProperty(k)) {
					_headers[k] = response.headers[k]
				}
			}
		}
		if (status === 200) {
			const responseData200: any = response.data
			return Promise.resolve<NoteDetailsVM>(responseData200)
		} else if (status === 401) {
			const response401: any = response
			const responseData401: any = response.data
			return throwException(
				'Unauthorized',
				status,
				response401,
				_headers,
				responseData401
			)
		} else if (status !== 200 && status !== 204) {
			const responseData = response.data
			return throwException(
				'An unexpected server error occurred.',
				status,
				responseData,
				_headers
			)
		}
		return Promise.resolve<NoteDetailsVM>(null as any)
	}

	/**
	 * @return No Content
	 */
	delete(
		id: string,
		version: string,
		cancelToken?: CancelToken | undefined
	): Promise<void> {
		let url_ = this.baseUrl + '/api/{version}/Note/{id}'
		if (id === undefined || id === null)
			throw new Error("The parameter 'id' must be defined.")
		url_ = url_.replace('{id}', encodeURIComponent('' + id))
		if (version === undefined || version === null)
			throw new Error("The parameter 'version' must be defined.")
		url_ = url_.replace('{version}', encodeURIComponent('' + version))
		url_ = url_.replace(/[?&]$/, '')

		let options_: AxiosRequestConfig = {
			method: 'DELETE',
			url: url_,
			headers: {},
			cancelToken,
		}

		return this.transformOptions(options_)
			.then(transformedOptions_ => {
				return this.instance.request(transformedOptions_)
			})
			.catch((_error: any) => {
				if (isAxiosError(_error) && _error.response) {
					return _error.response
				} else {
					throw _error
				}
			})
			.then((_response: AxiosResponse) => {
				return this.processDelete(_response)
			})
	}

	protected processDelete(response: AxiosResponse): Promise<void> {
		const status = response.status
		let _headers: any = {}
		if (response.headers && typeof response.headers === 'object') {
			for (let k in response.headers) {
				if (response.headers.hasOwnProperty(k)) {
					_headers[k] = response.headers[k]
				}
			}
		}
		if (status === 204) {
			/*const _responseText = response.data*/
			return Promise.resolve<void>(null as any)
		} else if (status === 401) {
			const response401: any = response
			const responseData401: any = response.data
			return throwException(
				'Unauthorized',
				status,
				response401,
				_headers,
				responseData401
			)
		} else if (status !== 200 && status !== 204) {
			const responseData = response.data
			return throwException(
				'An unexpected server error occurred.',
				status,
				responseData,
				_headers
			)
		}
		return Promise.resolve<void>(null as any)
	}
}

export interface CreateNoteDTO {
	title: string
	details?: string | undefined
}

export interface NoteDetailsVM {
	id?: string
	title?: string | undefined
	details?: string | undefined
	creationDate?: Date
	editDate?: Date | undefined
}

export interface NoteListVM {
	notes?: NoteLookupDTO[] | undefined
}

export interface NoteLookupDTO {
	id?: string
	title?: string | undefined
	details?: string | undefined
	creationDate?: Date
}

export interface ProblemDetails {
	type?: string | undefined
	title?: string | undefined
	status?: number | undefined
	detail?: string | undefined
	instance?: string | undefined

	[key: string]: any
}

export interface UpdateNoteDTO {
	id?: string
	title?: string | undefined
	details?: string | undefined
}

export class ApiException extends Error {
	message: string
	status: number
	response: AxiosResponse
	headers: { [key: string]: any }
	result: any

	constructor(
		message: string,
		status: number,
		response: AxiosResponse,
		headers: { [key: string]: any },
		result: any
	) {
		super()

		this.message = message
		this.status = status
		this.response = response
		this.headers = headers
		this.result = result
	}

	protected isApiException = true

	static isApiException(obj: any): obj is ApiException {
		return obj.isApiException === true
	}
}

function throwException(
	message: string,
	status: number,
	response: AxiosResponse,
	headers: { [key: string]: any },
	result?: any
): any {
	if (result !== null && result !== undefined) throw result
	else throw new ApiException(message, status, response, headers, null)
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
	return obj && obj.isAxiosError === true
}
