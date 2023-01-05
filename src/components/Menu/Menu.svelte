<script lang="ts">
	// IMPORTED LIB-TYPES
	import type { Placement } from '@popperjs/core';
	// IMPORTED TYPES
	import type { MenuItem } from './types';
	// IMPORTED LIB-UTILS
	import { createPopper } from '@popperjs/core';

	// PROPS
	export let parentEl: HTMLElement,
		isOpen: boolean,
		setIsOpen: (isOpen: boolean) => void,
		items: MenuItem[],
		placement: Placement = 'top-start';

	// REFS
	let childEl: HTMLDivElement;

	// REACTIVE STATEMENTS
	$: (() => {
		if (!parentEl || !childEl) return;
		createPopper(parentEl, childEl, { placement });
	})();
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="backdrop" on:click={() => setIsOpen(false)} />
{/if}

<div class="container" bind:this={childEl}>
	<div class="menu" data-is-open={isOpen}>
		{#each items as item}
			{#if item.isVisible}
				{#if item.type == 'button'}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="item" on:click={item.handleClick}>
						<p>{item.label}</p>
						{#if item.icon}
							<i class={`ti ${item.icon}`} />
						{/if}
					</div>
				{:else if item.type == 'link'}
					<a class="item" href={item.href}>
						<p>{item.label}</p>
						{#if item.icon}
							<i class={`ti ${item.icon}`} />
						{/if}
					</a>
				{/if}
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.container {
		@include p(2);
		width: 100%;
		max-width: 250px;
		.menu {
			@include border;
			background-color: var(--bg-color-3);
			box-shadow: 0 0 2px var(--bg-color-1);
			border-radius: shaping(1);
			overflow: hidden;
			&[data-is-open='false'] {
				display: none;
			}
			.item {
				@include border-bottom;
				@include flex-start-center;
				@include px(4);
				@include py(2);
				cursor: pointer;
				&:hover {
					background-color: var(--bg-color-4);
				}
				&:last-child {
					border-bottom: none;
				}
				p {
					@include mr(2);
					font-size: 0.9rem;
					flex-grow: 1;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				.ti {
					font-size: 25px;
				}
			}
		}
	}
</style>
