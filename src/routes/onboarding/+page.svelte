<script lang="ts">
</script>

<h1>Register</h1>

<form action="?/register" method="POST">
    <div>
        <label for="phone">Phone</label>
        <input class="input" id="phone" name="phone" type="text" required />
    </div>

    <div>
		<label for="streetAddress">Street</label>
		<input class="input" id="streetAddress" name="streetAddress" type="text" required />
	</div>

    <div>
		<label for="streetNumber">Street Number</label>
		<input class="input" id="streetNumber" name="streetNumber" type="text" required />
	</div>

    <div>
		<label for="zipCode">Zip Code or Postal Code</label>
		<input class="input" id="zipCode" name="zipCode" type="text" required />
	</div>

    <div>
		<label for="country">Country</label>
		<input class="input" id="country" name="country" type="text" required />
	</div>

	<button class="btn " type="submit">Register</button>
</form>
