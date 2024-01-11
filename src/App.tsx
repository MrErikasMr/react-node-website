import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [buttonColor, setButtonColor] = useState("primary");

  const button = Button;
  const handleButtonClick = () => {
    console.log("Clicked green button");

    setButtonColor((prevColor) =>
      prevColor === "primary" ? "secondary" : "primary"
    );
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color={buttonColor} onClick={handleButtonClick}>
        label
      </Button>
    </div>
  );
}

export default App;
