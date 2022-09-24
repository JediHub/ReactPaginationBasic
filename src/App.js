import "./styles.css";
import { useState } from "react";
import Page from "./Page";

export default function App() {
  console.log(" ++++++++ App ++++++");
  const [page, setPage] = useState(1);
  function onClickHandler(event) {
    console.log(event.currentTarget.id);
    setPage(event.currentTarget.id === "next" ? page + 1 : page - 1);
  }
  return (
    <div className="App">
      <Page page={page} />
      <div className="Navigation">
        <button disabled={page < 2} id="prev" onClick={onClickHandler}>
          {" "}
          Previous{" "}
        </button>
        <label> {`       ${page}      `} </label>
        <button id="next" onClick={onClickHandler}>
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
}
