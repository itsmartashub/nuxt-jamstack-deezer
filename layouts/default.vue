<template>
  <main>
	  <client-only>
			<nuxt />
			<!-- koju god rutu da koristimo, ona se renderuje u nasem <nuxt /> tagu -->
	  </client-only>
  </main>
</template>

<script>
export default {
	async created() {
		if (process.client) {
			await this.$store.dispatch('initialize')
		}
	}
}
</script>