import media1 from "./baby-yoda-md.png";
import media2 from "./baby-yoda-thumb.png";
import media3 from "./placeholder.jpg";
import media4 from "./baby-yoda-thumb.png";
import media5 from "./baby-yoda-md.png";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex  = (index: number) => media[index % media.length];