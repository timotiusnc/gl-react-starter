import * as React from "react";

export interface TestProps {
  a: number;
  b: string;
}

export default class Test extends React.Component<TestProps, {}> {
  public static defaultProps = {
    a: 1,
    b: "asu",
  };

  public render() {
    console.log("test", this.props);
    return (
      <div>Test asu</div>
    );
  }
}
