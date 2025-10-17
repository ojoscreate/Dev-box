// import { Fragment } from "react";
import { useState } from "react";

interface props {
  items: string[];
  heading: string;
  // must return void
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: props) {
  // let items = ["Paris", "China", "San Francisco", "Jamaica"];
  // FOR CHECKING IF THE ARRAY IS EMPTY UN COMMENT NEXT LINE TO FUNCTION TO VERIFY
  // items = [];
  // const GetMessage = () => {
  //   return items.length === 0 ? <p className="list-group-item">NO ITEM FOUND</p> : null;
  // };

  // const clickHandler = (e: MouseEvent) => console.log(e.target);

  //  state handler
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {/* {GetMessage()} */}
      {items.length === 0 && <p className="list-group-item">NO ITEMS FOUND</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            // onClick={(e) => console.log(`Clicked ${items} ${index}`)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
          >
            {items}
          </li>
        ))}
        {/* <li className="list-group-item">An Item</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li> */}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
