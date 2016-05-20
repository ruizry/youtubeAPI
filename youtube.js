      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player1;
      var player2;
      var player3;
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '390',
          width: '640',
          videoId: 'nOEw9iiopwI',
          playerVars: {
            controls: 1
          }
        });
        player2 = new YT.Player('player2', {
          height: '390',
          width: '640',
          videoId: 'WrAQeXoiw_E',
          playerVars: {
            color: 'white',
            controls: 0,
            rel: 0
          }
        });
        player3 = new YT.Player('player3', {
          height: '390',
          width: '640',
          playerVars: {
            listType: 'playlist',
            list: 'PLOU2XLYxmsIKXYR_3iOWnI4h1Do_aa8dn',
            showinfo: 1
          }
        });
      }

      document.addEventListener('DOMContentLoaded', muteButton);

      function muteButton(){
      document.getElementById('mute').addEventListener('click', function(event)
      {
        player2.mute();
        event.preventDefault();
        })
      }

      document.addEventListener('DOMContentLoaded', unmuteButton);

      function unmuteButton(){
      document.getElementById('unmute').addEventListener('click', function(event)
      {
        player2.unMute();
        event.preventDefault();
        })
      }

      document.addEventListener('DOMContentLoaded', keywordButton);

      function keywordButton(){
        document.getElementById('keywordSubmit').addEventListener('click', function(event)
        {
          var req = new XMLHttpRequest();
          if(document.getElementById('keyword').value != 0) {
            var input = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + document.getElementById('keyword').value + "&type=video&key=AIzaSyDoJYHwF0Ea9ae8nSY6MIsO_3EqXRbOqto";
          }
        
          req.open('GET', input, false);
          req.send(null);
          var YTData = JSON.parse(req.responseText);
          var ids = [];
          for (var i = 0; i < 5; i++) {
            if(YTData.items[i].id.videoId != 0) {
               ids[i] = YTData.items[i].id.videoId;
            }
          }
          player3.cuePlaylist(ids);
          event.preventDefault();
        })
      }