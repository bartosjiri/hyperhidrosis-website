<script lang="ts">
	export let progress: number;
</script>

<div class:revealed-text={true}>
	<span style="opacity: {progress}; transform: translate(-50%, {(progress - 1) * 25}%);">
		<slot />
	</span>
	<span class:placeholder={true}>
		<slot />
	</span>
</div>

<style lang="scss">
	.revealed-text {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		span {
			position: absolute;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 7vw;
			line-height: 1;
			text-transform: uppercase;
			white-space: pre;

			@include breakpoint($breakpoint-01) {
				font-size: 8.5vw;
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
