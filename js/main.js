window.onload = () => {
    "use strict";
    if("ServiceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};