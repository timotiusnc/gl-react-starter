import { createMemoryHistory } from "history";
import "jest-dom/extend-expect";
import * as React from "react";
import { Router } from "react-router";
import { render, wait } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import { LoadingSuspense } from "../components/LoadableSamples/LoadingSuspense";

import { GLLoadable, GLLoadableOpts } from "./GLLoadable";

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

test("GLLoadable", async () => {
  const loadableOptions: GLLoadableOpts = {
    loader: () => import("../components/Test"),
    loading: LoadingSuspense,
  };
  const LoadableElmt = GLLoadable(loadableOptions);
  const { getByText, asFragment: asu } = renderWithRouter(<LoadableElmt />);

  await wait();
  expect(getByText("Test component")).toBeInTheDocument();
});
