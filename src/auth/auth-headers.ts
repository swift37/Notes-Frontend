export const setAuthHeader = (token: string | null | undefined) => {
	localStorage.setItem('token', token ? token : '')
}
