<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
	import RevealedText from './RevealedText.svelte';

	import { index, offset } from '$util/svelte-scroller';
	import { clamp, lerp } from '$util/math';

	export let moduleIndex: number;

	const EFFECT_PROGRESS_LENGTH = 0.15;
	const WAVES = [
		{
			itemsCount: 3,
			progressStart: 0.225
		},
		{
			itemsCount: 4,
			progressStart: 0.375
		},
		{
			itemsCount: 7,
			progressStart: 0.525
		}
	];

	let progress = 0;
	$: if ($index === moduleIndex) {
		progress = $offset;
	}
</script>

<Section id="drip-by-drip">
	<div class:container={true}>
		<GridBlock name="d11">
			<RevealedText progress={1}>Drip</RevealedText>
		</GridBlock>
		{#each WAVES as { itemsCount, progressStart }, i}
			{#each Array(itemsCount).fill(0) as _, j}
				<GridBlock name={`d${i + 2}${j + 1}`}>
					<RevealedText
						progress={clamp(
							lerp(progress, progressStart, progressStart + EFFECT_PROGRESS_LENGTH),
							0,
							1
						)}
					>
						{#if i == 0}
							by drip
						{:else if i == 1}
							step
						{:else if i == 2}
							by step
						{/if}
					</RevealedText>
				</GridBlock>
			{/each}
		{/each}
	</div>
</Section>

<style lang="scss">
	:global([id='drip-by-drip']) {
		position: relative;
		min-height: 200vh;

		.container {
			position: sticky;
			top: 0;
			height: 100vh;
			grid-column: 1 / calc(var(--grid-column-count) + 1);
			display: grid;
			@include grid-columns(12);
			grid-template-areas:
				'd31 d31 d31 __1 d41 d41 d41 __2 d21 d21 d21 __3'
				'__4 d32 d32 d32 __5 d42 d42 d42 __6 d43 d43 d43'
				'd44 d44 d44 __7 d11 d11 d11 d11 d45 d45 d45 __0'
				'__9 d22 d22 d22 __z d46 d46 d46 __y d33 d33 d33'
				'd47 d47 d47 __x d34 d34 d34 __w d23 d23 d23 __v';

			@include breakpoint($breakpoint-01) {
				@include grid-columns(9);
				grid-template-areas:
					'__0 d31 d31 d31 __1 d21 d21 d21 __2'
					'd32 d32 d32 __3 d41 d41 d41 __4 __4'
					'__5 __5 d42 d42 d42 __6 d33 d33 d33'
					'd44 d44 d44 d11 d11 d11 d45 d45 d45'
					'd22 d22 d22 __7 d43 d43 d43 __8 __8'
					'__9 d46 d46 d46 __z d23 d23 d23 __y'
					'__w __w d34 d34 d34 __v d47 d47 d47';
			}
		}
	}
</style>
