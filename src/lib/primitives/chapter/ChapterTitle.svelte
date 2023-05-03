<script lang="ts">
	export let value: string;
</script>

<div class:chapter-title={true} {...$$restProps}>
	<h2>({value})</h2>
</div>

<style lang="scss">
	.chapter-title {
		display: flex;
		align-items: flex-end;
		margin-bottom: var(--spacing-01);

		@include breakpoint($breakpoint-01) {
			justify-content: flex-start;
		}

		h2 {
			text-transform: uppercase;
		}
	}
</style>
