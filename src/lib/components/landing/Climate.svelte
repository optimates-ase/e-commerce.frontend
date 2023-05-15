<script lang="ts">
	import type { ClimateInfluence } from '$lib/types';
	import VideoPlayer from '$comp/UIUX/VideoPlayer.svelte';

	export let weather: ClimateInfluence;
</script>

<div id="climateOverview" class=" w-[90%] mx-auto my-6 mt-10">
	<div id="climateTitle" class="col-span-2 my-3 p-2">
		<h1>Climate</h1>
	</div>

	<div class="p-5">
		<div id="climateOverviewHeader" class="grid grid-cols-7 mt-2">
			<div id="climateChartCompletion" class="col-span-7 grid grid-cols-2">
				<div id="climateMinorMin" class="col-span-1 flex">
					<img class="block h-6 w-6 mr-2" src={weather.minorInfluence.min.icon} alt="-" />
					{weather.minorInfluence.min.avg}° {weather.minorInfluence.min.unit}
					in {weather.minorInfluence.min.month}

				</div>
				<div id="climateMinorMax" class="col-span-1 flex">
					<img class="block h-6 w-6 mr-2" src={weather.minorInfluence.max.icon} alt="-" />
					{weather.minorInfluence.max.avg}° {weather.minorInfluence.max.unit}
					in {weather.minorInfluence.max.month}
				</div>
			</div>
		</div>

		<div id="climateOverviewBody" class="mt-4 h-[100%] w-[100%] bg-white">
			<VideoPlayer src={'/videos/HomepageHighlight_V0.mp4'} />
		</div>
	</div>
</div>
