import { fetchData } from "../lib/fetchData";

export const getBannersList = () => {
    const resource = '/banner/names';

    return fetchData(resource, {
        method: 'GET'
    })
}