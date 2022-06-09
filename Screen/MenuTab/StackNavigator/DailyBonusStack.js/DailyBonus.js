import React from 'react'
import { View } from 'react-native'
import DailyHeader from '../../../../Components/MenuComponent/MenuIconComponents/DailyBonusComponent/DailyHeader'
import YoutubeComp from '../../../../Components/MenuComponent/MenuIconComponents/DailyBonusComponent/YoutubeComp'

function DailyBonus() {
  return (
    <View>
        <DailyHeader value='Daily Bonus' />
        <YoutubeComp />
        </View>
  )
}

export default DailyBonus