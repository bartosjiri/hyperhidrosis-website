<script lang="ts">
	import { navigationOpen } from '$lib/layout/navigation';
	import { scrollInstance as bodyScrollInstance } from '$util/lenis';

	const toggleNavigation = () => {
		$navigationOpen = !$navigationOpen;
	};

	const handleTitleClick = () => {
		if ($navigationOpen) toggleNavigation();
		$bodyScrollInstance?.scrollTo('top', { duration: 3 });
	};
</script>

<header>
	<div class:container={true} class:nav-is-open={$navigationOpen}>
		<button class:logo={true} on:click={() => handleTitleClick()}>
			<span>Hyperhidrosis</span>
			<span>help+</span>
		</button>
		<div class:navigation-button={true}>
			<button on:click={() => toggleNavigation()}>
				{#if $navigationOpen}
					<span>(Close)</span>
				{:else}
					<span class:desktop={true}>(Navigation)</span>
					<span class:mobile={true}>(Nav)</span>
				{/if}
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
		padding: calc(var(--spacing-02) / 2) var(--spacing-wrapper);
		pointer-events: none;
		z-index: 1001;

		.container {
			$header-color-transition: color 0.1s ease-in-out;

			width: 100%;
			display: flex;
			justify-content: space-between;
			transition: $header-color-transition 0.2s;

			.logo,
			.navigation-button {
				pointer-events: initial;

				span {
					font-size: calc(var(--typography-size-01) * 1.5);
					line-height: 1;
					text-transform: uppercase;

					&.mobile {
						display: none;
					}

					@include breakpoint($breakpoint-02) {
						font-size: calc(var(--typography-size-01) * 1.2);

						&.desktop {
							display: none;
						}

						&.mobile {
							display: initial;
						}
					}
				}
			}

			.logo {
				display: flex;
				flex-direction: column;
				text-align: left;
				cursor: pointer;
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
