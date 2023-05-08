<script lang="ts">
	import Address from '$comp/forms/Address.svelte';
	import UserInfo from '$comp/forms/UserInfo.svelte';
	import { ADDRESS_TYPE } from '$comp/Enums/address';
	import { Step, Stepper } from '@skeletonlabs/skeleton';
</script>

<h1 class="pt-8 text-center">Sign Up Form</h1>

<Stepper
	buttonCompleteLabel="sign up ↪"
	buttonNextLabel="next →"
	buttonBackLabel="← prev"
	buttonCompleteType="submit"
>
	<form action="?/addPersonalInfo" method="POST" class="mx-auto pt-4 pb-12 w-[75%]">
		<Step>
			<svelte:fragment slot="header">
				<p>Enter your details so we can keep in touch and keep your account secure.</p>
			</svelte:fragment>
			<div class="h-96">
				<UserInfo />
			</div>
		</Step>
	</form>
    <form action="?/registerBilling" method="PUT" class="mx-auto pt-4 pb-12 w-[75%]">
        <Step>
            <svelte:fragment slot="header">
                <p>Enter your home address We will use this address for any correspondence.</p>
            </svelte:fragment>
            <div class="h-96">
                <Address addressType={ADDRESS_TYPE.BILLING} />
            </div>
        </Step>
    </form>
    <form action="?/registerResidence" method="PUT" class="mx-auto pt-4 pb-12 w-[75%]">
	<Step>
		<svelte:fragment slot="header">
			<p>Your vacation address can help us give provide better service.</p>
		</svelte:fragment>
		<div class="h-96">
			<Address addressType={ADDRESS_TYPE.RESIDENT} />
		</div>
	</Step>
    </form>
</Stepper>
