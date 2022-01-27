import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { Props } from "./Button.type";

function renderButton(props: Props) {
  return render(<Button {...props} />);
}

describe("<Button />", () => {
  test("It should render submit button", async () => {
    const { getByTestId } = renderButton({ label: "Submit Button", className: "MyTestButton" });
    const buttonElement = getByTestId("submit-button-custom");
    expect(buttonElement).toMatchSnapshot();
    expect(buttonElement.innerHTML).toContain('Submit Button')
  });
});
