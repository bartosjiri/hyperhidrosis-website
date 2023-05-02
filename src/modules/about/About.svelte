<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';

	import { META_DOMAIN } from '$util/meta';

	import TwitterIcon from './TwitterIcon.svg?raw';
	import FacebookIcon from './FacebookIcon.svg?raw';
	import LinkedinIcon from './LinkedinIcon.svg?raw';
</script>

<Section id="about">
	<GridBlock name="ad1">
		<span>Hyperhidrosis</span>
		<span>help+</span>
	</GridBlock>
	<GridBlock name="sb1">
		<span>Share with the world</span>
		<div class:providers={true}>
			<a
				href="https://twitter.com/intent/tweet?url={META_DOMAIN}"
				target="_blank"
				rel="noopener noreferrer"
			>
				{@html TwitterIcon}
			</a>
			<a
				href="https://www.facebook.com/sharer/sharer.php?u={META_DOMAIN}"
				target="_blank"
				rel="noopener noreferrer"
			>
				{@html FacebookIcon}
			</a>
			<a
				href="https://www.linkedin.com/sharing/share-offsite/?url={META_DOMAIN}"
				target="_blank"
				rel="noopener noreferrer"
			>
				{@html LinkedinIcon}
			</a>
		</div>
	</GridBlock>
	<GridBlock name="sc1">
		<a href="https://twitter.com/bartosjiri_" target="_blank" rel="noopener noreferrer">
			<span>A website by bartosjiri</span>
		</a>
		<a
			href="https://github.com/bartosjiri/hyperhidrosis-website"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span>Source code</span>
		</a>
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='about']) {
		--footer-font-size: var(--typography-size-01);

		grid-template-areas: 'ad1 ad1 ad1 ad1 sb1 sb1 sb1 sb1 sc1 sc1 sc1 sc1 ';
		margin-bottom: calc(var(--spacing-02) / 2) !important;

		@include breakpoint($breakpoint-01) {
			grid-template-areas:
				'ad1 ad1 ad1 ad1 ad1 ad1 ad1 ad1'
				'sb1 sb1 sb1 sb1 sb1 sb1 sb1 sb1'
				'sc1 sc1 sc1 sc1 sc1 sc1 sc1 sc1';
			row-gap: var(--spacing-01);
			--footer-font-size: calc(var(--typography-size-01) * 1.2);
		}

		@include breakpoint($breakpoint-02) {
			grid-template-areas:
				'ad1 ad1 ad1 ad1'
				'sb1 sb1 sb1 sb1'
				'sc1 sc1 sc1 sc1';
		}

		a,
		span {
			font-size: var(--footer-font-size);
			line-height: 1;
			text-transform: uppercase;
			color: var(--color-foreground-01);
			fill: var(--color-foreground-01);
		}

		:global(.ad1) {
			display: flex;
			flex-direction: column;

			@include breakpoint($breakpoint-01) {
				align-items: center;
			}
		}

		:global(.sb1) {
			display: flex;
			flex-direction: column;
			align-items: center;

			.providers {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				column-gap: fluid(4, 8);

				a {
					padding: 0 4px;

					:global(svg) {
						height: var(--footer-font-size);
						width: var(--footer-font-size);
					}
				}
			}
		}

		:global(.sc1) {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			@include breakpoint($breakpoint-01) {
				align-items: flex-start;
				align-items: center;
			}
		}
	}
</style>
