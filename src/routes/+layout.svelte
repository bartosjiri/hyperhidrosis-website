<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { FathomAnalytics } from '$util/fathom-analytics';
	import { LenisWrapper } from '$util/lenis';
	import { SvelteScroller } from '$util/svelte-scroller';

	import { Header, Navigation } from '$lib/layout';

	import '../styles/_global.scss';
</script>

<PageMeta />
<FathomAnalytics />

<Header />
<Navigation />

<LenisWrapper>
	<SvelteScroller>
		<slot />
	</SvelteScroller>
</LenisWrapper>
