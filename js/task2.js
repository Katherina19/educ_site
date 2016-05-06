/**
 * Created by Katherine on 06.05.2016.
 */
var graphArray = [];
var sig1;
var sig2;

getGraphArray = function(n){
    for(var i = 1; i <= n; i++){
        graphArray[i] = [];
        for(var j = 1; j <= n; j++) {
            graphArray[i][j] = $('#id' + String(i) + j).val();
        }
    }
};

setEdge = function(n, sig){
    var num = 1;
    for(var i = 1; i <= n; i++){
        for(var j = 1; j <= n; j++){
            if(graphArray[i][j] == 1 && graphArray[j][i] == 1){
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

$(document).ready(function() {
    var n = $('.column-text-array-task2 .table-array tr:first-child td:last-child').text(); //Количество вершин
    console.log(n);
    n = Number(n);
    getGraphArray(n);

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
                "x": 0,
                "y": 2,
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
            },
            {
                "id": "n6",
                "label": "6",
                "x": 1,
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

    setEdge(n, sig1);

    sig2 = new sigma({
        graph: data,
        container: 'Graph2',
        settings: {
            defaultNodeColor: '#5e9400'
        }
    });

    getGraph = function(){
        getGraphArray(n);

        var edg = sig2.graph.edges();
        for(var i = 0; i < edg.length; i++){
            sig2.graph.dropEdge(edg[i].id);
        }

        setEdge(n, sig2);
    };
});