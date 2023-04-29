<script lang="ts">
	export let value: number;
</script>

<div class:list-item-counter={true} {...$$restProps}>
	<span>({String(value).padStart(2, '0')})</span>
</div>

<style lang="scss">
	.list-item-counter {
		display: flex;
		margin-bottom: fluid(15, 30); // @TODO

		@include breakpoint($breakpoint-mobile) {
			justify-content: flex-end;
		}
	}
</style>
