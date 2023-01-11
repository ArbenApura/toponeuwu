<script lang="ts">
	// IMPORTED LIB-UTILS
	import { onDestroy } from 'svelte';
	import { createPopper } from '@popperjs/core';
	// IMPORTED UTILS
	import { isDark, toggleTheme } from '$stores/themeStates';
	import { isSignedIn } from '$stores/authStates';

	// PROPS
	export let parentEl: HTMLElement, isOpen: boolean, setIsOpen: (isOpen: boolean) => void;

	// REFS
	let childEl: HTMLDivElement;

	// STATES
	$: items = [
		{
			type: 'link',
			label: 'Profile',
			icon: 'ti-user-circle',
			isVisible: $isSignedIn,
			href: '/account'
		},
		{
			type: 'button',
			label: `Switch theme (${$isDark ? 'Dark' : 'Light'})`,
			icon: $isDark ? 'ti-moon-stars' : 'ti-brightness-2',
			isVisible: true,
			handleClick: toggleTheme
		},
		{
			type: 'button',
			label: 'Report a problem',
			icon: 'ti-message-report',
			isVisible: true,
			handleClick: () => {}
		},
		{
			type: 'button',
			label: 'Sign out',
			icon: 'ti-key-off',
			isVisible: $isSignedIn,
			handleClick: () => {}
		},
		{
			type: 'link',
			label: 'Sign in',
			icon: 'ti-key',
			isVisible: !$isSignedIn,
			href: '/account/sign-in'
		},
		{
			type: 'link',
			label: 'Sign up',
			icon: 'ti-ballpen',
			isVisible: !$isSignedIn,
			href: '/account/sign-up'
		}
	];
	let popperInstance: ReturnType<typeof createPopper>;

	// REACTIVE STATEMENTS
	$: (() => {
		if (!parentEl || !childEl) return;
		if (popperInstance) popperInstance.destroy();
		popperInstance = createPopper(parentEl, childEl, { placement: 'top-start' });
	})();

	// LIFECYCLES
	onDestroy(() => {
		if (popperInstance) popperInstance.destroy();
	});
</script>

{#if isOpen}
	<button class="backdrop" on:click={() => setIsOpen(false)} />
	<div class="wrapper" bind:this={childEl}>
		<div class="menu bg-slate-100 dark:bg-gray-900">
			<div class="menu-inner bg-slate-200 dark:bg-gray-800">
				{#each items as item}
					{#if item.isVisible}
						{#if item.type == 'button'}
							<button
								class="item hover:bg-slate-300 hover:dark:bg-gray-700 border-slate-100 dark:border-gray-900"
								on:click={item.handleClick}
							>
								<p>{item.label}</p>
								{#if item.icon}
									<i class={`ti ${item.icon}`} />
								{/if}
							</button>
						{:else if item.type == 'link'}
							<a
								class="item hover:bg-slate-300 hover:dark:bg-gray-700 border-slate-100 dark:border-gray-900"
								href={item.href}
							>
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
	</div>
{/if}

<style lang="scss">
	@import '$styles';
	.backdrop {
		@apply fixed top-0 left-0 w-full h-full;
	}
	.wrapper {
		@apply py-2 w-full max-w-[250px];
		@include screen-down('sm') {
			@apply py-4;
		}
		@include screen-only('md') {
			@apply min-w-[250px];
		}
		@include screen-up('md') {
			@apply py-0;
		}
		.menu {
			@apply p-2 shadow-sm rounded-sm;
			@include screen-down('sm') {
				@apply translate-x-2 translate-y-4;
			}
			@include screen-up('md') {
				@apply -translate-x-2;
			}
			.menu-inner {
				@apply shadow-sm rounded-sm flex flex-col overflow-hidden;
				.item {
					@apply px-3 py-2 flex-grow text-left border-b;
					@include flex-start-center;
					&:last-child {
						border-bottom: none;
					}
					p {
						@apply flex-grow text-sm text-ellipsis overflow-hidden whitespace-nowrap;
					}
				}
			}
		}
	}
</style>
