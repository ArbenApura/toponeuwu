<script lang="ts">
	// LIB-FUNCTIONS
	import { page } from '$app/stores';
	// ASSETS
	import ProfileOneImage from '$assets/avatars/1.png';
</script>

<a href="/account">
	<div class="wrapper" data-is-active={$page.route.id == '/account'}>
		<div class="container">
			<div class="avatar">
				<img src={ProfileOneImage} alt="Account Avatar" />
			</div>
			<div class="content">
				<div class="info">
					<h6 class="text-name">Arben Apura</h6>
					<p class="text-username">@apura_arben</p>
				</div>
				<i class="ti ti-dots" />
			</div>
		</div>
	</div>
</a>

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
					.text-name {
						font-size: 14px;
					}
					.text-username {
						font-size: 12px;
					}
					h6,
					p {
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
				}
				i {
					font-size: 20px;
				}
			}
		}
	}
</style>
