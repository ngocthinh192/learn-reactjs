import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Thinh';
  const age = 18;
  const isMale = false;
  const student = {
    name: "best"
  };
  const colorList = ['red', 'blue', 'yellow']

  const listStudent = ['Nhu', 'trang', 'quyen', 'duoc']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello WORLD
        </p>

        <p>
          My name is : {name} - i'm {age} - {isMale ? 'Male' : 'Famale'} - my favorite color is Blue - but i'm not {student.name}
        </p>

        {
          isMale && (
            <ul>
              {colorList.map(
                color => (<li style={{ color }}>{color}</li>)
              )}
            </ul>
          )
        }

        {
          !isMale && (
            <ul>

              {listStudent.map(
                nameStudent => (<li>{nameStudent}</li>)
              )}
            </ul>
          )
        }

      </header>
    </div>
  );
}

export default App;
