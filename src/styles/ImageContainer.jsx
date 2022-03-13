import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;
  padding-bottom: 40px;
`;

export const ActionButtonReject = styled.button`
  margin: 30px;
  border-radius: 20px;
  border: none;
  background: #64697a;
  padding: 13px 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ActionButtonApprove = styled(ActionButtonReject)`
  background: #3030ff;
`;

export const ActionButtonIcon = styled.img`
  width: 20px;
`;

export const MainImageContent = styled.div`
  padding: 25px;
`;

export const GifNoImage = styled.img`
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const SingleImageRow = styled.div``;

export const NoImageYet = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
`;
export const NoImageText = styled.div`
  margin-right: 15px;
  font-size: 19px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SingleImage = styled.img`
  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
`;
