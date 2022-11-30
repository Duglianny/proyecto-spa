// swiper es una librearia de js para dar estilos asi que cuando se nombre swiper se refiere a esa pagina que esta declarada en el script del html

/*window.swiper = new Swiper( {    //al usar var o window se le dice que es para agregar un objeto que en este caso es swiper a esa ventana el new significa que se va a crear una nueva estancia del objeto de swiper al abrir la llave ({}) se quiere decir que se va a pasar un objeto de configuracion 
   
  el:'.slider__contenedor',  //el: es para indicar el padre de todo los slide 

  slideClass:'slider__slide',  //este es para indicar cada uno se los slide 

  createElements:true,   // . crea el html necesario por default que se necesita para posiiconar los elementos que requiere ese slide 

  autoplay:{   //esta funcion de js es para que la imagen en 5 segundos cambie sola para la otra imagen 
    delay:5000
  },

  loop: true,   //esta funcion de js es para hacer el efecto de que cuando llegue a la ultima imagen del slide la que sigue se vuelva a mostrar la primera y asi sucesivamente 

  pagination:true,  //esta propiedad de js lo que hace es agregar una bi;etas abajo de las imagenes como si fueran paginas y se marcan de azul la actual imagen en donde se esta 

  navigation: true,  //esta propiedad agrega las flechas a los lados para poder pasar de imagen 
});*/


var swiper = new Swiper(".swiper", {   //debido a que no se tiene agregada esa clase se procede a modificar el html para poner la misma clases de swiper recordando que ya esas clases tambienn tiene su hoja de estilos de css para ver los demos se le da a demo y para ver el codigo se le da a core 
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});