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

<div class="screen">
	<div class="container">
		<SideBar />
		<div class="outer-page">
			<div class="inner-page">
				<slot />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.screen {
		@include flex-center-start;
		@include md-down-screen {
			height: calc(100% - 60px);
		}
		width: 100%;
		background-color: var(--bg-color-2);
		position: fixed;
		overflow: auto;
		.container {
			width: 100%;
			max-width: 1536px;
			display: flex;
			.outer-page {
				@include md-only-screen {
					padding-left: 60px;
				}
				@include md-up-screen {
					padding-left: 250px;
				}
				.inner-page {
					@include md-down-screen {
						min-height: calc(100vh - 60px);
					}
					min-height: 100vh;
				}
			}
		}
	}
</style>
