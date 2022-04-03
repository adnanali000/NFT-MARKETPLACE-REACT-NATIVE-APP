import { View, Text,Image,TextInput } from 'react-native'
import React from 'react'
import {SIZES,COLORS,FONTS,assets} from '../constants'

const HomeHeader = ({onSearch}) => {
  
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={{
            width:90,
            height:25
          }}
        />

        <View style={{width:45,height:45}}>
          <Image source={assets.person01} resizeMode='contain' style={{width:'100%',height:'100%'}} />
          <Image source={assets.badge} resizeMode='contain' style={{position:'absolute', width:15,height:15,bottom:0,right:0}} />

        </View>
      </View>

      <View style={{marginVertical:SIZES.font}}>
        <Text style={{fontSize:SIZES.small,fontFamily:FONTS.regular,color:COLORS.white}}>Hello, Adnan 👋</Text>

        <Text style={{fontSize:SIZES.large,fontFamily:FONTS.bold,marginTop:SIZES.base / 2,color:COLORS.white}}>Let's find a masterpiece</Text>
      </View>

      <View style={{marginTop:SIZES.font}}>
        <View style={{
          width:'100%',
          borderRadius:SIZES.font,
          backgroundColor:COLORS.gray,
          flexDirection:'row',
          paddingHorizontal:SIZES.font,
          alignItems:'center',
          paddingVertical:SIZES.small - 2
        }}>
          <Image 
            source={assets.search}
            resizeMode="contain"
            style={{height:20,width:20,marginRight:SIZES.base}}
          />

          <TextInput 
            placeholder='Search NFTs' 
            style={{flex:1,color:COLORS.white,fontSize:SIZES.medium}} 
            onChangeText={onSearch} />
        </View>

      </View>

    </View>
  )
}

export default HomeHeader