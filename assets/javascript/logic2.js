var queries = ["spiders", "wasps","scorpions","snakes"]

function renderButtons(){
   
    $("#animal-view").empty();

    for (var i=0; i < queries.length; i++) {
    
        var a = $("<button>");
    
        a.addClass("animal");
    
        a.attr("data-name", queries[i]);
    
        a.text(queries[i]);
    
        $("animal-view").append(a);
    
    }