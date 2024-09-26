import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import React from 'react';
import Constants from "expo-constants"
import { Trending } from "../components/trending";

const statusBarHeigth = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
    style={{flex:1}} 
    className="bg-slate-200"
    showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style ={{marginTop : statusBarHeigth + 8}}>
        <Header/>

        <Banner/>

        <Search/>

        
        
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={()=> console.log("Clicou no botao")}
        size="text-2xl"
      />


      <Trending/>

      

    </ScrollView>
  );
}
