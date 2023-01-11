<script lang="ts">
	// IMPORTED LIB-UTILS
	import { page } from '$app/stores';
	// IMPORTED UTILS
	import { user, isSignedIn, getAvatar } from '$stores/authStates';
	// IMPORTED COMPONENTS
	import AccountItemMenu from './AccountItemMenu.svelte';

	// REFS
	let parentEl: HTMLDivElement;

	// MENU STATES
	let isMenuOpen = false;
	const setIsMenuOpen = (isOpen: boolean) => (isMenuOpen = isOpen);
</script>

<AccountItemMenu {...{ parentEl, isOpen: isMenuOpen, setIsOpen: setIsMenuOpen }} />

<button
	class="item bg-slate-200 dark:bg-gray-800 hover:bg-slate-300 hover:dark:bg-gray-700"
	data-is-active={$page.route.id?.includes('/account')}
	on:click={() => setIsMenuOpen(!isMenuOpen)}
>
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
</button>

<style lang="scss">
	@import '$styles';
	.item {
		@apply rounded-sm overflow-hidden flex-grow;
		@include flex-start-center;
		&[data-is-active='true'] {
			@apply bg-primary text-slate-100;
		}
		.avatar {
			@include flex-center;
			@include screen-down('sm') {
				width: calc(100vw / 6);
				height: 60px;
			}
			@include screen-up('md') {
				@include box(60px);
			}
			img {
				@apply rounded-full;
				@include box(35px);
			}
		}
		.content {
			@apply flex-grow pl-1 pr-4;
			@include flex-start-center;
			@include screen-down('md') {
				@apply hidden;
			}
			.info {
				@apply flex-grow overflow-hidden;
				h6,
				p {
					@apply text-left text-ellipsis overflow-hidden whitespace-nowrap;
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
</style>
