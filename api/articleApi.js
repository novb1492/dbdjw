import { instance, setInterceptors } from "./request";

export function insertRequest(data) {
    setInterceptors(instance);
    return instance.post(`/api/article/save`, data);
}
export function listOwnRequest({page,pageSize,title,text}) {
    setInterceptors(instance);
    return instance.get(`/api/article/list?page=${page}&pageSize=${pageSize}&title=${title}&text=${text}`);
}