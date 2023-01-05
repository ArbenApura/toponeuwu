<script lang="ts">
	// IMPORTED TYPES
	import type { MenuItem } from '$components/Menu';
	// IMPORTED LIB-UTILS
	import { page } from '$app/stores';
	// IMPORTED UTILS
	import { mode, toggleTheme } from '$stores/themeStates';
	import { user, isSignedIn, getAvatar } from '$stores/authStates';
	// IMPORTED COMPONENTS
	import Menu from '$components/Menu';

	// REFS
	let parentEl: HTMLDivElement;

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
			label: `Switch theme (${$mode})`,
			icon: $mode == 'light' ? 'ti-brightness-2' : 'ti-moon-stars',
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
	] as MenuItem[];

	// MENU STATES
	let isMenuOpen = false;
	const setIsMenuOpen = (isOpen: boolean) => (isMenuOpen = isOpen);
</script>

<Menu {...{ parentEl, items, isOpen: isMenuOpen, setIsOpen: setIsMenuOpen }} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="wrapper"
	data-is-active={$page.route.id?.includes('/account')}
	on:click={() => setIsMenuOpen(!isMenuOpen)}
>
	<div class="container">
		<div class="avatar" bind:this={parentEl}>
			<img src={getAvatar($user.avatar)} alt="Account Avatar" />
		</div>
		<div class="content">
			<div class="info">
				{#if $isSignedIn}
					<h6>{$user.name}</h6>
					<p>{$user.username}</p>
				{:else}
					<h6>Not Signed In</h6>
				{/if}
			</div>
			<i class="ti ti-dots" />
		</div>
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.wrapper {
		@include xl-up-screen {
			border-top-left-radius: shaping(6);
			border-bottom-left-radius: shaping(6);
		}
		cursor: pointer;
		&:hover {
			background-color: var(--bg-color-2);
			img {
				transform: scale(1.05);
			}
		}
		&[data-is-active='true'] {
			background-color: $primary-color;
			* {
				color: white;
			}
		}
		.container {
			@include flex-start-center;
			.avatar {
				@include flex-center;
				@include md-down-screen {
					width: calc(100vw / 6);
					height: 60px;
				}
				@include sm-up-screen {
					@include box(60px);
				}
				img {
					@include box(40px);
					transition: 0.2s;
				}
			}
			.content {
				@include flex-start-center;
				@include pl(2);
				@include pr(4);
				@include lg-down-screen {
					display: none;
				}
				flex-grow: 1;
				.info {
					flex-grow: 1;
					overflow: hidden;
					h6,
					p {
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					h6 {
						font-size: 14px;
					}
					p {
						font-size: 12px;
					}
				}
				i {
					font-size: 20px;
				}
			}
		}
	}
</style>
