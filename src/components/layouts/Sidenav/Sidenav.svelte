<script lang="ts">
	// IMPORTED ASSETS
	import IconPNG from '$assets/icon.png';
	// IMPORTED COMPONENTS
	import NavigationItem from './NavigationItem.svelte';
	import AccountItem from './AccountItem.svelte';

	// STATES
	const items = [
		{ label: 'Home', icon: 'ti-home', href: '/' },
		{ label: 'Tools', icon: 'ti-tools', href: '/tools' },
		{ label: 'Games', icon: 'ti-device-gamepad-2', href: '/games' },
		{ label: 'Forum', icon: 'ti-world', href: '/forum' },
		{ label: 'About', icon: 'ti-question-circle', href: '/about' }
	];
</script>

<div class="sidenav bg-slate-100 dark:bg-gray-900">
	<div class="header">
		<div class="icon">
			<img src={IconPNG} alt="Icon" />
		</div>
		<h5>Top <span>One</span> Uwu</h5>
	</div>
	<div class="body">
		<div class="list bg-slate-200 dark:bg-gray-800">
			{#each items as item, index}
				<a href={item.href}>
					<NavigationItem {...item} />
				</a>
				{#if index + 1 !== items.length}
					<hr class="bg-slate-100 dark:bg-gray-900" />
				{/if}
			{/each}
		</div>
	</div>
	<div class="footer">
		<AccountItem />
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.sidenav {
		@apply fixed left-0 z-10 w-full h-full shadow-sm flex flex-col;
		@include screen-down('sm') {
			@apply bottom-0 max-h-[76px] flex-row;
		}
		@include screen-only('md') {
			@apply max-w-[76px];
		}
		@include screen-up('md') {
			@apply top-0;
		}
		@include screen-up('lg') {
			@apply max-w-[250px];
		}
		.header {
			@apply px-2;
			@include flex-start-center;
			@include screen-down('sm') {
				@apply hidden;
			}
			.icon {
				@apply mr-1;
				@include flex-center;
				@include box(60px);
				img {
					@include box(35px);
				}
			}
			h5 {
				@apply font-bold;
				@include screen-down('md') {
					@apply hidden;
				}
				span {
					color: theme('colors.primary');
				}
			}
		}
		.body {
			@apply flex-grow p-2;
			@include screen-down('sm') {
				@apply pr-0;
			}
			@include screen-up('md') {
				@apply pt-0;
			}
			.list {
				@apply rounded-sm flex flex-col overflow-hidden;
				@include screen-down('sm') {
					@apply flex-row;
				}
				hr {
					@apply border-none w-full h-[1px];
					@include screen-down('sm') {
						@apply w-[1px] h-[60px];
					}
				}
			}
		}
		.footer {
			@apply p-2;
			@include flex-start-center;
			@include screen-down('sm') {
				@apply pl-[1px];
			}
		}
	}
</style>
