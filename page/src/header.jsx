import fw from "ians-fw";
import theme from "./theme";
fw.css`
.header-host{
    z-index:-1;
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
    z-index:1;
}
.header-cross{
    transform: rotate(22deg) translate(-10vw,70vh);
    width: 200vw;
    height: 100vh;
    background-color:${theme.dark};
}
body{
    height:300vh;
}
.header-content-host{
    z-index:-2;
    position:absolute;
    top:50vh;
    left:0px;
    width:100vw;
    height:100vh;
    background-color:${theme.dark};
    overflow-x:hidden;
    scroll-snap-type: y mandatory;
}
`;
export default function Header(props) {
    return <div>
        <div className="header-host">
            <h1 className="header-title-host">Ian Senne</h1>
            <div className="header-cross"></div>
        </div>
        <div className="header-content-host">

        </div>
    </div>
}