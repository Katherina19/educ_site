// Работающая программа
function checkGraph(graphOstArray) {
    var countEdg = 0;
    var n = graphOstArray.length;
    var p = new Array(n);
    var g = 0;

    for(var i = 0; i < n; i++){
        for(var j = 0; j < i; j++){
            if(graphOstArray[i][j] == 1 && graphOstArray[j][i] == 1){
                countEdg++;
            }
        }
    }

    //console.log(countEdg);
    //console.log(n-1)
    //console.log('vvv')
    for(var i = 0; i < p.length; i++){
        p[i] = 0;
    }

    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
            if(graphOstArray[i][j] == 1 && graphOstArray[j][i] == 1){
                p[i]++;
            }
        }
    }

    for (var i = 1; i < p.length; i++){
        if (p[i] != 0){
            g++;
        }
    }

    if ((g == p.length-1) && (countEdg == n-1)) {
        return 1;
    } else {
        return 0;
    }
}
//    var j = 1;
//    var n = graphOstArray.length;
//    var p = new Array(n);
//    var g = 0;
//
//    for(var i = 0; i < p.length; i++){
//        p[i] = 0;
//    }
//
//    while (j < n){
//        for(var i = 0; i < j; i++) {
//            if(graphOstArray[i][j] == 1 && graphOstArray[j][i] == 1){
//                p[j]++;
//            }
//        }
//        j++;
//    }
//
//    for (var v = 0; v < p.length; v++){
//        if (p[v] > 1){
//            g++;
//        }
//    }
//
//    if (g != 0) {
//        return 0;
//    } else {
//        return 1;
//    }
//}