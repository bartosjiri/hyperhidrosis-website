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

	import DiagnosisImage from './diagnosis1.png?run';
</script>

<Section id="diagnosis">
	<GridBlock name="c1t">
		<ChapterTitle value="Diagnosis" />
	</GridBlock>
	<GridBlock name="c1d">
		<ChapterDescription>
			Healthcare professionals have a&nbsp;wide range of options for examining excessive sweating
			and&nbsp;diagnosing hyperhidrosis.
		</ChapterDescription>
	</GridBlock>
	<GridBlock name="l1c">
		<ListItemCounter value={1} />
	</GridBlock>
	<GridBlock name="l1t">
		<ListItemTitle>Physical examination</ListItemTitle>
	</GridBlock>
	<GridBlock name="l1d">
		<ListItemDescription>
			During a&nbsp;physical examination, a&nbsp;healthcare professional will examine
			the&nbsp;affected areas and ask about the person's medical history, including any medications
			they are taking. This&nbsp;can help to identify any&nbsp;underlying causes
			or&nbsp;contributing factors that may be causing the&nbsp;excessive sweating.
		</ListItemDescription>
	</GridBlock>
	<GridBlock name="l2c">
		<ListItemCounter value={2} />
	</GridBlock>
	<GridBlock name="l2t">
		<ListItemTitle>Sweat test</ListItemTitle>
	</GridBlock>
	<GridBlock name="l2d">
		<ListItemDescription>
			A&nbsp;sweat test involves coating the&nbsp;skin with a&nbsp;powder that changes color when
			wet or&nbsp;placing electrodes on the&nbsp;skin to stimulate the&nbsp;sweat glands
			and&nbsp;measure the&nbsp;amount of sweat produced. This&nbsp;allows the&nbsp;healthcare
			professional to determine the&nbsp;severity of the&nbsp;sweating and whether it is excessive.
		</ListItemDescription>
	</GridBlock>
	<GridBlock name="l3c">
		<ListItemCounter value={3} />
	</GridBlock>
	<GridBlock name="l3t">
		<ListItemTitle>Imaging and other diagnostic tests</ListItemTitle>
	</GridBlock>
	<GridBlock name="l3d">
		<ListItemDescription>
			In some cases, additional diagnostic tests such as imaging tests or&nbsp;blood tests may be
			used to rule out underlying medical conditions that could be causing the&nbsp;hyperhidrosis.
			These&nbsp;tests can provide a&nbsp;more detailed look at the&nbsp;body and help to identify
			any&nbsp;potential issues that need to be addressed.
		</ListItemDescription>
	</GridBlock>
	<GridBlock name="im1">
		<StyledImage src={DiagnosisImage} alt="Diagnosis" />
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='diagnosis']) {
		grid-template-areas:
			'c1d c1d c1d c1d c1d c1d c1d c1d c1d __0 c1t c1t'
			'l1c l1t l1t l1t l1t __1 im1 im1 im1 im1 im1 im1'
			'__2 l1d l1d l1d l1d __1 im1 im1 im1 im1 im1 im1'
			'l2c l2t l2t l2t l2t __3 im1 im1 im1 im1 im1 im1'
			'__4 l2d l2d l2d l2d __3 im1 im1 im1 im1 im1 im1'
			'l3c l3t l3t l3t l3t __5 im1 im1 im1 im1 im1 im1'
			'__6 l3d l3d l3d l3d __5 im1 im1 im1 im1 im1 im1'
			'__7 __7 __7 __7 __7 __7 im1 im1 im1 im1 im1 im1';

		:global(.chapter-title) {
			justify-content: flex-end;
		}

		:global(.im1) {
			display: flex;
			align-items: center;

			:global(.styled-image) {
				height: fluid(1750, 1350);
			}
		}

		@include breakpoint($breakpoint-01) {
			grid-template-areas:
				'c1t c1t c1t c1t c1t c1t c1t c1t'
				'c1d c1d c1d c1d c1d c1d c1d c1d'
				'im1 im1 im1 __0 l1c l1c l1c l1c'
				'im1 im1 im1 __0 l1t l1t l1t l1t'
				'im1 im1 im1 __0 l1d l1d l1d l1d'
				'im1 im1 im1 __0 l2c l2c l2c l2c'
				'im1 im1 im1 __0 l2t l2t l2t l2t'
				'im1 im1 im1 __0 l2d l2d l2d l2d'
				'im1 im1 im1 __0 l3c l3c l3c l3c'
				'im1 im1 im1 __0 l3t l3t l3t l3t'
				'im1 im1 im1 __0 l3d l3d l3d l3d'
				'im1 im1 im1 __0 __1 __1 __1 __1';

			:global(.im1) {
				:global(.styled-image) {
					height: fluid(1500, 1200);
				}
			}
		}

		@include breakpoint($breakpoint-02) {
			grid-template-areas:
				'c1t c1t c1t c1t'
				'c1d c1d c1d c1d'
				'l1t l1t l1t l1c'
				'l1d l1d l1d l1d'
				'l2t l2t l2t l2c'
				'l2d l2d l2d l2d'
				'l3t l3t l3t l3c'
				'l3d l3d l3d l3d'
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
