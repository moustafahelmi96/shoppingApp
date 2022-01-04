import React from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View, ViewStyle } from "react-native"
import { Screen, Header } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SingleProduct } from "../../components/single-product/single-product"

export const ProductListScreen = observer(function ProductListScreen({ route }) {
  const { title, products } = route.params
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // Pull in navigation via hook
  const navigation = useNavigation()

  return (
    <View style={FULL}>
      <Header leftIcon="back" headerText={title} rightIcon={"cart"} />
      <Screen style={ROOT} preset="fixed" unsafe>
        <FlatList
          contentContainerStyle={FLAT_LIST}
          data={products}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SingleProduct
              item={item}
              onPress={() => {
                navigation.navigate("singleProduct", { product: item })
              }}
            />
          )}
        />
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

const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[2],
  alignItems: "flex-end",
}
