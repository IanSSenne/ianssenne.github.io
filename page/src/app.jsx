import fw from "ians-fw";
import * as fwcomp from "ians-fw";
import CssInject from "./globalcssinject";
import Content from "./content";
import Header from "./header";
fw.css`.app-root{
    overflow:hidden;
}
body{
    overflow-x:hidden;
}`
const app = <div className="app-root">
    <CssInject></CssInject>
    <Header></Header>
    <Content></Content>
</div>;
export const element = app.element.bind(app);

Object.defineProperty(window, "fw", { value: { fw, fwcomp, app } });