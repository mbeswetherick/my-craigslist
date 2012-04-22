priceArray = [];
priceArray = getPageContents(priceArray);
maximum = maximum(priceArray);
minimum = minimum(priceArray);
average = average(priceArray);
range = range(maximum, minimum);
addChartDiv(maximum,minimum,average,range);


function getPageContents(priceArray){
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
			mathArray = [];
			//date again
			//console.log(date);
			postArray[0] = date;
			//price
	 		var price = $(this).text().match(/\$\d+/);
			price = price[0].replace('$','');
			price = parseInt(price);
	   		//console.log(price);
			mathArray[0] = price;
			postArray[1] = price;
			//links
			var anchor = $(this).find('a');
			var link = $(anchor).attr('href');
			//console.log($(anchor).attr('href'));
			postArray[2] = $(anchor).attr('href');
			//titles
			var title = $(this).find('a');
			title = title.text();
			title= title.split('-');
			title = title[0].trim();
			//console.log(title);
			mathArray[1] = title;
			postArray[3] = title;
			//specific location
			//console.log($(this).find('font').text());
			postArray[4] = $(this).find('font').text().replace('(','').replace(')','').trim();
			//general location
			var url = $(location).attr('href');
			url = url.split('.');
			//console.log(url[0].split('/')[2]);
			//postArray[5] = url[0].split('/')[2];
			//category
			category = $(".bchead").children('a');
			category = category[2];
			category = $(category).text();
			//console.log(category);
			postArray[6] = category;
			//query
			var query = $('input').attr('value');
			postArray[7] = query;
			//create the multi dimensional array for the graph
			priceArray[index] = mathArray
			//post
			$.post("http://postbin.heroku.com/837a36b9", { date: postArray[0], price: postArray[1], url : postArray[2], title : postArray[3], location_specific : postArray[4], location_wide: postArray[5], category: postArray[6], query:postArray[7] } );
		} catch (TypeError) {}
	});
	return priceArray;
}


function average(data){
	sum = 0;
		for(var i=0; i<data.length; i++) {
			try {
				if(data[i][0] == undefined){
					data[i][0] = 0;
				}
				sum += data[i][0];
			} catch (TypeError) { continue;}
		}
	return sum / data.length;
}

function maximum(data){
	maximum = 0;
	current = 0;
		for(var i=0; i<data.length; i++) {
			try {
				if(data[i][0] == undefined){
					data[i][0] = 0;
				}
				if(maximum < data[i][0]){
					maximum = data[i][0];
				}
			} catch (TypeError) { continue;}
		}
	return maximum;
}

function minimum(data){
	minimum = 0;
	var pair;
		for(var i=0; i<=data.length; i++) {
			try{
				console.log(data[i][0]);
				if(data[i][0] == undefined){
					data[i][0] = 0;
				}
				if(minimum > data[i][0]){
					minimum = data[i][0];
				}
			} catch (TypeError) {continue;}
		}
	return minimum;
}

function range(maximum, minimum){
	return maximum - minimum;
}



      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(postArray, maximum, minimum, range) {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Product');
        data.addColumn('number', 'Price');
        data.addRows([
		  ['Maximum', maximum],
		  ['Minimum', minimum],
		  ['Range', range]
        ]);

        // Set chart options
        var options = {'title':'How does this compare?',
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

var my_div = null;
var newDiv = null;

function addChartDiv(maximum,minimum,average,range)
{
  // create a new div element

  newDiv = document.createElement("img");
  newDiv.setAttribute("src", "https://chart.googleapis.com/chart?chxt=x,y&cht=bvs&chd=s:cEj9U&chco=F2C2E1&chs=400x400&chbh=a,30,30&chxl=0:|Maximum|Minimum|Average|Range&chd=t:"+maximum+","+minimum+","+average+","+range);


  // add the newly created element and it's content into the DOM
  my_div = document.getElementById("hidePics");
  document.body.insertBefore(newDiv, my_div);
}
