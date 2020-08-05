import React from 'react'
import { render, cleanup, fireEvent } from "@testing-library/react";

import ThemeSwitcher from "./ThemeSwitcher";

afterEach(cleanup);

describe('Theme Switcher', function () {


    it('should render theme switcher', () => {
        const { getByTestId, container } = render(<div id="root"><ThemeSwitcher/></div>)
        expect(getByTestId('theme-toggle')).toBeTruthy();
    });

    it('should render light theme as a default', () => {
        const { getByTestId, container } = render(<div id="root"><ThemeSwitcher/></div>)
        const rootEl = container.querySelector('#root')
        console.log(rootEl)
        expect(rootEl).toHaveClass('theme-light')
    })

    it('trigger the toggle will change to dark theme', () => {
        const { getByTestId, container } = render(<div id="root"><ThemeSwitcher/></div>)
        const rootEl = container.querySelector('#root')
        const button = getByTestId('theme-toggle')
        fireEvent.click(button)
        expect(rootEl).toHaveClass('theme-dark')
    })
});
