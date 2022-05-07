import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = { quote: "", author: "" };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get("https://mahri-quote-server.glitch.me/quotes/random")
      .then((response) => {
        console.log(response);
        const { quote, author } = response.data;
        console.log(quote);
        this.setState({ quote });
        this.setState({ author });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { quote } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.quote}</h1>
          <h4>{this.state.author}</h4>
          <button className="button" onClick={this.fetchQuote}>
            <span>Generate a quote</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
