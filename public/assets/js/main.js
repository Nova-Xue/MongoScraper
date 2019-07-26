$(function () {
    function home(){
        
        location.reload();
    }
    function getScrape() {
        $.get("/scrape").then(function () {
            location.reload();

        });
    }
    function clear(){
        $.get("/clear").then(function(){
            location.reload();
            
        })
    }
    function saved(){
        $.get("/saved").then(function(page){
            $("html").html(page);
        });
    }
    function buttonActions(action){
        switch (action) {
            case "home":
                home();
                break;
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
    }
    function deleteById(id){
        
        $.ajax("/delete/"+id,{
            type : "PUT"
        }).then(function(){
            location.reload();
        });
    }
    function saveById(id){
        $.ajax("/save/"+id,{
            type : "PUT"
        }).then(function(){
            location.reload();
        });
    }
    $(".action").click(function(){
        buttonActions($(this).attr("data-value"));
    });
    $(".delete-post").click(function(){
        deleteById($(this).val());
    });
    $(".save-post").click(function(){
        saveById($(this).val());
    });
});