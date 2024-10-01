import { View, Pressable, Text, Image  } from 'react-native';
import PagerView from 'react-native-pager-view';
import React from 'react';

export function Banner() {
    return(
        <View className='w-full h-36 md:h-60 rounded-2x1 mt-5 mb-4'>
            <PagerView style={{flex: 1 }}initialPage={0} pageMargin={14} >
                <Pressable className="w-full h-36 md:h-60 rounded-2x1"key="1" onPress={() => console.log("Clicou no Banner 1")}>
                <Image
                    source={require("../../assets/banner1.png")} className= "w-full h-36 md:h-60 rounded-lg" 
                />
                </Pressable>
                <Pressable className="w-full h-36 md:h-60 rounded-2x1" key="2" onPress={() => console.log("Clicou no Banner 2")}>
                <Image
                    source={require("../../assets/banner2.png")} className="w-full h-36 md:h-60 rounded-lg"
                />
                </Pressable>
            </PagerView>
        </View>
    )
}