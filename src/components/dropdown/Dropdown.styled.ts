import styled from "styled-components/native";

const DropdownContainer = styled.View`
  color: ${({ theme }) => theme.colors.white100};
  z-index: 10;
`;

const DropdownToggle = styled.TouchableHighlight<{ align: "left" | "right" }>`
  background-color: ${({ theme }) => theme.colors.black700};
  ${({ align }) => align}: 0;
  position: absolute;
  padding: 8px;
  width: 56px;
  z-index: 10;
`;

const DropdownMenu = styled.View<{ align: "left" | "right" }>`
  background-color: ${({ theme }) => theme.colors.black700};
  position: absolute;
  top: 56px;
  ${({ align }) => align}: 0;
  min-width: 150px;
  z-index: 10;
`;

const DropdownMenuItem = styled.TouchableOpacity`
  padding: 12px 16px;
  z-index: 100;
`;

const DropdownMenuItemText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white100};
`;

export {
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuItemText,
};
