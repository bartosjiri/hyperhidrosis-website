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
		display: flex;

		:global(img) {
			filter: grayscale(1);
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
		}
	}
</style>
