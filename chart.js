function loadJSON(data) {
    var json = null;
    $.ajax({
        async: false,
        global: false,
        url: data,
        dataType: "json",
        success: function (data) {
            json = data;
        }
    });
    return json;
  }



var isData = loadJSON('/SampledRoadSchooldemoPatchingI64.json');

let features=isData.features;
var liri = isData.features.map(function (el) {
    return el.properties.L_IRI;
});
var riri = isData.features.map(function (el) {
    return el.properties.R_IRI;
});
var D0 = isData.features.map(function (el) {
    return el.properties.D0;
});
var D48 = isData.features.map(function (el) {
    return el.properties.D48;
});
var DMI = isData.features.map(function (el) {
    var dmiS = "" + el.properties.DMI;
    return dmiS;
});
var Index = isData.features.map(function (el) {
    return el.properties.index;
    
});
console.log("charts variables loaded");
var chart = {
    init: function () {

        chart.ecdf = Highcharts.chart('container-left', {
            
            chart: {
                width: 800,
                height: 270,
                spacingTop: 1.5,
                type: 'histogram',
                backgroundColor: '##2d3b54',
                borderColor:'#965a3e',
                borderWidth: 0.6,
                borderRadius: 6,
                spacingLeft: 10,
                spacingRight: 10,
                spacingBottom: 30

            },
            legend: {
                enabled: true,
                floating: true,
                width: 1040,
                reversed: true,
                itemHiddenStyle: {
                    color: '#656565',
                    fontSize: "14pt"
                },
                itemStyle: {
                    color: '#a9a9a9',
                    fontWeight: 'bold'
                },
                x: 450,
                y: 245,
                maxHeight: 20,
                padding: 0,
                verticalAlign: 'top'
            },
            title: {
                text: 'Histogram and scatter plot for Left IRI',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            },

            xAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                minorGridLineDashStyle: 'LongDash',
                minorTickInterval: 0.5,
                minorTickWidth: 1,
                minorTickColor: '#b0b0b0',
                title: { text: 'IRI (in/mi)',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            },
                alignTicks: false
            }, {
                title: { text: 'Histogram',
                style:{
                    fontSize:'11pt',
                    color:'#b0b0b0'
                }
            },
                alignTicks: false,
                opposite: true
            }],

            yAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickInterval: 1,
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                minorGridLineDashStyle: 'LongDash',
                minorTickInterval: 0.5,
                minorTickWidth: 1,
                minorTickColor: '#b0b0b0',
                title: { text: 'IRI (in/mi)',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            }
            }, {
                title: { text: 'Histogram' ,
                rotation: 270,
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
                x: 12,
                y: 10
            },
                
                opposite: true
            }],
            plotOptions: {
                histogram: {
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                        }
                    }
                }
            },

            series: [{
                name: 'index ',
                type: 'histogram',
                borderColor:'#ff7518',
                borderRadius: 5,
                borderWidth:2,
                color:'#ffb347',        
                xAxis: 1,
                yAxis: 1,
                baseSeries: Index,
                zIndex: -1
            }, {
                name: 'L_IRI',
                type: 'scatter',
                data: liri,
                id: Index,
                color:"black",
                accessibility: {
                    exposeAsGroupOnly: true
                },
            
                marker: {
                    radius: 2,
                    fillColor:'#00a86b',

                }
                
            }],
            
        });


        chart.stock = Highcharts.chart('container-right', {
            chart: {
                width: 800,
                height: 270,
                spacingTop: 1.5,
                type: 'histogram',
                backgroundColor: '##2d3b54',
                borderColor:'#965a3e',
                borderWidth: 0.6,
                borderRadius: 6,
                spacingLeft: 10,
                spacingRight: 10,
                spacingBottom: 30

            },
            legend: {
                enabled: true,
                floating: true,
                width: 800,
                reversed: true,
                itemHiddenStyle: {
                    color: '#656565',
                    fontSize: "14pt"
                },
                itemStyle: {
                    color: '#a9a9a9',
                    fontWeight: 'bold'
                },
                x: 175,
                y: 245,
                maxHeight: 20,
                padding: 0,
                verticalAlign: 'top'
            },
            title: {
                text: 'IRI and FWD Parameter line plots',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            },

            xAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                minorGridLineDashStyle: 'LongDash',
                minorTickInterval: 0.5,
                minorTickWidth: 1,
                minorTickColor: '#b0b0b0',
                title: { text: 'Index',
                    style: {
                        fontSize: '11pt',
                        color: '#b0b0b0',
                    }
                },
                categories: Index
                
            }],


            yAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickInterval: 100,
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                // minorGridLineDashStyle: 'LongDash',
                // minorTickInterval: 0.5,
                // minorTickWidth: 1,
                // minorTickColor: '#b0b0b0',
                labels: {
                    format: '{value}',
                    style: {
                        color: '#da9100'
                    }},
                title: { 
                    text: 'IRI(in/mi)',
                    style: {
                        color: '#da9100'
                    }
                },
                plotLines: [{
                    color: '#da9100',
                    width: 1,
                    value: 270
                }]
            }, {
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickInterval: 1,
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                title: { 
                    text: 'FWD (milliinches)' ,
                    style: {
                        color: '#a6e7ff'
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: '#a6e7ff'
                    }},
                    plotLines: [{
                        color: '#a6e7ff',
                        width:1,
                        value: 36.4
                    },
                    {
                        color: '#a6e7ff',
                        width:1,
                        value: 1.8

                    }
                ],
                
                opposite: true
            }],

            series: [{
                name: 'Right-IRI',
                color:'tomato',
                yAxis: 0,
                data: liri,
                tooltip: {
                    valueSuffix: 'in/mi'
                }

            }, {
                name: 'Left-IRI',
                color:'#1e90ff',
                yAxis:0,
                data: riri,
                tooltip: {
                    valueSuffix: 'in/mi'
                }
            },{
                name: 'surfaceDeflection',
                color:'#90ee90',
                yAxis:1,
                data: D0,
                tooltip: {
                    valueSuffix: 'miIn'
                }
            },{
                name: 'subgradeDeflection',
                color:'#ba55d3',
                yAxis:1,
                data: D48,
                tooltip: {
                    valueSuffix: 'miIn'
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 900
                    }
                    // chartOptions: {
                    //     legend: {
                    //         layout: 'horizontal',
                    //         align: 'center',
                    //         verticalAlign: 'bottom'
                    //     },
                    
                    // }
                }]
            }

        });


    },
}





var srData=loadJSON("https://artsy.ecn.purdue.edu/PatchingTables/I69.geojson");
// var isData = loadJSON('/SampledRoadSchooldemoPatchingI64.json');
let srfeatures=srData.features;
var liriSR = srData.features.map(function (el) {
    return el.properties.L_IRI_max;
    });
console.log(liriSR);

var ririSR = srData.features.map(function (el) {
    return el.properties.R_IRI_max;
});
var D0SR = srData.features.map(function (el) {
    return el.properties.D0_max;
});
var D48SR = srData.features.map(function (el) {
    return el.properties.D60_max;
});
var DMISR = srData.features.map(function (el) {
        var dmiS = "" + el.properties.ID;
        return dmiS;
});
var IndexSR = srData.features.map(function (el) {
    return el.properties.ID;
    
});
console.log("SR charts variables loaded");
var chart = {
    init: function () {

        chart.ecdf = Highcharts.chart('containerSR-left', {
            
            chart: {
                width: 800,
                height: 270,
                spacingTop: 1.5,
                type: 'histogram',
                backgroundColor: '##2d3b54',
                borderColor:'#965a3e',
                borderWidth: 0.6,
                borderRadius: 6,
                spacingLeft: 10,
                spacingRight: 10,
                spacingBottom: 30

            },
            legend: {
                enabled: true,
                floating: true,
                width: 1040,
                reversed: true,
                itemHiddenStyle: {
                    color: '#656565',
                    fontSize: "14pt"
                },
                itemStyle: {
                    color: '#a9a9a9',
                    fontWeight: 'bold'
                },
                x: 450,
                y: 245,
                maxHeight: 20,
                padding: 0,
                verticalAlign: 'top'
            },
            title: {
                text: 'Histogram and scatter plot for Left IRI',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            },

            xAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                minorGridLineDashStyle: 'LongDash',
                minorTickInterval: 0.5,
                minorTickWidth: 1,
                minorTickColor: '#b0b0b0',
                title: { text: 'IRI (in/mi)',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            },
                alignTicks: false
            }, {
                title: { text: 'Histogram',
                style:{
                    fontSize:'11pt',
                    color:'#b0b0b0'
                }
            },
                alignTicks: false,
                opposite: true
            }],

            yAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickInterval: 1,
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                minorGridLineDashStyle: 'LongDash',
                minorTickInterval: 0.5,
                minorTickWidth: 1,
                minorTickColor: '#b0b0b0',
                title: { text: 'IRI (in/mi)',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            }
            }, {
                title: { text: 'Histogram' ,
                rotation: 270,
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
                x: 12,
                y: 10
            },
                
                opposite: true
            }],
            plotOptions: {
                histogram: {
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                        }
                    }
                }
            },

            series: [{
                name: 'index ',
                type: 'histogram',
                borderColor:'#ff7518',
                borderRadius: 5,
                borderWidth:2,
                color:'#ffb347',        
                xAxis: 1,
                yAxis: 1,
                baseSeries: IndexSR,
                zIndex: -1
            }, {
                name: 'L_IRI',
                type: 'scatter',
                data: liriSR,
                id: IndexSR,
                color:"black",
                accessibility: {
                    exposeAsGroupOnly: true
                },
            
                marker: {
                    radius: 2,
                    fillColor:'#00a86b',

                }
                
            }],
            
        });


        chart.stock = Highcharts.chart('containerSR-right', {
            chart: {
                width: 800,
                height: 270,
                spacingTop: 1.5,
                type: 'histogram',
                backgroundColor: '##2d3b54',
                borderColor:'#965a3e',
                borderWidth: 0.6,
                borderRadius: 6,
                spacingLeft: 10,
                spacingRight: 10,
                spacingBottom: 30

            },
            legend: {
                enabled: true,
                floating: true,
                width: 800,
                reversed: true,
                itemHiddenStyle: {
                    color: '#656565',
                    fontSize: "14pt"
                },
                itemStyle: {
                    color: '#a9a9a9',
                    fontWeight: 'bold'
                },
                x: 175,
                y: 245,
                maxHeight: 20,
                padding: 0,
                verticalAlign: 'top'
            },
            title: {
                text: 'IRI and FWD Parameter line plots',
                style: {
                    fontSize: '11pt',
                    color: '#b0b0b0',
                },
            },

            xAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                minorGridLineDashStyle: 'LongDash',
                minorTickInterval: 0.5,
                minorTickWidth: 1,
                minorTickColor: '#b0b0b0',
                title: { text: 'Index',
                    style: {
                        fontSize: '11pt',
                        color: '#b0b0b0',
                    }
                },
                categories: IndexSR
                
            }],


            yAxis: [{
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickInterval: 100,
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                // minorGridLineDashStyle: 'LongDash',
                // minorTickInterval: 0.5,
                // minorTickWidth: 1,
                // minorTickColor: '#b0b0b0',
                labels: {
                    format: '{value}',
                    style: {
                        color: '#da9100'
                    }},
                title: { 
                    text: 'IRI(in/mi)',
                    style: {
                        color: '#da9100'
                    }
                },
                plotLines: [{
                    color: '#da9100',
                    width: 1,
                    value: 270
                }]
            }, {
                gridLineWidth: 0.5,
                gridLineColor: '#b0b0b0',
                tickInterval: 1,
                tickColor: '#b0b0b0',
                minorGridLineWidth: 0.25,
                minorGridLineColor: '#b0b0b0',
                title: { 
                    text: 'FWD (milliinches)' ,
                    style: {
                        color: '#a6e7ff'
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: '#a6e7ff'
                    }},
                    plotLines: [{
                        color: '#a6e7ff',
                        width:1,
                        value: 36.4
                    },
                    {
                        color: '#a6e7ff',
                        width:1,
                        value: 1.8

                    }
                ],
                
                opposite: true
            }],

            series: [{
                name: 'Right-IRI',
                color:'tomato',
                yAxis: 0,
                data: liriSR,
                tooltip: {
                    valueSuffix: 'in/mi'
                }

            }, {
                name: 'Left-IRI',
                color:'#1e90ff',
                yAxis:0,
                data: ririSR,
                tooltip: {
                    valueSuffix: 'in/mi'
                }
            },{
                name: 'surfaceDeflection',
                color:'#90ee90',
                yAxis:1,
                data: D0SR,
                tooltip: {
                    valueSuffix: 'miIn'
                }
            },{
                name: 'subgradeDeflection',
                color:'#ba55d3',
                yAxis:1,
                data: D48SR,
                tooltip: {
                    valueSuffix: 'miIn'
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 900
                    }
                    // chartOptions: {
                    //     legend: {
                    //         layout: 'horizontal',
                    //         align: 'center',
                    //         verticalAlign: 'bottom'
                    //     },
                    
                    // }
                }]
            }

        });


    },
}
    
    
    




