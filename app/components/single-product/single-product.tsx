import * as React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
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
  onPress: any
  item: { name: string; images: string; price: string; category: string; brand: string }
}

/**
 * Describe your component here
 * This is a single product component
 *
 * used in: product-list-screen
 *
 * Note: hover on image path to check out the component
 * please update the pic if you made any UI changes
 * require('../../../assets/screenShots/singleProduct.png')
 */

export const SingleProduct = observer(function SingleProduct(props: SingleProductProps) {
  const { style, item, onPress } = props
  const { name, images, price, brand } = item
  const styles = flatten([CONTAINER, style])

  const addToWishlist = () => {
    console.log("ADD TO WISHLIST")
  }

  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Button preset="link" style={WISHLIST_ICON} onPress={() => addToWishlist()}>
        <Icon name={icons.wishlist} size={20} />
      </Button>
      <AutoImage resizeMode="cover" source={{ uri: images[0] }} style={PRODUCT_IMAGE} />
      <View style={PRODUCT_INFO}>
        <Typography text={brand} fontWeight="bold" fontSize={14} />
        <Typography text={name} fontSize={12} />
        <Typography text={price} fontSize={12} />
      </View>
    </TouchableOpacity>
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

const PRODUCT_INFO: ViewStyle = {
  height: "20%",
  justifyContent: "space-evenly",
  alignItems: "center",
}

const WISHLIST_ICON: ViewStyle = {
  alignSelf: "flex-end",
}
