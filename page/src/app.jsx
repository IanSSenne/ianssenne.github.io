import fw from "ians-fw";
import { Import } from "./import";
import CssInject from "./globalcssinject";
fw.css`.app-root{
    overflow:hidden;
}
body{
    overflow-x:hidden;
}`
const app = <div className="app-root">
    <CssInject></CssInject>
    <Import target={import("./content")}></Import>
    <Import target={import("./header")}></Import>
    <div></div>
</div>;
export const element = app.element.bind(app);