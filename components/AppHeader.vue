<template>
	<header class="site-header">
		<div v-if="!loaded" class="loader"></div>

		<div v-if="dataLoaded && loaded" class="site-header-content">
			<h1 class="site-title"> Your Favourite Deezer Tracks</h1>
			<!-- //? AppUserSearch, ako nema pronadjenog korisnika -->
			<app-user-search v-if="!user" />

			<!-- //? AppUserDisplay, ako ima pronadjenog korisnika -->
			<app-user-display v-else :user="user" />
		</div>
	</header>
</template>

<script>
import AppUserSearch from '@/components/AppUserSearch'
import AppUserDisplay from '@/components/AppUserDisplay'

export default {
	name: 'app-header',
	components: {
		AppUserSearch,
		AppUserDisplay
	},

	computed: {
		user() {
			return this.$store.state.user.data // user (jer je module podatak, u user.js modulu se nalazi)
		},
		dataLoaded() {
			return this.$store.state.dataLoaded
		},
		loaded() {
			return this.$store.state.searchLoaded
		}
	}
}

</script>

<style>

</style>
