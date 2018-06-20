$(function(){
	$('#submit').click(function(){
		var corpuss = $('#corpus').val().toString();
		var myurl = 'http://127.0.0.1:8000/?corpus='+corpuss;
		console.log(corpuss);
		$.ajax({
			url:myurl,
			type:'GET',
			dataType: 'json',
			crossDomain: true,
			success: function(data){
				$('#analysis').text(data.res);				
			}
		});
	
		
	});
});