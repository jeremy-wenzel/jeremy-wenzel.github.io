import './css/ImageLink.css';

export interface ImageLinkProps {
  imageName: string;
  linkUrl: string;
  alternativeName: string;
}

export default function ImageLink({ imageName, linkUrl, alternativeName }: ImageLinkProps) {
  const pathToAsset = `assets/${imageName}`;
  return (
    <>
      <a href={linkUrl}>
        <img className="imageLink" src={pathToAsset} alt={alternativeName} />
      </a>
    </>
  )
}