import Component from "../Component";
import * as React from "react";
import * as Enzyme from "enzyme";

describe("Component", () => {

  it("content", () => {

    // Render a component with label in the document
    const component = Enzyme.shallow(<Component />);
    expect(component.text()).toEqual("Awesome component");

 });

});
