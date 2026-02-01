import Navbar from "../components/Navbar";

function Orders() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px" }}>
        <h2>My Orders</h2>

        <div>
          <p>Order #12345</p>
          <p>Status: Delivered</p>
          <p>Total: ₹1098</p>
        </div>
      </div>
    </>
  );
}

export default Orders;
