import React from "react";

const Form = (props) => {
  const handleSubmit = () => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(e)}>
        <ul className="steps" id="steps">
          <li className="page current">
            <h2>Paso 1</h2>
            <input type="email" name="email" id="" />
          </li>
          <li className="page">
            <h2>Paso 2</h2>
            <input type="text" name="fullname" id="" />
          </li>
          <li className="page">
            <h2>Page 3</h2>
            <input type="tel" name="phone" id="" />
          </li>
        </ul>
        <div className="action">
          <button id="next" type="button">
            Next
          </button>
          <button id="prev" type="button">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
