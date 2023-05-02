<script lang="ts">
	export let id: string;
</script>

<section {id} {...$$restProps}>
	<slot />
</section>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: var(--grid-columns);
		column-gap: var(--grid-gutter);
		margin: 200px var(--spacing-wrapper);
	}
</style>
