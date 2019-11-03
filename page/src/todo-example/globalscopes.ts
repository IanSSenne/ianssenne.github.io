import fw from "ians-fw";
let _items = [];
if(!localStorage.getItem("todo-items")){
    _items = [{content:fw.StatefulData("hello trezy"),complete:fw.StatefulData(false)},{content:fw.StatefulData("make todo app"),complete:fw.StatefulData(true)}];
}else{
    _items = JSON.parse(localStorage.getItem("todo-items")).map(item=>{
        return {content:fw.StatefulData(item.content),
        complete:fw.StatefulData(item.complete)}
    })
}
export const items = fw.StatefulData(_items);