$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotal=Ethiopia',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});