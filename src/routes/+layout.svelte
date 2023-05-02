<script lang="ts">
	import { FathomAnalytics } from '$util/fathom-analytics';
	import { LenisWrapper } from '$util/lenis';
	import { SvelteScroller } from '$util/svelte-scroller';

	import { Header, Navigation } from '$lib/layout';

	import '../styles/_global.scss';
</script>

<FathomAnalytics />

<Header />
<Navigation />

<LenisWrapper>
	<SvelteScroller>
		<slot />
	</SvelteScroller>
</LenisWrapper>
