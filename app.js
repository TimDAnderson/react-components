// // TODO

var itemsToBuy = ['coffee', 'apple', 'juice']


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props)

    // isMouseInside: false

    this.state = {
      hovering: false
    };

  }


  mouseEnter () {
    this.setState({ hovering: true });
  }
  mouseLeave () {
    this.setState({ hovering: false });
  }

  render() {

    var style = {
      fontWeight: this.state.hovering ? 'bold' : 'normal'
      // textDecoration: this.state.hovering ? 'line-through' : 'none'
    }

    
    return (
      <li style={style}
      onMouseEnter={this.mouseEnter.bind(this)}
      onMouseLeave={this.mouseLeave.bind(this)}
      >
        {this.props.groceryItems}
      </li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItems =>
    <GroceryListItem  groceryItems={groceryItems} />
    )}
  </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={itemsToBuy}/>
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));



//working code from previous checkpoint
// // // TODO
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );
// //what happens if the array and li count don't match up?

// var App = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem groceryItems={['coffee', 'juice']}/>
//   </div>
// );



// ReactDOM.render(<App />, document.getElementById("app"));