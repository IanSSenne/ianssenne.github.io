import fw from "ians-fw";
import theme from "./theme";
import appstate from "./appstate";
fw.css`ul.nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${theme.main};
  }
  
  ul.nav>li {
    float: left;
  }
  
 ul.nav> li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  ul.nav>li a:hover:not(.active) {
    background-color: ${theme.accent};
  }
  
  ul.nav>.active {
    background-color: ${theme.light};
  }`;
let navconfig = {};
let navtarget = fw.StatefulData(false);
export class Nav extends fw.Component {
    constructor({ data }) {
        super({ data });
        this.data = data;
        navconfig = this.data;
    }
    render() {
        return <nav>
            <ul className="nav">
                {this.data.map((navitem) => {
                    return <li className={navitem.id === appstate.page ? "active" : "inactive"}>
                        <a onclick={() => {
                            appstate.page = navitem.id;
                            navtarget.value = true;
                            document.getElementById(navitem.target).scrollIntoView({ block: "center", behavior: "smooth" });
                            this.rerender();
                        }}>
                            {navitem.content}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    }
}
export class NavTarget extends fw.Component {
    constructor(props) {
        super(props);
        this.navitem = navtarget;
        this.target = props.target;
    }
    render() {
        if (!navconfig[this.target]) {
            return <div></div>
        }
        return <div hidden={navconfig[this.target].id === appstate.page}>{navconfig[this.target]}</div>
    }
}