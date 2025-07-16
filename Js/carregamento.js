    function loadPage(page) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', page, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                document.getElementById('content').innerHTML = xhr.responseText;
            } else {
                document.getElementById('content').innerHTML = "<p>Erro ao carregar a página.</p>";
            }
        };

        xhr.onerror = function() {
            document.getElementById('content').innerHTML = "<p>Erro de conexão.</p>";
        };

        xhr.send();
    }


    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    function showImage(i) {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
    }

    function nextImage() {
        index = (index + 1) % images.length;
        showImage(index);
    }

    function previousImage() {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    }