export interface Article {
    section: string;
    title: string;
    abstract: string;
    byline: string;
    multimedia: Multimedia[];
}
export interface Multimedia {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
}