import * as React from "react"
import {
  Animated,
  StyleProp,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing } from "../../theme"
import { flatten } from "ramda"
import { hp } from "../../utils/commonFunctions"
import Typography from "../Typography"
import Icon from "react-native-vector-icons/Ionicons"
import { icons } from "../icon/icons"

export interface ProductCollapsibleProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  title: string
  description?: string
}

/**
 * Describe your component here
 */
export const ProductCollapsible = observer(function ProductCollapsible(
  props: ProductCollapsibleProps,
) {
  const { style, title, description } = props
  const styles = flatten([CONTAINER, style])
  const [isOpen, setIsOpen] = React.useState(false)

  // animation
  const startingHeight = hp(7)
  const animatedHeight = React.useRef(new Animated.Value(startingHeight)).current
  const [fullHeight, setFullHeight] = React.useState(startingHeight)

  React.useEffect(() => {
    Animated.spring(animatedHeight, {
      friction: 100,
      toValue: isOpen ? fullHeight : startingHeight,
      useNativeDriver: false,
    }).start()
  }, [fullHeight, isOpen])

  const onTextLayout = (e) => {
    let { height } = e.nativeEvent.layout
    height = Math.floor(height) + 40
    if (height > startingHeight) {
      setFullHeight(height)
    }
  }

  return (
    <Animated.View style={[styles, { height: animatedHeight }]}>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsOpen(!isOpen)
        }}
      >
        <View style={ROW}>
          <Typography text={title} size={16} />
          <Icon
            color={color.palette.black}
            name={isOpen ? icons.arrowUp : icons.arrowDown}
            size={16}
          />
        </View>
      </TouchableWithoutFeedback>
      {isOpen && (
        <View
          style={OPENED}
          onLayout={(e) => {
            onTextLayout(e)
          }}
        >
          <Typography text={description} size={16} noLimit />
        </View>
      )}
    </Animated.View>
  )
})

const CONTAINER: ViewStyle = {
  borderBottomWidth: 0.5,
  borderBottomColor: color.palette.lightGrey,
  width: "90%",
  alignSelf: "center",
  justifyContent: "center",
}

const ROW: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const OPENED: ViewStyle = {
  paddingVertical: spacing[4],
}
