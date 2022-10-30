import Weather from "./Weather";
import "./App.css"
import "./Weather.css"

export default function App() {
  return (
    <div className="App container rounded mt-4 p-3 shadow-lg text-light">
      <Weather />
      <div className="text-center">
        <a href="https://github.com/olenahladkova/react-weather" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
    </div>
  );
}
