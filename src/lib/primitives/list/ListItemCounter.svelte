<script lang="ts">
	export let value: number;
</script>

<div class:list-item-counter={true} {...$$restProps}>
	<span>({String(value).padStart(2, '0')})</span>
</div>

<style lang="scss">
	.list-item-counter {
		display: flex;
		margin-bottom: var(--spacing-01);

		@include breakpoint($breakpoint-01) {
			justify-content: flex-end;
		}
	}
</style>
