import Reject from "../Images/reject.png";
import Approve from "../Images/check.png";
import Add from "../Images/plus.png";
import Pikachu from "../Images/nothing-yet.gif";

import {
  ButtonsContainer,
  ActionButtonIcon,
  ActionButtonApprove,
  ActionButtonReject,
  MainImageContent,
  SingleImage,
  SingleImageRow,
  NoImageYet,
  NoImageText,
  GifNoImage,
} from "../styles/ImageContainer";

import { AddImageButton } from "../styles/MainContainerApp";
import { AddImageIcon } from "../styles/MainContainerApp";

const Image = (props) => {
  return (
    <MainImageContent>
      {props.images.length !== 0 ? (
        <>
          <SingleImageRow>
            <SingleImage alt="unsplash_Image" src={props.images} />
          </SingleImageRow>
          <ButtonsContainer>
            <ActionButtonReject onClick={props.onSearchSubmit}>
              <ActionButtonIcon src={Reject} alt="reject" />
            </ActionButtonReject>
            <ActionButtonApprove
              onClick={() => {
                props.handleApproved(props.images);
                props.onSearchSubmit();
              }}
            >
              <ActionButtonIcon src={Approve} alt="approve" />
            </ActionButtonApprove>
          </ButtonsContainer>
        </>
      ) : (
        <NoImageYet>
          <GifNoImage src={Pikachu} alt="pikachu" />
          <NoImageText>
            This is just Pikachu. Click the plus button to see collection
          </NoImageText>

          <AddImageButton onClick={props.onSearchSubmit}>
            <AddImageIcon src={Add} alt="add_new" />
          </AddImageButton>
        </NoImageYet>
      )}
    </MainImageContent>
  );
};

export default Image;
