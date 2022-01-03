import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { categoriesScreen, CategoryDetailsScreen } from "../../screens"

export type CategoriesParamList = {
  allCategories: undefined
  categoryDetails: undefined
}

const Stack = createStackNavigator<CategoriesParamList>()
export const Categories = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false }}
    >
      <Stack.Screen name="allCategories" component={categoriesScreen} />
      <Stack.Screen name="categoryDetails" component={CategoryDetailsScreen} />
    </Stack.Navigator>
  )
}

// category
