import React from "react";
import "./App.scss";
import Result from "./Result";
import Button from "./Button";
import calculate from "./calculate";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operator: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="calc-box">
            <div className="button black full-width double-height">
              <span className="full-width header">Sourcetoad Problem 2</span>
              <Result value={this.state.next || this.state.total || "0"} />
            </div>
            
            <Button name="AC" clickHandler={this.handleClick} dark_grey/>
            <Button name="+/-" clickHandler={this.handleClick} dark_grey/>
            <Button name="%" clickHandler={this.handleClick} dark_grey/>
            <Button name="÷" clickHandler={this.handleClick} orange />
            <Button name="7" clickHandler={this.handleClick} />
            <Button name="8" clickHandler={this.handleClick} />
            <Button name="9" clickHandler={this.handleClick} />
            <Button name="x" clickHandler={this.handleClick} orange />
            <Button name="4" clickHandler={this.handleClick} />
            <Button name="5" clickHandler={this.handleClick} />
            <Button name="6" clickHandler={this.handleClick} />
            <Button name="-" clickHandler={this.handleClick} orange />
            <Button name="1" clickHandler={this.handleClick} />
            <Button name="2" clickHandler={this.handleClick} />
            <Button name="3" clickHandler={this.handleClick} />
            <Button name="+" clickHandler={this.handleClick} orange />
            <Button name="0" clickHandler={this.handleClick} wide />
            <Button name="." clickHandler={this.handleClick} />
            <Button name="=" clickHandler={this.handleClick} orange />

          </div>
        </div>
      </div>
    );
  }
}