import styled from '@emotion/styled';

export const MyCard = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  height: 155px;
  min-width: 90%;
`;

export const ProfileImg = styled.div`
  min-width: 68px;
  min-height: 68px;
  max-width: 68px;
  max-height: 68px;
  border-radius: 50%;
  /* border: 1px solid gray; */
  display: flex;
`;

export const ProfileText = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 3px 0;
  color: #1a1a1a;
`;

export const Team = styled.div`
  font-size: 12px;
  font-weight: 400;
  padding-bottom: 11px;
  color: #1a1a1a;
`;

export const ExtraInfo = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 0;
  color: #555;

  p:nth-of-type(1) {
    font-size: 11px;
    font-weight: 500;
  }

  p:nth-of-type(2) {
    font-size: 11px;
    font-weight: 400;
  }
`;

export const MoreOption = styled.div`
  display: flex;
  width: 5px;
  height: 24px;
  margin-top: 16px;
  justify-content: end;
  margin-left: auto;
`;