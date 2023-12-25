import React, { Component } from "react";
import Cardes from "./components/Cards ";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

export default class App extends Component {
  state = {
    Card: {
      fullName: " Angelina Jolie",
      bio: ` Angelina Jolie; born Angelina Jolie Voight;June 4, 1975) is an
              American actress, filmmaker and humanitarian. The recipient of
              numerous accolades, including an Academy Award and three Golden
              Globe Awards, she has been named Hollywood's highest-paid actress
              multiple times. Jolie made her screen debut as a child alongside
              her father, Jon Voight, in Lookin' to Get Out (1982). Her film
              career began in earnest a decade later with the low-budget
              production Cyborg 2 (1993), followed by her first leading role in
              Hackers (1995). `,
      imgSrc:
        " https://www.gala.fr/imgre/fit/~1~gal~2023~09~28~6683f162-3c24-47a1-900b-2f5289c2cf28.jpeg/2111x1630/quality/80/angelina-jolie.jpeg ",
      profession: " Actress",
    },
    shows: false,
  };
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };
  render() {
    return (
      <div className="App">
        {this.state.shows && <Cardes Card={this.state.Card} />}

        <button onClick={this.toggleShow}>Click Me</button>
      </div>
    );
  }
}
