<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
	import {
		ChapterTitle,
		ChapterDescription,
		ListItemCounter,
		ListItemTitle,
		ListItemDescription,
		StyledImage
	} from '$lib/primitives';

	import CausesImage from './causes1.png?run';
</script>

<Section id="causes">
	<GridBlock name="c1t">
		<ChapterTitle value="Causes" />
	</GridBlock>
	<GridBlock name="c1d">
		<ChapterDescription>
			Hyperhidrosis causes can be complex, but&nbsp;with&nbsp;understanding comes the&nbsp;ability
			to effectively manage the&nbsp;condition.
		</ChapterDescription>
	</GridBlock>
	<GridBlock name="l1c">
		<ListItemCounter value={1} />
	</GridBlock>
	<GridBlock name="l1t">
		<ListItemTitle>Primary hyperhidrosis</ListItemTitle>
	</GridBlock>
	<GridBlock name="l1d">
		<ListItemDescription>
			Primary focal hyperhidrosis is&nbsp;characterized by excessive sweating that is not caused by
			another medical condition or&nbsp;medication. This&nbsp;type of hyperhidrosis typically
			affects specific areas of the&nbsp;body, such as the&nbsp;palms, soles, underarms,
			and&nbsp;face. Primary&nbsp;hyperhidrosis is thought to be inherited and&nbsp;usually begins
			during childhood or&nbsp;adolescence.
		</ListItemDescription>
	</GridBlock>
	<GridBlock name="l2c">
		<ListItemCounter value={2} />
	</GridBlock>
	<GridBlock name="l2t">
		<ListItemTitle>Secondary hyperhidrosis</ListItemTitle>
	</GridBlock>
	<GridBlock name="l2d">
		<ListItemDescription>
			Secondary generalized hyperhidrosis is excessive sweating that occurs as a&nbsp;result of
			an&nbsp;underlying medical condition or as&nbsp;a&nbsp;side effect of&nbsp;medication.
			Unlike&nbsp;primary hyperhidrosis, this type is characterized by excessive sweating all over
			the&nbsp;body, often&nbsp;experienced during sleep. With&nbsp;secondary hyperhidrosis,
			excessive sweating usually starts in&nbsp;adulthood.
		</ListItemDescription>
	</GridBlock>
	<GridBlock name="im1">
		<StyledImage src={CausesImage} alt="Causes" />
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='causes']) {
		grid-template-areas:
			'c1t c1t __0 c1d c1d c1d c1d c1d c1d c1d c1d c1d'
			'l1c __1 __1 __1 im1 im1 im1 im1 __2 l2c __3 __3'
			'l1t l1t l1t __4 im1 im1 im1 im1 __5 l2t l2t l2t'
			'l1d l1d l1d __4 im1 im1 im1 im1 __5 l2d l2d l2d'
			'__6 __6 __6 __6 im1 im1 im1 im1 __7 __7 __7 __7';

		:global(.im1) {
			display: flex;
			align-items: center;

			:global(.styled-image) {
				height: fluid(1050, 700);
			}
		}

		@include breakpoint($breakpoint-01) {
			grid-template-areas:
				'c1t c1t c1t c1t c1t c1t c1t c1t'
				'c1d c1d c1d c1d c1d c1d c1d c1d'
				'l1c l1c l1c l1c __0 im1 im1 im1'
				'l1t l1t l1t l1t __0 im1 im1 im1'
				'l1d l1d l1d l1d __0 im1 im1 im1'
				'l2c l2c l2c l2c __0 im1 im1 im1'
				'l2t l2t l2t l2t __0 im1 im1 im1'
				'l2d l2d l2d l2d __0 im1 im1 im1'
				'__1 __1 __1 __1 __0 im1 im1 im1';
		}

		@include breakpoint($breakpoint-02) {
			grid-template-areas:
				'c1t c1t c1t c1t'
				'c1d c1d c1d c1d'
				'l1t l1t l1t l1c'
				'l1d l1d l1d l1d'
				'l2t l2t l2t l2c'
				'l2d l2d l2d l2d'
				'im1 im1 im1 im1';

			:global(.im1) {
				margin-top: var(--spacing-02);

				:global(.styled-image) {
					height: fluid(300, 500);
				}
			}
		}
	}
</style>
