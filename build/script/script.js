jQuery(document).ready(function(){
var $listMenu = $('.menu ul li');
  
	$('.click').click(function(){
		  $('#burger').toggleClass('active');
    	$('.wrapper').toggleClass('menu_open');
		  if ($('#burger').hasClass('active')) {
         $listMenu.show();
		  		setTimeout(function(){	
				    $listMenu.css('opacity','1');
				    $listMenu.css('transform','translateY(0px)');
			  	}, 200);
			} else {
        	$listMenu.css('opacity','0');
				  $listMenu.css('transform','translateY(-40px)');
        	setTimeout(function(){	
            $listMenu.hide();
          }, 500);
			}
		  return false;
	});
});