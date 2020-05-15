$(document).ready(function(){

		var d1 = $("#1");
    	var d2 = $("#2");
    	var d3 = $("#3");
    	var d4 = $("#4");

    	var egl = $("#egl");
    	var esl = $("#esl");
    	var adv = $("#adv");

    	var q1 = $("input[name='hs-us']");
    	var q2 = $("input[name='5-hs-us']");
    	var q3 = $("input[name='gpa']");
    	var q4 = $("input[name='country']");

    	var is_5_hs_res;
    	var is_gpa_res;
    	var is_country_res;



	$(q1).on( "click", function(event) {
			is_hs_res = ($("input[name='hs-us']:checked").val());
			
			if (is_hs_res == "Y") {//if hs yes
				d2.show();
				esl.hide();
			  	egl.hide();
				d3.hide();
				d4.hide();
			  	adv.hide();

				$(q2).on( "click", function() {
	  				is_5_hs_res = ($("input[name='5-hs-us']:checked").val());
					
					if (is_5_hs_res == "Y") { // if 5 hs yes
						d3.show();
			  			egl.hide();
			  			adv.hide();
			    		$(q3).on( "click", function() {
			  				is_gpa_res = ($("input[name='gpa']:checked").val());

			  				if (is_gpa_res == "Y") { // if gpa yes
			  					adv.show();
			  					egl.hide();
			  				} else {				// if gpa no
			  					adv.hide();
			  					egl.show();
			  				}
						});
					} else {		// if 5 hs no
						d3.hide();
			  			adv.hide();
			  			egl.show();
					}
				});
			} else { 		// if hs no
				d2.hide();
				esl.hide();
				d3.hide();
				d4.show();
				egl.hide();

				$(q4).on( "click", function() {
  					is_country_res = ($("input[name='country']:checked").val());

  					if (is_country_res == "Y") {
  						egl.show();
  						esl.hide();

  					} else {
  						esl.show();
  						egl.hide();

  					}
				});
			}

	});//end of first hs on click event

});