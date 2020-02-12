import fw, { Ref } from "ians-fw";
fw.css`
.effect.hidden{
    opacity:0;
}
.effect.fade-in{
    transition:1s;
    opacity:1;
}`;
const ids = {};
function generateId(pre) {
    if (ids[pre] != undefined) {
        return pre + "-" + (ids[pre]++ , ids[pre]);
    } else {
        ids[pre] = 0;
        return pre + "-0";
    }
};
function elementInViewport(el, targets = { top: true, bottom: true, left: true, right: true }) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        (top >= window.pageYOffset || !targets.top) &&
        (left >= window.pageXOffset || !targets.left) &&
        (((top + height) <= (window.pageYOffset + window.innerHeight)) || !targets.bottom) &&
        (((left + width) <= (window.pageXOffset + window.innerWidth)) || !targets.right)
    );
}
export function FadeIn(props) {
    const id = generateId("FadeIn");
    const visible = fw.StatefulData("effect hidden");
    const ref = new Ref();
    const velem = <div id={id} className={visible} ref={ref}>
        {props.children}
    </div>;
    const effect = () => {
        const intervalId = setInterval(() => {
            const el = document.getElementById(id);
            if (el) {
                if (el != ref.dom) {
                    clearInterval(intervalId);
                } else {
                    if (elementInViewport(ref.dom, { top: true, left: false, right: false, bottom: false })) {
                        visible.value = "effect fade-in";
                        clearInterval(intervalId);
                    }
                }
            } else {
                clearInterval(intervalId);
            }
        }, 100);
    }
    ref.watch(effect);
    return velem;
}
export default {
    FadeIn
}