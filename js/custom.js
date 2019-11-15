jQuery(document).ready(function() {
	
	"use strict";
    $("#includedContent").load("newsContent.html");

      $('.showSingle').click(function(){
        $('.targetDiv').hide();
        $('#div'+jQuery(this).attr('target')).show();
        $(this).addClass('active').siblings().removeClass('active');
    });
});
