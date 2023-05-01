<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
	import {
		ChapterTitle,
		ChapterDescription,
		ListItemCounter,
		ListItemTitle,
		ListItemDescription
	} from '$lib/primitives';
</script>

<Section id="coping">
	<GridBlock id="c1t">
		<ChapterTitle value="Coping" />
	</GridBlock>
	<GridBlock id="c1d">
		<ChapterDescription>
			Living with&nbsp;hyperhidrosis can be challenging, but&nbsp;there are several coping
			strategies that can help manage the&nbsp;symptoms.
		</ChapterDescription>
	</GridBlock>
	<GridBlock id="l1c">
		<ListItemCounter value={1} />
	</GridBlock>
	<GridBlock id="l1t">
		<ListItemTitle>Managing symptoms</ListItemTitle>
	</GridBlock>
	<GridBlock id="l1d">
		<ListItemDescription>
			<ul class:list={true}>
				<li>
					Wear breathable clothing made from natural fibers, such&nbsp;as cotton or&nbsp;linen,
					and&nbsp;avoid synthetic fabrics
				</li>
				<li>Use antiperspirants and&nbsp;topical creams as&nbsp;directed</li>
				<li>Plan your agenda to avoid stressful situations</li>
				<li>Use a&nbsp;fan or&nbsp;air conditioning to keep cool</li>
				<li>Keep a&nbsp;towel or handkerchief nearby to wipe away sweat</li>
				<li>Avoid triggers such&nbsp;as spicy foods, caffeine, and&nbsp;alcohol</li>
			</ul>
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="l2c">
		<ListItemCounter value={2} />
	</GridBlock>
	<GridBlock id="l2t">
		<ListItemTitle>Dealing with impact</ListItemTitle>
	</GridBlock>
	<GridBlock id="l2d">
		<ListItemDescription>
			<ul class:list={true}>
				<li>
					Be open and&nbsp;honest with friends and&nbsp;family about the&nbsp;condition and&nbsp;ask
					for their support
				</li>
				<li>
					Seek the&nbsp;help of a&nbsp;therapist or&nbsp;counselor to manage the&nbsp;emotional
					impact of the&nbsp;condition
				</li>
				<li>
					Keep in mind that hyperhidrosis is&nbsp;a&nbsp;medical condition and&nbsp;not
					anyone's&nbsp;fault
				</li>
			</ul>
		</ListItemDescription>
	</GridBlock>
	<GridBlock id="l3c">
		<ListItemCounter value={3} />
	</GridBlock>
	<GridBlock id="l3t">
		<ListItemTitle>Connecting with others</ListItemTitle>
	</GridBlock>
	<GridBlock id="l3d">
		<ListItemDescription>
			<ul class:list={true}>
				<li>
					Find local or&nbsp;online support groups, where&nbsp;people with hyperhidrosis can connect
					and&nbsp;share experience
				</li>
				<li>
					Join a&nbsp;hyperhidrosis advocacy group to help raise awareness and&nbsp;support research
				</li>
			</ul>
		</ListItemDescription>
	</GridBlock>
</Section>

<style lang="scss">
	:global([id='coping']) {
		grid-template-areas:
			'c1d c1d c1d c1d c1d c1d c1d c1d c1d __0 c1t c1t'
			'l1c l1t l1t l1t __1 l1d l1d l1d l1d l1d __2 __2'
			'l2c l2t l2t l2t __3 l2d l2d l2d l2d l2d __4 __4'
			'l3c l3t l3t l3t __5 l3d l3d l3d l3d l3d __6 __6';

		:global(.chapter-title) {
			justify-content: flex-end;
		}

		.list {
			grid-column: 6 / 11;
			padding-left: 0;

			li {
				position: relative;
				color: var(--color-foreground-02);
				padding-left: #{fluid(20, 30)};
				margin-bottom: #{fluid(10, 14)};

				&:before {
					position: absolute;
					left: 0;
					content: '\2022';
				}
			}
		}

		@include breakpoint($breakpoint-01) {
			grid-template-areas:
				'c1t c1t c1t c1t c1t c1t c1t c1t'
				'c1d c1d c1d c1d c1d c1d c1d c1d'
				'l1c l1c l1c l1c l1c l1c l1c __0'
				'l1t l1t l1t l1t l1t l1t l1t __0'
				'l1d l1d l1d l1d l1d l1d l1d __0'
				'l2c l2c l2c l2c l2c l2c l2c __0'
				'l2t l2t l2t l2t l2t l2t l2t __0'
				'l2d l2d l2d l2d l2d l2d l2d __0'
				'l3c l3c l3c l3c l3c l3c l3c __0'
				'l3t l3t l3t l3t l3t l3t l3t __0'
				'l3d l3d l3d l3d l3d l3d l3d __0';
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
				'l3d l3d l3d l3d';
		}
	}
</style>
