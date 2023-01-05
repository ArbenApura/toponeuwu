<script lang="ts">
	// IMPORTED LIB-FUNCTIONS
	import { createPopper } from '@popperjs/core';
	// IMPORTED FUNCTIONS
	import { mode, toggleTheme } from '$stores/themeStates';

	// PROPS
	export let parentEl: HTMLDivElement, isOpen: boolean, toggleMenu: () => void;

	// REFS
	let childEl: HTMLDivElement;

	// SATES
	$: items = [
		{
			type: 'link',
			label: 'Profile',
			icon: 'ti-user-circle',
			isVisible: true,
			href: '/account'
		},
		{
			type: 'button',
			label: `Switch theme (${$mode})`,
			icon: $mode == 'light' ? 'ti-brightness-2' : 'ti-moon-stars',
			isVisible: true,
			handleClick: toggleTheme
		},
		{
			type: 'button',
			label: 'Sign out',
			icon: 'ti-key-off',
			isVisible: true,
			handleClick: () => {}
		},
		{
			type: 'link',
			label: 'Sign in',
			icon: 'ti-key',
			isVisible: true,
			href: '/account/sign-in'
		},
		{
			type: 'link',
			label: 'Sign up',
			icon: 'ti-user-plus',
			isVisible: true,
			href: '/account/sign-up'
		}
	];

	// REACTIVE STATEMENTS
	$: (() => {
		if (!parentEl || !childEl) return;
		createPopper(parentEl, childEl, { placement: 'top-start' });
	})();
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="backdrop" on:click={toggleMenu} />
{/if}

<div class="container" bind:this={childEl}>
	<div class="menu" data-is-open={isOpen}>
		{#each items as item}
			{#if item.isVisible}
				{#if item.type == 'button'}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="item" on:click={item.handleClick}>
						<p>{item.label}</p>
						<i class={`ti ${item.icon}`} />
					</div>
				{:else if item.type == 'link'}
					<a class="item" href={item.href}>
						<p>{item.label}</p>
						<i class={`ti ${item.icon}`} />
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
					font-size: 0.9rem;
					flex-grow: 1;
				}
				.ti {
					font-size: 25px;
				}
			}
		}
	}
</style>
