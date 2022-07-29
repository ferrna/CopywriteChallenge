import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTextTransform } from "./redux/actions/index";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  /* let results = ["texto 1", "texto 2", "texto 3"]; */
  const [inputValue, setInputValue] = useState("");
  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();

  let handleOnChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  let handleOnSubmit = (event) => {
    event.preventDefault();
    inputValue.length > 0 && dispatch(getTextTransform(inputValue));
    setInputValue("")
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-dark bg-danger" id="navbar">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="d-flex">
            <input
              name="input"
              id="input"
              value={inputValue}
              onChange={(e) => handleOnChange(e)}
              onKeyDown={(event) => event.key === "Enter" && handleOnSubmit(event)}
              className="form-control me-1 me-md-4"
              type="search"
              placeholder="Insert Text"
              aria-label="Insert Text"
              style={{ width: "600px", maxWidth: "80vw" }}
            />
            <button
              className="btn btn-primary text-white fw-semibold"
              type="button"
              style={{ width: "90px", maxWidth: "15vw" }}
              onClick={handleOnSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </nav>
      <div className="bg-light h-100 flex-grow-1 d-flex justify-content-center align-items-center text-secondary">
        <div
          className="shadow rounded p-4" id="resultsCard"
          style={{ width: "900px", maxWidth: "95vw", marginBottom: "10%", minHeight: "50vh" }}
        >
          <div className="title fs-4">Results:</div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {results &&
              results.map((res, i) => (
                <div
                  key={i}
                  id={i}
                  className="w-75 border border-secondary m-1 rounded px-1 pb-1 position-relative"
                  style={{ lineHeight: "30px" }}
                >
                  {res.text}
                  {res.palindrome && <p className="position-absolute text-success" style={{bottom: "-1rem", right: "0.5rem"}}>palindrome</p>}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
