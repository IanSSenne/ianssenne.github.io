import fw from "ians-fw";
import { Import } from "./import";
const app = <div>
    <Import target={import("./header")}></Import>
</div>;
export const element = app.element.bind(app);