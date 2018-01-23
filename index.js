$('#search-btn').on('click', function(){
  if ($('input').val() != ''){
    getFood();
  }
});

$('input').on('keyup', function(e){
  if ((e.keyCode == 13 || e.which == 13) && $('input').val() != ''){
    getFood();
  }
});

$('#hub').on('click', function() {
  $(this).toggleClass("surprise");
  $('body').toggleClass("black-back");
})

function check_words(data, name)
{
  var data_list = data.split(' ');
  var name_list = name.split(' ');
  for (var i = 0; i < data_list.length; i++) {
    for (var j = 0; j < name_list.length; j++) {
      if (data_list[i].toUpperCase().match(name_list[j].toUpperCase()))
        return true;
    }
  }
  return false;
}

function getGoogleMapsLink(address, zip) {
  var link = '<a class="google-search-button" target="_blank" href="https://www.google.com/maps/place/';
  address = address.replace(/\s/g, "+");
  link += address;
  link += ",+" + zip + '/"><img src="http://www.icon100.com/up/3908/128/135-google-map.png" height="20" width="20"></a>';
  return link;
}

function formatPrice(price)
{
  var int_price = parseInt(price);
  return "$" + (int_price / 100).toFixed(2);
}

function getFood() {
  $.getJSON("./db.json", function(data){
    $('#results').empty();
    var name = $('input').val();
    var x = 0;
    for (var i = 0; i < data.length; i++){
      if (check_words(data[i]['name'], name)) {

        var map = getGoogleMapsLink(data[i]['address'], data[i]['zip']);

        $('#results').append(
          '<div class="well"><span class="menu-item">' + data[i]['name'] + ' - ' + formatPrice(data[i]['price']) + 
          '</span><a class="twitter-share-button" target="_blank" href="https://twitter.com/intent/tweet?text=Try%20out%20this%20place!%20'
          + data[i]['merchant'] +
          '"><img src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" height="20" width="20"></a>' + map +
          '</br><hr>' 
          + data[i]['merchant'] +
          '</br>'
          + data[i]['address'] +
          '<br>' 
          + data[i]['zip'] +
          '</br><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2F0.0.0.0%3A8080%2Findex.html&layout=button_count&size=small&mobile_iframe=true&width=69&height=20&appId" width="69" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>');
        
        ++x;        
        if (x % 2 == 1) {
          $('.well').css('margin-left', -$(window).width()).animate({marginLeft: 0}, 500);
        } else {
          $('.well').css('margin-left', $(window).width()).animate({marginLeft:0}, 500);
        }

      }
    }
  }
  );
};

// $('#search-btn').on('click', function(){
//   if ($('input').val() != ''){
//     getFood();
//   }
// });
// $('input').on('keyup', function(e){
//   if ((e.keyCode == 13 || e.which == 13) && $('input').val() != ''){
//     getFood();
//   }
// });
// function check_words(data, name)
// {
//   var data_list = data.split(' ');
//   var name_list = name.split(' ');
//   for (var i = 0; i < data_list.length; i++) {
//     for (var j = 0; j < name_list.length; j++) {
//       if (data_list[i].toUpperCase().match(name_list[j].toUpperCase()))
//         return true;
//     }
//   }
//   return false;
// }

// function formatPrice(price)
// {
//   var int_price = parseInt(price);
//   return "$" + (int_price / 100).toFixed(2);
// }

// function getFood() {
//   // ajax request
//   // $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $('input').val() + "&limit=10&format=json&callback=?", function(data){
//   $.getJSON("./db.json", function(data){
//     // console.log(data);
//     // Empty input and results
//     $('#results').empty();
//     var value = "";
//     name = $('input').val();
//         if (!name){
//        $('#results').append(
//       '<p style="font-size:150%; color:#fafafa;">Please enter what you crave!</p>');
//     }
// // Append results
//     for (i=0; i<data.length; i++){
//       if (check_words(data[i]['name'], name)) {
//     $('#results').append(
//       '<div class="well">' + data[i]['name'] + ' - ' + formatPrice(data[i]['price']) + 
//       '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Try%20out%20this%20place!%20'
//       + data[i]['merchant'] +
//       '"><img src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" height="20" width="20"></a></br><hr>' 
//       + data[i]['merchant'] +
//       '</br>'
//       + data[i]['address'] +
//       '<br>' 
//       + data[i]['zip'] +
//       '</br><iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2F0.0.0.0%3A8080%2Findex.html&layout=button_count&size=small&mobile_iframe=true&width=69&height=20&appId" width="69" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>');
//       }
//      // animations
//       if (i%2 == 1) {
//       $('.well')
//       .css('margin-left', -$(window).width())
//         .animate({
//         marginLeft: 0
//       }, 500);
//     } else {
//       $('.well')
//       .css('margin-left', $(window).width())
//       .animate({
//         marginLeft:0
//       }, 500);
//     }
//     // animations
//     }
//   }
//   );
// };