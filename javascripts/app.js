
	var main = function() {
		"use strict";
		

 
 var mysearch = function() {
	 var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	  $.getJSON(url,
        {
          tags: $(".search").val(),
          tagmode: "any",
          format: "json"
        },
        function(data) {
          $.each(data.items, function (i,item) {
            $("<img/>").attr("src", item.media.m).prependTo(".photos");
            if ( i == 50) return false;
            $(".search").val("");
		 } );
        } );
      };
   
  $(".button").on("click", function() { 
		  mysearch(); 
  });
  
      
 $(".search").on("keypress", function() {
	 if (event.keyCode ===13) {
	 mysearch();
 }

 
 } );    
	
 
}

	

	$(document).ready(main);

