

getPageContents();


var priceArray = [];

function getPageContents(){
	$("p").each( function (index) {
		try {
	 		var price = $(this).text().match(/\$\d+/);
	   		console.log(price[0]);
			//links
			var anchor = $(this).find('a');
			var link = $(anchor).attr('href');
			console.log($(anchor).attr('href'));
			//titles
			var title = $(this).find('a');
			title = title.text();
			console.log(title);
		} catch (TypeError) {}
	});
}





