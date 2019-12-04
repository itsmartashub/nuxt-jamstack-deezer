const path = '.netlify/functions/get-deezer-favs'
const URL = 
	process.env.NODE_ENV === 'development' 
	? `http://localhost:34567/${path}` //! ovo je bukvalno nas backend tj path do nase functions koji se sad nalazi na netlify-u, ovo je port koji netlify dev koristi
	: `/${path}`

export const state = () => ({
	data: []
})

export const mutations = {
	SET_SONGS: (state, songs) => {
		state.data = songs
	}
}

export const actions = {
	async searchUserSongs ({commit}, payload) {
		const response = await fetch(URL + '/?id=' + payload)
		// const response = await fetch(URL)
		const songs = await response.json()
		console.log('SONGS: ', songs)

		commit('SET_SONGS', songs)
	}
}