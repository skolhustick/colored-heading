import React, { Component } from "react";

// The default export doesn't need to be inside {}
// Any other non-default exports, we import inside {}
import ColoredHeadingOne, { ColoredHeadingTwo } from "colored-heading";

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text="Colored heading one is working"
          color={"red"}
        />

        {/* Our other component */}
        <ColoredHeadingTwo
          text="Colored heading two is working"
          color={"blue"}
        />
      </div>
    );
  }
}
