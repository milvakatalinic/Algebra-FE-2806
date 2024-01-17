function User ({ime, years, onNameChange, onDeleteUser}){

 //   const {ime, years} = props

 //   function nameGhangeHandler(event){
//      console.log(event.target.value);

    
    return (
        <> 
        <p onClick={onDeleteUser}>Pozdrav! Moje ime je {ime} i imam {years} godina</p>
        <input type="text" value={ime} onChange={onNameChange}></input>
 
        </> //react fragment, koristimo ga kad imamo vise od jedne linije
    );
}
   

export default User;