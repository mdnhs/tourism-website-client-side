import React, { useEffect, useState } from "react";
import { Col, Card, Row, Button, Badge } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
// import ManageOrder from "./ManageOrder";

const AllOrders = () => {
  const [allOrdersList, setAllOrdersList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://serene-spire-88063.herokuapp.com/booking")
      .then((res) => res.json())
      .then((result) => {
        setAllOrdersList(result);
      });
  }, [user.email, isUpdated]);
  const handleDelete = (id) => {
    const confirmation = window.confirm("Are you sure to delete this?");
    if (confirmation) {
      fetch(`https://serene-spire-88063.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("One item is deleted successfully!");
          }
          const remainingOrders = allOrdersList.filter(
            (order) => order._id !== id
          );
          setAllOrdersList(remainingOrders);
        });
    }
  };

  const handleUpdate = (id) => {
    console.log(id);
    const selectedItem = allOrdersList.find((item) => item._id === id);
    console.log(selectedItem);
    // selectedItem._id = null;
    // selectedItem.id = id;
    selectedItem.status = 1;
    //put data for update
    fetch(`https://serene-spire-88063.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedItem),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setIsUpdated(true);
          alert("Thank you for confirming the order.");
        }
      });
  };

  return (
    <div>
      <section>
        <h2 className="text-center py-5">
          All Order list ({allOrdersList.length})
        </h2>

        {allOrdersList.map((allOrder) => (
          <Row
            xl={1}
            md={1}
            sm={1}
            xs={1}
            key={allOrder._id}
            className="g-3 mb-5"
          >
            <Col>
              <div
                class="card my-2 mx-2 p-2 round-box"
                style={{
                  maxWidth: "fit-content",
                  height: "fit-content",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                <div class="row g-0">
                  <div class="col-md-6">
                    <img
                      style={{
                        border: "none",
                        borderRadius: "10px",
                      }}
                      src={allOrder?.img}
                      width="100px"
                      height="100%"
                      class="round-box card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6 my-4">
                    <div className="card-body">
                      <h1>{allOrder?.name}</h1>
                      <p>{allOrder?.description}</p>
                      <p>Booked by: {user.displayName}</p>
                      <p>Email: {user.email}</p>
                      <Card.Text className="card-info">
                        <Badge
                          pill
                          bg="primary"
                          className="px-3 me-2"
                          text="light"
                        >
                          <h6 className="mb-0"> Day: {allOrder?.day}</h6>
                        </Badge>
                        <Badge
                          pill
                          bg="dark"
                          className="px-3  me-2"
                          text="light"
                        >
                          <h6 className="mb-0"> Day: {allOrder?.night}</h6>
                        </Badge>
                      </Card.Text>
                    </div>
                    <h2 className="px-3">
                      ${allOrder.price} x {allOrder.user.number}
                    </h2>

                    <div>
                      {!allOrder.status ? (
                        <Button
                          onClick={() => {
                            handleUpdate(allOrder._id);
                          }}
                          style={{
                            border: "none",
                            borderRadius: "10px",
                            color: "green",
                          }}
                          variant="light"
                          className=" mt-4 ms-3"
                        >
                          Pending
                        </Button>
                      ) : (
                        <Button
                          style={{
                            border: "none",
                            borderRadius: "10px",
                            color: "white",
                            backgroundColor: "green",
                          }}
                          variant="light"
                          className="btn btn-success mt-4 mx-2"
                        >
                          Confirmed
                        </Button>
                      )}

                      <Button
                        style={{
                          border: "none",
                          borderRadius: "10px",
                          color: "red",
                        }}
                        onClick={() => handleDelete(allOrder._id)}
                        variant="light"
                        className="mt-4 mx-2"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </section>
    </div>
  );
};

export default AllOrders;
