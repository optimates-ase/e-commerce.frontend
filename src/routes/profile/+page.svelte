<script lang="ts">
	import CardsComponent from '$comp/Cards/CardsComponent.svelte';
</script>

<div class="max-w-md mx-auto p-3">
	<div class="card p-5 m-5 mb-10 ">
		<img
			src="https://imageio.forbes.com/specials-images/imageserve//629fac5c0ef3ef49a86e2169/0x0.jpg?format=jpg&width=1200"
			alt="profile picture"
			class="rounded-xl mb-3"
		/>
		<div class="mb-3">
			<h3>Name</h3>
			Lorem ipsum dolor
		</div>
		<div class="">
			<h3>Email</h3>
			Lorem ipsum dolor
		</div>
	</div>

	<CardsComponent title="Saved Experience" subtitle="Lorem" />
	<CardsComponent title="Past Experience" subtitle="Lorem" />
</div>
