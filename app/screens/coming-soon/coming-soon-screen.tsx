import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import Typography from "../../components/Typography"

export const ComingSoonScreen = observer(function ComingSoonScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View testID="comingSoonScreen" style={FULL}>
      <Header />
      <Screen style={ROOT} preset="fixed">
        <Typography
          text={"Coming Soon"}
          alignSelf="center"
          color={color.palette.angry}
          fontSize={24}
          fontWeight="bold"
        />
      </Screen>
    </View>
  )
})

const FULL: ViewStyle = { flex: 1 }

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
