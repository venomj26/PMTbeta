var MapBase = {
	options: null,
	obj: null,
	center: null,
	AVLDotSizes: [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 1700, 1200, 800, 500, 350, 200, 150, 100, 75, 55, 40, 25, 15, 8, 5],
	// isActive_SS: true,
	// isActive_ParsonsTracksSolid: false,
	init: function() {
		MapBase.center = new google.maps.LatLng(39.814, -86.144);
		
		MapBase.options = {
			mapId: "f40f07dbbe0ad612",    
			// "3948bf5be3954e04",
			zoom: 11,
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_BOTTOM
			},
			mapTypeControl: true,
			scaleControl: true,
            scaleControlOptions: {
                
            },
			center: MapBase.center,
			//  mapTypeId: google.maps.MapTypeId.ROADMAP,  // no longer needed, template controled by MapID
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT,
				mapTypeIds: ['roadmap', 'satellite']
			},
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            fullscreenControl: false
		};
        
		MapBase.obj = new google.maps.Map(document.getElementById("map_canvas"), MapBase.options);
		
        // add listener for when streetview is entered, change button location
        google.maps.event.addListener(MapBase.obj.getStreetView(), 'visible_changed', function() {
            if (MapBase.obj.getStreetView().getVisible()) {
                var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById("map_canvas"), {
                    addressControlOptions: {
                        position: google.maps.ControlPosition.BOTTOM_CENTER, // <- change position
                    },
                    enableCloseButton: true,
                    fullscreenControl: false
                });
                // rewrite default options  
                MapBase.obj.setStreetView(panorama);                
            }
		});

		// add listener for when zoom has changed, change size of AVL circles and smart segment refpoints
		MapBase.obj.addListener("zoom_changed", () => {
			var zoom_level = MapBase.obj.getZoom();
			console.log(zoom_level); // 7 = All of Indiana, max = 22

			// // update Parsons sizes
			// $.each(MapAVLParsons.vehicles, function (vehId, value) {
			// 	if (value.vehCircle != null)
			// 		value.vehCircle.setRadius(MapBase.AVLDotSizes[zoom_level]);				
			// });

			// // update HH sizes
			// $.each(MapAVLHH.vehicles, function (commission_nbr, value) {
			// 	if (value.vehCircle != null)
			// 		value.vehCircle.setRadius(MapBase.AVLDotSizes[zoom_level]);
			// });

			// // update Haas sizes
			// $.each(MapAVLHaas.vehicles, function (external_id, value) {
			// 	if (value.vehCircle != null)
			// 		value.vehCircle.setRadius(MapBase.AVLDotSizes[zoom_level]);
			// });

			// // update smart segment line size and widths
			// $.each(Map_SS.refpoint_segments, function (refpoints_id, tmpPolyLine) {
			// 	tmpPolyLine.setOptions({ strokeWeight: zoom_level - 5 });
			// });

			// // update Parsons solid tracks
			// $.each(MapAVLParsons.polys_tracksSolid, function (idx, tmpPolyLine) {
			// 	tmpPolyLine.setOptions({ strokeWeight: zoom_level - 5 });
			// });
		});

		// add buttons for different data layers (such as SS traffic speeds, Parsons tracks, etc.)

		// traffic speeds on SS
	// 	const toggleSSControlDiv = document.createElement("div");
	// 	MapBase.toggleSS(toggleSSControlDiv, MapBase.obj);
	// 	MapBase.obj.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(toggleSSControlDiv);

	// 	// parsons solid tracks
	// 	const toggleTracksSolidControlDiv = document.createElement("div");
	// 	MapBase.toggleTracksSolid(toggleTracksSolidControlDiv, MapBase.obj);
	// 	MapBase.obj.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(toggleTracksSolidControlDiv);
	// },
	// toggleSS: function (controlDiv, map) {
	// 	// Set CSS for the control border.
	// 	const controlUI = document.createElement("div");
	// 	controlUI.style.backgroundColor = "rgba(77,141,77,.9)";
	// 	//controlUI.style.border = "2px solid #cbcbcb";
	// 	controlUI.style.border = "2px solid #141414";
	// 	controlUI.style.borderRadius = "3px";
	// 	controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.9)";
	// 	controlUI.style.cursor = "pointer";
	// 	controlUI.style.marginBottom = "22px";
	// 	controlUI.style.textAlign = "center";
	// 	controlUI.title = "Click to toggle traffic speeds layer";
	// 	controlDiv.appendChild(controlUI);
	// 	// Set CSS for the control interior.
	// 	const controlText = document.createElement("div");
	// 	//controlText.style.color = "#cbcbcb";
	// 	controlText.style.color = "#141414";
	// 	controlText.style.fontFamily = "Roboto,Arial,sans-serif";
	// 	controlText.style.fontSize = "16px";
	// 	controlText.style.fontWeight = "bold";
	// 	controlText.style.lineHeight = "38px";
	// 	controlText.style.paddingLeft = "5px";
	// 	controlText.style.paddingRight = "5px";
	// 	controlText.innerHTML = "Traffic Speeds";
	// 	controlUI.appendChild(controlText);
	// 	// Setup the click event listeners: simply set the map to Chicago.
	// 	controlUI.addEventListener("click", () => {
	// 		Time.addModuleLoading('MapBase.toggleSS');
	// 		if (MapBase.isActive_SS) {
	// 			controlUI.style.backgroundColor = "rgba(0,0,0,.9)";
	// 			controlUI.style.border = "1px solid #cbcbcb";
	// 			controlText.style.color = "#cbcbcb";
	// 			controlText.style.fontWeight = "normal";

	// 			MapBase.isActive_SS = false;

	// 			// disable the SS
	// 			setTimeout(Map_SS.disable, 50);
	// 		} else {
	// 			controlUI.style.backgroundColor = "rgba(77,141,77,.9)";
	// 			controlUI.style.border = "2px solid #141414";
	// 			controlText.style.color = "#141414";
	// 			controlText.style.fontWeight = "bold";

	// 			MapBase.isActive_SS = true;

	// 			// check if data needs reloading by checking time slider and comparing the time to the last SSSpeed load time

	// 			var sliderLocationUnits = Ticker.timeSlider.slider("option", "value");
	// 			// multiple slider units by 5-minute intervals (300000ms)
	// 			var shiftToTimeMSUTC = Time.pastBoundary() + (sliderLocationUnits * Ticker.incrementMS);

	// 			if (shiftToTimeMSUTC != Data_SS.loadedSSSpeedTimeMSUTC) {
	// 				Data_SS.loadSSSpeedData(Math.round(shiftToTimeMSUTC - Data_SS.baseTimeLookbackMSec), Math.round(shiftToTimeMSUTC), true);
	// 			} else {
	// 				// if data was the same, just enable the SS w/o reloading data
	// 				setTimeout(Map_SS.enable, 50);
    //             }
	// 		}
	// 	});
	// },
	// toggleTracksSolid: function (controlDiv, map) {
	// 	// Set CSS for the control border.
	// 	const controlUI = document.createElement("div");
	// 	controlUI.style.backgroundColor = "rgba(0,0,0,.9)";
	// 	//controlUI.style.border = "2px solid #cbcbcb";
	// 	controlUI.style.border = "1px solid #cbcbcb";
	// 	controlUI.style.borderRadius = "3px";
	// 	controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.9)";
	// 	controlUI.style.cursor = "pointer";
	// 	controlUI.style.marginBottom = "22px";
	// 	controlUI.style.textAlign = "center";
	// 	controlUI.title = "Click to toggle solid application rate tracks";
	// 	controlDiv.appendChild(controlUI);
	// 	// Set CSS for the control interior.
	// 	const controlText = document.createElement("div");
	// 	//controlText.style.color = "#cbcbcb";
	// 	controlText.style.color = "#cbcbcb";
	// 	controlText.style.fontFamily = "Roboto,Arial,sans-serif";
	// 	controlText.style.fontSize = "16px";
	// 	controlText.style.fontWeight = "normal";
	// 	controlText.style.lineHeight = "38px";
	// 	controlText.style.paddingLeft = "5px";
	// 	controlText.style.paddingRight = "5px";
	// 	controlText.innerHTML = "Solid rate (12 hr)";
	// 	controlUI.appendChild(controlText);
	// 	// Setup the click event listeners: simply set the map to Chicago.
	// 	controlUI.addEventListener("click", () => {
	// 		Time.addModuleLoading('MapBase.toggleTracksSolid');
	// 		if (MapBase.isActive_ParsonsTracksSolid) {
	// 			controlUI.style.backgroundColor = "rgba(0,0,0,.9)";
	// 			controlUI.style.border = "1px solid #cbcbcb";
	// 			controlText.style.color = "#cbcbcb";
	// 			controlText.style.fontWeight = "normal";

	// 			MapBase.isActive_ParsonsTracksSolid = false;

	// 			// disable the track for solid application
	// 			setTimeout(MapAVLParsons.disable, 50);
	// 		} else {
	// 			controlUI.style.backgroundColor = "rgba(0,186,255,.9)";
	// 			controlUI.style.border = "2px solid #141414";
	// 			controlText.style.color = "#141414";
	// 			controlText.style.fontWeight = "bold";

	// 			MapBase.isActive_ParsonsTracksSolid = true;

	// 			// check if data needs reloading by checking time slider and comparing the time to the last track for solid application load time

	// 			var sliderLocationUnits = Ticker.timeSlider.slider("option", "value");
	// 			// multiple slider units by 5-minute intervals (300000ms)
	// 			var shiftToTimeMSUTC = Time.pastBoundary() + (sliderLocationUnits * Ticker.incrementMS);

	// 			if (shiftToTimeMSUTC != Data_AVL_Parsons.loadedTracksSolidTimeMSUTC) {
	// 				Data_AVL_Parsons.updateParsonsTracksSolid(Math.round(shiftToTimeMSUTC - MapAVLParsons.lookback_tracksSolid_ms), Math.round(shiftToTimeMSUTC), true);
	// 			} else {
	// 				// if data was the same, just enable the track for solid application w/o reloading data
	// 				setTimeout(MapAVLParsons.enable, 50);
	// 			}
	// 		}
	// 	});
    // }
}
}


console.log("not working???");