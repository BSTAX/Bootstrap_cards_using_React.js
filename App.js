import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1 className="text-danger text-center text-capitalize m-5"> Welcome Guy's</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/200/300"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://getbootstrap.com/docs/4.0/layout/grid/" target="_g" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/200/301"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src="https://picsum.photos/201/300"
                alt="Card image cap"
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
