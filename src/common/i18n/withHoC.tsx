/*
 * withHoC.tsx
 * These HoCs are unused because the nature of react-intl's IntlProvider
 * will need to be a wrapped component. It needs the "locale" variable for
 * dynamic translation change.
 *
 * The code is preserved for reference if we need HoC functions in the future.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 3rd 2019
 * -----
 * Last Modified: June 3rd 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import * as React from "react";

// HOC that wraps class component
export const withHoCClass = <P extends object>(WrappedComponent: React.ComponentType<P>, param: any) =>
  class WithI18NProviderClass extends React.Component<P> {
    constructor(props: P) {
      super(props);
      // Do initialization if necessary
    }

    public render() {
      return (
        <div>
          <WrappedComponent {...this.props as P} />
        </div>
      );
    }
  };

// HOC that wraps function component
export const withHoCFC = <P extends object>(WrappedComponent: React.ComponentType<P>, param: any): React.FC<P> => ({
  ...props
}: P) => {
  // Do initialization if necessary

  return (
    <div>
      <WrappedComponent {...props as P} />
    </div>
  );
};
