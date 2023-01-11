<script lang="ts">
	// IMPORTED LIB-UTILS
	import { page } from '$app/stores';
	// IMPORTED UTILS
	import { isMD } from '$stores/mediaStates';
	// IMPORTED COMPONENTS
	import Tooltip from '$modules/Tooltip.svelte';

	// PROPS
	export let label: string, icon: string, href: string;

	// REFS
	let parentEl: HTMLDivElement;

	// MENU STATES
	let isTooltipOpen = false;
	const setIsTooltipOpen = (isOpen: boolean) => (isTooltipOpen = isOpen);
</script>

<div
	class="item hover:bg-slate-300 dark:hover:bg-gray-700"
	data-is-active={href == '/' ? $page.route.id == href : $page.route.id?.includes(href)}
>
	{#if $isMD}
		<Tooltip
			{...{
				parentEl,
				label,
				isOpen: isTooltipOpen,
				setIsOpen: setIsTooltipOpen,
				placement: 'right'
			}}
		/>
		<div
			class="icon"
			bind:this={parentEl}
			on:mouseenter={() => setIsTooltipOpen(true)}
			on:mouseleave={() => setIsTooltipOpen(false)}
		>
			<i class={`ti ${icon}`} />
		</div>
		<p>{label}</p>
	{:else}
		<div class="icon">
			<i class={`ti ${icon}`} />
		</div>
		<p>{label}</p>
	{/if}
</div>

<style lang="scss">
	@import '$styles';
	.item {
		@include flex-start-center;
		&:hover {
			.icon {
				@apply scale-110;
			}
		}
		&[data-is-active='true'] {
			@apply bg-primary text-slate-100;
		}
		.icon {
			@apply mr-1;
			@include flex-center;
			@include screen-down('sm') {
				width: calc((100vw / 6) - 8px);
				height: 60px;
			}
			@include screen-up('md') {
				@include box(60px);
			}
			min-width: calc((260px / 6) - 8px);
		}
		p {
			@include screen-down('md') {
				@apply hidden text-inherit;
			}
		}
	}
</style>
