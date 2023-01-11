<script lang="ts">
	// IMPORTED LIB-UTILS
	import { page } from '$app/stores';

	// PROPS
	export let label: string, icon: string, href: string;
</script>

<div
	class="item hover:bg-slate-300 dark:hover:bg-gray-700"
	data-is-active={href == '/' ? $page.route.id == href : $page.route.id?.includes(href)}
>
	<div class="icon">
		<i class={`ti ${icon}`} />
	</div>
	<p>{label}</p>
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
		}
		p {
			@include screen-down('md') {
				@apply hidden text-inherit;
			}
		}
	}
</style>
