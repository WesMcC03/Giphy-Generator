// array of strings
var queries = ["spiders", "wasps","scorpions","snakes"];

// Displays Animal Infor into the HTML

function renderButtons(){
   
    $("#animal-view").empty();

    for (var i=0; i < queries.length; i++) {
    
        var a = $("<button>");
    
        a.addClass("animal");
    
        a.attr("data-name", queries[i]);
    
        a.text(queries[i]);
    
        $("#animal-view").append(a);
    
    }
}
    
        $("#add-animal").on("click", function(event) {

        event.preventDefault();

        var animal = $("#animal-input").val().trim();

        queries.push(animal);

        var animal = $(this).data("animal");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=lZfpghKjqnDYvUIxZfVcdSUSmphMHsuT&limit=8";
        $.ajax({
            url:queryURL,
            method:"GET"})
            .done(function(response){
                console.log(response);
                for (var i=0;i<response.data.length;i++) {
                    var adiv = $('<div>');
                    var p = $("<p>").text("rating:" +response.data[i].rating);
                    var apic = $("<img>");
                    apic.attr('src', response.data[i].images.fixed_height.url);

                    adiv.append(p);
                    adiv.append(apic);
                    $('#gifstorage').append(adiv);
                }
            });
        

        renderButtons();

    });

      
        
    
    
    renderButtons(); 
