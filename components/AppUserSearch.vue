<template>
	<div class="header-id-search">
		<div v-if="loaded">
			<input
				type="text"
				class="header-input"
				placeholder="Enter Your Deezer ID"
				v-model="userID"
			/>
			<button @click="updateUserInfo">Search</button>
			<a href="/how-to-find-it">
				<p class="header-small-text">How to find it?</p>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-user-search',

	data() {
		return {
			userID: ''
		}
	},
	computed: {
		loaded() {
			return this.$store.state.searchLoaded
		}
	},
	methods: {
		async updateUserInfo() {
			this.$store.commit('SET_SEARCH_LOADED', false)

			if (this.userID !== '') {
				await this.$store.dispatch('songs/searchUserSongs', this.userID)
				await this.$store.dispatch('user/setUser', this.userID)
			}

			this.$store.commit('SET_SEARCH_LOADED', true)
		}
	},
}
</script>

<style>

</style>