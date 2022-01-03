import React from "react"
import { View, ViewStyle, SafeAreaView } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import Icon from "react-native-vector-icons/FontAwesome"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import Typography from "../Typography"
import { hp } from "../../utils/commonFunctions"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingBottom: spacing[2],
  justifyContent: "flex-start",
  height: hp(5),
}
const TITLE_MIDDLE: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <SafeAreaView>
      <View style={[ROOT, style]}>
        {leftIcon ? (
          <Button preset="link" onPress={onLeftPress}>
            <Icon icon={leftIcon} />
          </Button>
        ) : (
          <View style={LEFT} />
        )}
        <View style={TITLE_MIDDLE}>
          <Typography text="FRESHFETCH" fontWeight="bold" />
        </View>
        {rightIcon ? (
          <Button preset="link" onPress={onRightPress}>
            <Icon name={rightIcon} size={25} />
          </Button>
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    </SafeAreaView>
  )
}
