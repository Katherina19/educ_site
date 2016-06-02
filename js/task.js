/**
 * Created by Katherine on 04.04.2016.
 */
var editor = ace.edit("editor");
editor.setTheme("ace/theme/clouds");
editor.getSession().setMode("ace/mode/javascript");

var tests = [
    {
        matrix: [
            [0,1,1,0,0],
            [1,0,0,1,0],
            [1,0,0,0,0],
            [0,1,0,0,1],
            [0,0,0,1,0]
        ],
        result: 1,
        text: '[[0,1,1,0,0], [1,0,0,1,0], [1,0,0,0,0], [0,1,0,0,1], [0,0,0,1,0]]'
    },
    {
        matrix: [
            [0,0,1,0,1],
            [0,0,1,0,0],
            [1,1,0,1,0],
            [0,0,1,0,0],
            [1,0,0,0,0]
        ],
        result: 1,
        text: '[[0,0,1,0,1], [0,0,1,0,0], [1,1,0,1,0], [0,0,1,0,0], [1,0,0,0,0]]'
    },
    {
        matrix: [
            [0,1,1,0,1],
            [1,0,1,0,0],
            [1,1,0,1,0],
            [0,0,1,0,0],
            [1,0,0,0,0]
        ],
        result: 0,
        text: '[[0,1,1,0,1], [1,0,1,0,0], [1,1,0,1,0], [0,0,1,0,0], [1,0,0,0,0]]'
    }
];

$('.btn-task2-check').click(function () {
    var val = editor.getValue();
    var func = eval(val + 'checkGraph');
    var test_bad = false;
    tests.forEach(function(test, i){
        if(func(test.matrix) != test.result){
            console.log(test.matrix);
            $('#result').text('Не пройден тест №' + (i+1) + ': ');
            $('#result').append('graphOstArray = ' + test.text);
            $('#result').append(' Ожидалось: ' + test.result + ' Результат: ' + func(test.matrix));
            test_bad = true;
            return;
        }
    });
    if(!test_bad) {
        $('#result').text('Все тесты пройдены');
    }
});