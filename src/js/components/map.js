export default class Map {

  constructor(config) {
    this._mapHTML = config.map.get(0);
    this._center = {
      lat: +config.map.data('center-lat'),
      lng: +config.map.data('center-lng')
    };

    this._init();
  }

  _init() {
    this._createMap();
  }

  _createMap() {
    this._map = new google.maps.Map(this._mapHTML, {
      center: this._center,
      zoom: 15,
      // disableDefaultUI: true,
      // scrollwheel: false,
      // zoomControl: true,
      // draggable: false,
      styles: [
        {
          'featureType': 'administrative.province',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.locality',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.neighborhood',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative.land_parcel',
          'elementType': 'geometry',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            },
            {
              'weight': '1.68'
            },
            {
              'hue': '#006bff'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.icon',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit.station.airport',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'transit.station.bus',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit.station.rail',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'on'
            }
          ]
        }
      ]
    });
    new google.maps.Marker({
      position: this._center,
      map: this._map,
      icon: {
        url: 'img/marker.png',
        scaledSize: new google.maps.Size(50, 57)
      }
    });
  }

};
let map = $('.js-map');

if (map.length) {
  map.each(function() {
    new Map({
      map: $(this)
    });
  });
};
