const EMPTY_BASE_URL = "/";
export default function computePath (path: string): string {
    if (import.meta.env.BASE_URL === EMPTY_BASE_URL) return path;

    return `${import.meta.env.BASE_URL}${path}`;
}