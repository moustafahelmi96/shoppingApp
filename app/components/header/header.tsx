import React from "react"
import { View, ViewStyle, SafeAreaView } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import Icon from "react-native-vector-icons/Ionicons"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import Typography from "../Typography"
import { hp } from "../../utils/commonFunctions"
import { icons } from "../icon/icons"
import { useNavigation } from "@react-navigation/native"

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

  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={[ROOT, style]}>
        {leftIcon ? (
          <Button
            preset="link"
            onPress={
              leftIcon === "back"
                ? () => {
                    navigation.goBack()
                  }
                : onLeftPress
            }
          >
            <Icon name={icons[leftIcon]} size={30} />
          </Button>
        ) : (
          <View style={LEFT} />
        )}
        <View style={TITLE_MIDDLE}>
          <Typography text={headerText} fontWeight={"bold"} />
        </View>
        {rightIcon ? (
          <Button preset="link" onPress={onRightPress}>
            <Icon name={icons[rightIcon]} size={30} />
          </Button>
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    </SafeAreaView>
  )
}

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
