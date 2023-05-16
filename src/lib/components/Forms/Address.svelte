<script lang="ts">
	const handleFocusOut = (e) => {
		e.target.reportValidity();
	};
</script>

<div id="contactInfo" class="max-w-md flex flex-col">
	<label for={'Street'}>street</label>
	<input
		class="input"
		id={'street'}
		name={'street'}
		type="text"
		placeholder="Seestrasse"
		required
		on:focusout={handleFocusOut}
	/>
	<label for={'StreetNumber'}>street number</label>
	<input
		class="input"
		id={'streetNumber'}
		name={'streetNumber'}
		type="text"
		placeholder="2a"
		required
		on:focusout={handleFocusOut}
	/>
	<label for={'ZipCode'}>postal code</label>
	<input
		class="input"
		id={'zipCode'}
		name={'zipCode'}
		type="text"
		placeholder="8001"
		required
		on:focusout={handleFocusOut}
	/>
	<label for={'City'}>city</label>
	<input
		class="input"
		id={'city'}
		name={'city'}
		type="text"
		placeholder="Zürich"
		required
		on:focusout={handleFocusOut}
	/>
	<label for={'Country'}>country</label>
		<input
			class="input"
			value="Switzerland"
			id={'country'}
			name={'country'}
			type="text"
			
			required
			on:focusout={handleFocusOut}
		/>
	<button type="submit" class="btn variant-filled-success mt-8 w-36 ml-auto">Submit Address</button>
</div>
