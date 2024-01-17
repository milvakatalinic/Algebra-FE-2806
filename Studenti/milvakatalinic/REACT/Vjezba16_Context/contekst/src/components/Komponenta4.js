import { useContext } from "react";
import { Consumer } from "../contekst/Kontekst";
import Context from "../contekst/Kontekst";

function Komponenta4(){

   const context = useContext(Context);
   const { text, number, reset } = context;
   const editText = `${text} preko funkcije, a poslani broj je ${number}`;

    return(
        <>
        <h2>Komponenta4</h2>
        <Consumer>
            { ctx => <p>{ctx.text} - {ctx.number}</p>}
        </Consumer>
        <p>{editText}</p>
        <button onClick={reset}>Reset</button>
       
        </>

        
        
    );
}

export default Komponenta4;