function loadPage(page) {
    var xhr = new XMLHttpRequest();
    const url = './Pages/' + page;
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            document.getElementById('content').innerHTML = xhr.responseText;
            executePageScripts(); // <<< Adicionado
        } else {
            document.getElementById('content').innerHTML = "<p>Erro ao carregar a página.</p>";
        }
    };

    xhr.onerror = function () {
        document.getElementById('content').innerHTML = "<p>Erro de conexão.</p>";
    };

    xhr.send();
}

function executePageScripts() {
    const scripts = document.getElementById('content').querySelectorAll('script');
    scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        if (oldScript.src) {
            newScript.src = oldScript.src;
        } else {
            newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
    });
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
