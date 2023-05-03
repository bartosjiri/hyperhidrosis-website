<script lang="ts">
	export let progress: number;
</script>

<div class:revealed-text={true}>
	<span style="opacity: {progress};">
		<slot />
	</span>
</div>

<style lang="scss">
	.revealed-text {
		display: flex;
		justify-content: center;
		align-items: center;

		span {
			font-size: 7vw;
			line-height: 1;
			text-transform: uppercase;
			white-space: pre;
		}
	}
</style>
