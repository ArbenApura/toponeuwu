<script lang="ts">
	// PROPS
	export let sideBarEl: HTMLDivElement;

	// REFS
	let filler: HTMLDivElement;

	// REACTIVE STATEMENTS
	$: {
		sideBarEl;
		handleResize();
	}

	// UTILS
	const handleResize = () => {
		if (!filler || !sideBarEl) return;
		filler.style.width = sideBarEl.getBoundingClientRect().x + 'px';
	};
</script>

<div class="filler" bind:this={filler} />

<svelte:window on:resize={handleResize} />

<style lang="scss">
	@import '$styles';
	.filler {
		@include md-down-screen {
			display: none;
		}
		background-color: var(--bg-color-1);
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
	}
</style>
