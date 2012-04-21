
$("body").mouseover(function(){
    price();
});

function price(){
	alert('wedep');
	$(".row").each( function () {
		var price = this.match('\$\d\+');
		console.log(price);
	});
}
