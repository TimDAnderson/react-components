// // TODO
var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
  </ul>
);
//what happens if the array and li count don't match up?

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem groceryItems={['coffee', 'juice']}/>
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));