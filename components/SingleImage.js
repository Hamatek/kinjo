
const ImageFlip = ({ uri, altText, isVisible }) => {
    return <img width="100%" src={uri} alt={altText} style={{ display: `${isVisible ? 'block' : 'none'}` }} />
};

export default ImageFlip



