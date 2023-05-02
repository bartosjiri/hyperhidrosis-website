<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import { scrollInstance, initInstance } from './bodyScrollHandler';

	onMount(() => initInstance());
	onDestroy(() => {
		if ($scrollInstance) $scrollInstance.destroy();
	});
</script>

<slot />
