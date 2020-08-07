import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import BaseInput from "./BaseInput";

afterEach(cleanup);

const setup = ({ value, onChange = () => {} }) => {
  const { container } = render(
    <BaseInput
      symbol="C"
      placeholder="Enter celcius"
      onChange={onChange}
      value={value}
      name="Celcius"
    />
  );
  return { container };
};

describe("BaseInput", () => {
  test("render BaseInput component", () => {
    const { container } = setup({
      value: 0,
    });
    const input = container.querySelector("input");
    expect(input).toBeTruthy();
  });

  test("Default value set to zero", () => {
    const number = "asdasd";
    const { container } = setup({
      value: parseInt(number),
    });
    const input = container.querySelector("input");
    expect(input.value).toBe("0");
  });

  test("Can't type alphabet in the input", () => {
    const func = jest.fn();
    const { container } = setup({
      value: 0,
      onChange: func,
    });
    const input = container.querySelector("input");
    fireEvent.change(input, { target: { value: "Testing character" } });
    expect(input.value).toBe("0");
  });
});
