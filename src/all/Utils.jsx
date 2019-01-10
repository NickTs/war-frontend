
export const GetBaseUrl = () => {
    return window.location.protocol + "//"
        + window.location.hostname
        + (window.location.port ? ':' + window.location.port : '')
}

export const GetRequestParam = (paramName) => {
    return window
        .location
        .search
        .replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        )[paramName]
}