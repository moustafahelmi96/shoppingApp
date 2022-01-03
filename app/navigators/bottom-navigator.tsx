import React, { FC } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DashboardScreen } from "../screens"
import { color } from "../theme"
import Typography from "../components/Typography"
import Icon from "react-native-vector-icons/FontAwesome"
const Tab = createBottomTabNavigator()

const BottomNavigator: FC = () => {
  const activeTint = color.palette.black
  const deActiveTint = color.palette.lightGrey
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: BOTTOM_NAVIGATOR_STYLE,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={25} color={focused ? activeTint : deActiveTint} />
          ),
          tabBarLabel: ({ focused }) => (
            <Typography text={"Dashboard"} size={10} color={focused ? activeTint : deActiveTint} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="search" size={25} color={focused ? activeTint : deActiveTint} />
          ),
          tabBarLabel: ({ focused }) => (
            <Typography text={"Search"} size={10} color={focused ? activeTint : deActiveTint} />
          ),
        }}
      />
      <Tab.Screen
        name="Designers"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="tag" size={25} color={focused ? activeTint : deActiveTint} />
          ),
          tabBarLabel: ({ focused }) => (
            <Typography text={"Designers"} size={10} color={focused ? activeTint : deActiveTint} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="star" size={25} color={focused ? activeTint : deActiveTint} />
          ),
          tabBarLabel: ({ focused }) => (
            <Typography text={"Wishlist"} size={10} color={focused ? activeTint : deActiveTint} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={25} color={focused ? activeTint : deActiveTint} />
          ),
          tabBarLabel: ({ focused }) => (
            <Typography text={"Profile"} size={10} color={focused ? activeTint : deActiveTint} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const BOTTOM_NAVIGATOR_STYLE = {
  backgroundColor: color.palette.white,
}
