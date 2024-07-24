const INDEX_CLASS = "index";

const baseURL = "/";

export const getPathClasses = (pathname: string): string => {
    if (pathname === baseURL) return INDEX_CLASS;

    const cleanPathnameParts = pathname.replace(/\.html$/, "").substring(1).split("/");

    const pathClasses = cleanPathnameParts.map((_, index) => {
        return cleanPathnameParts.slice(0, index + 1).join("_");
    });

    return pathClasses.join(" ");
}