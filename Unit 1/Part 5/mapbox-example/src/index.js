import * as mapbox from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

let p = null;
let imgMap = null;
let marker = null; // Mapbox marker
let mapDiv = null;
let map = null; // Mabox Map object
const token = "pk.eyJ1IjoiYXJ0dXJvYmVyIiwiYSI6ImNrMXFlc29vazExaDUzbms2cWdpb3l6cGwifQ.hyoOv4iVc6XqWPYBKa4NkQ";

mapbox.accessToken = token;

function geolocate() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(pos => {
            resolve(pos);
        }, error => {
            switch (error.code) {
                case error.PERMISSION_DENIED: // User didn't allow the web page to retrieve location
                    reject("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE: // Couldn't get the location
                    reject("Location information is unavailable.");
                    break;
                case error.TIMEOUT: // The maximum amount of time to get location information has passed
                    reject("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    reject("An unknown error occurred.");
                    break;
            }
        });
    });
}

function createMap(lngLat) {
    return new mapbox.Map({
        container: mapDiv,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: lngLat,
        zoom: 14
    });
}

function createMarker(color, lngLat) {
    return new mapbox.Marker({ color })
        .setLngLat(lngLat)
        .addTo(map);
}


async function getLocation() {
    try {
        let pos = await geolocate();
        p.textContent = "Latidude: " + pos.coords.latitude + ". Longitude: " + pos.coords.longitude
            + " (accuracy: " + pos.coords.accuracy + ")";
        // let imgUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/" +
        //     "pin-s-water+f00(" + pos.coords.longitude + "," + pos.coords.latitude + ")/"
        //     + pos.coords.longitude + "," + pos.coords.latitude + ",14,0,0/600x400?access_token=" + token;

        // imgMap.src = imgUrl;

        let lngLat = new mapbox.LngLat(pos.coords.longitude, pos.coords.latitude);

        map = createMap(lngLat);
        marker = createMarker('red', lngLat);

        map.on('click', e => {
            map.panTo(e.lngLat);
            marker.setLngLat(e.lngLat);
            // new mapbox.Popup()
            //     .setLngLat(e.lngLat)
            //     .setHTML(`Latitude: ${e.lngLat.lat}<br>Longitude: ${e.lngLat.lng}`)
            //     .addTo(map);
        });

        let geocoder = new MapboxGeocoder({
            accessToken: mapbox.accessToken,
            mapboxgl: mapbox,
            marker: false
            // marker: {
            //     color: 'red'
            // },
        });

        map.addControl(geocoder);

        geocoder.on('result', e => {
            console.log(e);
            marker.setLngLat(e.result.center);
        });


    } catch (msg) {
        p.textContent = msg;
    }
}

/*

*/
document.addEventListener('DOMContentLoaded', e => {
    p = document.getElementById("coords");
    // imgMap = document.getElementById("imgMap");
    mapDiv = document.getElementById("mapDiv");
    getLocation();
});