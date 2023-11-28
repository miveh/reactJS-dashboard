import React from "react";
import { Suspense } from "react";
import { Loader } from "../loader";

export const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
