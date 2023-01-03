<script lang="ts">
	// LIB-FUNCTIONS
	import { page } from '$app/stores';

	// PROPS
	export let label: string, icon: string, href: string;
</script>

<div class="wrapper" data-is-active={$page.route.id == href}>
	<div class="container">
		<div class="icon">
			<i class={`ti ${icon}`} />
		</div>
		<p>{label}</p>
	</div>
</div>

<style lang="scss">
	@import '$styles';
	.wrapper {
		cursor: pointer;
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
				@include box(60px);
				@include flex-center;
				i {
					transition: 0.2s;
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
