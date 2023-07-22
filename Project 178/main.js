let latitude = 22.7868542, longitude = 88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

var map = new mapboxgl.Map({
    container : 'map',
    style : "mapbox://styles/mapbox/streets-v11",
    center : [longitude,latitude],
    zoom : 4
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions : {
            enableHighAccuracy : true
        },
        trackUserLocation : true
    })
)

var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gateway")
var img3 = document.querySelector("#gate")
var img4 = document.querySelector("#lotus")
var img5 = document.querySelector("#victoria")

var marker1 = new mapboxgl.Marker({
    element : img1
})
var marker2 = new mapboxgl.Marker({
    element : img2
})
var marker3 = new mapboxgl.Marker({
    element : img3
})
var marker4 = new mapboxgl.Marker({
    element : img4
})
var marker5 = new mapboxgl.Marker({
    element : img5
})

.setLngLat([75.85133,26.98547])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken : mapboxgl.accessToken,
        mapboxgl : mapboxgl
    })
)