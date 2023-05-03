<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
	import RevealedText from './RevealedText.svelte';

	import { index, offset } from '$util/svelte-scroller';
	import { clamp, lerp } from '$util/math';

	export let moduleIndex: number;

	const EFFECT_PROGRESS_LENGTH = 0.065;
	const EFFECT_PROGRESS_START = 0.185;
	const LINES_COUNT = 3;

	let progress = 0;
	$: if ($index === moduleIndex) {
		progress = $offset;
	}
</script>

<Section id="sweat-rinse-repeat">
	<div class:container={true}>
		{#each { length: LINES_COUNT } as _, i}
			<GridBlock name={`l${i + 1}1`}>
				<RevealedText
					progress={clamp(
						lerp(
							progress,
							EFFECT_PROGRESS_START + i * LINES_COUNT * EFFECT_PROGRESS_LENGTH,
							EFFECT_PROGRESS_START + (i * LINES_COUNT + 1) * EFFECT_PROGRESS_LENGTH
						),
						i == 0 ? 1 : 0,
						1
					)}
				>
					Sweat
				</RevealedText>
			</GridBlock>
			<GridBlock name={`l${i + 1}2`}>
				<RevealedText
					progress={clamp(
						lerp(
							progress,
							EFFECT_PROGRESS_START + (i * LINES_COUNT + 1) * EFFECT_PROGRESS_LENGTH,
							EFFECT_PROGRESS_START + (i * LINES_COUNT + 2) * EFFECT_PROGRESS_LENGTH
						),
						0,
						1
					)}
				>
					Rinse
				</RevealedText>
			</GridBlock>
			<GridBlock name={`l${i + 1}3`}>
				<RevealedText
					progress={clamp(
						lerp(
							progress,
							EFFECT_PROGRESS_START + (i * LINES_COUNT + 2) * EFFECT_PROGRESS_LENGTH,
							EFFECT_PROGRESS_START + (i * LINES_COUNT + 3) * EFFECT_PROGRESS_LENGTH
						),
						0,
						1
					)}
				>
					Repeat
				</RevealedText>
			</GridBlock>
		{/each}
	</div>
</Section>

<style lang="scss">
	:global([id='sweat-rinse-repeat']) {
		position: relative;
		min-height: 200vh;

		.container {
			position: sticky;
			top: 0;
			height: fit-content;
			grid-column: 1 / calc(var(--grid-column-count) + 1);
			display: grid;
			@include grid-columns(12);
			grid-template-areas:
				'l11 l11 l11 l11 l12 l12 l12 l12 l13 l13 l13 l13'
				'l21 l21 l21 l21 l22 l22 l22 l22 l23 l23 l23 l23'
				'l31 l31 l31 l31 l32 l32 l32 l32 l33 l33 l33 l33';

			:global(.l11),
			:global(.l12),
			:global(.l13) {
				padding-top: calc(50vh - 33%);
			}
		}
	}
</style>
