<script lang="ts">
	export let id: string;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div class="{id} {$$restProps.class || ''}" style="grid-area: {id}" {...restProps}>
	<slot />
</div>
