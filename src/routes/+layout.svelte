<script lang="ts">
	// COMPONENTS
	import SideBar from '$components/SideBar';
	// LIB-FUNCTIONS
	import { onMount } from 'svelte';
	// FUNCTIONS
	import { initializeThemeStates } from '$stores/themeStates';
	import { initializeMediaStates, updateMedia } from '$stores/mediaStates/utils';
	// STYLES
	import '$styles/index.scss';

	// LIFECYCLES
	onMount(() => {
		initializeThemeStates();
		initializeMediaStates();
	});
</script>

<svelte:window on:resize={updateMedia} />

<div class="wrapper">
	<div class="container">
		<SideBar />
		<div class="page">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.wrapper {
		@include flex-center-start;
		@include box(100%);
		background-color: var(--bg-color-2);
		position: fixed;
		.container {
			width: 100%;
			max-width: 1536px;
			display: flex;
			.page {
				@include md-down-screen {
					height: calc(100vh - 60px);
				}
				width: 100%;
				height: 100vh;
			}
		}
	}
</style>
