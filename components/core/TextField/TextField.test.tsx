import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TextField from "./TextField";
import { Props } from "./TextField.type";

function renderTextField(props: Props) {
  return render(<TextField {...props} />);
}

describe("<TextField />", () => {
  test("It should render input field", async () => {
    const result = renderTextField({ label: "TextField", className: "MyTextField" });
    const textElement = result.baseElement.getElementsByTagName("input")[0]
    expect(textElement).toMatchSnapshot();
    fireEvent.focus(textElement);
    fireEvent.change(textElement, {target: {value: '23'}})
    expect(textElement.value).toBe('23')
  });
});
