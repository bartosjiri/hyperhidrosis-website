<script lang="ts">
	import { balancer } from 'svelte-action-balancer';
</script>

<div class:chapter-description={true} use:balancer {...$$restProps}>
	<p>
		<slot />
	</p>
</div>

<style lang="scss">
	.chapter-description {
		margin-bottom: var(--spacing-03);

		p {
			@include typography-02;
		}
	}
</style>
