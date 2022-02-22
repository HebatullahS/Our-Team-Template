import React, { Component } from "react";
import Card from "./card";

class Cards extends React.Component {
  render() {
    return (
        <div className="text-center mt-3">
        <div>
        <h1>Cards</h1>
        <p>Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.
        </p>
      </div>
       
      <div className="container mp-3">
        <div className="row">
          <div className="col-md-4 card text-white bg-warning mb-3">
            <Card className="card text-white bg-warning mb-3"
              imgsrc="https://www.g20.org/wp-content/uploads/2021/01/people.jpg"
              name="sara"
              message="anything bla bla bla "
            />
          </div>
          <div className="col-md-4 card text-white bg-success mb-3">
            <Card
              imgsrc="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75"
              name="mick"
              message="Greetings.... I am heba"
            />
          </div>
          <div className="col-md-4 card text-white bg-danger mb-3">
            <Card
              imgsrc="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              name="bobo"
              message="ana bobo el3arbya bye bye"
            />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Cards;
