<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import NavigationItem from './NavigationItem.svelte';

	import {
		navigationOpen,
		initInstance as initNavigationScrollInstance,
		scrollInstance as navigationScrollInstance,
		startInstance as startNavigationScroll,
		stopInstance as stopNavigationScroll
	} from './navigationHandler';
	import { startInstance as startBodyScroll, stopInstance as stopBodyScroll } from '$util/lenis';

	const NAVIGATION_ITEMS = [
		{
			label: 'Intro',
			sectionId: 'intro'
		},
		{
			label: 'Causes',
			sectionId: 'causes'
		},
		{
			label: 'Diagnosis',
			sectionId: 'diagnosis'
		},
		{
			label: 'Treatment',
			sectionId: 'treatment'
		},
		{
			label: 'Coping',
			sectionId: 'coping'
		},
		{
			label: 'Share',
			sectionId: 'about'
		}
	];

	let containerRef: HTMLElement;
	let listRefs: HTMLElement[] = [];
	let isStatic = false;

	const setLayout = () => {
		if (!$navigationScrollInstance || !listRefs.length || typeof window === 'undefined') return;

		if (listRefs[0].clientHeight < window.innerHeight) {
			isStatic = true;
			if (!$navigationScrollInstance.isStopped) {
				stopNavigationScroll();
			}
		} else {
			isStatic = false;
			if ($navigationScrollInstance.isStopped) startNavigationScroll();
			$navigationScrollInstance.scrollTo('top', { immediate: true });
		}
	};

	onMount(() => {
		if (!containerRef || !listRefs.length) return;
		initNavigationScrollInstance({
			wrapper: containerRef,
			content: listRefs[0],
			infinite: true
		});
	});

	$: if ($navigationOpen) {
		setLayout();
		stopBodyScroll();
	}
	$: if (!$navigationOpen) {
		stopNavigationScroll();
		startBodyScroll();
	}

	onDestroy(() => {
		if ($navigationScrollInstance) $navigationScrollInstance.destroy();
	});
</script>

<svelte:window on:resize={setLayout} />
<nav
	bind:this={containerRef}
	class:navigation={true}
	class:lenis-hide-scrollbar={true}
	class:is-open={$navigationOpen}
	class:is-static={isStatic}
>
	{#each Array.from({ length: 2 }) as _, listIndex}
		<ul class:list={true} class:clone={listIndex === 1} bind:this={listRefs[listIndex]}>
			{#each NAVIGATION_ITEMS as { label, sectionId }, itemIndex}
				<NavigationItem counter={itemIndex + 1} {label} {sectionId} />
			{/each}
		</ul>
	{/each}
</nav>

<style lang="scss">
	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 0;
		background: var(--color-foreground-01);
		z-index: 1000;
		overflow-y: scroll;
		transition: height 0.3s ease-in-out;

		&.is-open {
			height: 100vh;
		}

		&.is-static {
			display: flex;
			flex-direction: column;
			justify-content: center;

			:global(.clone) {
				display: none;
			}
		}

		.list {
			padding: 0 var(--spacing-wrapper);
		}

		:global(.clone) {
			height: 100vh;
			overflow: hidden;
		}
	}
</style>
