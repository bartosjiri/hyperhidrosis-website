<script lang="ts">
	import { FxParallax as Img } from '@zerodevx/svelte-img';

	export let src: string;
	export let alt: string;
</script>

<div class:styled-image={true} {...$$restProps}>
	<Img {src} {alt} />
</div>

<style lang="scss">
	.styled-image {
		position: relative;

		:global(img) {
			display: block;
			width: 100%;
			height: max-content;
			object-fit: contain;
			filter: grayscale(1);
			// filter: sepia(1);

			// hard-lignt+grayscale
			// hard-lignt+sepia
			// multiply+grayscale
			// overlay
			// screen
			// soft-light
		}

		&:after {
			position: absolute;
			content: '';
			display: block;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: var(--color-foreground-01);
			mix-blend-mode: hard-light;
			// mix-blend-mode: multiply;
			// mix-blend-mode: overlay;
			// mix-blend-mode: screen;
			// mix-blend-mode: soft-light;
		}
	}
</style>
