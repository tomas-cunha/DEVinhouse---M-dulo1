import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md};
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.spacing.md};

  &:hover {
    opacity: 0.7;
  }
`;
