/**
 * Created by Katherine on 05.05.2016.
 */
var graphArray = [];
var graphOstArray = [];
var sig1;
var sig2;

getGraphArray = function(n, gArray){
    for(var i = 1; i <= n; i++){
        gArray[i] = [];
        for(var j = 1; j <= n; j++) {
            gArray[i][j] = Number($('#id' + String(i) + j).val());
        }
    }
};

setEdge = function(n, sig, gArray){
    var num = 1;
    for(var i = 1; i <= n; i++){
        for(var j = 1; j <= n; j++){
            if(gArray[i][j] == 1 && gArray[j][i] == 1){
                sig.graph.addEdge({
                    "id": "e" + num,
                    "source": "n" + i,
                    "target": "n" + j
                });
                num++;
            }
        }
    }

    sig.refresh();
};

$(document).ready(function(){
    var n = $('.column-text-array .table-array tr:first-child td:last-child').text(); //Количество вершин
    n = Number(n);
    getGraphArray(n, graphArray);

    var data = {
        "nodes": [
            {
                "id": "n1",
                "label": "1",
                "x": 0,
                "y": 0,
                "size": 3
            },
            {
                "id": "n2",
                "label": "2",
                "x": 3,
                "y": 0,
                "size": 3
            },
            {
                "id": "n3",
                "label": "3",
                "x": 1,
                "y": 3,
                "size": 3
            },
            {
                "id": "n4",
                "label": "4",
                "x": 4,
                "y": 2,
                "size": 3
            },
            {
                "id": "n5",
                "label": "5",
                "x": 4,
                "y": 4,
                "size": 3
            }
        ]
    };

    sig1 = new sigma({
        graph: data,
        container: 'Graph1',
        settings: {
            defaultNodeColor: '#5e9400'
        }
    });

    sig1.settings('mouseEnabled', 0);

    setEdge(n, sig1, graphArray);

    sig2 = new sigma({
        graph: data,
        container: 'Graph2',
        settings: {
            defaultNodeColor: '#5e9400'
        }
    });

    sig2.settings('mouseEnabled', 0);

    getGraph = function(){
        var graphCheck = 0;
        getGraphArray(n, graphOstArray);
        for(var i = 1; i <= n; i++){
            for(var j = 1; j <= n; j++){
                if(graphOstArray[i][j] == 1 && graphOstArray[j][i] != 1){
                    var dialog = document.querySelector('.dialogError');
                    dialog.show();

                    document.querySelector('#closeDialogError').onclick = function() {
                        dialog.close();
                    };
                    graphCheck++;
                }

            }
        }

        for(var i = 1; i <= n; i++) {
            for (var j = 1; j <= n; j++) {
                if (graphOstArray[i][j] == 1 && graphOstArray[j][i] == 1 && graphArray[i][j] != 1) {
                    var dialog = document.querySelector('.dialogErrorEdg');
                    dialog.show();

                    document.querySelector('#closeDialogErrorEdg').onclick = function () {
                        dialog.close();
                    };
                    graphCheck++;
                }

            }
        }

        var k = 0;
        for(var i = 1; i <= n; i++) {
            for (var j = 1; j <= n; j++) {
                //console.log(graphOstArray[i][j]);
                //graphOstArray[i][j] = Number(graphOstArray[i][j]);
                //console.log(graphOstArray[i][j]);
                if (graphOstArray[i][j] == 1 || graphOstArray[i][j] == 0) {
                    k++;
                } else {
                    var dialog = document.querySelector('.dialogErrorInput');
                    dialog.show();

                    document.querySelector('#closeDialogErrorInput').onclick = function () {
                        dialog.close();
                    };
                    graphCheck++;
                }
            }
        };
        //console.log(k)

        if (graphCheck == 0) {
            var edg = sig2.graph.edges();
            for(var i = 0; i < edg.length; i++){
                sig2.graph.dropEdge(edg[i].id);
            }

            setEdge(n, sig2, graphOstArray);
        }
    };

    $('.btn-reload').click(function(){
        for(var i = 1; i <= n; i++){
            for(var j = 1; j <= n; j++) {
                $('#id' + String(i) + String(j)).val(graphArray[i][j]);
            }
        }
    });

    checkTask = function() {
        var countEdg = 0;
        var g = 0;

        for(var i = 1; i <= n; i++){
            for(var j = 1; j < i+1; j++){
                if(graphOstArray[i][j] == 1 && graphOstArray[j][i] == 1){
                    countEdg++;
                }
            }
        }

        var p = new Array(n+1);

        for(var i = 1; i < p.length; i++){
            p[i] = 0;
        }

        for(var i = 1; i <= n; i++){
            for(var j = 1; j <= n; j++){
                if(graphOstArray[i][j] == 1 && graphOstArray[j][i] == 1){
                    p[i]++;
                }
            }
        }

        //console.log(p)
        for (var i = 1; i < p.length; i++){
            //console.log(p[i])
            if (p[i] == 0){
                g++;
            }
        }
        //console.log(g)

        if ((g == 0) && (countEdg == n-1)) {
            var dialog = document.querySelector('.dialogTrue');
            dialog.show();

            document.querySelector('#closeDialogTrue').onclick = function() {
                dialog.close();
            };
        } else {
            var dialog = document.querySelector('.dialogFalse');
            dialog.show();

            document.querySelector('#closeDialogFalse').onclick = function() {
                dialog.close();
            };
        }
    }

});