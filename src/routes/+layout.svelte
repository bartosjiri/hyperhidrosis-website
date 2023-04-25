<script lang="ts">
	import { FathomAnalytics } from '$util/fathom-analytics';
	import { LocomotiveScroll } from '$util/locomotive-scroll';

	import '../styles/_global.scss';
</script>

<FathomAnalytics />

<LocomotiveScroll>
	<slot />
</LocomotiveScroll>
