import React from "react";

const Container = ({children}) => {
    return (<div className="font-sans min-h-screen bg-gray-100 py-16">
        <div className="max-w-2xl mx-auto">
            {children}
        </div>
    </div>)
}

export default Container
