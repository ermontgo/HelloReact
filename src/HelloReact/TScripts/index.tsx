import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./hello_component";

ReactDOM.render(
    <Hello name="Eric" />,
    document.getElementById("wrapper")
);