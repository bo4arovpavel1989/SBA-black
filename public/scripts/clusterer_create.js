var points=[];

function chooseBK(){
	$('#bkSelect').on('change', function(e){
		e.preventDefault();
		var bk = $(this).val();
		getPPSCoordinates(bk);
	});
}

function getPPSCoordinates(bk){
	points=[];
	$('#map').empty();
	$.ajax({
		url: '/bkpps/ppscoordinates' + bk + '.json',
		dataType: 'json',
		success: function(data){
			data.forEach(dat=>{
				points.push({bk: dat.bk, coords:dat.data.geometry.coordinates, description: dat.data.properties.description});
			})
			drawMap();
		}		
	});

}

function drawMap(){
	var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            behaviors: ['default', 'scrollZoom']
        }, {
            searchControlProvider: 'yandex#search'
        }),
            clusterer = new ymaps.Clusterer({
            preset: 'islands#invertedVioletClusterIcons',
            groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: true,
            geoObjectHideIconOnBalloonOpen: false
        }),
            getPointData = function (index, bk, desc) {
            return {
                balloonContentBody: 'ППС ' + bk + '\r\n' + desc,
                clusterCaption: 'ППС ' + bk + '\n\r' + desc
            };
        },
            getPointOptions = function () {
            return {
                preset: 'islands#violetIcon'
            };
        },
        geoObjects = [];
    for(var i = 0, len = points.length; i < len; i++) {
        geoObjects[i] = new ymaps.Placemark(points[i].coords, getPointData(i, points[i].bk, points[i].description), getPointOptions());
    }
    clusterer.options.set({
        gridSize: 80,
        clusterDisableClickZoom: false
    });
    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);

    myMap.setBounds(clusterer.getBounds(), {
        checkZoomRange: true
    });
}

ymaps.ready(function () {
	//todo - function of getting pps coordinates from db, depending on filter oresets
	chooseBK();
 
});