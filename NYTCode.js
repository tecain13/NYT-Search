function usersearch() {
    var searchterm = $(this).attr("search-term");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?id=52ac263a-6ddc-4c02-80c7-29ccbca075ff&api-key=ISIuRoxErOd0pVSE6l9jL9V52oWkuhFP";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (res) {
        //         (this).attr
        // search - term.val.trim()
        console.log(res)
            ;
    }


    )
};

usersearch()