$(function(){
	$('#submit').click(function(){
		var corpus = $('#corpus').val().toString();
		$('#analysis').text(corpus);
		
	})
});