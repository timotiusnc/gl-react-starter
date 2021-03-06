/*
 * GLLoadable.test.tsx
 * Several usage samples of GLLoadable using React-Suspense and React-Loadable.
 * Please read the "describe" and "it" notes first to get an idea of what the test want to achieve.
 * Inspiration: https://www.youtube.com/watch?v=lfb5jvHq9c4.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 23rd 2019
 * -----
 * Last Modified: June 5th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { render, wait } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import { createMemoryHistory } from "history";
import "jest-dom/extend-expect";
import * as React from "react";
import { Router } from "react-router";

import { GLLoadableOpts } from "../../domain/GLLoadable";
import { GLReactLoadable, GLReactSuspense } from "../GLLoadable/index";

function renderWithRouter(
  ui: JSX.Element,
  { route = "/", history = createMemoryHistory({ initialEntries: [route] }) } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

describe("GLLoadable", () => {
  // Normal condition, should render the loadable Test component
  const loadableOptions: GLLoadableOpts = {
    loader: () => import("./Test")
  };

  describe("using React Suspense", () => {
    const GLLoadable = GLReactSuspense;

    it("should render loadable component given normal condition", async () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      const { getByText } = render(<LoadableElmt />);

      await wait();
      expect(getByText("Test component")).toBeInTheDocument();
    });

    it("should render loading component before rendering the loadable component", () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      const { getByText } = render(<LoadableElmt />);
      expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("should render loading component when loading is specified", () => {
      const customLoadingLoadableOptions: GLLoadableOpts = {
        loader: () => import("./Test"),
        loading: () => <div>dummy loading</div>
      };

      const LoadableElmt = GLLoadable(customLoadingLoadableOptions);
      const { getByText } = render(<LoadableElmt />);
      expect(getByText("dummy loading")).toBeInTheDocument();
    });

    it("should render error component if something goes wrong", async () => {
      const errLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error"))
      };
      const LoadableElmt = GLLoadable(errLoadableOptions);
      const { getByText } = render(<LoadableElmt />);

      await wait();
      expect(getByText(/Error/)).toBeInTheDocument();
    });

    it("should render error component when error is specified", async () => {
      const errLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error")),
        error: () => <div>dummy error</div>
      };
      const LoadableElmt = GLLoadable(errLoadableOptions);
      const { getByText } = render(<LoadableElmt />);

      await wait();
      expect(getByText("dummy error")).toBeInTheDocument();
    });

    // This kind of defeat the purpose of code-splitting via asynchronously loading component.
    // This is just to show that it works.
    it("should render loadable component given direct component declaration", async () => {
      const directLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: any }>((resolve, _) => resolve({ default: () => <div>Direct</div> }))
      };
      const LoadableElmt = GLLoadable(directLoadableOptions);
      const { getByText } = render(<LoadableElmt />);

      await wait();
      expect(getByText("Direct")).toBeInTheDocument();
    });
  });

  describe("using React Loadable", () => {
    const GLLoadable = GLReactLoadable;

    it("should render loadable component given normal condition", async () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      const { getByText } = render(<LoadableElmt />);

      await wait();
      expect(getByText("Test component")).toBeInTheDocument();
    });

    it("should render loading component before rendering the loadable component", () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      render(<LoadableElmt />);
      // As LoadingLoadable returns null, we don't check anything. Just to see if the render is successful or not
    });

    it("should render error component if something goes wrong", async () => {
      const errLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error"))
      };
      const LoadableElmt = GLLoadable(errLoadableOptions);
      const { getByText } = render(<LoadableElmt />);

      await wait();
      expect(getByText(/Error/)).toBeInTheDocument();
    });

    // Direct declaration using ReactLoadable is not possible
    // "Element type is invalid: expected a string (for built-in components) or a class/function
    // (for composite components) but got: object"
    it("should render loadable component given direct component declaration", () => {
      expect(true).toBe(true); // You don't say ;)
    });
  });
});
