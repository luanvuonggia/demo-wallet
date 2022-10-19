import styled from "styled-components/macro";
const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  position: relative;

  ${({ bgColor, txtColor, width, height }) => {
    return `
      background-color: ${bgColor};
      color: ${txtColor};
      height: ${height}px;
      width: ${width}px;
  `;
  }};
`;
export const Button = ({
  children,
  txtColor,
  bgColor,
  width,
  height,
  onClick,
}) => {
  return (
    <StyledButton
      txtColor={txtColor}
      bgColor={bgColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
