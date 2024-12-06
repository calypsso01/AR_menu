AFRAME.registerComponent("gestorDeMarcadores",{
    init: async function(){
        this.el.addEventListener("markerFound",() =>{
            console.log("marcador encontrado")
            this.marcadorEncontrado();
        });
        this.el.addEventListener("markerLost",() =>{
            console.log("marcador perdido")
            this.marcadorPerdido();
        });
    },
    marcadorEncontrado: function(){
        //cambiar la visibilidad de los botones a FLEX
        var botonDiv = document.getElementById("botones-div");
        botonDiv.style.display = "flex";

        var botonCalificar = document.getElementById("rating-button");
        var botonOrdenar = document.getElementById("order-button");

        //Usar eventos de click
        botonCalificar.addEventListener("click",function(){
            swal({
                icon:"https://img.icons8.com/?size=100&id=QN6Lw5eIm0fG&format=png&color=000000",
                title:"Calificar platillo",
                text:"Procesando calificaión"
            });
        });
        botonOrdenar.addEventListener("click",function(){
            swal({
                icon:"https://img.icons8.com/?size=100&id=Q1hCHQ4rJlYt&format=png&color=000000",
                title:"!Gracias por tu Orden",
                text:"Orden en camino"
            })
        })

    },
    marcadorPerdido: function(){
        //cambiar la visibilidad de los botones a FLEX
        var botonDiv = document.getElementById("botones-div");
        botonDiv.style.display = "none";
    }

})