$(function () {
    function getScrape() {
        $.get("/scrape").then(function () {
            console.log("after scrape");

        });
    }
    function clear(){
        $.get("/clear").then(function(){
            console.log("cleared");
            
        })
    }
    function saved(){
        $.get("/saved").then(function(){
            console.log("show saved");
            
        });
    }
    $(".action").click(function () {
        switch ($(this).attr("data-value")) {
            case "scrape":
                getScrape();
                break;
            case "clear":
                clear();
                break;
            case "saved":
                saved();
                break;
            default:
                break;
        }
    });
});