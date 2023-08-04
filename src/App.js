import React from "react";
import Button from "./Button";
import { GoBell, GoCircleSlash, GoGlobe, GoRss, GoTrash } from "react-icons/go";

const App = () => {
  return (
    <div className="App">
      <div>
        <Button primary outline>
          <GoBell />
          Button One
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoGlobe />
          Button Two
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoRss />
          Button Three
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoTrash />
          Button Four
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoCircleSlash />
          Button Five
        </Button>
      </div>
    </div>
  );
};
export default App;
