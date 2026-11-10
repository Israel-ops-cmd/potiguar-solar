import type { Photo as PhotoT } from "../config/photos";
import { photoSrcSet, photoUrl } from "../config/photos";

type Props = {
  photo: PhotoT;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  max?: number;
};

/** Imagem responsiva (AVIF/WebP via CDN), com cor de fundo enquanto carrega. */
export function Photo({ photo, sizes, className = "", imgClassName = "", priority = false, max }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: photo.color }}>
      <img
        src={photoUrl(photo, 1440)}
        srcSet={photoSrcSet(photo, max)}
        sizes={sizes}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        // @ts-expect-error fetchpriority ainda não está nos tipos do React 18
        fetchpriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{ objectPosition: photo.focus ?? "50% 50%" }}
      />
    </div>
  );
}
