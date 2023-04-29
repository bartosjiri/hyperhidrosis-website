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
		margin: 0 #{fluid(15, 100)}; // @TODO
		margin-bottom: 30rem; // @TODO
	}
</style>
