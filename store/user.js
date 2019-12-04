const path = '.netlify/functions/get-deezer-user'
const URL = 
	process.env.NODE_ENV === 'development' 
	? `http://localhost:34567/${path}`
	: `/${path}`

export const state = () => ({
	data: ''
})

export const mutations = {
	SET_USER: (state, payload) => {
		state.data = payload
	}
}

export const actions = {
	async setUser ({commit}, id) {
		const response = await fetch(URL + '/?id=' + id)
		const user = await response.json()
		
		localStorage.setItem('deezer_user', user.id)
		commit('SET_USER', user)
	},

	removeUser({commit}) {
		localStorage.clear() // samo ne znam koliko je ovo dobro ako imamo nesto drugo da koristi LS, ne znam da li ovo cisti ceo LS, mozda ovde bolje removeItem('deezer_user) koristiti, nzm
		commit('SET_USER', null)
	}
}