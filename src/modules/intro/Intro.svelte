<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
	import { ChapterTitle, ChapterDescription, ListItemDescription } from '$lib/primitives';
</script>

<Section id="intro">
	<GridBlock name="c1t">
		<ChapterTitle value="Intro" />
	</GridBlock>
	<GridBlock name="c1d">
		<ChapterDescription>
			Sweat serves as the&nbsp;body's coolant and&nbsp;is essential to&nbsp;human survival. However,
			overactive sweat glands can produce more sweat than is&nbsp;necessary.
		</ChapterDescription>
	</GridBlock>
	<GridBlock name="l1d">
		<ListItemDescription>
			Hyperhidrosis is a&nbsp;medical condition characterized by excessive sweating beyond what is
			necessary to regulate body temperature. The&nbsp;condition affects an&nbsp;estimated 3% of
			the&nbsp;population and&nbsp;can significantly impact a&nbsp;person's quality of life, often
			referred to as a&nbsp;„silent handicap”.
		</ListItemDescription>
	</GridBlock>
	<GridBlock name="l2d">
		<ListItemDescription>
			Symptoms of hyperhidrosis include excessive sweating on&nbsp;the&nbsp;palms, soles of
			the&nbsp;feet, underarms, and/or&nbsp;face. It&nbsp;can occur even when the body is at rest
			and&nbsp;is not related to physical activity or&nbsp;heat. Hyperhidrosis&nbsp;can also lead to
			social anxiety and embarrassment, making&nbsp;it difficult to participate in daily activities.
		</ListItemDescription>
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='intro']) {
		grid-template-areas:
			'c1d c1d c1d c1d c1d c1d c1d c1d c1d __0 c1t c1t'
			'l1d l1d l1d l1d l1d l1d l2d l2d l2d l2d l2d l2d';

		:global(.chapter-title) {
			justify-content: flex-end;
		}

		@include breakpoint($breakpoint-01) {
			grid-template-areas:
				'c1t c1t c1t c1t c1t c1t c1t c1t'
				'c1d c1d c1d c1d c1d c1d c1d c1d'
				'l1d l1d l1d l1d l1d l1d l1d l1d'
				'l2d l2d l2d l2d l2d l2d l2d l2d';
		}

		@include breakpoint($breakpoint-02) {
			grid-template-areas:
				'c1t c1t c1t c1t'
				'c1d c1d c1d c1d'
				'l1d l1d l1d l1d'
				'l2d l2d l2d l2d';
		}
	}
</style>
