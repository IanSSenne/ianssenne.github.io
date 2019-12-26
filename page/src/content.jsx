import fw from "ians-fw";
import theme from "./theme";
// import FaceJpg from "./assets/IanSenne-face.jpg";
const FaceJpg = { href: "about:blank" }
import Effect from "./Effect";
fw.css`.content-title-host{
    content: minmax(var(--scroll-y,50vw));
    transform:translate(100vw,0vh) translate(-50%,-50%);
}
.content-host{
    background-color:${theme.light};
    position:absolute;
    top:100vh;
    left:0px;
    width:100vw;
    z-index:97;
    scroll-snap-type: y mandatory;
}
.section-host{
    display: flex;
    flex-direction: row;
    width: 100vw;
}
.section-segment{
    order: 0;
}
.content-scroll-snap{scroll-snap-align: start;}
.about-me-img{height:50vh;}
.pad-left-1em{padding-left:1em;}
`;
function AboutMe() {
    return <div className="content-scroll-snap">
        <section id="about-me">
            <Effect.FadeIn>
                <div className="section-host">
                    <div className="section-segment">
                        <img src={FaceJpg.href} className="about-me-img"></img>
                    </div>
                    <div className="section-segment pad-left-1em">
                        <h1>about me</h1>
                        Hello, my name is Ian Senne
                    </div>
                </div>
            </Effect.FadeIn>
        </section>
    </div>
}
export default function Content(props) {
    return <div className="content-host">
        <AboutMe>

        </AboutMe>
    </div>
}