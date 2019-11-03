import { element } from "./todo-example/app";
if (document.body) {
    document.body.appendChild(element());
} else {
    document.addEventListener("DOMContentLoaded", function () {
        document.body.appendChild(element());
    });
}