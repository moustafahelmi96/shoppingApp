import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { categoriesScreen, CategoryDetailsScreen } from "../../screens"
import { ProductListScreen } from "../../screens/product-list/product-list-screen"
import { SingleProductScreen } from "../../screens/single-product/single-product-screen"

export type CategoriesParamList = {
  allCategories: undefined
  categoryDetails: undefined
  productList: undefined
  singleProduct: undefined
}

const Stack = createStackNavigator<CategoriesParamList>()
export const Categories = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      <Stack.Screen name="allCategories" component={categoriesScreen} />
      <Stack.Screen name="categoryDetails" component={CategoryDetailsScreen} />
      <Stack.Screen name="productList" component={ProductListScreen} />
      <Stack.Screen name="singleProduct" component={SingleProductScreen} />
    </Stack.Navigator>
  )
}

// category
