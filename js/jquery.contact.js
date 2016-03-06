(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	Parse.initialize("ORfIbExdxSmGrRXKkgdwromLqlUjftvMfOHSMXDN", "T12iCcWzLOEkvxVs5wF6y9wZHmF9jWlg0cEHZcuS");
	$('#cform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
			.attr('disabled','disabled');

		//$.post(action, {
		//	name: $('#name').val(),
		//	email: $('#email').val(),
		//	comments: $('#comments').val()
		//},
		//	function(data){
		//		document.getElementById('message').innerHTML = data;
		//		$('#message').slideDown('slow');
		//		$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
		//		$('#submit').removeAttr('disabled');
		//		if(data.match('success') != null) $('#cform').slideUp('slow');
		//	}
		//);
			var data = {
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				comments: document.getElementById('comments').value
			};

			// Run our Parse Cloud Code and
			// pass our 'data' object to it
			Parse.Cloud.run("sendEmail", data, {
				success: function (object) {
					document.getElementById('message').innerHTML = 'Email Sent !!';
					$('#message').slideDown('slow');
					$('#cform img.contact-loader').fadeOut('slow', function () {
						$(this).remove()
					});
					$('#submit').removeAttr('disabled');
					$('#cform')[0].reset();
				},

				error: function (object, error) {
					console.log(error);
					document.getElementById('message').innerHTML = 'There is some problem, please try again !!';
				}

			});

		});

		return false;

	});

});

}(jQuery));