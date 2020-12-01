// // TODO

var itemsToBuy = ['coffee', 'apple', 'juice']


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props)

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