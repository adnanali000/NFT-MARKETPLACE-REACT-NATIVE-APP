import React from 'react'
import { Text,View,SafeAreaView,FlatList } from 'react-native'
import {COLORS,NFTData} from '../constants'
import {NFTCard,HomeHeader,FocusedStatusBar} from '../components'

const Home = () => {
  return (
   <SafeAreaView style={{flex:1}}>
     <FocusedStatusBar backgroundColor={COLORS.primary} />
     
   </SafeAreaView>
  )
}

export default Home