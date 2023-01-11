<script lang="ts">
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';
	// IMPORTED UTILS
	import { isDark } from '$stores/themeStates';
	import { updateMedia } from '$stores/mediaStates';
	import { initializeStores } from '$stores/index';
	// IMPORTED STYLES
	import '$styles/tailwind.scss';
	// IMPORTED COMPONENTS
	import Sidebar from '$layouts/Sidebar';

	// REACTIVE STATEMENTS
	$: {
		// NPROGRESS
		if ($navigating) NProgress.start();
		else NProgress.done();
	}
	$: try {
		// OBSERVE THEME
		document.body.setAttribute(
			'class',
			$isDark ? 'bg-gray-800 text-slate-100' : 'bg-slate-200 text-dark-900'
		);
	} catch {}

	// LIFECYCLES
	onMount(() => {
		initializeStores();
		// REMOVE LOADING STATE
		const loadingEl = document.querySelector('.loading');
		if (loadingEl) document.body.removeChild(loadingEl);
	});
</script>

<svelte:window on:resize={updateMedia} />

<main class={`${$isDark && 'dark'}`}>
	<Sidebar />
	<div class="screen">
		<div class="page">
			<slot />
		</div>
	</div>
</main>

<style lang="scss">
	@import '$styles';
	.screen {
		@apply w-full h-full fixed overflow-y-auto min-w-[260px];
		@include screen-down('sm') {
			height: calc(100% - 76px);
		}
		@include screen-only('md') {
			@apply pl-[76px];
		}
		@include screen-up('lg') {
			@apply pl-[250px];
		}
		.page {
			@apply w-full max-w-[1280px] mx-auto;
		}
	}
</style>
