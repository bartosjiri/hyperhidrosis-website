<script lang="ts" context="module">
	type LoadParams = {
		status: number;
	};

	export const load = async ({ status }: LoadParams) => {
		if (status === 404) {
			return {
				status: 302,
				redirect: '/'
			};
		}
	};
</script>
