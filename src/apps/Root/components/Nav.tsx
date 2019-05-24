import * as React from "react";
import { Link } from "react-router-dom";

export class Nav extends React.Component<{}> {
  public render() {
    return (
      <>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/import"}>Import</Link></li>
          <li><Link to={"/reject"}>Reject</Link></li>
          <li><Link to={"/direct"}>Direct</Link></li>
        </ul>
      </>
    );
  }
}
