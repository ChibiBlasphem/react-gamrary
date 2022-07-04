import styled from 'styled-components';

export const ImageGalleryRoot = styled.div`
  display: flex;
  gap: 8px;
  height: 200px;
  overflow-x: scroll;
`;

export interface ImageGalleryImageProps {
  image: string;
}

export const ImageGalleryImage = styled.div.attrs<ImageGalleryImageProps>((props) => {
  return {
    style: {
      backgroundImage: `url(${props.image})`,
    },
  };
})<ImageGalleryImageProps>`
  height: 100%;
  aspect-ratio: 16 / 9;
  background-position: center;
  cursor: pointer;
`;
