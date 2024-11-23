import React from "react";

export const metadata = {
  title: "Error 404",
  description: "Page not found",
};

const ErrorPage = () => {
  return (
    <>
      <div>
        <h3 style={{ margin: "200px 0", textAlign: "center" }}>404 - Page Not Found</h3>
      </div>
    </>
  );
};

export default ErrorPage;