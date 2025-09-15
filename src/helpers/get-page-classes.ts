import { isSameRoute, isBaseUrl } from "./route-comparators";

const INDEX_CLASS = "index";
export const emptyBaseUrl = "/";

const baseURL = import.meta.env.BASE_URL;

export const getPathClasses = (pathname: string): string => {
    let cleanPathname = pathname;

    if (baseURL !== emptyBaseUrl) {
        cleanPathname = pathname.substring(import.meta.env.BASE_URL.length);
    }

    if (isBaseUrl(pathname) || isSameRoute(cleanPathname, baseURL)) return INDEX_CLASS;

    const cleanPathnameParts = cleanPathname.replace(/\.html$/, "").substring(1).split("/");

    const pathClasses = cleanPathnameParts.map((_, index) => {
        return cleanPathnameParts.slice(0, index + 1).join("_");
    });

    return pathClasses.join(" ");
}