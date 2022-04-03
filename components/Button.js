import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            height: 40,
            width: 40,
            position: 'absolute',
            backgroundColor: COLORS.white,
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
            onPress={handlePress}
        >
            <Image source={imgUrl} resizeMode="contain" style={{ width: 24, height: 24 }} />

        </TouchableOpacity>
    )
}


export const RectButton = ({minWidth,fontSize,handlePress,...props}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.extraLarge,
            minWidth:minWidth,
            padding:SIZES.small,
            ...SHADOWS.light,
            ...props
        }}
            onPress={handlePress}
        >
            <Text style={{
                fontFamily:FONTS.semiBold,
                fontSize:fontSize,
                color:COLORS.white,
                textAlign:'center'

            }}>
                Place a bid
            </Text>

        </TouchableOpacity>
    )
}

