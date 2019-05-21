import * as React from "react";
import { Nav } from "./Nav";

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
      <>
        <Nav />
        Test component
      </>
    );
  }
}
