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

       $('.output').append("<span class='col-sm-1'></span><img src='loading3.gif' text-center' alt='Loader' width='250' height='150'>");

      $.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'app.php', // the url where we want to POST
			timeout :20000, // timeout forwaiting response.
      data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			encode 		: true
		})
    .done(function(data) {
	      console.log(data);
       	if (data) {
          $('.output').html('');
          //	$('#name-group').addClass('has-error'); // add the error class to show red input
												var idx = 0;
												for( var i in data) {
                              if(data[i].match === "not found")
                                $('.output').append("<span class='alert alert-danger col-sm-4 text-center'>"+data[i].match+"</span>");
                              else
                                $('.output').append("<h4><span class='label label-danger'>"+data[i].match+"</span></h4>");
															  //	$('.list').append("<li class='bg-info well well-sm'>"+data[i].match+"</li>");
                                // console.log(data[i].match);
												}
                    }
        else {
            $('.output').html('');
            $('.output').append("<font color='red' class='h3 alert alert-danger'>Failed to retrieve data!</font>");

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page
					}
		})
			/**********************************************************************************/
      .fail(function(data) {
                $('.output').html('');
                $('.output').append("<span class='alert alert-danger col-sm-4 text-center'>Failed to get response.</span>");
            });

      		event.preventDefault();
    });

});
