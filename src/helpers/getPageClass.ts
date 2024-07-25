const INDEX_CLASS = "index";

const baseURL = "/";

export const getPathClasses = (pathname: string): string => {
    const cleanPathname = pathname.startsWith(import.meta.env.BASE_URL) ? pathname.substring(import.meta.env.BASE_URL.length) : pathname;
    
    if (pathname === baseURL || cleanPathname === baseURL) return INDEX_CLASS;

    const cleanPathnameParts = cleanPathname.replace(/\.html$/, "").substring(1).split("/");

    const pathClasses = cleanPathnameParts.map((_, index) => {
        return cleanPathnameParts.slice(0, index + 1).join("_");
    });

    return pathClasses.join(" ");
}