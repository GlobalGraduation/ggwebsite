
function gMap () {
	if ($('.google-map').length) {
		$('.google-map').each(function () {
			// getting options from html 
			var Self = $(this);
			var mapName = Self.attr('id');
			var mapLat = Self.data('map-lat');
			var mapLng = Self.data('map-lng');
			var iconPath = Self.data('icon-path');
			var mapZoom = Self.data('map-zoom');
			var mapTitle = Self.data('map-title');
			var styles = [
			    {
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 33
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "gamma": "0.75"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.neighborhood",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "lightness": "-37"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e5f0f0"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.man_made",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": "33"
			            },
			            {
			                "lightness": "40"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": "33"
			            },
			            {
			                "lightness": "-37"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "saturation": "33"
			            },
			            {
			                "lightness": "100"
			            },
			            {
			                "weight": "2"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "saturation": "33"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "80"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "lightness": "0"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.attraction",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": "-4"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#aadfde"
			            },
			            {
			                "visibility": "on"
			            },
			            {
			                "saturation": "20"
			            },
			            {
			                "lightness": "20"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },{
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "gamma": "1.00"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "gamma": "0.50"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "saturation": "-100"
			            },
			            {
			                "gamma": "1.05"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#fff"
			            },
			            {
			                "saturation": "-100"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "lightness": "-13"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "color": "#fff"
			            },
			            {
			                "gamma": "2.00"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#b3fffe"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "saturation": "53"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "lightness": "-42"
			            },
			            {
			                "saturation": "17"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "lightness": "61"
			            }
			        ]
			    }
			];

			// if zoom not defined the zoom value will be 15;
			if (!mapZoom) {
				var mapZoom = 15;
			};
			// init map
			var map;
			map = new GMaps({
			    div: '#'+mapName,
			    scrollwheel: false,
			    lat: 50.7460, 
			    lng: 1.8193,
			    styles: styles,
			    zoom: mapZoom
			});
			// if icon path setted then show marker
			if(iconPath) {
				map.addMarker({
			    	icon: iconPath,
			    	lat: 50.7460,
			      	lng: 1.8193,
			      	title: 'Main Head office',
			      	infoWindow: {
						content: '<h3>Global Graduation</h3> <span>Intouch Accounting Everdene House, Deansleigh Road, Bournemouth, UK, BH7 7DU</span> <p>Call us: +(44) 745 943 2184</p>'
					}
				});
			}
		});  
	};
}


// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
		// add your functions
		gMap();
	})(jQuery);
});