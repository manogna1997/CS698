
//https://playground.anychart.com/docs/v8/samples/BCT_General_Settings_08
anychart.onDocumentReady(function () {


    // create a data set
    var data = anychart.data.set([
      ["Salsa20", "0.095349", "0.000967",0.0000047,0.00132,1.243207],
      ["ChaCha20", "0.056871", "0.000613",0.0000026,0.000334,1.064654],
      ["AES-CTR", "0.292761", "0.777558",1.525333,0.751916,4.799036],
      ["ARC4", "0.03859", "0.000297",0.0000031,0.00044,0.670587],
      ["AES", "0.083016", "0.00164",0.002119,0.000687,1.322206]
    ]);


    // map the data
    var seriesData_1 = data.mapAs({x: 0, value: 1});
    var seriesData_2 = data.mapAs({x: 0, value: 2});
    var seriesData_3 = data.mapAs({x: 0, value: 3});
    var seriesData_4 = data.mapAs({x: 0, value: 4});
    var seriesData_5 = data.mapAs({x: 0, value: 5});

    // set the chart type
    var chart = anychart.column();

    // create the first series, set the data and name
    var series1 = chart.column(seriesData_1);
    series1.name("Big File (50 MB)");

    // create the second series, set the data and name
    var series2 = chart.column(seriesData_2);
    series2.name("Small File (250 KB)");

    var series3 = chart.column(seriesData_3);
    series3.name("String Big (1 KB)");

    var series4 = chart.column(seriesData_4);
    series4.name("String Small (14 b)");

    var series5 = chart.column(seriesData_5);
    series5.name("Very Large File (500 MB)");

    // enable the legend
    chart.legend(true);

    // set the chart title


    // set the titles of the axes
    chart.xAxis().title("Ciphers");
    chart.title("Power Consumption");
    chart.yAxis().title("Watts, (W)");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});