// https://playground.anychart.com/docs/v8/samples/WD_Data_from_JSON_04
anychart.onDocumentReady(function () {

    // JSON data
    var json = {
        // chart settings
        "chart": {
            // chart type
            "type": "column",
            // set chart title
//           SMALL INT MEMORY SIZE AFTER ENCRYPTION
//           SMALL INT TIME DIFFERENCE BETWEEN ENCRYPTION AND DECRYPTION
//           SMALL INT MEMORY DIFFERENCE BETWEEN ENCRYPTION AND DECRYPTION

            "title": "LARGE FILE MEMORY DIFFERENCE BETWEEN ENCRYPTION AND DECRYPTION",
            // series settings
            "series": [
  {
    "data": [
      {
        "x": "Salsa20",
        "value": "1.243207"
      },
      {
        "x": "ChaCha20",
        "value": "1.064654"
      },
      {
        "x": "AES-CTR",
        "value": "4.799036"
      },
      {
        "x": "ARC4",
        "value": "0.670587"
      },
      {
        "x": "AES",
        "value": "1.322206"
      }
    ]
  },
    {
    "data": [
      {
        "x": "Salsa20",
        "value": "0.00132"
      },
      {
        "x": "ChaCha20",
        "value": "0.000334"
      },
      {
        "x": "AES-CTR",
        "value": "0.751916"
      },
      {
        "x": "ARC4",
        "value": "0.00044"
      },
      {
        "x": "AES",
        "value": "0.000687"
      }
    ]
  },
    {
    "data": [
      {
        "x": "Salsa20",
        "value": "4.7e-05"
      },
      {
        "x": "ChaCha20",
        "value": "2.6e-05"
      },
      {
        "x": "AES-CTR",
        "value": "1.525333"
      },
      {
        "x": "ARC4",
        "value": "3.1e-05"
      },
      {
        "x": "AES",
        "value": "0.002119"
      }
    ]
  },
    {
    "data": [
      {
        "x": "Salsa20",
        "value": "0.095349"
      },
      {
        "x": "ChaCha20",
        "value": "0.056871"
      },
      {
        "x": "AES-CTR",
        "value": "0.292761"
      },
      {
        "x": "ARC4",
        "value": "0.03859"
      },
      {
        "x": "AES",
        "value": "0.083016"
      }
    ]
  }
]


                                                            // chart container
            ,"container": "container"
        }
    };

    // get JSON data
    var chart = anychart.fromJson(json);

    // draw chart
    chart.draw();
});