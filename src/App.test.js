import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import "./setupTests.js";

it("should load App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("should render text ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("should render without crashing ", () => {
  shallow(<App />);
});

it("render Hello CodeSandbox", () => {
  const wrapper = shallow(<App />);
  const hello = <h1>Hello CodeSandbox</h1>;
  expect(wrapper.contains(hello)).toEqual(true);
});
