// -React-
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
