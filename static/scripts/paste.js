window.onload = function() {
        const content = document.createElement('a');
        //content.setAttribute('href', './Vylety.html');
        content.classList.add('content-item');

        const newsContent = document.querySelector('.news-content');
        $(content).load('./aktuality/index.html .vylet:lt(3)');
        newsContent.appendChild(content);
    }
    /*const contentTextArea = document.createElement('p');
    contentTextArea.classList.add('content-item-text');
    $(contentTextArea).load('./Vylety.html .vylet p');
    console.log(contentTextArea);
    content.appendChild(contentTextArea);*/