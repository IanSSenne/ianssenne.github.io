import fw, { StatefulData, Component } from "ians-fw";
export class Import extends Component {
    constructor({ target, children }) {
        super({ target, children });
        this.target = target;
        this.node = StatefulData([<span></span>]);
        this.target.then(module => {
            this.node.value = [fw.dom(module.default, null, ...children)];
        })
    }
    render() {
        return <div>{this.node}</div>;
    }
}