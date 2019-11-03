import fw from "ians-fw";
import Content from "./components/content";
if(!localStorage.getItem("todo-items")){
    localStorage.setItem("todo-items","[]");
}
function TodoApp(){
    return <div>
        <h1>
            Ian's todo app
        </h1>
        <Content></Content>
    </div>
}
const app = <TodoApp></TodoApp>;
export const element = app.element.bind(app);
Object.defineProperty(window,"app",{value:app});