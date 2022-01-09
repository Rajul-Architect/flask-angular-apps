interface PageRequest {
    size: number,
    page: number,
    searchRequest: string,
    searchRequestOwner: string,
    maxSize: number
}
export class ConstantsHelper {
    public static defaultPageModel: PageRequest = {
        size: 5,
        page: 1,
        searchRequest: '',
        searchRequestOwner: '',
        maxSize: 5
    }
}
