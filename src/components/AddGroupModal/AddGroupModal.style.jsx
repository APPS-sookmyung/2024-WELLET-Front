import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  padding-bottom: 70px;
  width: 100%;
  max-width: 768px;
  transition:
    transform 600ms cubic-bezier(0.86, 0, 0.07, 1),
    opacity 600ms cubic-bezier(0.86, 0, 0.07, 1);
  transform: ${({ isModalOpen }) =>
    isModalOpen ? 'translateY(0)' : 'translateY(100%)'};
  opacity: ${({ isModalOpen }) => (isModalOpen ? 1 : 0)};
`;

export const AddGroupModal = styled.div`
  width: 100%;
  height: 465px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid #e3e3e3;
`;

export const DragBar = styled.div`
  width: 72px;
  height: 5px;
  border-radius: 4px;
  background: var(--grey1, #c8c8c8);
`;

export const ModalTitle = styled.p`
  color: var(--grey4, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.7px;
`;
export const Center = styled.div`
  padding: 24px 20px 0 20px;
  height: 100%;
`;

export const GroupEditBox = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap; 
`;
export const Bottom = styled.div`
  padding: 0 20px 28px 20px;
  display: flex;
  gap: 20px;
  bottom: 0;
`;