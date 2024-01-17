import React from "react";

import { Consumer } from "../contekst/Kontekst";

import Context from "../contekst/Kontekst";


class Komponenta5 extends React.Component{

    static contextType = Context;

    render(){

    const {text, number} = this.context;

    const editText = `${text} preko funkcije, a poslani broj je ${number}`;

        return(
            <>
             <h2>Komponenta5</h2>
            <Consumer>{ctx=> <p>{ctx.text} - {ctx.number}</p>}</Consumer>
            {editText}
            </>
       
        );   
    }
}

        

export default Komponenta5;