

getPageContents();


var priceArray = [];

url = $(location).attr('href');
url = url.split('.');
split = url[2].split('/')
sub = split[1]



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
			//category cntd
			category = $(".bchead").children('a');
			category = category[2];
			category = $(category).text();
			console.log(category);
		} catch (TypeError) {}
	});
}





