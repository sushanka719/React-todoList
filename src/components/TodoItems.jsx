import Item from "./Item";

function TodoItems({ filter, items, deleteItemHandler, completedHandler }) {

   let filteredItems = items;

   if (filter === "completed") {
     filteredItems = items.filter((item) => item.completed);
   } else if (filter === "incomplete") {
     filteredItems = items.filter((item) => !item.completed);
   }
   
  return (
    <>
      {filteredItems.map((item, i) => (
        <Item
          itemNo={i}
          item={item}
          key={item.id}
          deleteItemHandler={deleteItemHandler}
          completedHandler={completedHandler}
          id={item.id}
        ></Item>
      ))}
    </>
  );
}

export default TodoItems;
