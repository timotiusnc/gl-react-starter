/*
 * I18NProvider.tsx
 * Component to wrap react-intl initialization.
 * The way react-intl initialize I18N is quite different from i18next (react.i18next.com).
 * If we were to move to other lib than react-intl, it might be not that easy.
 * However, react-intl v3.x is promising (using new React Context API and Hooks).
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 2nd 2019
 * -----
 * Last Modified: June 5th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import * as localeEN from "react-intl/locale-data/en";
import * as localeID from "react-intl/locale-data/id";

import { messagesEN } from "./strings/en";
import { messagesID } from "./strings/id";

export interface I18NProps {
  locale: string;
}

// Initialize translations here. If we support many languages, we might have to load it lazily.
// We need to give type to "messages" due to this error:
// Element implicitly has an 'any' type because type
// '{ en: { asu: string; }; id: { asu: string; }; }' has no index signature
const messages: { [index: string]: {} } = {
  en: messagesEN,
  id: messagesID
};

export const I18NProvider: React.SFC<I18NProps> = props => {
  addLocaleData(localeEN);
  addLocaleData(localeID);

  return (
    <IntlProvider locale={props.locale} messages={messages[props.locale]}>
      {props.children}
    </IntlProvider>
  );
};
