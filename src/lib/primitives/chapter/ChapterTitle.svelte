<script lang="ts">
	export let value: string;
</script>

<div class:chapter-title={true} {...$$restProps}>
	<span>({value})</span>
</div>

<style lang="scss">
	.chapter-title {
		display: flex;
		align-items: flex-end;
		margin-bottom: var(--spacing-01);

		@include breakpoint($breakpoint-01) {
			justify-content: flex-start;
		}

		span {
			text-transform: uppercase;
		}
	}
</style>
