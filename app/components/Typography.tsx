import React, { FC } from "react"
import { Text, TextStyle, View, ViewStyle } from "react-native"
import { color, typography } from "../theme"

type TypographyProps = {
  text?: string
  size?: number
  maxChar?: number
  noLimit?: boolean
  isRequired?: boolean
  activeColor?: string
} & TextStyle

const Typography: FC<TypographyProps> = ({
  text,
  activeColor = color.palette.black,
  size = 16,
  fontFamily = typography.primary,
  noLimit,
  maxChar = 50,
  isRequired,
  ...props
}: TypographyProps) => {
  return (
    <View style={ROW}>
      <Text style={TEXT(size, fontFamily, activeColor, props)}>
        {noLimit
          ? text
          : text !== undefined && (text.length >= maxChar ? text.slice(0, maxChar) + "..." : text)}
      </Text>
      {isRequired && <Text style={TEXT(size, fontFamily, color.palette.angry)}>*</Text>}
    </View>
  )
}

export default Typography

const ROW: ViewStyle = {
  flexDirection: "row",
}

const TEXT = function (size, fontFamily, color, props?) {
  return {
    fontSize: size,
    fontFamily: fontFamily,
    color: color,
    ...props,
  }
}
