import * as React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { flatten } from "ramda"
import Typography from "../Typography"
import { hp } from "../../utils/commonFunctions"
import Icon from "react-native-vector-icons/Ionicons"

export interface CategoryNavigatorButtonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  title: string
  style?: StyleProp<ViewStyle>
  categoryColor?: string
}

/**
 * Describe your component here
 * This component is a single option from a bunch of options,
 * by pressing on it will navigate the user to next screen
 *
 * used in: search-screen
 *
 * Note: hover on image path to check out the component
 * please update the pic if you made any UI changes
 * require('../../../assets/screenShots/genderRadioButton.png')
 */
export const CategoryNavigatorButton = observer(function CategoryNavigatorButton(
  props: CategoryNavigatorButtonProps,
) {
  const { style, title, categoryColor } = props
  const styles = flatten([CONTAINER, style])

  return (
    <TouchableOpacity style={styles}>
      <Typography text={title} color={categoryColor} />
      <Icon color={color.palette.black} name={"chevron-forward"} size={22} />
    </TouchableOpacity>
  )
})

const CONTAINER: ViewStyle = {
  width: "90%",
  height: hp(6),
  alignSelf: "center",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottomWidth: 0.5,
  borderBottomColor: color.palette.lighterGrey,
}
