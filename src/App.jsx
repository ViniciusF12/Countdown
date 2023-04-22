import "./App.css";
import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountdown from "./Hooks/useCountdown";

function App() {
  const [day, hour, minute, second] = useCountdown("April 20, 2023 18:00:00")

  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem regressiva" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
