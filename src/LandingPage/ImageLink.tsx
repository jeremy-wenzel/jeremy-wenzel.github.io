import './css/ImageLink.css';

export interface ImageLinkProps {
  imageName: string;
  linkUrl: string;
  alternativeName: string;
  className?: string;
}

export default function ImageLink({ className, imageName, linkUrl, alternativeName }: ImageLinkProps) {
  const pathToAsset = `assets/${imageName}`;
  return (
    <div className={className}>
      <a href={linkUrl}>
        <img className="imageLink" src={pathToAsset} alt={alternativeName} />
      </a>
    </div>
  )
}