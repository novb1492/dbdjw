import { instance, setInterceptors } from "./request";

export function insertRequest(code,data) {
    setInterceptors(instance);
    return instance.post(`/api/article/save`, data);
}