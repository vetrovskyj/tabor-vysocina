$(document).ready(() => {

    window.fbAsyncInit = function() {
        FB.init({
            appId: '1365630900461323',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v9.0'
        });
    };



    FB.api('/371839509540933/albums/', 'get', {
            access_token: 'EAATaCLi3XwsBAJtgEvVXONoaZC2ZAdnRMvdiwpo8gIKYUiM69ymZCSNT35xTpOafK1LlqbzasPCcppU3ULwth8x39B5dA45x9bJ1OzPzkLvyCeDg4Dpx36kbFQD7JhxJl4eoIMtfo8M5YUe2ZAZCq0STycSAmICdjNLqZA2aJLnc8zYIcs3CIcN91G7Ysm3lB4bI5taltmzwZDZD',
        },
        function(response) {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                let album = response.data[i];
                console.log(album);

                FB.api(album.id + '/?fields=photos{picture,images}', 'get', {
                        access_token: 'EAATaCLi3XwsBAJtgEvVXONoaZC2ZAdnRMvdiwpo8gIKYUiM69ymZCSNT35xTpOafK1LlqbzasPCcppU3ULwth8x39B5dA45x9bJ1OzPzkLvyCeDg4Dpx36kbFQD7JhxJl4eoIMtfo8M5YUe2ZAZCq0STycSAmICdjNLqZA2aJLnc8zYIcs3CIcN91G7Ysm3lB4bI5taltmzwZDZD',
                    },
                    function(res) {
                        for (let i = 0; i < res.photos.data.length; i++) {
                            let photo = res.photos.data[i].images[0];
                            console.log(photo.source);
                            let pic = document.createElement('img');
                            pic.src = photo.source;
                            $('body').append(pic);
                        };
                    });
            };
        });
});