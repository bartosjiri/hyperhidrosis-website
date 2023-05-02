<script lang="ts">
	import { navigationOpen } from '$lib/layout/navigation';

	const toggleNavigation = () => {
		$navigationOpen = !$navigationOpen;
	};
</script>

<header>
	<div class:container={true} class:nav-is-open={$navigationOpen}>
		<div class:logo={true}>
			<span>Hyperhidrosis</span>
			<span>help+</span>
		</div>
		<div class:navigation-button={true}>
			<button on:click={() => toggleNavigation()}>
				<span>
					({$navigationOpen ? 'Close' : 'Navigation'})
				</span>
			</button>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		padding: calc(var(--spacing-02) / 2) var(--spacing-wrapper); // @TODO
		pointer-events: none;
		z-index: 1001;
		// mix-blend-mode: difference;

		.container {
			$header-color-transition: color 0.1s ease-in-out;

			width: 100%;
			display: flex;
			justify-content: space-between;
			// color: #d5aa2a;
			transition: $header-color-transition 0.2s;

			.logo,
			.navigation-button {
				pointer-events: initial;

				span {
					font-size: calc(var(--typography-size-01) * 1.5);
					line-height: 1;
					text-transform: uppercase;
				}
			}

			.logo {
				display: flex;
				flex-direction: column;
			}

			.navigation-button {
				button {
					cursor: pointer;
				}
			}

			&.nav-is-open {
				color: var(--color-background-01);
				transition: $header-color-transition;
			}
		}
	}
</style>
