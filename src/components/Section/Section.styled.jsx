import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: left;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin: 0;
  font-size: 30px;
`;
