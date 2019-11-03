import fw from "ians-fw";
function Clock(props){
    const time = fw.StatefulData("Loading...");
    
    let d = new Date();
    time.value = d.getHours()+" "+d.getMinutes()+" "+d.getSeconds()+" "+d.toDateString();
    setInterval(()=>{
        d = new Date();
        time.value = d.getHours()+" "+d.getMinutes()+" "+d.getSeconds()+" "+d.toDateString();
    },1000);
    return <a href={fw.stateJoin("?t=",time)}>{time}</a>
}
const app = <div>
    <Clock></Clock>
</div>;
export const element = app.element.bind(app);