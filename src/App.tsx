import Button from "./components/Button";
import TrainingList from "./components/TrainingList";

function App() {
  return (
    <div className="App">
      <TrainingList />
      <Button buttonTitle="Start" />
      <Button buttonTitle="Editar Treinos" />
    </div>
  );
}

export default App;
