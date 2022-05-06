peliculas = [
    { titulo: "Carrera muerta", rating: "5 estrellas", loHasVisto: false },
    { titulo: "Lord of the rins", rating: "4 estrellas", loHasVisto: true },
    { titulo: "Hobbit", rating: "3 estrellas", loHasVisto: true },
    { titulo: "En busca de nada", rating: "3 estrellas", loHasVisto: false },
    { titulo: "Hobbit 2", rating: "3 estrellas", loHasVisto: true },
    { titulo: "Fast furious", rating: "2 estrellas", loHasVisto: true },
    { titulo: "365 días: Aquel dia", rating: "3 estrellas", loHasVisto: true },
    { titulo: "El final de todo", rating: "4 estrellas", loHasVisto: false },
];

function addToDom() {

    for (var i = 0; i < peliculas.length; i++) {

        if (peliculas[i]["loHasVisto"] == true) {

            var thisMovie = "Viste: " + peliculas[i]["titulo"] + " - " + peliculas[i]["rating"]

            const para = document.createElement("h4");
            para.innerText = thisMovie;

            // Append to body:
            document.body.appendChild(para);


        } else {

            var thisMovie = "No viste: " + peliculas[i]["titulo"] + " - " + peliculas[i]["rating"]

            const para = document.createElement("h4");
            para.innerText = thisMovie;

            // Append to body:
            document.body.appendChild(para);
        }
    }
}

addToDom()



function arregloDeObjetos(numero,saludo) {
    var arregloP = [];
       iter = 0;
       while(iter<numero) {
         iter++
           arregloP.push({[saludo]:iter})
         
       }   
       console.log(arregloP)
     }
       
   
   arregloDeObjetos(4,"hola")