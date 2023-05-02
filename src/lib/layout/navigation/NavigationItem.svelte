<script lang="ts">
	export let counter: number;
	export let label: string;
	export let sectionId: string;

	import { navigationOpen } from './navigationHandler';
	import { scrollInstance, startInstance as startBodyScroll } from '$util/lenis';

	const handleClick = () => {
		startBodyScroll();
		$scrollInstance?.scrollTo(`#${sectionId}`, {
			immediate: true,
			offset: -200
		});
		$navigationOpen = false;
	};
</script>

<li class:navigation-item={true}>
	<button on:click={() => handleClick()}>
		<div class:counter={true}>
			<span>({String(counter).padStart(2, '0')})</span>
		</div>
		<div class:link={true}>
			<span>{label}</span>
		</div>
	</button>
</li>

<style lang="scss">
	.navigation-item {
		display: flex;

		button {
			display: flex;
			align-items: center;
			color: var(--color-background-01);
			cursor: pointer;

			span {
				opacity: 0.33;
			}

			&:hover {
				span {
					opacity: 1;
				}
			}

			.counter {
				margin-right: 6vw;

				@include breakpoint($breakpoint-01) {
					margin-right: 3vw;
				}

				span {
					font-size: 2vw;

					@include breakpoint($breakpoint-01) {
						font-size: 2.5vw;
					}

					@include breakpoint($breakpoint-02) {
						font-size: 3.5vw;
					}
				}
			}

			.link {
				overflow: hidden;

				span {
					font-size: 12vw;
					line-height: 1;
					text-transform: uppercase;
				}
			}
		}
	}
</style>
