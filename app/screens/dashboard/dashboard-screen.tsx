import React from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { AutoImage, Button, Header, Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { hp } from "../../utils/commonFunctions"
import Typography from "../../components/Typography"

const SALE_BANNER = require("../../../assets/images/saleBanner.jpg")

export const DashboardScreen = observer(function DashboardScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View testID="DashboardScreen" style={FULL}>
      <Header headerText={"FRESHFETCH"} rightIcon={"cart"} />
      <View style={DISCLAIMER}>
        <Typography
          text={"Sale | Up to 50% | Shop now"}
          activeColor={color.palette.angry}
          fontWeight="bold"
        />
      </View>
      <Screen style={SCROLL} preset="scroll" unsafe>
        <AutoImage source={SALE_BANNER} style={DISCOUNT_IMAGE} />
        <Button preset="outline" text="Shop Now" style={SHOP_BUTTON} textStyle={SHOP_BUTTON_TEXT} />
        <AutoImage source={SALE_BANNER} style={DISCOUNT_IMAGE} />
        <Button preset="outline" text="Shop Now" style={SHOP_BUTTON} textStyle={SHOP_BUTTON_TEXT} />
      </Screen>
    </View>
  )
})

// styles

const SCROLL: ViewStyle = {
  backgroundColor: color.palette.white,
}

const FULL: ViewStyle = { flex: 1 }

const DISCLAIMER: ViewStyle = {
  backgroundColor: color.palette.offWhite,
  width: "100%",
  height: hp(7),
  justifyContent: "center",
  alignItems: "center",
}

const DISCOUNT_IMAGE: ImageStyle = {
  width: "90%",
  height: hp(35),
  alignSelf: "center",
  marginTop: hp(5),
}

const SHOP_BUTTON = {
  width: "90%",
  height: hp(5),
  marginTop: hp(2),
}

const SHOP_BUTTON_TEXT: TextStyle = {
  fontSize: 16,
}
