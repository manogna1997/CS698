// https://playground.anychart.com/docs/v8/samples/WD_Data_from_JSON_04
anychart.onDocumentReady(function () {

    // JSON data
    var json = {
        // chart settings
        "chart": {
            // chart type
            "type": "column",
            // set chart title
            "title": "STRING SMALL TIME DIFFERENCE BETWEEN ENCRYPTION AND DECRYPTION IN MILLISECONDS",
            // series settings
            "series": [
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0001019"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000989"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.7038589"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000600"
                        },
                        {
                            "x": "AES",
                            "value": "0.0006589"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000539"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000609"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.2301399"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000330"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005910"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000519"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000600"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.1917400"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000300"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005879"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000460"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000570"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0549640"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005829"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000559"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000589"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0448130"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000300"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005730"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000500"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000620"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0513859"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005890"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000530"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000360"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9891540"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005580"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000509"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000330"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9382619"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0007500"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000500"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0585930"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005419"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000469"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000330"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0381210"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005330"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000460"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.7563279"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005349"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8359860"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005060"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000469"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.7423180"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005169"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000460"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6857949"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004960"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000450"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000330"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8109619"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000300"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004920"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000430"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000300"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8263720"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005019"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6553539"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0006759"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000469"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000360"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.7905889"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004989"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8826169"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004979"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000469"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9430180"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004920"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8807689"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004939"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000509"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8833700"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004970"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000950"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000300"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.7226179"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004910"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000639"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8717829"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004910"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000369"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0241559"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004949"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000330"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8527490"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004970"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0324859"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0006780"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000460"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "10.0997550"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004960"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000539"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0702170"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004939"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000559"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9066710"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004939"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000339"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000310"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.8046210"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004899"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000419"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000369"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9375210"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004929"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000739"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9643569"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004899"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000589"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000519"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9102139"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004910"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000570"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000330"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9404620"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004970"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000530"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000369"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0576239"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0006750"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000489"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000559"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "5.0322839"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004840"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000530"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000570"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.9080830"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005109"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000509"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000450"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6845739"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004949"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000489"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000530"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6537620"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0005019"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000530"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000500"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6807970"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004800"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000500"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000550"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6725279"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004789"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000729"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000519"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6784100"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004809"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000419"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000950"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6768029"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000290"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004829"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000319"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0006599"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6811910"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0006700"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000300"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000679"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6588079"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000430"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004820"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000290"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000629"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6693780"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000269"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004780"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000290"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000609"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6751579"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004789"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000480"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000589"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6637570"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000279"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004739"
                        }
                    ]
                },
                {
                    "data": [
                        {
                            "x": "Salsa20",
                            "value": "0.0000339"
                        },
                        {
                            "x": "ChaCha20",
                            "value": "0.0000589"
                        },
                        {
                            "x": "AES-CTR",
                            "value": "4.6377240"
                        },
                        {
                            "x": "ARC4",
                            "value": "0.0000269"
                        },
                        {
                            "x": "AES",
                            "value": "0.0004780"
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