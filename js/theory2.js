/**
 * Created by Katherine on 20.05.2016.
 */
var graphArray = [
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,1],
    [1,0,1,0]
];

var sig1;
var sig2;

setEdge = function(n, sig, gArray){
    var num = 1;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            if(gArray[i][j] == 1 && gArray[j][i] == 1){
                sig.graph.addEdge({
                    "id": "e" + num,
                    "source": "n" + i,
                    "target": "n" + j,
                    "color": "#757575"
                });
                num++;
            }
        }
    }

    sig.refresh();
};

getExample = function(){
    var dialog = document.querySelector('.dialogExample2');
    dialog.show();

    document.querySelector('#closeDialogExample').onclick = function () {
        dialog.close();
    }

    var data = {
        "nodes": [
            {
                "id": "n0",
                "x": 0,
                "y": 0,
                "size": 3
            },
            {
                "id": "n1",
                "x": 3,
                "y": 0,
                "size": 3
            },
            {
                "id": "n2",
                "x": 1,
                "y": 3,
                "size": 3
            },
            {
                "id": "n3",
                "x": 4,
                "y": 2,
                "size": 3
            }
        ]
    };

    sig1 = new sigma({
        graph: data,
        container: 'graphExm1',
        settings: {
            defaultNodeColor: '#5e9400'
        }
    });

    setEdge(4, sig1, graphArray);

    var data = {
        "nodes": [
            {
                "id": "n0",
                "x": 0,
                "y": 0,
                "size": 3,
                "color": "#B71C1C"
            },
            {
                "id": "n1",
                "x": 3,
                "y": 0,
                "size": 3,
                "color": "#3F51B5"
            },
            {
                "id": "n2",
                "x": 1,
                "y": 3,
                "size": 3,
                "color": "#009688"
            },
            {
                "id": "n3",
                "x": 4,
                "y": 2,
                "size": 3,
                "color": "#3F51B5"
            }
        ]
    };

    sig2 = new sigma({
        graph: data,
        container: 'graphExm2',
        settings: {
            defaultNodeColor: '#5e9400'
        }
    });

    setEdge(4, sig2, graphArray)
};