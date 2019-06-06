import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import { NestedCtx } from "../context/NestedCtx";

const Landing = () => {
  const nestedContext = React.useContext(NestedCtx);
  setTimeout(() => nestedContext.setLocale("id"), 1000); // Simulate dynamic translation changes

  return (
    <>
      <Link to="/main">Main</Link>
      <div>Landing</div>
      <FormattedMessage id="hello" />
    </>
  );
};

export default Landing;
