<script lang="ts">
	import { Hero } from '$modules/hero';
	import { Intro } from '$modules/intro';
	import { SweatRinseRepeat } from '$modules/sweat-rinse-repeat';
	import { Causes } from '$modules/causes';
	import { SweatRain } from '$modules/sweat-rain';
	import { Diagnosis } from '$modules/diagnosis';
	import { DripByDrip } from '$modules/drip-by-drip';
	import { Treatment } from '$modules/treatment';
	import { PerspireToInspire } from '$modules/perspire-to-inspire';
	import { Coping } from '$modules/coping';
	import { About } from '$modules/about';
</script>

<Hero />
<Intro />
<DripByDrip moduleIndex={2} />
<Causes />
<SweatRinseRepeat moduleIndex={4} />
<Diagnosis />
<SweatRain moduleIndex={6} />
<Treatment />
<PerspireToInspire moduleIndex={8} />
<Coping />
<About />
