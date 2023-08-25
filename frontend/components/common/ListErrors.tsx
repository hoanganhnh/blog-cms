import React from "react";

const ListErrors = ({ errors }) =>
  Boolean(errors) ? (
    <ul className="error-messages">
      {Object.keys(errors).map((key) => {
        return (
          <li key={key}>
            {key} {errors[key]}
          </li>
        );
      })}
    </ul>
  ) : null;

export default ListErrors;
