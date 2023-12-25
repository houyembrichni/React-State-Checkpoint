import React, { Component } from "react";
import {Card} from "react-bootstrap/";

export default class Cards extends Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        counter: this.state.counter + 1,
      }));
    }, 1000);
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.props.Card;
    return (
      <div className="cards">
        <Card style={{ width: "300" }}>
          <Card.Img src={imgSrc}></Card.Img>
          <Card.Body>
            <Card.Title> {fullName} </Card.Title>
            <Card.Text className=" profession">{profession}</Card.Text>
            <Card.Text className=" bio">{bio}</Card.Text>
            <Card.Text className=" counters">Counter is : {this.state.counter} seconds</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
