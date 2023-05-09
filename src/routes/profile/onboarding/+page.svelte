<script lang="ts">
	import UserInfo from '$comp/forms/UserInfo.svelte';
</script>

<h1 class="pt-8 text-center">Sign Up Form</h1>

<form action="?/addPersonalInfo" method="POST" class="mx-auto pt-4 pb-12 w-[75%]">
	<p class="pt-6">Enter your details to keep your account secure.</p>
	<div class="pt-12 h-96">
		<UserInfo />
	</div>
</form>
