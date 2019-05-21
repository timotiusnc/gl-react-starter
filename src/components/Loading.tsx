import * as React from "react";
import * as Loadable from "react-loadable";

export class Loading extends React.Component<Loadable.LoadingComponentProps> {
  public render() {
    console.log("loading", this.props);
    if (this.props.error) {
      // When the loader has errored
      console.log("error");
      return <div>Error! <button onClick={this.props.retry}>Retry</button></div>;
    } else if (this.props.timedOut) {
      console.log("time out");
      // When the loader has taken longer than the timeout
      return <div>Taking a long time... <button onClick={this.props.retry}>Retry</button></div>;
    } else if (this.props.pastDelay) {
      console.log("delay");
      // When the loader has taken longer than the delay
      return <div>Loading...</div>;
    }

    console.log("just started");
    // When the loader has just started
    return null;
  }
}
