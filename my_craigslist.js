

price();


var priceArray = [];

function price(){
	$("p").each( function () {
		try {
	 		var price = $(this).text().match(/\$\d+/);
	   		console.log(price[0]);
		} catch (TypeError) {}
	});
}


