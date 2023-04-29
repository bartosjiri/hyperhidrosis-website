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
		margin-bottom: fluid(60, 120); // @TODO

		@include breakpoint($breakpoint-mobile) {
			justify-content: flex-start;
		}

		span {
			text-transform: uppercase;
		}
	}
</style>
