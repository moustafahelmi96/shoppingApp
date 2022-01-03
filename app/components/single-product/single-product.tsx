import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import Icon from "react-native-vector-icons/Ionicons"
import { flatten } from "ramda"
import { hp } from "../../utils/commonFunctions"
import Typography from "../Typography"
import { AutoImage, Button } from ".."
import { icons } from "../icon/icons"

export interface SingleProductProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  item: { name: string; image: string; price: string; category: string; brand: string }
}

/**
 * Describe your component here
 */
export const SingleProduct = observer(function SingleProduct(props: SingleProductProps) {
  const { style, item } = props
  const { name, image, price, brand } = item
  const styles = flatten([CONTAINER, style])

  const addToWishlist = () => {
    console.log("ADD TO WISHLIST")
  }

  return (
    <View style={styles}>
      <Button preset="link" style={WISHLIST_ICON} onPress={() => addToWishlist()}>
        <Icon name={icons.wishlist} size={20} />
      </Button>
      <AutoImage resizeMode="cover" source={{ uri: image }} style={PRODUCT_IMAGE} />
      <View style={PRODUCT_INFO}>
        <Typography text={brand} fontWeight="bold" fontSize={14} />
        <Typography text={name} fontSize={12} />
        <Typography text={price} fontSize={12} />
      </View>
    </View>
  )
})

const CONTAINER: ViewStyle = {
  width: "48%",
  height: hp(42),
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: hp(2),
}

const PRODUCT_IMAGE = {
  width: "100%",
  height: "70%",
}

const PRODUCT_INFO = {
  height: "20%",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const WISHLIST_ICON = {
  alignSelf: "flex-end",
}
