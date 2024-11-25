

function Form({
  inputData,
  setInputData,
  submitHandler,
  setFilter,
  filter,
  markAllComplete,
}) {
  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Add todo"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="add-btn">+</button>
      </form>
      <div className="filter-container">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="filter-select"
        >
          <option value="default">Default</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <button onClick={markAllComplete} className="mark-all-btn">
        Mark All Completed
      </button>
      <p className="notes-text">All Your Notes Here .......</p>
    </div>
  );
}

export default Form;
