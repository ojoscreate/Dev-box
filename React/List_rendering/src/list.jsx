// import proptypes from 'prop-types';

function List(props) {
    //  ======= Simple array ========
    // const fruits = ["apple", "orange", "banana", "watermelon", "guava"]
    // fruits.sort();
    const category = props.category;
    const itemsList = props.items;

    // ========== SORTING WITH FRUITS NAME ==========

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); // doesn't work on numbers (APHABETICAL ORDER){for reverse jus replace a with and b with a [ b.name.localeCompare(a.name)]}

    // ========== SORTING WITH FUITS CALORIES ==========

    itemsList.sort((a,b)=> a.calories - b.calories); // NUMERIC ORDER (for REVERSE NUMERIC u replace a for be vicevaza)
    // ======= For Simple Array ==========
    // const listitems =itemslist.map(itemslist=><li>{itemslist}</li>)

    // ====== FILTERING =======

    // const lowCalitemslist = itemslist.filter(itemslist => itemslist.calories < 100)
    const highCalitemslist = itemsList.filter(itemslist => itemslist.calories > 100);


    const listitems = highCalitemslist.map(highCalitemslist=><li key={highCalitemslist.id}>{highCalitemslist.name}: &nbsp;<b>{highCalitemslist.calories}</b></li>)
    const listitems2 = itemsList.map(itemslist => <li key={itemsList.id}>{itemslist.name}: &nbsp; <b>{itemslist.calories}</b></li>)
    return(<>

                <h1 className="list_category">{category}</h1>
                <ul className="listItems">{listitems}</ul>
                <ul className="listItems">{listitems2}</ul>
            </>)
}
// List.proptypes = {
//     category: proptypes.string,
//     items: proptypes.arrayOf(proptypes.shape({ id: proptypes.number,
//                                                 name: proptypes.string,
//                                                 calories: proptypes.number})),
// }
List.defaultprops = {
    category: "Category",
    items: [],

}
export default List;