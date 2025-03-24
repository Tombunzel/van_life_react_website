import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    return (
        <>
            <h1>Sorry, there's been an error</h1>
            <pre>{error.status ? error.status : ""} - {error.statusText ? error.statusText : ""}</pre>
        </>
    )
}