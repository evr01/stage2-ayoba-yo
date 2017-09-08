
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
