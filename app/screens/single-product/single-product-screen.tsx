import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ImageStyle, View, ViewStyle } from "react-native"
import { Screen, Header, Button } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import { SliderBox } from "react-native-image-slider-box"
import { hp } from "../../utils/commonFunctions"
import Typography from "../../components/Typography"
import { ProductCollapsible } from "../../components/product-collapsible/product-collapsible"

export const SingleProductScreen: FC<any> = observer(function SingleProductScreen({ route }) {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const { product } = route.params
  const { brand, images, name, price } = product
  // Pull in navigation via hook
  // const navigation = useNavigation()

  const productDescription =
    "If exquisite detailing is something that might interest you, look no further. Featuring seven bands with the VLTN logo, these VL7N slip-on sneakers (well played, Valentino Garavani) will show everyone you have a penchant for Italian luxury. Don't we all?"
  return (
    <View style={FULL}>
      <Header leftIcon="back" rightIcon={"cart"} />
      <Screen preset="scroll" unsafe>
        <SliderBox
          images={images}
          inactiveDotColor={color.palette.lightGrey}
          dotColor={color.palette.black}
          imageLoadingColor={color.palette.lightGrey}
          resizeMode={"contain"}
          style={IMAGE_SLIDER}
        />
        <View style={PRODUCT_INFO}>
          <Typography text={brand} fontWeight="bold" fontSize={16} />
          <Typography text={name} fontSize={16} />
          <View style={ROW}>
            <Typography text={price} fontSize={14} />
            <Typography
              text={" (Import duties included)"}
              fontSize={14}
              color={color.palette.lightGrey}
            />
          </View>
        </View>
        <ProductCollapsible title={"DESCRIPTION"} description={productDescription} />
        <ProductCollapsible title={"SIZE & FIT"} description={productDescription} />
        <ProductCollapsible title={"COMPOSITION & CARE"} description={productDescription} />
        <ProductCollapsible title={"ABOUT THE DESIGNER"} description={productDescription} />
      </Screen>
      <Button preset={"primary"} text="Add to bag" style={FLYING_BUTTON} />
    </View>
  )
})

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingBottom: hp(10),
}

const PRODUCT_INFO: ViewStyle = {
  height: hp(10),
  justifyContent: "space-evenly",
  alignItems: "center",
}

const IMAGE_SLIDER: ImageStyle = {
  width: "100%",
  height: hp(50),
}

const ROW: ViewStyle = {
  flexDirection: "row",
}

const FLYING_BUTTON: ViewStyle = {
  position: "absolute",
  bottom: hp(2),
}
