
// Mettre à jour le compteur :
console.log($("#count"));
console.log($("p"));
$("#count").text($("p").length);


// Supprimer les messages :
console.log($(".trash"));

$(".trash").click(function(){
    // console.log("clique déteté");
    $(this).parent().remove()
    // Mettre à jour le compteur après suppression:
    $("#count").text ($("p").length);
})

// Création du message :
console.log($("#btn-add"));
console.log($("#add-message"));


$("#btn-add").click(function(){
    console.log("clique déteté");
    var newmessage = $("#add-message").val()

    $("#btn-add").parent().after(`
    <div class="row">
        <img class="avatar" src="avatar-2.jpg">
        <div>
            <h6>Jennifer Vinchon-Six</h6>
            <p>${newmessage}</p>
        </div>
        <img class="trash" src="trash.png">
    </div>
    `)
    // nettoyage de l'input (champs de saisie)
    $("#add-message").val("")

    // Mettre à jour le compteur après suppression:
    $(".trash").click(function(){
        $(this).parent().remove()
        $("#count").text ($("p").length);
    })
    // Mettre à jour le compteur après suppression:
    $("#count").text ($("p").length);
})