<script lang="ts">
	import { ADDRESS_TYPE } from "$comp/Enums/address";

    export let addressType: ADDRESS_TYPE;
    
</script>
<div>
    <label for={addressType + "Street"}>{addressType} street</label>
    <input class="input" id={addressType + "Street"} name={addressType + "Street"} type="text" required={addressType === ADDRESS_TYPE.BILLING} />
</div>

<div>
    <label for={addressType + "StreetNumber"}>{addressType} street number</label>
    <input class="input" id={addressType + "StreetNumber"} name={addressType + "StreetNumber"} type="text" required={addressType === ADDRESS_TYPE.BILLING} />
</div>

<div>
    <label for={addressType + "ZipCode"}>{addressType} postal code</label>
    <input class="input" id={addressType + "ZipCode"} name={addressType + "ZipCode"} type="text" required={addressType === ADDRESS_TYPE.BILLING} />
</div>

<div>
    <label for={addressType + "City"}>{addressType} city</label>
    <input class="input" id={addressType + "City"} name={addressType + "City"} type="text" required={addressType === ADDRESS_TYPE.BILLING} />
</div>

<div>
    <label for={addressType + "Country"}>{addressType} country</label>
    {#if addressType === ADDRESS_TYPE.BILLING}
    <input class="input" value="Switzerland" id={addressType + "Country"} name={addressType + "Country"} type="text" required={addressType === ADDRESS_TYPE.BILLING} />
    {:else}
    <input class="input" id={addressType + "Country"} name={addressType + "Country"} type="text" />
    {/if}
</div>