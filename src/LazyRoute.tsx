import * as React from 'react';
import { RouteProps, Route } from 'react-router-dom';
import { Loading } from './Loading';

export interface IDynamicImportProps extends RouteProps {
  getComponent: () => Promise<{ default: React.ComponentType }>;
}

export function LazyRoute({ getComponent, ...props }: IDynamicImportProps) {
  const LazyComponent = React.lazy(getComponent);
  return (
    <Route {...props}>
      <React.Suspense fallback={<Loading />}>
        <LazyComponent />
      </React.Suspense>
    </Route>
  );
}
