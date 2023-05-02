<script lang="ts">
	export let name: string;

	const { class: _, ...rest } = $$restProps;
	const restProps = rest;
</script>

<div
	class:grid-block={true}
	class="{name} {$$restProps.class || ''}"
	style="grid-area: {name}"
	{...restProps}
>
	<slot />
</div>
