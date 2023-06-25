import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

test("renders learn react link", () => {
  const appRef = React.createRef();
  render(<App ref={appRef} />);
  // Call myFunction using the appRef
  const appInstance = appRef.current;
  const result = appInstance.formatPhoneNumberOnInput("1234567890");
  expect(result).toBe("(123) 456-7890");
});
