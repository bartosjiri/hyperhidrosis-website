<script lang="ts">
	import { Section, GridBlock } from '$lib/layout';
	import FallingText from './FallingText.svelte';

	import { index, offset } from '$util/svelte-scroller';
	import { clamp, lerp } from '$util/math';

	export let moduleIndex: number;

	const EFFECT_PROGRESS_LENGTH = 0.0575;
	const EFFECT_PROGRESS_START = 0.15;

	let progress = 0;
	$: if ($index === moduleIndex) {
		progress = $offset;
	}
</script>

<Section id="sweat-rain">
	<div class:container={true}>
		<GridBlock name="sr1">
			<span>Don't let sweat rain<br />on your parade</span>
		</GridBlock>
		{#each { length: 10 } as _, i}
			<GridBlock name={`ft${i + 1}`}>
				<FallingText
					progress={clamp(
						lerp(
							progress,
							EFFECT_PROGRESS_START + EFFECT_PROGRESS_LENGTH * i,
							EFFECT_PROGRESS_START + EFFECT_PROGRESS_LENGTH * (i + 3)
						),
						0,
						1
					)}
				>
					sweat
				</FallingText>
			</GridBlock>
		{/each}
	</div>
</Section>

<style lang="scss">
	:global([id='sweat-rain']) {
		position: relative;
		min-height: 300vh;

		.container {
			position: sticky;
			top: 0;
			height: fit-content;
			grid-column: 1 / calc(var(--grid-column-count) + 1);
			display: grid;
			@include grid-columns(12);
			grid-template-areas:
				'sr1 sr1 sr1 sr1 sr1 sr1 sr1 sr1 sr1 sr1 sr1 sr1'
				'__0 ft7 ft3 ft10 ft6 ft1 ft4 ft8 ft2 ft5 ft9 __1';

			:global(.sr1) {
				padding-top: 25vh;

				:global(span) {
					display: flex;
					justify-content: center;
					font-size: 6vw;
					line-height: 1;
					text-align: center;
					text-transform: uppercase;
					white-space: pre;

					@include breakpoint($breakpoint-01) {
						font-size: 7.5vw;
					}
				}
			}
		}
	}
</style>
