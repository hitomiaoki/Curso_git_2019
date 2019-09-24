export class Micomponente extends HTMLElement {
   get template() {
     return`
     <style>
     :host {
          display: block;
          width: 80%;
          margin: 0.5rem auto;
          padding:0.2rem  0.5rem  0.8rem;
          background-color: blanchedalmond;
         
     }  

      h1 {
          background-color: maroon;
          color:blanchedalmond ;
          padding: 0.2rem;
      }

      p {
          font-size: 1.4rem;
      }
    </style>
     <div>
         <h1>Ejemplo de componentes</h1>
         <p>Esto es un componente </p>
     </div>
    `
  
   }

    constructor() {
         super()
         const shadow = this.attachShadow({mode:'open'})
         shadow.innerHTML  = this.template
    }
}


/* 
connectedCallback() {
    super.connectedCallback();
    console.log('Ejecutándose connectedCallback');
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('Ejecutándose disconnectedCallback');
  };

  attributeChangedCallback(nombre, valorAnterior, valorNuevo) {
    super.attributeChangedCallback();
    console.log('Ejecutándose attributeChangedCallback', nombre, valorAnterior, valorNuevo);
  };*/
   





customElements.define('mi-componente', Micomponente)

