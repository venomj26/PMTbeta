function init() {
	// run step 2 of initialization as soon as the Map library is loaded
	google.maps.event.addDomListener(window, "load", Start.initialize);
}

var Start = {
	initialize: function () {
		// Time.init();
		MapBase.init();
		chart.init();
		// Data_SS.init();
		// Data_AVL_Parsons.init();
		// Data_AVL_HH.init();
		// Data_AVL_Haas.init();		
		// MapTileMRMS.init();
		// Data_GCP_CV.init();
	}
	// replay: function(loadedDT, currentDIR, playbackInterval, refreshInterval, filterName, filterValue) {
	// 	Time.loaded = loadedDT;
	// 	Delay.currentDIR = currentDIR;
	// 	Time.playbackInterval = playbackInterval;
	// 	Time.refreshInterval = refreshInterval;
		
	// 	// rerun some init scripts to do the playback
		
	// }
}