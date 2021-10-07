 
window.onload = function() {
    $('#loader').fadeOut(4000, function() {
        $('pre-loader').css('visibility', 'hidden');
        $('body').css('visibility', 'visible')
        $('body').css('overflow', 'visible');
    });
}


location.reload = function () {
    $('#loader').fadeOut(4000, function() {
        $('pre-loader').css('visibility', 'hidden');
        $('body').css('visibility', 'visible')
        $('body').css('overflow', 'visible');
    });
  }


