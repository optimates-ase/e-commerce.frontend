<script lang="ts">
	import type { ClimateInfluenceMinor } from '$lib/types';
    import VideoPlayer from '$comp/UIUX/VideoPlayer.svelte'

	export let minorInfluence: ClimateInfluenceMinor;

</script>

<div id="climateOverview" class=" w-[90%] mx-auto my-6 mt-10">
	<div id="climateTitle" class="col-span-2 my-3 p-2">
		<h1>Climate</h1>
	</div>

	<div class="card p-5">
	
	<div id="climateOverviewHeader" class="grid grid-cols-7 mt-2">
		
		<div id="climateChartCompletion" class="col-span-7 grid grid-cols-2">
			<div id="climateMinorMin" class="col-span-1">
				<p>Min {minorInfluence.name}</p>
                in {minorInfluence.min.month}
				{minorInfluence.min.avg}° {minorInfluence.min.unit}
			</div>
			<div id="climateMinorMax" class="col-span-1">
				Max {minorInfluence.name}
                in {minorInfluence.max.month}
				{minorInfluence.max.avg}° {minorInfluence.max.unit}
			</div>
		</div>
	</div>
	
	<div id="climateOverviewBody" class="mt-4 h-[100%] w-[100%] bg-white">
		<VideoPlayer src={"videos/caye-caulker.mp4"} />
	</div>
</div>
	
</div>

