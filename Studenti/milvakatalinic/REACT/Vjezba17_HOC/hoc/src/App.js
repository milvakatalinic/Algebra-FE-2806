
import './App.css';

function Button(props) {

  return <button {...props}></button>
}

function withColor(Element){
  return function({color, ...otherProps}){
    return <Element {...otherProps} style={{backgroundColor: color}}/>;
  }

}

const ColoredButton = withColor(Button);

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1stil}>Hello</h1>
      <ColoredButton color='red'>Bok, ja sam crvena</ColoredButton>
      <ColoredButton color='yellow'>Bok, ja sam zuta</ColoredButton>
      <p style={styles.pstil}>To sam ja</p>

    </div>
  );
}

export default App;

const styles = {
  h1stil: {
    color: 'blue',
    backgroundColor: 'lightGrey'

  },
  pstil: {
    color: 'orange'
  }
};
