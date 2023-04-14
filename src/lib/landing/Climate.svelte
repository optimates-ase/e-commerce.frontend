<script lang="ts">
	import type { ClimateInfluenceMinor } from '$lib/types';
    import VideoPlayer from '$lib/UIUX/VideoPlayer.svelte'

	export let minorInfluence: ClimateInfluenceMinor;

</script>

<div id="climateOverview" class="w-[90%] mx-auto mt-2 bg-black">
	<div id="climateOverviewHeader" class=" bg-gray-700 grid grid-cols-7">
		<div id="climateTitle" class="col-span-2 bg-green-600">
			<h1>Climate</h1>
		</div>
		<div id="climateChartCompletion" class="col-span-5 grid grid-cols-2">
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
	<div id="climateOverviewBody" class="mt-4 h- w-[100%] bg-white">
		<VideoPlayer src={"videos/caye-caulker.mp4"}/>
	</div>
</div>

