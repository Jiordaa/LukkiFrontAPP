import { fetchData } from "../lib/fetchData";

export const getBannerInfo= (bannerName: string) => {
    const resource = `/banner?name=${bannerName}`;

    return fetchData(resource, {
        method: 'GET'
    })
}