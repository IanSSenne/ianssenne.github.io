import fw from "ians-fw";
import { items } from "../globalscopes";

fw.css`
.todo-item.visible{
    width:500px;
    cursor:pointer;
}
.todo-item.edit{
    width:500px;
}
.item-hover-wrapper:hover>.fade{
    opacity:1;
    transition:0.5s;
}
.item-hover-wrapper>.fade{
    opacity:0;
    transition:0.5s;
}
.icn{
    padding-left:5px;
    padding-right:5px;
}
i{
    transform:scale(1);
    transition:.2s;
}
i:hover{
    transform:scale(1.2);
    transition:.2s;
}
.far{
    cursor:grab;
}
.list-host{
    list-style:none;
}
body{
    text-align:center;
}`;

let todoitemnext = 0;

class TodoItem extends fw.Component {
    constructor({ item, removeItem, toggleComplete }) {
        super({ item, removeItem, toggleComplete });
        this.item = item;
        this.id = "todo-item-" + todoitemnext++;
        this.toggleComplete = toggleComplete;
        this.removeItem = removeItem;
        this.content = item.content;
        this.editorvisible = fw.StatefulData(false);
        this.toggleEditorVisible = this.toggleEditorVisibleForBinding.bind(this);
    }
    toggleEditorVisibleForBinding() {
        this.editorvisible.value = !this.editorvisible.value;
    }
    render() {
        if (this.item.complete.value) {
            return <li className="item-hover-wrapper">
                <span className="todo-item visible" onclick={this.toggleComplete}><strike>{this.content}</strike></span>
                <a onclick={this.removeItem} className="fade icn"><i className="far fa-trash-alt"></i></a>
            </li>
        } else {
            return <li>
                <div className="item-hover-wrapper">
                    <span hidden={this.editorvisible.value} className="todo-item visible" onclick={this.toggleComplete}>{this.content.value}</span>
                    <input onblur={(e) => {
                        this.toggleEditorVisible();
                        this.content.value = e.target.value;
                    }} hidden={!this.editorvisible.value} value={this.content.value} className="todo-item edit"></input>
                    <a hidden={!this.editorvisible.value} onclick={this.removeItem} className="icn"><i className="far fa-trash-alt"></i></a>
                    <a hidden={!this.editorvisible.value} onclick={this.toggleEditorVisible} className="icn"><i className="far fa-save"></i></a>
                    <a hidden={this.editorvisible.value} onclick={this.toggleEditorVisible} className="icn fade"><i className="far fa-edit"></i></a>
                </div>
            </li>
        }
    }
}

export default class extends fw.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.items = items;
    }
    handleSubmit() {
        const target = document.getElementById("now-item-input");
        if (target.value === "") return;
        this.items.value.push({ content: fw.StatefulData(target.value), complete: fw.StatefulData(false) });
        this.items.value = this.items.value;
        target.value = "";
    }
    render() {
        localStorage.setItem("todo-items", JSON.stringify(this.items.value.map(item => {
            return { content: item.content.value, complete: item.complete.value };
        })));
        return <div>
            <div>
                <input type="text" name="todoitem" value="" placeholder="new todo item" id="now-item-input"></input>
                <button onclick={this.handleSubmit.bind(this)}>submit</button>
            </div>
            <ul className="list-host">
                {this.items.value.map((item, index) => <TodoItem item={item} removeItem={() => {
                    this.items.value.splice(index, 1);
                    this.items.value = this.items.value;
                }} toggleComplete={() => {
                    item.complete.value = !item.complete.value;
                    const copy = this.items.value;
                    this.items.value = copy;
                }}></TodoItem>)}
            </ul>
        </div>
    }
}