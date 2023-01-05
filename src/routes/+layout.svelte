<script lang="ts">
	// IMPORTED COMPONENTS
	import SideBar from '$layouts/SideBar';
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';
	// IMPORTED UTILS
	import { updateMedia } from '$stores/mediaStates/utils';
	import { initializeStores } from '$stores/index';
	// IMPORTED STYLES
	import '$styles/index.scss';

	// REACTIVE STATEMENTS
	$: {
		// NPROGRESS
		if ($navigating) NProgress.start();
		else NProgress.done();
	}

	// LIFECYCLES
	onMount(() => {
		initializeStores();
		// REMOVE LOADING STATE
		const loadingEl = document.querySelector('.loading');
		if (loadingEl) document.body.removeChild(loadingEl);
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
				overflow: auto;
			}
		}
	}
</style>
