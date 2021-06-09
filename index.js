function initialize()
{
    const geocoder = new google.maps.Geocoder();
    const autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"));
    google.maps.event.addListener(autocomplete, 'place_changed', ()=> {
        const place = autocomplete.getPlace();
        geocoder.geocode(
          { placeId: place.place_id },
            (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              latitude.value = results[0].geometry.location.lat();
              longitude.value = results[0].geometry.location.lng();
            }
          }
        );
    })
}