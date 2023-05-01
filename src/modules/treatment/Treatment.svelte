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

	import TreatmentImage1 from './treatment1.png?run';
	import TreatmentImage2 from './treatment2.png?run';
</script>

<Section id="treatment">
	<GridBlock id="c1t">
		<ChapterTitle value="Treatment" />
	</GridBlock>
	<GridBlock id="c1d">
		<ChapterDescription>
			Based on the&nbsp;severity of the&nbsp;condition and individual preferences, hyperhidrosis can
			be treated with a&nbsp;variety of&nbsp;methods.
		</ChapterDescription>
	</GridBlock>
	<GridBlock id="l1c">
		<ListItemCounter value={1} />
	</GridBlock>
	<GridBlock id="l1t">
		<ListItemTitle>Lifestyle changes</ListItemTitle>
	</GridBlock>
	<GridBlock id="l1d">
		<ListItemDescription>
			Certain lifestyle changes can help reduce symptoms of hyperhidrosis. Eating a&nbsp;healthy
			diet, exercising regularly, wearing breathable fabrics, and&nbsp;avoiding stressful situations
			or&nbsp;other triggers can help to reduce sweating. These&nbsp;simple changes can make
			a&nbsp;big difference in&nbsp;managing hyperhidrosis.
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="l2c">
		<ListItemCounter value={2} />
	</GridBlock>
	<GridBlock id="l2t">
		<ListItemTitle>Antiperspirants</ListItemTitle>
	</GridBlock>
	<GridBlock id="l2d">
		<ListItemDescription>
			Antiperspirants are commonly used to treat excessive sweating by blocking sweat glands
			and&nbsp;reducing sweat production. Over-the-counter antiperspirants are typically
			the&nbsp;first line of treatment, while&nbsp;prescription-strength antiperspirants are
			available for people with more severe symptoms.
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="l3c">
		<ListItemCounter value={3} />
	</GridBlock>
	<GridBlock id="l3t">
		<ListItemTitle>Medications</ListItemTitle>
	</GridBlock>
	<GridBlock id="l3d">
		<ListItemDescription>
			A&nbsp;wide range of medications can be used to treat hyperhidrosis. Specific&nbsp;medications
			can help to prevent the&nbsp;stimulation of sweat glands and&nbsp;reduce excessive sweating.
			Nonetheless, as&nbsp;some of these medications may have side effects, it&nbsp;is important to
			discuss this option with a&nbsp;healthcare provider.
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="l4c">
		<ListItemCounter value={4} />
	</GridBlock>
	<GridBlock id="l4t">
		<ListItemTitle>Botox injections</ListItemTitle>
	</GridBlock>
	<GridBlock id="l4d">
		<ListItemDescription>
			Botox injections can be used to treat excessive sweating in certain areas by preventing sweat
			gland stimulation. This&nbsp;treatment is typically recommended for&nbsp;people who have not
			found relief with other&nbsp;treatments. The&nbsp;effects can last for several months,
			but&nbsp;it can be expensive and&nbsp;may require multiple applications.
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="l5c">
		<ListItemCounter value={5} />
	</GridBlock>
	<GridBlock id="l5t">
		<ListItemTitle>Surgery</ListItemTitle>
	</GridBlock>
	<GridBlock id="l5d">
		<ListItemDescription>
			Surgery is typically reserved for the&nbsp;most severe cases of excessive sweating that have
			not responded to other treatments. This&nbsp;procedure often involves cutting the nerves that
			stimulate sweat production in the&nbsp;affected area. However, even this option can be
			ineffective and&nbsp;may cause unwanted side&nbsp;effects.
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="im1">
		<StyledImage src={TreatmentImage1} alt="Treatment" />
	</GridBlock>
	<GridBlock id="im2">
		<StyledImage src={TreatmentImage2} alt="Treatment" />
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='treatment']) {
		grid-template-areas:
			'c1t c1t __0 c1d c1d c1d c1d c1d c1d c1d c1d c1d'
			'im1 im1 im1 im1 im1 im1 im1 __1 l1c __2 __2 __2'
			'im1 im1 im1 im1 im1 im1 im1 __1 l1t l1t l1t __3'
			'im1 im1 im1 im1 im1 im1 im1 __1 l1d l1d l1d __3'
			'im1 im1 im1 im1 im1 im1 im1 __4 __4 __4 __4 __4'
			'l2c __5 __5 __5 l3c __6 __6 __6 l4c __7 __7 __7'
			'l2t l2t l2t __8 l3t l3t l3t __9 l4t l4t l4t __z'
			'l2d l2d l2d __8 l3d l3d l3d __9 l4d l4d l4d __z'
			'l5c __y __y __y im2 im2 im2 im2 im2 im2 im2 im2'
			'l5t l5t l5t __x im2 im2 im2 im2 im2 im2 im2 im2'
			'l5d l5d l5d __x im2 im2 im2 im2 im2 im2 im2 im2'
			'__w __w __w __w im2 im2 im2 im2 im2 im2 im2 im2';

		:global(.l2c),
		:global(.l3c),
		:global(.l4c) {
			margin-top: var(--spacing-02);
		}

		:global(.im1),
		:global(.im2) {
			display: flex;
			align-items: center;

			:global(.styled-image) {
				height: fluid(900, 600);
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
				'l3c l3c l3c l3c __0 im1 im1 im1'
				'l3t l3t l3t l3t __0 im1 im1 im1'
				'l3d l3d l3d l3d __0 im1 im1 im1'
				'im2 im2 im2 __1 l4c l4c l4c l4c'
				'im2 im2 im2 __1 l4t l4t l4t l4t'
				'im2 im2 im2 __1 l4d l4d l4d l4d'
				'im2 im2 im2 __1 l5c l5c l5c l5c'
				'im2 im2 im2 __1 l5t l5t l5t l5t'
				'im2 im2 im2 __1 l5d l5d l5d l5d'
				'im2 im2 im2 __1 __2 __2 __2 __2';

			:global(.im1) {
				:global(.styled-image) {
					height: fluid(1200, 1200);
				}
			}

			:global(.im2) {
				:global(.styled-image) {
					height: fluid(800, 450);
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
				'l4t l4t l4t l4c'
				'l4d l4d l4d l4d'
				'l5t l5t l5t l5c'
				'l5d l5d l5d l5d'
				'im1 im1 im1 im1';

			:global(.l2c),
			:global(.l3c),
			:global(.l4c) {
				margin-top: initial;
			}

			:global(.im1) {
				margin-top: var(--spacing-02);

				:global(.styled-image) {
					height: fluid(300, 500);
				}
			}

			:global(.im2) {
				display: none;
			}
		}
	}
</style>
