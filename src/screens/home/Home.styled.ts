import styled from "styled-components/native";

const SafeContainer = styled.SafeAreaView`
  background-color: blue;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black200};
`;

const CentralizedView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 0;
`;

const HomeText = styled.Text`
  color: ${({ theme }) => theme.colors.white100};
  font-size: 40px;
`;

export { SafeContainer, CentralizedView, HomeText };
