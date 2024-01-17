
import './App.css';
/*import Komponenta1 from './Components/Komponenta1';
import Komponenta2 from './Components/Komponenta2';
import Komponenta3 from './Components/Komponenta3';
import Komponenta4 from './Components/Komponenta4';*/

import {Komponenta1, Komponenta2, Komponenta3, Komponenta4} from './Components/index';

function App() {
  return (
    <div className="App">
      <div>
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <Komponenta4 />
 </div>
 </div>
  );
}

export default App;
