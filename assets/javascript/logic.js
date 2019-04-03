// array of strings
var queries = ["spiders", "wasps","scorpions","snakes"]

// Displays Animal Infor into the HTML

function renderButtons(){
   
    $("#animal-view").empty();

    for (var i=0; i < queries.length; i++) {
    
        var a = $("<button>");
    
        a.addClass("animal");
    
        a.attr("data-name", queries[i]);
    
        a.text(queries[i]);
    
        $("animal-view").append(a);
    
    }
}
    
        $("#add-animal").on("click", function(event) {
    
            event.preventDefault();
    
            var animal = $("#animal-input").val().trim();
    
            queries.push(animal);
    
            renderButtons();
    
        });
    
    
    renderButtons();
