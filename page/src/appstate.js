function editable(value, set) {
    return {
        get value() {
            return value
        },
        set value(_value) {
            value = _value;
            set(_value);
        }
    }
}
export var sesid = editable(
    "SESSIONID__" + new Date().getHours() + "_" + new Date().getMinutes() + "_" + new Date().getSeconds() + "_" + new Date().getMilliseconds() + "_" + new Date().getTime().toString(36),
    function () {
        localStorage.setItem(appstate.sesid, JSON.stringify(appstate));
    }
);
export var page = editable(
    0,
    function () {
        localStorage.setItem(appstate.sesid, JSON.stringify(appstate));
    }
);
var appstate = {
    get sesid() {
        return sesid.value;
    },
    get page() {
        return page.value;
    },
    set page(v) {
        return page.value = v;
    }
};
for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).substr(0, 9) === "SESSIONID") {
        localStorage.removeItem(localStorage.key(i));
    }
}
window.localStorage.setItem(sesid.value, JSON.stringify(appstate));
console.log(appstate);
export default appstate;