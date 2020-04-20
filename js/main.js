

$(document).ready(function(){


  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data,stato){

      var source = document.getElementById("album-template").innerHTML;
      var template = Handlebars.compile(source);

      var album = data.response;
      console.log(album);

      for(var i=0; i<album.length; i++){

        var context = {
          cover: album[i].poster,
          title: album[i].title,
          artist: album[i].author,
          genre: album[i].genre,
          year: album[i].year
        };



        var html = template(context);
        $(".container").append(html);
      }


    },

    error: function(richiesta,stato,errore){
      alert("Chiamata fallita!!!");
    }


  });

});
