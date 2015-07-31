var newsUrl = 'http://www.freecodecamp.com/stories/hotStories';

function addArticle(article) {
    var container = $('#mainContainer');
    var rowDiv = $('<div class="row">');
    var image = $('<img>').attr('src', article.image).attr('style', 'height: 50px');
    var link = $('<a>').attr('href', article.link).text(article.headline);

    rowDiv.append($('<div class="col-md-4">'));
    rowDiv.append(image);
    rowDiv.append(link);
    container.append(rowDiv);
}

$(document).ready(function() {
  $.getJSON(newsUrl)
      .then(function(articles) {
          articles.forEach(function(article, index, array) {
              addArticle(article);
          });
          
      });

});

