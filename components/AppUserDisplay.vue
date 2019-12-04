<template>
	<div class="header-id-display">
		<img :src="user.picture" alt="User image" class="user-image" />
		<p class="user-name">{{ user.name }}</p>
		<a @click="changeUserName" class="switch-text">Switch accounts?</a>
	</div>
</template>

<script>
export default {
	name: 'app-user-display',
	props: ['user'],

	methods: {
		changeUserName() {
			const result = window.confirm('Are you sure you want to do this?')

			if (result) this.$store.dispatch('user/removeUser')

			this.$store.commit('songs/SET_SONGS', [])
		}
	},
}
</script>

<style>

</style>