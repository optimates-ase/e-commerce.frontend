<script lang="ts">
	import type { District } from "$lib/types";
    

    export let district: District;
    console.log(district)
</script>
<!-- {#each districts as district} -->
<div>
	
		{district.name}
        {district.keyphrase}
</div>
<!-- {/each} -->
