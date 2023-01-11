<script lang="ts">
	// IMPORTED LIB-TYPES
	import type { Placement } from '@popperjs/core';
	// IMPORTED LIB-UTILS
	import { onDestroy } from 'svelte';
	import { createPopper } from '@popperjs/core';

	// PROPS
	export let parentEl: HTMLElement,
		isOpen: boolean,
		setIsOpen: (isOpen: boolean) => void,
		placement: Placement,
		label: string;

	// REFS
	let childEl: HTMLDivElement;

	// STATES
	let popperInstance: ReturnType<typeof createPopper>;

	// REACTIVE STATEMENTS
	$: (() => {
		if (!parentEl || !childEl) return;
		if (popperInstance) popperInstance.destroy();
		popperInstance = createPopper(parentEl, childEl, { placement });
	})();

	// LIFECYCLES
	onDestroy(() => {
		if (popperInstance) popperInstance.destroy();
	});
</script>

{#if isOpen}
	<button class="backdrop" on:click={() => setIsOpen(false)} />
	<div class="tooltip" bind:this={childEl}>
		<div class="arrow before:bg-slate-100 before:dark:bg-gray-900" data-popper-arrow />
		<div class="tooltip-inner bg-slate-100 dark:bg-gray-900 text-gray-900 dark:text-slate-100">
			<p>{label}</p>
		</div>
	</div>
{/if}

<style lang="scss">
	@import '$styles';
	.backdrop {
		@apply fixed top-0 left-0 w-full h-full;
	}
	.tooltip {
		@apply p-2;
		&[data-popper-placement^='top'] > .arrow {
			@apply -bottom-1;
		}
		&[data-popper-placement^='bottom'] > .arrow {
			@apply -top-1;
		}
		&[data-popper-placement^='left'] > .arrow {
			@apply -right-1;
		}
		&[data-popper-placement^='right'] > .arrow {
			@apply -left-1;
		}
		.arrow,
		.arrow::before {
			@include box(16px);
			position: absolute;
			z-index: -1;
		}
		.arrow::before {
			content: '';
			transform: rotate(45deg);
		}
		.tooltip-inner {
			@apply rounded-sm shadow-sm px-2 py-1;
			p {
				@apply text-sm;
			}
		}
	}
</style>
