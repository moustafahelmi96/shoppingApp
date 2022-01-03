import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { CategoryNavigatorButton, Header, Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

export const CategoryDetailsScreen = observer(function CategoryDetailsScreen({ route }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const subCategories = route.params?.subCategories || []
  return (
    <View style={FULL}>
      <Header leftIcon="back" headerText={route?.params?.category} rightIcon="cart" />
      <Screen style={ROOT} preset="scroll" unsafe>
        {subCategories.map((subCategory, index) => (
          <CategoryNavigatorButton
            title={subCategory?.name}
            categoryColor={subCategory?.color}
            key={index}
          />
        ))}
      </Screen>
    </View>
  )
})

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
}
const ROOT: ViewStyle = {
  flex: 1,
}
