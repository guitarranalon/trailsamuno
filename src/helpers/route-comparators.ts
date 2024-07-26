function addTrailingSlashIfNotExist(route: string): string {
    return route.endsWith("/") ? route : `${route}/`;
}

function prefixWithBaseUrlIfNecessary(route: string): string {
    if (route.startsWith(import.meta.env.BASE_URL)) return route;

    return `${import.meta.env.BASE_URL}${route}`;
}

function normalizeRoute(route: string): string {
    let normalizedRoute = prefixWithBaseUrlIfNecessary(route);
    normalizedRoute = addTrailingSlashIfNotExist(normalizedRoute);
    return normalizedRoute;
}

export function isSameRoute(route1: string, route2: string): boolean {
    return normalizeRoute(route1) === normalizeRoute(route2);
}

export function isBaseUrl(route: string): boolean {
    return isSameRoute(route, import.meta.env.BASE_URL);
}
