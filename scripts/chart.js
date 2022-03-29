const chartDataInitial = {   
    title: {
        text: 'ITIC CURVE'
    },      
    chart: {
        type: 'line',           
        height: null,
        width: null,  
        backgroundColor:'transparent',   
        plotBackgroundImage: '/src/core/assets/icons/map/01.png',
    },        
    credits: {
        enabled: false
    },
    xAxis: {
        name: 'milliseconds',
        categories: [0, "", "", "", 0.01, "", 1, 3, "", 20, "", "", 500, "", "", 10000, "", 200000]
    },
    yAxis: {
        name: 'depth',
        max: 500
    },
    series: [{
        color: 'rgba(173, 216, 230, 0.5)',
        name: 'Polygons',
        type: 'polygon',
        data: [
            [0, 0],
            [9, 0], //20
            [9, 70],
            [0,70],
            null, // allows multiple polygons         
            [0, 70],
            [12, 70],
            [12, 80], //500
            [0, 80],
            null, // allows multiple polygons
            [0, 80],
            [15, 80],
            [15, 90],//10000
            [0, 90],
            null,
            [0, 90],
            [17, 90],
            [17, 110],
            [0, 110],
            null,
            [0, 110],
            [12, 110],
            [12, 120],
            [0, 120],
            null,
            [0, 120],
            [7, 120],
            [7, 140], //3
            [0, 140],
            null,
            [0, 140],
            [6, 140],
            [6, 200], //1
            [0,200],
            null,
            [6, 140],//1
            [7, 140],//3
            [6, 200],//1
            null,
            [0, 200],
            [4, 200], //0.01
            [4, 500],
            [0, 500],
            null,
            [4, 200],
            [6, 200],
            [4, 500],


        ]
    }]
}  