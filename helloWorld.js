document.addEventListener('DOMContentLoaded', function() {
  $('button').click(function(){
  	var url = $(this).data("url");

  	var frame = document.getElementById('myWorldFrame');
    frame.setAttribute('width', '500');
    frame.setAttribute('height', '500');
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('src',url);
  });
}, false);