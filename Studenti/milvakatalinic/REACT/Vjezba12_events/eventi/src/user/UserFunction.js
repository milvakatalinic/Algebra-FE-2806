function UserFunction ({ime, years, onNameChange}){

 //   const {ime, years} = props

 //   function nameGhangeHandler(event){
//      console.log(event.target.value);

    
    return (
        <> 
        <p>Pozdrav! Moje ime je {ime} i imam {years} godina</p>
        <input type="text" value={ime} onChange={onNameChange}/>
 
        </> //react fragment, koristimo ga kad imamo vise od jedne linije
    );
}
   

export default UserFunction;