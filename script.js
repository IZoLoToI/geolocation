    function getCityName(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data.address.city || data.address.town || data.address.village || 'Неизвестный город';
            });
    }

    navigator.geolocation.getCurrentPosition(position =>{
        const {latitude,longitude} = position.coords;
        map.innerHTML = '<iframe width="700" height="300" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=15&amp;output=embed"></iframe>';

        getCityName(latitude, longitude).then(city => {
            document.getElementById('city').innerHTML = `Ваш город: ${city}`;
        });
    })