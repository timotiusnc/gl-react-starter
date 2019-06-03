/*
 * withDecorator.tsx
 * These decorators are unused because the nature of react-intl's IntlProvider
 * will need to be a wrapped component. It needs the "locale" variable for
 * dynamic translation change.
 *
 * The code is preserved for reference if we need decorator functions in the future.
 * Don't forget to turn on "experimentalDecorators" on tsconfig.json
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

// Decorator for class component
// P needs to extends object, if not it will throw error that I still don't understand yet
// The type of function needs to return void because TypeScript thinks
// React.Component<P> and class X extends React.Component<P> is different
export function withDecoratorClass(param: any): (<P extends object>(WrappedComp: React.ComponentType<P>) => void) {
  return <P extends object>(WrappedComp: React.ComponentType<P>) => class WithDecoClass extends React.Component<P> {
    constructor(props: P) {
      super(props);
    }

    public render() {
      return (
        <div>
          <WrappedComp {...this.props as P} />
        </div>
      );
    }
  };
}

// Decorator for functional component
// This is non-sense, because currently TypeScript doesn't allow decorators for function component
// Here because I like seeing the type system works
// P needs to extends object, if not it will throw error that I still don't understand yet
export function withDecoratorFC(param: any): (<P extends object>(WrappedComponent: React.FC<P>) => React.FC<P>) {
  return <P extends object>(WrappedComponent: React.ComponentType<P>) => (props: P) => {
    // Do initialization if necessary

    return (
      <div>
        <WrappedComponent {...props as P} />
      </div>
    );
  };
}
