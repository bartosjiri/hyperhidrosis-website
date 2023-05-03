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
	let listRef: HTMLElement;
	let isStatic = false;

	const cloneList = () => {
		const cloneElement = listRef.cloneNode(true) as HTMLElement;
		cloneElement.classList.add('clone');
		containerRef.appendChild(cloneElement);
	};

	const setLayout = () => {
		if (!$navigationScrollInstance || !listRef || typeof window === 'undefined') return;

		if (listRef.clientHeight < window.innerHeight) {
			isStatic = true;
			if (!$navigationScrollInstance.isStopped) {
				$navigationScrollInstance.scrollTo('top', { immediate: true }); // @TODO: Not working?
				stopNavigationScroll();
			}
		} else {
			isStatic = false;
			if ($navigationScrollInstance.isStopped) startNavigationScroll();
		}
	};

	onMount(() => {
		if (!containerRef || !listRef) return;
		cloneList();
		initNavigationScrollInstance({
			wrapper: containerRef,
			content: listRef,
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
	<ul class:list={true} bind:this={listRef}>
		{#each NAVIGATION_ITEMS as { label, sectionId }, index}
			<NavigationItem counter={index + 1} {label} {sectionId} />
		{/each}
	</ul>
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
