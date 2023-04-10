import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

// components
import Dropdown from "../../components/dropdown";
import theme from "../../global/styles/theme";

// styles
import { CentralizedView, SafeContainer, HomeText } from "./Home.styled";

export default function Home() {
  /**
   * To exemplify the actions of the button,
   * a "page" state was created for Home screen.
   *  In this example, each button changes state for its label.
   */
  const [page, setPage] = useState<string | null>(null);

  const menuItems = [
    { label: "Rename", onPress: () => setPage("Rename") },
    { label: "Delete", onPress: () => setPage("Delete") },
    { label: "Share", onPress: () => setPage("Share") },
  ];

  return (
    <SafeContainer>
      <StatusBar style="light" />
      <View>
        {/**
         * Since I chose to make the look cleaner,
         * I opted for the inheritance structure.
         * */}

        <Dropdown
          align="right"
          items={menuItems}
          iconColor={theme.colors.white100}
        />

        <CentralizedView>
          <HomeText>{page}</HomeText>
        </CentralizedView>
      </View>
    </SafeContainer>
  );
}
