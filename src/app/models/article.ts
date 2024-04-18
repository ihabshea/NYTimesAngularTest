export interface Article {
    section: string;
    title: string;
    abstract: string;
    byLine: string;
    multimedia: Multimedia[];
}
interface Multimedia {
    url: string;
    format: string;
    height: number;
    width: number;
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
}