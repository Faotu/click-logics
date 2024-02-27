// Your task is to implement generateOrderSummary function

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const products = [
  { id: 101, name: "Product A", price: 50 },
  { id: 102, name: "Product B", price: 100 },
  { id: 103, name: "Product C", price: 75 },
];

const orders = [
  { id: 1001, userId: 1, productId: 101, quantity: 2 },
  { id: 1002, userId: 2, productId: 102, quantity: 1 },
  { id: 1003, userId: 1, productId: 103, quantity: 3 },
];

const generateOrderSummary = ({ orders, products, users }) => {
  // TODO: it should generate summary for every order
  // so that response will look like this:
  //{
  //  orderId: 1001,
  //  user: { id: 1, name: 'Alice', age: 30 },
  //  product: { id: 101, name: 'Product A', price: 50 },
  //  total: 100 // price * quantity
  //}

  // Additional (OPTIONAL) task
  // what is time complexity of your solution?
  // is it possible to make it in O(n) ?
  // rewrite your solution to be the fastest

  //My solution has an O(n^2) time complexity,
  //where n is the number of orders. This is a result of
  //the `find` method being used to iteratively create a nested loop structure
  //for each order by going through the users array and the products array.

  const MyOrderSummaries = [];

  for (const order of orders) {
    const user = users.find((u) => u.id === order.userId);
    const product = products.find((p) => p.id === order.productId);

    if (user && product) {
      const total = product.price * order.quantity;

      const MyOrderSummary = {
        orderId: order.id,
        user: { ...user },
        product: { ...product },
        total: total,
      };

      MyOrderSummaries.push(MyOrderSummary);
    }
  }

  return MyOrderSummaries;
};

const Component = () => {
  const [body, setBody] = React.useState({});

  React.useEffect(() => {
    setBody(generateOrderSummary({ products, orders, users }));
  }, []);

  return (
    <div className="container">
      <pre>{JSON.stringify(body, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(<Component />, document.querySelector("#app"));
