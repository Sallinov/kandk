$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST",
        dataType: "html",
        data: $("#"+ajax_form).serialize(),
        success: function(response) { //Данные отправлены успешно
        	$('#result_form').html('');
    	},
    	error: function(response) { // Данные не отправлены
          $('#result_form').html('');
    	}
 	});
}
