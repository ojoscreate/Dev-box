// import Message from "./Message";
import ListGroup from "./component/ListGroup";

function App() {
  let items = ["Paris", "China", "San Francisco", "Jamaica"];
  const selectItemHandler = (items: string) => {
    console.log(items);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={selectItemHandler}
      />
    </div>
  );
}

export default App;
