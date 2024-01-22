import { useSelector } from "react-redux";

function MojaKomponenta() {
  const brojac = useSelector((skl) => skl.counter);

  return (
    <>
      <h2>Ovo je Moja Komponenta</h2>
      <p> I moja komponeta koristi redux store: {brojac}</p>
    </>
  );
}

export default MojaKomponenta;
