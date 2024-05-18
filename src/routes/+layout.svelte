<script lang="ts">
	import { PageMeta } from '$util/meta';
	import { UmamiAnalytics } from '$util/umami-analytics';
	import { LenisWrapper } from '$util/lenis';
	import { SvelteScroller } from '$util/svelte-scroller';

	import { Header, Navigation } from '$lib/layout';

	import '../styles/_global.scss';
</script>

<PageMeta />
<UmamiAnalytics />

<Header />
<Navigation />

<LenisWrapper>
	<SvelteScroller>
		<slot />
	</SvelteScroller>
</LenisWrapper>
