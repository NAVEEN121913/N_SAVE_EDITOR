function readFile(input) {
    var text = document.getElementById('text');
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file)

    reader.onload = function() {

        var ext = /html.*/i
        if (!file.type.match(ext)) {
            alert('Please Select HTML File')
        } else {
            p1.innerHTML = '<>' + ' ' + file.name
            text.innerHTML = reader.result
        }
    }
}

function readFiles(input) {
    var text = document.getElementById('cssstyle');
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file)

    reader.onload = function() {
        var ext = /css.*/i
        if (!file.type.match(ext)) {
            alert('Please Select CSS File')
        } else {
            p2.innerHTML = '#'+ ' ' + file.name
            text.innerHTML = reader.result
        }
    }
}

function readFilejs(input) {
    var text = document.getElementById('javas');
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file)

    reader.onload = function() {
        var ext = /javascript.*/i
        if (!file.type.match(ext)) {
            alert('Please Select JAVASCRIPT File')
        } else {
            p3.innerHTML = 'JS' + ' ' + file.name
            text.innerHTML = reader.result
        }
    }
}