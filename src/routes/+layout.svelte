<script lang="ts">
	// COMPONENTS
	import SideBar from '$components/SideBar';
	// LIB-FUNCTIONS
	import { onMount } from 'svelte';
	// FUNCTIONS
	import { initializeThemeStates } from '$stores/themeStates';
	// STYLES
	import '$styles/index.scss';

	// LIFECYCLES
	onMount(() => {
		initializeThemeStates();
	});
</script>

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
		background-color: var(--bg-color-1);
		.container {
			display: flex;
			width: 100%;
			max-width: 1536px;
			min-height: 100vh;
			.page {
				@include md-down-screen {
					height: calc(100vh - 60px);
					max-height: calc(100vh - 60px);
				}
				width: 100%;
				background-color: var(--bg-color-2);
				overflow: auto;
			}
		}
	}
</style>
