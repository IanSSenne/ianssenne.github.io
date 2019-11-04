import fw from "ians-fw";
fw.css`.header-host{position:absolute;top:0px;left:0px;width:100vw;height:300vh;}`;
export default function Header(props) {
    return <div className="header-host">
        <h1 style="font-size:calc(1px * var(--scroll-y));color:hsl(calc(var(--scroll-x) / 10), 100%, 50%);">Header</h1>
    </div>
}