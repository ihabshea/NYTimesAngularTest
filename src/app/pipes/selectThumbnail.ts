import { Pipe, PipeTransform } from "@angular/core";
import { Multimedia } from "../models/article";

@Pipe({ 
    standalone: true,
    name: 'pickThumbnnail' })
export class ThumbnailPipe implements PipeTransform{
    transform(multimedia: Multimedia[]) {
        return multimedia.filter((x) => x.format === "Large Thumbnail")[0].url;
    }
}