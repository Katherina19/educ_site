/**
 * Created by Katherine on 06.05.2016.
 */
// Исходный граф
var graphArray = [
    [0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0],
    [0,1,0,1,1,0,1],
    [0,1,1,0,1,1,0],
    [0,0,1,1,0,1,1],
    [0,0,0,1,1,0,1],
    [0,0,1,0,1,1,0]
];

var nodeColor = [];

var sig1;
var sig2;
var s1 = {
    nodes: []
};
var s2 = {
    nodes: []
}

setEdge = function(n, sig){
    var num = 1;
    for(var i = 1; i < n; i++){
        for(var j = 1; j < n; j++){
            if(graphArray[i][j] == 1 && graphArray[j][i] == 1){
                sig.graph.addEdge({
                    "id": "e" + num,
                    "source": "n" + i,
                    "target": "n" + j,
                    "label": num,
                    "color": "#757575"
                });
                num++;
            }
        }
    }

    sig.refresh();
};

setNode = function(s, n, x, y, size, color) {
    s.nodes.push({
        id: "n" + n,
        label: String(n),
        x: x,
        y: y,
        size: size,
        color: color
    })
}

$(document).ready(function() {
    var n = graphArray.length;

    setNode(s1, 1, 0, 0, 3, "#757575");
    setNode(s1, 2, 3, 0, 3, "#757575");
    setNode(s1, 3, 0, 2, 3, "#757575");
    setNode(s1, 4, 4, 2, 3, "#757575");
    setNode(s1, 5, 4, 4, 3, "#757575");
    setNode(s1, 6, 1, 4, 3, "#757575");

    sig1 = new sigma({
        graph: s1,
        container: 'Graph1',
        settings: {
            defaultNodeColor: "#757575"
        }
    });

    setEdge(n, sig1);

    setNode(s2, 1, 0, 0, 3, "#757575");
    setNode(s2, 2, 3, 0, 3, "#757575");
    setNode(s2, 3, 0, 2, 3, "#757575");
    setNode(s2, 4, 4, 2, 3, "#757575");
    setNode(s2, 5, 4, 4, 3, "#757575");
    setNode(s2, 6, 1, 4, 3, "#757575");

    sig2 = new sigma({
        graph: s2,
        container: 'Graph2',
        settings: {
            defaultNodeColor: "#757575"
        }
    });

    setEdge(n, sig2);

    getGraph = function(){
        for(var i = 1; i < n; i++){
            nodeColor[i] = $("#select" + i).val();
        }

        var node = sig2.graph.nodes();

        for(var i = 0; i < node.length; i++){
            node[i].color = nodeColor[i+1];
        };

        sig2.refresh();
    };

    checkTask = function() {
        var edg = 0;
        var trueColor = 0;
        //var falseColor = 0;
        for(var i = 1; i < n; i++) {
            for (var j = i+1; j < n; j++) {
                if(graphArray[i][j] == 1 && graphArray[j][i] == 1){
                    edg++;
                    if(nodeColor[i] != nodeColor[j]) {
                        trueColor++;
                    }
                }
            }
        }

        if(edg == trueColor){
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
});