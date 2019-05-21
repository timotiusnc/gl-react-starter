import * as React from "react";
import { Link } from "react-router-dom";

export class Main extends React.Component<{}> {
  public render() {
    console.log("Main", this.props);
    return (
      <div>
        Main <Link to={"/test"}>Test</Link>
      </div>
    );
  }
}
