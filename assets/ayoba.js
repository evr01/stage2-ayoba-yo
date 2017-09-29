
 /* Instagram functionality */
 var userFeed = new Instafeed({
    get: 'user',
    userId: '1613459458',
    clientId: '855f39a5b0fd41cd8e8b8386ae7a6313',
    accessToken: '1613459458.1677ed0.4b9cafbc279041d286a5ce0b091033bb',
    resolution: 'standard_resolution',
    target: 'feed',
    template: '<li class="">'+
			  	'<a href="{{link}}" target="_blank">'+
				  	'<img src="{{image}}" class="image" />'+
				  /*	'<div class="caption">{{caption}}</div>'+ */
			  	'</a>'+
			  '</li>',
       after: function () {
        $('#feed').slick({
        	slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
  			cssEase: 'linear',
  			arrows: false,
  			infinite: true,
  			lazyLoad: 'ondemand',
  			pauseOnHover: true, 
  			touchMove: true,
        });
    },
    sortBy: 'most-recent',
    links: false
  });
  userFeed.run();

/* Form submit prevent default modal until form passes validation  */
$(document)
  // field element is invalid
  .on("invalid.zf.abide", function(ev,elem) {
    console.log("Field id "+ev.target.id+" is invalid");
  })
  // field element is valid
  .on("valid.zf.abide", function(ev,elem) {
    console.log("Field name "+elem.attr('name')+" is valid");
  })
  // form validation failed
  .on("forminvalid.zf.abide", function(ev,frm) {
    console.log("Form id "+ev.target.id+" is invalid");
  })
  // form validation passed, form will submit if submit event not returned false
  .on("formvalid.zf.abide", function(ev,frm) {
    console.log("Form id "+frm.attr('id')+" is valid");
    // ajax post form 
  })
  // to prevent form from submitting upon successful validation
  .on("submit", function(ev) {
    if( document.getElementById('mc-embedded-subscribe-form').value === '' ){
      ev.preventDefault();
      console.log("Submit for form id "+ev.target.id+" intercepted");
      //add reveal prevent default
    }
    else { 
      var form = document.getElementById("mc-embedded-subscribe-form");

      document.getElementById("mc-embedded-subscribe").addEventListener("click", function () {
        form.submit();
      });



    }
  });

// You can bind field or form event selectively
$("#mc-embedded-subscribe-form").on("invalid.zf.abide", function(ev,el) {
  $('#subscribe').foundation('close');
});
$("#mc-embedded-subscribe-form").on("formvalid.zf.abide", function(ev,frm) {
  $('#subscribe').foundation('open');
});

// nested modal for blog/recipe sign-ups
$("#mc-embedded-subscribe[data-modal='blog-subscribe-click']").click(function() {
  
  $(document).on("submit", function(ev) {
       $('#blog-subscribe').foundation('open');
    });
});



