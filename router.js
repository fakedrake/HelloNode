function router_log(string) {
    console.log("Router: "+string);
}

function route(pathname) {
    router_log("received: " + pathname);
}

exports.route = route;
