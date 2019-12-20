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

function clear() {
    $("#article-section").empty();
};



$("#run-search").on("click", function (event) {
    event.preventDefault();
    clear();
    buildQueryURL()
});


