
function Item({ item, deleteItemHandler, id, completedHandler, itemNo }) {
  return (
    <div className="item-container">
      <span className="numbering">{itemNo + 1}.</span>
      <ul className="item">
        <li className={item.completed ? "completed" : ""}>{item.task}</li>
      </ul>
      <div className="action-buttons">
        <button
          className="complete-button"
          onClick={() => completedHandler(id)}
        >
          Mark as Completed
        </button>
        <button className="delete-button" onClick={() => deleteItemHandler(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
