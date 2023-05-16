<script lang="ts">
	import { ADDRESS_TYPE } from '$comp/Enums/address';
	import AddressForm from '$comp/Forms/Address.svelte';

</script>
<svelte:head>
	<title>OptiMates - Onboarding</title>
</svelte:head>

<h1 class="pt-8 text-center">Sign Up Form</h1>

<form action="?/addProviderAddress" method="POST" class="mx-auto pt-4 pb-12 w-[75%]">
	<p class="pt-6">Enter your details to keep your account secure.</p>
	<div class="pt-12 h-96">
		<AddressForm />
	</div>
</form>
