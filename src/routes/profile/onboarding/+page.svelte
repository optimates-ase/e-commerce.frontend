<script lang="ts">
    import Address from '$comp/forms/Address.svelte'
    import UserInfo from '$comp/forms/UserInfo.svelte'
	import { ADDRESS_TYPE } from "$comp/Enums/address";

</script>

<h1>Sign Up Form</h1>

<form action="?/register" method="POST">
	
    <UserInfo />
    <Address addressType={ADDRESS_TYPE.BILLING} />
    <Address addressType={ADDRESS_TYPE.RESIDENT} />

	<button class="btn " type="submit">Register</button>
</form>
