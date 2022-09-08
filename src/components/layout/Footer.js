
 
const Footer = (props) => {

  



    return ( 
      <div>
      <footer>
       <div>
    
       <form className="formPP" action="/contacto"  method='post'>
        <h3>¿Desea mas informacion?</h3>
        <p>Envienos un email con su pregunta</p>
        <div class="contenedorDePedirPeliculas">
        <div class="divPedirPeliculas">
          <label class="labelDePedirPelicula" for="email">Su Email :</label>
        <input class="inputPedirPeli" type="text" name="email"  />
      </div>
      <div class="divPedirPeliculas">
        <label class="labelDePedirPelicula" for="pedido">su consulta :</label>
        <input class="inputPedirPeli" type="text" name="pedido"  />
        
        
    </div>

    <button type="submit" class="btn-btn-primary" className="margin: 0px;">Enviar</button>
  </div>

    </form>
    </div>
  </footer>
  </div>
  
       
    )
}
export default Footer