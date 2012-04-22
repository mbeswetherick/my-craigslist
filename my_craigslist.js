

getPageContents();


var priceArray = [];

url = $(location).attr('href');
url = url.split('.');
split = url[2].split('/')
sub = split[1]



function getPageContents(){
	//date
	url = $(location).attr('href');
	url = url.split('/');
	//the dates are formatted differently if there is a search ,'>/
	if(url[3] == "search"){
		var date = $(".row").text();
		date = date.trim();
		date = date.substring(0,7).trim();
	} else{
		var date = $('.ban');
		date = date.text();
		date = date.substring(3,date.length); 
		date = date.trim()
	}
	$("p").each( function (index) {
		try {
			//initialize post array
			postArray = [];
			//date again
			console.log(date);
			postArray[0] = date;
			//price
	 		var price = $(this).text().match(/\$\d+/);
			price = price[0].replace('$','');
			price = parseInt(price);
	   		console.log(price);
			postArray[1] = price;
			//links
			var anchor = $(this).find('a');
			var link = $(anchor).attr('href');
			console.log($(anchor).attr('href'));
			postArray[2] = $(anchor).attr('href');
			//titles
			var title = $(this).find('a');
			title = title.text();
			title= title.split('-');
			title = title[0].trim();
			console.log(title);
			postArray[3] = title;
			//specific location
			console.log($(this).find('font').text());
			postArray[4] = $(this).find('font').text().replace('(','').replace(')','').trim();
			//general location
			var url = $(location).attr('href');
			url = url.split('.');
			console.log(url[0].split('/')[2]);
			postArray[5] = url[0].split('/')[2];
			//category
			category = $(".bchead").children('a');
			category = category[2];
			category = $(category).text();
			console.log(category);
			postArray[6] = category;
			//query
			var query = $('input').attr('value');
			postArray[7] = query;
			//post
			$.post("http://postbin.heroku.com/837a36b9", { date: postArray[0], price: postArray[1], url : postArray[2], title : postArray[3], location_specific : postArray[4], location_wide: postArray[5], category: postArray[6], query:postArray[7] } );
		} catch (TypeError) {}
	});
}

function range(){

}









