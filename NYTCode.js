function usersearch() {
    var searchterm = $(this).attr("search-term");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?id=52ac263a-6ddc-4c02-80c7-29ccbca075ff&api-key=ISIuRoxErOd0pVSE6l9jL9V52oWkuhFP";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        //         (this).attr
        // search - term.val.trim()
        console.log(res);
    }
    )
};
usersearch()

function buildQueryURL() {
    var searchterm = $("#search-term").val().trim();
    var startyear = $("#start-year").val().trim() + "0101";
    var endyear = $("#end-year").val().trim() + "1231";
    // var startyear = '19900101'
    // var endyear = '19990101'

    console.log(searchterm);
    console.log(startyear);
    console.log(endyear);

    var APIkey = "ISIuRoxErOd0pVSE6l9jL9V52oWkuhFP";
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var URL = nytimes + "q=" + searchterm + "&end_date=" + endyear + "&begin_date=" + startyear + "&api-key=" + APIkey
    console.log(URL);

    return URL;

};



function updatePage(NYTData) {
    var numArticles = $("#article-count").val();

    console.log(NYTData);

    for (var i = 0; i < numArticles; i++) {

        var article = NYTData.response.docs[i];

        var articleCount = i + 1;

        var $articleList = $("<ul>");
        $articleList.addClass("list-group");

        $("#article-section").append($articleList);

        var headline = article.headline;
        var $articleListItem = $("<li class='list-group-item articleHeadline'>");

        if (headline && headline.main) {
            console.log(headline.main);
            $articleListItem.append(
                "<span class='label label-primary'>" +
                articleCount +
                "</span>" +
                "<strong> " +
                headline.main +
                "</strong>"
            );
        }

        var byline = article.byline;

        if (byline && byline.original) {
            console.log(byline.original);
            $articleListItem.append("<h5>" + byline.original + "</h5>");
        }


        var section = article.section_name;
        console.log(article.section_name);
        if (section) {
            $articleListItem.append("<h5>Section: " + section + "</h5>");
        }

        var pubDate = article.pub_date;
        console.log(article.pub_date);
        if (pubDate) {
            $articleListItem.append("<h5>" + article.pub_date + "</h5>");
        }

        $articleListItem.append("<a href='" + article.web_url + "'>" + article.web_url + "</a>");
        console.log(article.web_url);


        $articleList.append($articleListItem);
    }
}


function clear() {
    $("#article-section").empty();
};


$("#run-search").on("click", function (event) {
    event.preventDefault();
    clear();
    var indivsearchURL = buildQueryURL();

    $.ajax({
        url: indivsearchURL,
        method: "GET"
    }).then(updatePage);
});


$("#clear-all").on("click", clear);
