function loadPage(page) {
    var xhr = new XMLHttpRequest();
    const url = './Pages/' + page;
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById('content').innerHTML = xhr.responseText;
        } else {
            document.getElementById('content').innerHTML = "<p>Erro ao carregar a página.</p>";
        }
    };

    xhr.onerror = function () {
        document.getElementById('content').innerHTML = "<p>Erro de conexão.</p>";
    };

    xhr.send();
}


