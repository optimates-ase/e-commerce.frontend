<script lang="ts">
	import type { Snapshot } from './$types';


	let formData = {
		firstName: '',
		lastName: '',
		birthdate: '',
		phone: ''
	};

	const handleFocusOut = (e) => {
		e.target.reportValidity();
		console.log(e.target);
		// console.log("asd", e, e.target.reportValidity())
	};

    export const snapshot: Snapshot = {
        capture: () => formData,
        restore: (value) => (formData = value)
    }
</script>

<div id="contactInfo">
	<label for="firstName">first name</label>
	<input
		class="input"
		id="firstName"
		name="firstName"
		type="text"
		placeholder="John"
		on:focusout={handleFocusOut}
		required
	/>
	<label for="lastName">last name</label>
	<input
		class="input"
		id="lastName"
		name="lastName"
		type="text"
		placeholder="Doe"
		on:focusout={handleFocusOut}
		bind:value={formData.lastName}
		required
	/>
	<label for="brithdate">birthdate</label>
	<!-- TODO check if its always mm/dd/yyyy -->
	<input
		class="input"
		type="date"
		id="birthdate"
		name="birthdate"
		on:focusout={handleFocusOut}
		bind:value={formData.birthdate}
		required
	/>
	<label for="phone">phone</label>
	<!-- TODO validate phone numbers -->
	<input
		class="input"
		id="phone"
		name="phone"
		type="tel"
		on:focusout={handleFocusOut}
		placeholder="012 345 67 89"
		required
	/>
</div>
