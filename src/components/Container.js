import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Container = ({children}) => {
    return (<div className="font-sans antialiased relative min-h-screen bg-gray-100 dark:bg-gray-900 py-16 flex items-center">
        <ThemeSwitcher/>
        <div className="max-w-2xl mx-auto">
            {children}
        </div>
    </div>)
}

export default Container
