<template>
	<div class="song">
	<img :src="song.album.cover_medium" alt="Album cover" class="song-image" height="100px" />
	 
		<div class="song-details">
			<h1 class="song-title">{{ song.title }}</h1>
			<div class="song-details--extra">
				<p class="song-artist">{{ song.artist.name }}</p>
				<p></p>
				<p class="song-length">{{ song.duration }} seconds</p>
			</div>
		</div>

		<div class="song-play-container">
			<a :href="song.link" class="song-player">
				<img src="/play-solid.svg" width="25px" alt="Song play button">
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-song-card',
	props: ['song']
}
</script>

<style>

</style>