AFRAME.registerComponent("crear-botones",{
    init: function(){
        // 1. Crear botón 1
        var button1 = document.createElement("button");
        button1.innerHTML = "CALIFICAR";
        button1.setAttribute("id", "rating-button");
        button1.setAttribute("class", "btn btn-warning mr-3");

        // 2. Crear botón 2
        var button2 = document.createElement("button");
        button2.innerHTML = "ORDENAR";
        button2.setAttribute("id", "order-button");
        button2.setAttribute("class", "btn btn-warning mr-4");

        // 3. Añadir elementos de botón
        var buttonDiv = document.getElementById("botones-div");
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);

    }
})