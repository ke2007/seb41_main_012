import styled from "styled-components";
import MatComment from "./MatComment";
import useAxios from "../../hooks/useAxios";
import {
  getComments,
  IComments,
} from "../../api/axiosAPI/comments/commentsAxios";
import MatCommentAdd from "./MatCommentAdd";

const StyledCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 260px;
`;

const StyledCommentList = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MatCommentList = ({ comments }: { comments: IComments[] }) => {
  return (
    <StyledCommentContainer>
      <MatCommentAdd />
      <StyledCommentList>
        {comments &&
          comments
            .slice(0)
            .reverse()
            .map((comment: IComments) => (
              <MatComment key={comment.CommentId} singleComment={comment} />
            ))}
      </StyledCommentList>
    </StyledCommentContainer>
  );
};

export default MatCommentList;
