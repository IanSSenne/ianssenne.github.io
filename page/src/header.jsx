import fw from "ians-fw";
import theme from "./theme";
import { Nav } from "./nav";
fw.css`
.header-host{
    z-index:99;
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
    z-index:95;
    position:absolute;
    top:50vh;
    left:0px;
    width:100vw;
    height:100vh;
    background-color:${theme.dark};
    overflow-x:hidden;
    scroll-snap-type: y mandatory;
}
.header-nav-host{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:98;
}`;
export default function Header(props) {
    return <div>
        <div className="header-host">
            <h1 className="header-title-host">Ian Senne</h1>
            <div className="header-cross"></div>
        </div>
        <div className="header-content-host">
        </div>
        <div className="header-nav-host">
            <Nav data={[{
                id: "about-me",
                content: "about-me", render() {
                    return <div>About Me</div>;
                },
                target: "about-me"
            }, {
                id: "two",
                content: "2", render() {
                    return <div>rwar</div>;
                },
                target: ""
            }, {
                id: "three",
                content: "3", render() {
                    return <div>tgdfgdf</div>;
                },
                target: ""
            }]}></Nav>
        </div>
    </div>
}