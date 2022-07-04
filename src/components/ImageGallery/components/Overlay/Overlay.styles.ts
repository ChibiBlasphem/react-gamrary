import styled from 'styled-components';

export const OverlayRoot = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
`;

export const OverlayCloser = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000088;
`;

export const OverlayImage = styled.img`
  position: relative;
`;
