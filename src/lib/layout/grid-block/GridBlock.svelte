<script lang="ts">
	export let id: string;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class:grid-block={true}
	class="{id} {$$restProps.class || ''}"
	style="grid-area: {id}"
	{...restProps}
>
	<slot />
</div>
