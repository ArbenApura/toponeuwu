<script lang="ts">
	// IMPORTED ASSETS
	import IconImage from '$assets/icon.png';
	import NavigationItem from './NavigationItem.svelte';
	import AccountItem from './AccountItem.svelte';
	import Filler from './Filler.svelte';

	// STATES
	const items = [
		{ label: 'Home', icon: 'ti-home', href: '/' },
		{ label: 'Tools', icon: 'ti-tools', href: '/tools' },
		{ label: 'Games', icon: 'ti-device-gamepad-2', href: '/games' },
		{ label: 'Forum', icon: 'ti-world', href: '/forum' },
		{ label: 'About', icon: 'ti-question-circle', href: '/about' }
	];
	let sideBarEl: HTMLDivElement;
</script>

<div class="wrapper" bind:this={sideBarEl}>
	<div class="container">
		<a href="/">
			<div class="header">
				<div class="icon">
					<img src={IconImage} alt="Top One Uwu Icon" />
				</div>
				<h3>Top One Uwu</h3>
			</div>
		</a>
		<div class="body">
			<div class="list">
				{#each items as item}
					<a href={item.href}>
						<NavigationItem {...item} />
					</a>
				{/each}
			</div>
		</div>
		<div class="footer">
			<AccountItem />
		</div>
	</div>
</div>

<Filler {sideBarEl} />

<style lang="scss">
	@import '$styles';
	.wrapper {
		@include sm-up-screen {
			@include border-right;
		}
		@include md-only-screen {
			@include lock-width(62px);
		}
		@include md-down-screen {
			@include border-top;
			@include lock-height(60px);
			position: fixed;
			bottom: 0;
		}
		@include md-up-screen {
			max-width: 250px;
		}
		width: 100%;
		background-color: var(--bg-color-1);
		.container {
			@include md-down-screen {
				flex-direction: row;
				justify-content: center;
			}
			width: 100%;
			height: 100vh;
			display: flex;
			flex-direction: column;
			.header {
				@include flex-start-center;
				@include md-down-screen {
					display: none;
				}
				.icon {
					@include box(60px);
					@include flex-center;
					img {
						@include box(35px);
					}
				}
				h3 {
					@include pl(2);
					@include pr(4);
					@include md-only-screen {
						display: none;
					}
				}
			}
			.body {
				@include sm-up-screen {
					flex-grow: 1;
				}
				.list {
					@include md-down-screen {
						flex-direction: row;
					}
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
</style>
