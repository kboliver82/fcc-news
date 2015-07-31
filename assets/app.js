var newsUrl = 'http://www.freecodecamp.com/stories/hotStories';

/*
 * __v: 13
 * _id: "55b929d6d8ded40e67550824"
 * author: {,…}
 *     email: "someone@fakemail.com"
 *     picture: "https://lh4.googleusercontent.com/-45XBRuUZZsU/AAAAAAAAAAI/AAAAAAAAlb4/87asXDEWii4/photo.jpg"
 *     userId: "55b04aa531c2ce9f283dc690"
 *     username: "someone"
 * comments: ["55b93e89884adcaf7b07eef4", "55ba6be5f6ad502a3792439c"]
 *     0: "55b93e89884adcaf7b07eef4"
 *     1: "55ba6be5f6ad502a3792439c"
 * description: "I thought this was an encouraging write-up for those of us who like (or need) to know that we are on the best possible track. :)"
 * headline: "4 Reasons To Learn JavaScript as Your First Programming Language"
 * image: "http://cdn.skilledup.com/wp-content/uploads/2014/10/Learning-Javascript-First-Feature_1290x688_KL.jpg"
 * link: "http://www.skilledup.com/articles/4-reasons-learn-javascript-first-programming-language"
 * metaDescription: "Regardless of your learning goals -- whether it’s to build an iPhone app, become a web developer, or automating work -- you should start with JavaScript."
 * originalStoryAuthorEmail: "someone@fakemail.com"
 * rank: 12
 * storyLink: "4 reasons to learn javascript as your first programming language"
 * timePosted: 1438198230471
 * upVotes: [{upVotedBy: "55b04aa531c2ce9f283dc690", upVotedByUsername: "jasonmckenna2"},…]
 *     0: {upVotedBy: "55b04aa531c2ce9f283dc690", upVotedByUsername: "jasonmckenna2"}
 *         upVotedBy: "55b04aa531c2ce9f283dc690"
 *         upVotedByUsername: "jasonmckenna2"
 *     1: {upVotedByUsername: "pmbenjamin", upVotedBy: "559adafd36ad72bb7b935c29"}
 *         upVotedBy: "559adafd36ad72bb7b935c29"
 *         upVotedByUsername: "pmbenjamin"
 *     2: {upVotedByUsername: "michael", upVotedBy: "54fe05dc61db280b0051df92"}
 *     3: {upVotedByUsername: "lando", upVotedBy: "55b400b9e3cb6e392c5a76e6"}
 *     4: {upVotedByUsername: "akiralaine", upVotedBy: "553dc6e60cd9d50d775acd4f"}
 *     5: {upVotedByUsername: "codecamp23", upVotedBy: "55b9af7a884adcaf7b07ef6c"}
 *     6: {upVotedByUsername: "jlbalsamo", upVotedBy: "558383e99d07bf482d854cd0"}
 *     7: {upVotedByUsername: "jombard", upVotedBy: "553959aa4551c6f76fb40bc1"}
 *     8: {upVotedByUsername: "kbdank71", upVotedBy: "55b06d5bac8edfd4362ec683"}
 *     9: {upVotedByUsername: "rodval", upVotedBy: "55ba4cde37167b1920f6dd6c"}
 *     10: {upVotedByUsername: "t0varish", upVotedBy: "55b6353fe8e8d289405b29df"}
 *     11: {upVotedByUsername: "cody6873", upVotedBy: "55ba604bf6ad502a37924391"}
 */
function addArticle(article) {
    var container = $('#mainContainer');
    var articleDiv = $('<article class="article">');
    var imageSrc = article.image || article.author.picture;
    var image = $('<img>').attr('src', imageSrc).attr('style', 'width: 100%');
    var link = $('<a>').attr('href', article.link);
    var desc = $('<p>').text(article.headline);
    var footer = $('<footer>').text(article.author.username);

    link.append(desc);
    link.append(footer);

    articleDiv.append(image);
    articleDiv.append(link);
    container.append(articleDiv);
}

$(document).ready(function() {
  $.getJSON(newsUrl)
      .then(function(articles) {
          articles.forEach(function(article, index, array) {
              addArticle(article);
          });
          
      });

});

