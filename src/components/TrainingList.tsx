function TrainingList() {
  return (
    <>
      <h2>Treinos:</h2>
      <input type="radio" id="peito" name="treinos" value="Peito" />
      <label htmlFor="peito">Peito</label>
      <br />
      <input type="radio" id="costas" name="treinos" value="Costas" />
      <label htmlFor="costas">Costas</label>
      <br />
      <input type="radio" id="pernas" name="treinos" value="Pernas" />
      <label htmlFor="pernas">Pernas</label>
      <br />
      <input type="radio" id="bracos" name="treinos" value="Braços" />
      <label htmlFor="bracos">Braços</label>
      <br />
    </>
  );
}

export default TrainingList;
