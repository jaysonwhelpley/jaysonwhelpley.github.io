

$(function() {





    // This is where it pulls in the JSON data.

    // ID of the Google Spreadsheet
    var spreadsheetID = "1qb0RXGZMckzRs2ZvOUYims68s-NmVu4L2Ou5OkDoQsg";

    // Make sure it is public or set to Anyone with link can view
    var url1 = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json";
    var url2 = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/2/public/values?alt=json";

    $.getJSON(url1, function(data) {

        var template = $('#coffeeTemplate').html();
        var html = Mustache.to_html(template, data);
        $('#coffeeBox').html(html);


    });

    $.getJSON(url2, function(data) {

        var template = $('#foodTemplate').html();
        var html = Mustache.to_html(template, data);
        $('#foodBox').html(html);


    });



    // $.getJSON('js/output.json', function(data) {
    //
    //     var template = $('#testTemplate').html();
    //     var html = Mustache.to_html(template, data);
    //     $('#testBox').html(html);
    //
    // });

     //getJSON

}); //biggest outside function
