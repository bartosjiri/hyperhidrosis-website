<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
</script>

<Section id="hero">
	<GridBlock name="ht1">
		<span>Sweat like</span>
	</GridBlock>
	<GridBlock name="ht2">
		<span>there's no</span>
	</GridBlock>
	<GridBlock name="ht3">
		<span>tomorrow</span>
	</GridBlock>
	<GridBlock name="hs1">
		<span>An educational microsite<br />about hyperhidrosis</span>
	</GridBlock>
	<GridBlock name="vd1">
		<video autoplay loop muted playsinline preload="metadata">
			<source src="/assets/videos/hero-360p.webm" type="video/webm" />
			<source src="/assets/videos/hero-360p.mp4" type="video/mp4" />
		</video>
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='hero']) {
		padding: 4vh 0;
		grid-template-areas:
			'ht1 ht1 ht1 ht1 ht1 ht1 ht1 ht1 vd1 vd1 vd1 vd1'
			'hs1 hs1 hs1 hs1 ht2 ht2 ht2 ht2 ht2 ht2 ht2 ht2'
			'__4 __4 ht3 ht3 ht3 ht3 ht3 ht3 ht3 ht3 __5 __5';

		--hero-font-size: 10vw;

		:global(.ht1),
		:global(.ht2),
		:global(.ht3) {
			display: flex;
			align-items: center;

			span {
				font-size: var(--hero-font-size);
				line-height: 1;
				text-transform: uppercase;
			}
		}

		:global(.ht1) {
			justify-content: flex-end;
			margin-right: 2%;
		}

		:global(.vd1) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			video {
				position: relative;
				top: 2.75%;
				display: block;
				height: calc(var(--hero-font-size) * 0.724);
				object-fit: contain;
			}
		}

		:global(.hs1) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;

			span {
				text-align: right;
				text-transform: uppercase;
				margin-top: 3%;
				margin-right: 5%;
			}
		}

		@include breakpoint($breakpoint-01) {
			grid-template-areas:
				'hs1 hs1 hs1 hs1 hs1 hs1 hs1 hs1'
				'ht1 ht1 ht1 ht1 ht1 vd1 vd1 vd1'
				'ht2 ht2 ht2 ht2 ht2 vd1 vd1 vd1'
				'ht3 ht3 ht3 ht3 ht3 vd1 vd1 vd1'
				'__0 __0 __0 __0 __0 vd1 vd1 vd1';
			--hero-font-size: 8.5vw;

			:global(.ht1) {
				justify-content: initial;
				margin-right: initial;
			}

			:global(.hs1) {
				align-items: flex-start;
				margin-bottom: fluid(10, 40);

				span {
					text-align: left;
					margin-top: initial;
					margin-right: initial;
				}
			}

			:global(.vd1) {
				video {
					display: block;
					top: 0;
					width: 100%;
					height: auto;
					object-fit: contain;
				}
			}
		}

		@include breakpoint($breakpoint-02) {
			grid-template-areas:
				'ht1 ht1 ht1 ht1'
				'ht2 ht2 ht2 ht2'
				'ht3 ht3 ht3 ht3'
				'hs1 hs1 hs1 hs1'
				'vd1 vd1 vd1 vd1';

			--hero-font-size: 12.5vw;

			:global(.hs1) {
				margin-top: fluid(20, 40);
			}

			:global(.vd1) {
				margin-top: fluid(40, 80);

				video {
					display: block;
					width: 100%;
					height: auto;
					object-fit: contain;
				}
			}
		}
	}
</style>
