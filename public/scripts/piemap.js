var filter=[];
var points=[];
ymaps.ready(function () {
	addToFilter();
	showOnMap();

    
});


	
function addToFilter(){
	$('#addToFilter').on('submit', function(e){
		e.preventDefault();
		let bk = $('#bkSelect').val();
		if (filter.indexOf(bk) == -1)
		{
			filter.push(bk);
			$('#bkFilterList').append(' ' + bk);
		}
	});
}

function showOnMap(){
	$('#showMap').on('click', function(){
		$('#map').empty();
		getPoints(filter, function(ready){
			if(ready) drawMap();
		});
	});
}

function getPoints(bks, callback){
	var counter = bks.length;
	bks.forEach(function(bk){
	$.ajax({
		url: '/bkpps/ppscoordinates' + bk + '.json',
		dataType: 'json',
		success: function(data){
			data.forEach(dat=>{
				points.push({bk: dat.bk, coords:dat.data.geometry.coordinates, description: dat.data.properties.description});
			})
			counter--;
			if (counter==0)callback(true);
		}		
	});
	});
}

function drawMap(){
	  $('#bkFilterList').empty();
	  var colorsFilter=[];
	  var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Значения цветов иконок.
        placemarkColors = [
            '#DB425A', '#4C4DA2', '#00DEAD', '#D73AD2',
            '#F8CC4D', '#F88D00', '#AC646C', '#548FB7',
			'#DB355A', '#4C32A2', '#03DEA3', '#D73AD2',
            '#F8CC4D', '#F88D00', '#AC326C', '#548FB7',
			'#Df259A', '#424DA2', '#0223AD', '#D73AD2',
            '#F2693D', '#F86D00', '#AA646C', '#AC8F77'
        ],
        clusterer = new ymaps.Clusterer({
            // Макет метки кластера pieChart.
            clusterIconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            clusterIconPieChartRadius: 25,
            // Радиус центральной части макета.
            clusterIconPieChartCoreRadius: 10,
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            clusterIconPieChartStrokeWidth: 3
        }),
        geoObjects = [];

    for (var i = 0, len = points.length; i < len; i++) {
        geoObjects[i] = new ymaps.Placemark(points[i].coords, {}, {
            iconColor: getColor(points[i].bk)
        });
    }

    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);

    myMap.setBounds(clusterer.getBounds(), {
        checkZoomRange: true
    });
	function getColor(bk) {
        var indexNum=filter.indexOf(bk);
		if(colorsFilter.indexOf(bk) == -1){
			colorsFilter.push(bk);
			$('#bkFilterList').append('<li style="color:'+placemarkColors[indexNum]+';display:inline;">'+bk+'&emsp;</li>')
		}
		return placemarkColors[indexNum];
    }
}	