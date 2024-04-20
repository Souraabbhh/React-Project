// import './App.css'
if(process.env.NODE_ENV != "production"){
  require ('dotenv').config();
}

console.log(process.env);
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>
      <WeatherApp/>
    </>
  );
}

export default App;
