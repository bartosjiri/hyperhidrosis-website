<script lang="ts">
	import LocomotiveScrollProvider from 'svelte-locomotive-scroll';
	import { page } from '$app/stores';

	import 'locomotive-scroll/dist/locomotive-scroll.css';

	// @NOTE: A hack to prevent the is-inview class from being initialized on mount
	let ready = false;
	setTimeout(() => {
		ready = true;
	}, 1);
</script>

{#if ready}
	<LocomotiveScrollProvider
		options={{
			smooth: true
		}}
		watch={[]}
		location={$page.url}
		onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2, disableLerp: false })}
		imageTarget={null}
	>
		<slot />
	</LocomotiveScrollProvider>
{:else}
	<slot />
{/if}
