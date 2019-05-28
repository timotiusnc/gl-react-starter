/*
 * TestRoute.tsx
 * Ordinary component to show how to set default props and state.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 24th 2019
 * -----
 * Last Modified: May 28th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import { RouteComponentProps } from "react-router";

import AnotherTest from "./AnotherTest";
import { Nav } from "./Nav";

export interface TestRouteProps extends RouteComponentProps {
  a: number;
  b: string;
}

interface TestRouteState {
  c: number;
  d: string;
}

export default class TestRoute3 extends React.Component<TestRouteProps, TestRouteState> {
  public static defaultProps = {
    a: 1,
    b: "dummy",
  };

  public constructor(props: TestRouteProps) {
    super(props);
    this.state = {
      c: 2,
      d: "dumdummy",
    };
  }

  public render() {
    return (
      <>
        <Nav />
        Test component 3. Path: {this.props.match.path}
        <AnotherTest />
      </>
    );
  }
}
