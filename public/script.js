function download(filename, text) {
    var element = document.createElement('a');
    element.style.display = "none"

    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename)
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById('saves').addEventListener('click', () => {
    var text = document.getElementById('text').value;
    var filename = document.getElementById('filename').value;

    download(filename, text);

}, false);

function downloads(filename, text) {
    var element = document.createElement('a');
    element.style.display = "none"

    element.setAttribute('href', 'data:text/css;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename)
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById('csssaves').addEventListener('click', () => {
    var text = document.getElementById('cssstyle').value;
    var filename = document.getElementById('filename').value;

    downloads(filename, text);

}, false);

function downloadjs(filename, text) {
    var element = document.createElement('a');
    element.style.display = "none"

    element.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename)
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById('jssaves').addEventListener('click', () => {
    var text = document.getElementById('javas').value;
    var filename = document.getElementById('filename').value;

    downloadjs(filename, text);

}, false);