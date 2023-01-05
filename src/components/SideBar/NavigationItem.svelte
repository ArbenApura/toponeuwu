<script lang="ts">
	// IMPORTED LIB-FUNCTIONS
	import { tooltip } from '@svelte-plugins/tooltips';
	import { page } from '$app/stores';
	// IMPORTED FUNCTIONS
	import { isMD } from '$stores/mediaStates';

	// PROPS
	export let label: string, icon: string, href: string;
</script>

<div
	class="wrapper"
	data-is-active={href == '/' ? $page.route.id == href : $page.route.id?.includes(href)}
>
	<div class="container">
		{#if $isMD}
			<div class="icon" use:tooltip={{ content: label, position: 'right' }}>
				<i class={`ti ${icon}`} />
			</div>
		{:else}
			<div class="icon">
				<i class={`ti ${icon}`} />
			</div>
		{/if}
		<p>{label}</p>
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.wrapper {
		@include xl-up-screen {
			border-top-left-radius: shaping(6);
			border-bottom-left-radius: shaping(6);
		}
		&:hover {
			background-color: var(--bg-color-2);
			i {
				transform: scale(1.1);
			}
		}
		&[data-is-active='true'] {
			background-color: $primary-color;
		}
		.container {
			@include flex-start-center;
			.icon {
				@include flex-center;
				@include md-down-screen {
					width: calc(100vw / 6);
					height: 60px;
				}
				@include sm-up-screen {
					@include box(60px);
				}
				i {
					transition: transform 0.2s;
				}
			}
			p {
				@include lg-down-screen {
					display: none;
				}
				@include pl(2);
				@include pr(4);
			}
		}
	}
</style>
