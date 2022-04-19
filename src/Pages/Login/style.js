import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  font-weight: bold;
`

export const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 30px;
  width: auto;
`
