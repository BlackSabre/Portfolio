import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Command not Recognised</h1>
      <p>That does not compute! Apologies for the short-circuit!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
