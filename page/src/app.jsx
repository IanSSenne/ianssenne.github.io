import fw from "ians-fw";
import { Import } from "./import";
import CssInject from "./globalcssinject";
const app = <div>
    <CssInject></CssInject>
    <Import target={import("./content")}></Import>
    <Import target={import("./header")}></Import>
</div>;
export const element = app.element.bind(app);