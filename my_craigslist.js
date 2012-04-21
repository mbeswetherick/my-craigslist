

getPageContents();


var priceArray = [];

function getPageContents(){
	//date
	var date = $('.ban');
	var category = $('.bchead').find('a');
	date = date.text();
	console.log(date);
	$("p").each( function (index) {
		try {
			//date again
			console.log(date);
			//price
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
			//specific location
			console.log($(this).find('font').text());
			//general location
			var url = $(location).attr('href');
			url = url.split('.');
			console.log(url[0].split('/')[2]);
			//category
			category = $('a[href$="pta/"]').text();
			category = category.split('-');
			category = category[0];
			console.log(category);
		} catch (TypeError) {}
	});
}





