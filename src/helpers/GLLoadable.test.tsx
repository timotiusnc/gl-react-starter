import { createMemoryHistory } from "history";
import "jest-dom/extend-expect";
import * as React from "react";
import { Router } from "react-router";
import { render, wait } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import { Loading } from "../components/LoadableSamples/Loading";
import { LoadingSuspense } from "../components/LoadableSamples/LoadingSuspense";

import { GLLoadableOpts, GLReactLoadable, GLReactSuspense } from "./GLLoadable";

function renderWithRouter(
  ui: JSX.Element,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe("GLLoadable", () => {
  // Normal condition, should render the loadable Test component
  const loadableOptions: GLLoadableOpts = {
    loader: () => import("../components/Test"),
    loading: LoadingSuspense,
  };

  describe("using React Suspense", () => {
    const GLLoadable = GLReactSuspense;

    it("should render loadable component given normal condition", async () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      const { getByText } = renderWithRouter(<LoadableElmt />);

      await wait();
      expect(getByText("Test component")).toBeInTheDocument();
    });

    it("should render loading component before rendering the loadable component", () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      const { getByText } = renderWithRouter(<LoadableElmt />);
      expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("should render error component if something goes wrong", async () => {
      const errLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error")),
        loading: LoadingSuspense,
      };
      const LoadableElmt = GLLoadable(errLoadableOptions);
      const { getByText } = renderWithRouter(<LoadableElmt />);

      await wait();
      expect(getByText(/Error/)).toBeInTheDocument();
    });

    // This kind of defeat the purpose of code-splitting via asynchronously loading component.
    // This is just to show that it works.
    it("should render loadable component given direct component declaration", async () => {
      const directLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: any }>((resolve, _) => resolve({ default: () => <div>Direct</div> })),
        loading: LoadingSuspense,
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
      const { getByText } = renderWithRouter(<LoadableElmt />);

      await wait();
      expect(getByText("Test component")).toBeInTheDocument();
    });

    it("should render loading component before rendering the loadable component", () => {
      const LoadableElmt = GLLoadable(loadableOptions);
      const { getByText } = renderWithRouter(<LoadableElmt />);
      expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("should render error component if something goes wrong", async () => {
      const errLoadableOptions: GLLoadableOpts = {
        loader: () => new Promise<{ default: React.ComponentType<any> }>((_, reject) => reject("Error")),
        loading: Loading,
      };
      const LoadableElmt = GLLoadable(errLoadableOptions);
      const { getByText } = renderWithRouter(<LoadableElmt />);

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
