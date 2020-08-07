import React from "react";
import { render } from "@testing-library/react";
import TemperatureSwitcher from "./TemperatureSwitcher";
describe("Temperature Switcher", () => {
  it("should render the component with two inputs", () => {
    const { container } = render(<TemperatureSwitcher />);
    const inputs = container.querySelectorAll("input");
    expect(container).toBeTruthy();
    expect(inputs.length).toBe(2);
  });

  it("should set default value to 0 celcius", () => {
    const { container } = render(<TemperatureSwitcher />);
    const celciusInput = container.querySelectorAll("input")[0];
    expect(celciusInput.value).toBe("0");
  });

  it("should set calculated value to farenheit input", () => {
    const { container } = render(<TemperatureSwitcher />);
    const celciusInput = container.querySelectorAll("input")[1];
    expect(celciusInput.value).toBe("32");
  });
});
