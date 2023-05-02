<script lang="ts">
	import Scroller from '@sveltejs/svelte-scroller';

	import { index, offset, progress } from './scroller.store';

	const TOP = 0;
	const THRESHOLD = 0.5;
	const BOTTOM = 1;
</script>

<Scroller
	top={TOP}
	threshold={THRESHOLD}
	bottom={BOTTOM}
	bind:index={$index}
	bind:offset={$offset}
	bind:progress={$progress}
>
	<div class:svelte-scroller-outer={true} slot="background" />
	<svelte:fragment slot="foreground">
		<slot />
	</svelte:fragment>
</Scroller>

<style lang="scss">
	.svelte-scroller-outer {
		height: 100vh;
	}
</style>
