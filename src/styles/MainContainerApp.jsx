import styled from "styled-components";

export const MainContainerApp = styled.div`
  text-align: center;
  width: 50vw;
  background: #fff;
  height: 90vh;
  margin: auto;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
    height: 100%;
  }
`;

export const MainTitle = styled.h1`
  padding: 25px;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  color: #3030ff;
  border-bottom: 1px solid #efeaea;
`;

export const ApprovedImagesTitle = styled(MainTitle)`
  border-bottom: none;
  padding: 0 0 10px 0;
  display: flex;
  align-items: center;
`;

export const ApprovedImagesContainer = styled.div`
  padding: 25px;
  text-align: left;
  color: #3030ff;
  border-bottom: 1px solid #efeaea;
`;

export const ApprovedImagesScroll = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  max-width: 90%;
  scrollbar-width: none;
  overflow-y: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollLeftImage = styled.img`
  margin-left: 10px;
  width: 50px;
  cursor: pointer;
`;

export const ScrollableContentRow = styled.div`
  display: flex;
  align-items: center;
`;

export const AddImageButton = styled.div`
  width: 15%;
  background: #dfdfdf94;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 15px;
  height: 55px;
  cursor: pointer;
`;

export const AddImageIcon = styled.img`
  width: 40px;

  @media (max-width: 768px) {
    width: 25px;
  }
`;
