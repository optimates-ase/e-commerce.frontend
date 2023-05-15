<script lang="ts">
	const handleFocusOut = (e) => {
		e.target.reportValidity();
	};
</script>

<div id="contactInfo" class="max-w-md flex flex-col">
	<label for="firstName">first name</label>
	<input
		class="input"
		id="firstName"
		name="firstName"
		type="text"
		placeholder="John"
		autocomplete="false"
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
		autocomplete="false"
		on:focusout={handleFocusOut}
		required
	/>
	<label for="brithdate">birthdate</label>
	<!-- TODO check if its always mm/dd/yyyy -->
	<input
		class="input"
		type="date"
		id="birthdate"
		name="birthdate"
		autocomplete="false"
		on:focusout={handleFocusOut}
		required
	/>
	<label for="phone">phone</label>
	<!-- TODO validate phone numbers -->
	<input
		class="input"
		id="phone"
		name="phone"
		type="tel"
		autocomplete="false"
		on:focusout={handleFocusOut}
		placeholder="012 345 67 89"
		required
	/>
	<button type="submit" class="btn variant-filled-success mt-8 w-36 ml-auto">Sign up</button>
</div>
