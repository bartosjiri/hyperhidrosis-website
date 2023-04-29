<script lang="ts">
	import { balancer } from 'svelte-action-balancer';
</script>

<div class:list-item-description={true} use:balancer {...$$restProps}>
	<p>
		<slot />
	</p>
</div>

<style lang="scss">
	.list-item-description {
		margin-bottom: var(--spacing-02);

		p {
			color: var(--color-foreground-02);
		}
	}
</style>
