import './App.css';
import Car from './components/Car'

function App() {
  const cardata = { 
    name: 'Skoda',
    year: '2015',
  }
  return (
    <div className="App">
      <Car name={cardata.name} year={cardata.year}/>
    </div>
  );
}

export default App;
