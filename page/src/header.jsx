import fw from "ians-fw";
import theme from "./theme";
fw.css`
.header-host{
    position:absolute;
    top:calc(var(--scroll-y,0) * -1px);
    left:0px;
    width:100vw;
    height:100vh;
    background-color:${theme.accent};
    overflow:hidden;
}
.header-title-host{
    position: relative;
    top: 50%;
    width:100vw;
    text-align:center;
    color:${theme.text.title};
}
.header-cross{
    transform: rotate(22deg) translate(0px,70vh);
    width: 200vw;
    height: 100vh;
    background-color:${theme.dark};
}
body{
    height:300vh;
}`;
export default function Header(props) {
    return <div className="header-host">
        <h1 className="header-title-host">Ian Senne</h1>
        <div className="header-cross"></div>
    </div>
}