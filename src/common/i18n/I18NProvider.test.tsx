/*
 * I18NProvider.test.tsx
 * Sample how to use I18NProvider component.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 3rd 2019
 * -----
 * Last Modified: June 5th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { fireEvent, render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { I18NProvider } from "./index";

describe("i18n", () => {
  interface RootCtxProps {
    locale: string;
    setLocale: (locale: string) => void;
  }
  const RootCtx = React.createContext<RootCtxProps>({
    locale: "dummy",
    setLocale: (locale: string) => undefined
  });

  const Root: React.FC<{}> = () => {
    const [locale, setLocale] = React.useState("id");
    return (
      <RootCtx.Provider value={{ locale, setLocale }}>
        <I18NProvider locale={locale}>
          <DummyChild />
        </I18NProvider>
      </RootCtx.Provider>
    );
  };

  const DummyChild: React.FC<{}> = () => {
    const ctx = React.useContext(RootCtx);
    const onChangeLang = () => ctx.setLocale("en");

    return (
      <>
        <div onClick={onChangeLang}>Dummy child</div>
        <FormattedMessage id="hello" />
      </>
    );
  };

  it("should render I18NProvider and change translation dynamically", async () => {
    // Render Root which has RootCtx, locale set to "id"
    const { getByText } = render(<Root />);

    // Should have "Halo dunia!!" by now
    expect(getByText(/Halo/)).toBeInTheDocument();

    // Click the html element with "Dummy child" text to change "locale" on context
    fireEvent.click(getByText(/Dummy child/));

    // Should have "Hello world!!"
    expect(getByText(/Hello/)).toBeInTheDocument();
  });
});
