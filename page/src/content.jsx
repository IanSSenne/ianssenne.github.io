import fw from "ians-fw";
import theme from "./theme";
fw.css`
.content-host{
    position:absolute;
    top:50vh;
    left:0px;
    width:100vw;
    height:100vh;
    background-color:${theme.dark};
    overflow-x:hidden;
    scroll-snap-type: y mandatory;
}
.content-title-host{
    content: minmax(var(--scroll-y,50vw));
    transform:translate(100vw,0vh) translate(-50%,-50%);
}`;
export default function Header(props) {
    return <div className="content-host">
        <h3 className="content-title-host">Content</h3>
    </div>
}