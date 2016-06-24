$(document).ready(function() {
  	$('form').submit(function(event) {
      $("#reset").click(function(){
          $('.output').html('');
        //  $('.list').html('');
      });


      var numValue = $("#number").val();
      $('.output').html('');
      // $('.list').html('');
         console.log(numValue);
      var formData = {
        'number' : numValue
      };

      $.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'app.php', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			encode 		: true
		})
    .done(function(data) {
	      console.log(data);
       	if (data) {
          //	$('#name-group').addClass('has-error'); // add the error class to show red input
												var idx = 0;
												for( var i in data) {
                              if(data[i].match === "not found")
                                $('.output').append("<span class='well well-sm col-sm-4 text-center'>not found</span>");
                              else
                                $('.output').append("<h4><span class='label label-danger'>"+data[i].match+"</span></h4>");
															  //	$('.list').append("<li class='bg-info well well-sm'>"+data[i].match+"</li>");
                                // console.log(data[i].match);
												}
                    }
        else {
            $('.output').append("<font color='red' class='h3'>Failed to retrieve data!</font>");

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page
					}
		});
			/**********************************************************************************/

      		event.preventDefault();
    });

});
