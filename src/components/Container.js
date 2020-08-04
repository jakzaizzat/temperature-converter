import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Container = ({children}) => {
    return (<div className="font-sans antialiased relative min-h-screen bg-background-primary py-16 flex items-center transition duration-150 ease-in-out">
        <ThemeSwitcher/>
        <div className="max-w-2xl mx-auto">
            {children}
        </div>
    </div>)
}

export default Container
