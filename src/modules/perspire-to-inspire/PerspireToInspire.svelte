<script lang="ts">
	import { Section } from '$lib/layout';

	import { index, offset } from '$util/svelte-scroller';
	import { clamp, lerp } from '$util/math';

	export let moduleIndex: number;

	const EFFECT_PROGRESS_LENGTH = 0.25;
	const EFFECT_PROGRESS_START = 0.3;

	let progress = 0;
	let effectProgress = 0;
	$: if ($index === moduleIndex) {
		progress = $offset;
		effectProgress = clamp(
			lerp(progress, EFFECT_PROGRESS_START, EFFECT_PROGRESS_START + EFFECT_PROGRESS_LENGTH),
			0,
			1
		);
	}
</script>

<Section id="perspire-to-inspire">
	<div class:container={true}>
		<div class:dynamic={true}>
			<span class:placeholder={true}>Per</span>
			<span
				class:original={true}
				style="opacity: {1 - effectProgress}; transform: translate(0, {effectProgress * -85}%);"
			>
				Per
			</span>
			<span
				class:updated={true}
				style="opacity: {effectProgress}; transform: translate(0, {(1 - effectProgress) * 85}%);"
			>
				To in
			</span>
		</div>
		<div class:static={true}>
			<span>spire</span>
		</div>
	</div>
</Section>

<style lang="scss">
	:global([id='perspire-to-inspire']) {
		position: relative;
		min-height: 150vh;

		.container {
			position: sticky;
			top: 0;
			height: 100vh;
			grid-column: 1 / calc(var(--grid-column-count) + 1);
			display: flex;
			justify-content: center;
			align-items: center;

			.dynamic,
			.static {
				span {
					display: block;
					font-size: 10vw;
					line-height: 1;
					text-transform: uppercase;
					white-space: pre;
				}
			}

			.dynamic {
				position: relative;

				.placeholder {
					opacity: 0;
					visibility: hidden;
				}

				.original {
					position: absolute;
					top: 0;
					right: 0;
					transform: translate(0, 0);
				}

				.updated {
					position: absolute;
					top: 0;
					right: 0;
					transform: translate(0, 85%);
					opacity: 0;
				}
			}
		}
	}
</style>
