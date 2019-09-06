# colored-heading

> Renders a simple h1 element with a color!

[![NPM](https://img.shields.io/npm/v/colored-heading.svg)](https://www.npmjs.com/package/colored-heading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save colored-heading
```

## Usage

```jsx
import React, { Component } from "react";
import ColoredHeadingOne, { ColoredHeadingTwo } from "colored-heading";

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text="Colored heading one is working"
          color={"red"}
        />

        <ColoredHeadingTwo
          text="Colored heading two is working"
          color={"blue"}
        />
      </div>
    );
  }
}

```

## License

MIT © [skolhustick](https://github.com/skolhustick)
