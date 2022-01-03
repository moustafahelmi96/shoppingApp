import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { CategoryNavigatorButton, GenderSwitch, Header, Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { categoriesData } from "./data"
import { hp } from "../../utils/commonFunctions"

export const SearchScreen = observer(function SearchScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View testID="searchScreen" style={FULL}>
      <Header rightIcon={"cart"} />
      <GenderSwitch />
      <Screen style={ROOT} preset="scroll" unsafe>
        {categoriesData.map((category, index) => (
          <CategoryNavigatorButton
            title={category?.name}
            categoryColor={category?.color}
            key={index}
          />
        ))}
      </Screen>
    </View>
  )
})

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.white }

const ROOT: ViewStyle = {
  flex: 1,
  alignItems: "center",
  marginTop: hp(2),
}
