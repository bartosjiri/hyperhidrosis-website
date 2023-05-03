<script lang="ts">
	import { lerp } from '$util/math';

	export let progress: number;
</script>

<div class:falling-text={true}>
	<span
		style="opacity: {Math.sin(progress * Math.PI) ** 2}; transform: translate(-50%, {progress *
			50}vh;"
	>
		<slot />
	</span>
	<span class:placeholder={true}>
		<slot />
	</span>
</div>

<style lang="scss">
	.falling-text {
		position: relative;
		height: 100%;
		top: -50%;
		display: flex;
		justify-content: center;
		align-items: center;

		span {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			font-size: 3vw;
			line-height: 1;
			text-transform: uppercase;
			white-space: pre;

			@include breakpoint($breakpoint-01) {
				font-size: 4.5vw;
			}

			&.placeholder {
				position: relative;
				top: initial;
				left: initial;
				transform: initial;
				visibility: hidden;
			}
		}
	}
</style>
