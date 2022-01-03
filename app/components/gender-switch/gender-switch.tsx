import * as React from "react"
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color } from "../../theme"
import { flatten } from "ramda"
import { hp } from "../../utils/commonFunctions"
import Typography from "../Typography"

export interface GenderSwitchProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 * User can switch between genders by this component
 * Note: hover on image path to check out the component
 * please update the pic if you made any UI changes
 * require('../../../assets/screenShots/genderRadioButton.png')
 */

export const GenderSwitch = observer(function GenderSwitch(props: GenderSwitchProps) {
  const { style } = props
  const styles = flatten([CONTAINER, style])
  const [isActive, setIsActive] = React.useState("WOMEN")

  return (
    <View style={styles}>
      <SingleRadioOption
        title={"WOMEN"}
        isActive={isActive === "WOMEN"}
        setIsActive={setIsActive}
      />
      <SingleRadioOption title={"MEN"} isActive={isActive === "MEN"} setIsActive={setIsActive} />
      <SingleRadioOption title={"KIDS"} isActive={isActive === "KIDS"} setIsActive={setIsActive} />
    </View>
  )
})

const SingleRadioOption = ({ title, isActive, setIsActive }) => {
  return (
    <TouchableOpacity
      style={RADIO_OPTION(isActive)}
      onPress={() => {
        setIsActive(title)
      }}
    >
      <Typography
        text={title}
        fontSize={16}
        color={color.palette.black}
        fontWeight={isActive ? "bold" : "normal"}
      />
    </TouchableOpacity>
  )
}

const CONTAINER: ViewStyle = {
  width: "90%",
  height: hp(4),
  alignSelf: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  borderBottomWidth: 1,
  borderBottomColor: color.palette.lighterGrey,
}

const RADIO_OPTION = function (isActive: boolean) {
  return {
    marginRight: "4%",
    borderBottomWidth: isActive ? 2 : 0,
    borderBottomColor: isActive && color.palette.black,
  }
}
