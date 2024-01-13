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

  const buttonStyle: React.CSSProperties = {
    transform: "scale(3)",
  };

  const button = Button;
  const handleButtonClick = () => {
    console.log("Clicked green button");

    setButtonColor((prevColor) =>
      prevColor === "primary" ? "secondary" : "primary"
    );
  };

  const handleButtonOnMouseOver = () => {
    console.log("hovering");
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
      <Button
        color={buttonColor}
        onClick={handleButtonClick}
        onHover={handleButtonOnMouseOver}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
