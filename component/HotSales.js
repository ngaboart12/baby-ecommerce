import { View, Text, Image, ImageBackground } from 'react-native'
import { Svg,Path } from 'react-native-svg'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/Slices/cartSlice'

const HotSales = (props) => {
  const dispatch = useDispatch()
    const {name,image,price} = props.data
  return (
    <TouchableOpacity  style={{width:120,gap:6,marginRight:10}}>
        
        <ImageBackground source={{uri:`${image}`}} style={{width:'100%',height:100}}>
        <TouchableOpacity onPress={()=> dispatch(addToCart(props.data))} style={{marginLeft:'auto',padding:4}}> 
           <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.7808 2.0003C14.3946 2.0003 16.5539 3.99196 16.8202 6.53922L16.8945 6.5401C18.3445 6.5401 20.1075 7.5031 20.7025 10.2041L21.4915 16.3111C21.7745 18.2821 21.4205 19.8631 20.4375 20.9971C19.4595 22.1251 17.9115 22.7221 15.9605 22.7221H7.61247C5.46947 22.7221 3.97647 22.1971 3.04747 21.1181C2.11447 20.0361 1.80247 18.4131 2.12047 16.2951L2.89647 10.2691C3.40647 7.5061 5.27147 6.5401 6.71547 6.5401C6.84013 5.39058 7.35847 4.297 8.18077 3.4773C9.12577 2.5383 10.4288 2.0003 11.7598 2.0003H11.7808ZM16.8945 8.0401H6.71547C6.27447 8.0401 4.80047 8.2181 4.37747 10.5021L3.60547 16.5021C3.35447 18.1851 3.54847 19.4031 4.18347 20.1401C4.81047 20.8681 5.93247 21.2221 7.61247 21.2221H15.9605C17.0085 21.2221 18.4395 21.0131 19.3035 20.0151C19.9895 19.2241 20.2255 18.0461 20.0055 16.5131L19.2265 10.4611C18.8945 8.9701 18.0185 8.0401 16.8945 8.0401ZM14.6973 10.8242C15.1113 10.8242 15.4703 11.1602 15.4703 11.5742C15.4703 11.9882 15.1573 12.3242 14.7433 12.3242H14.6973C14.2833 12.3242 13.9473 11.9882 13.9473 11.5742C13.9473 11.1602 14.2833 10.8242 14.6973 10.8242ZM8.86717 10.8242C9.28117 10.8242 9.64017 11.1602 9.64017 11.5742C9.64017 11.9882 9.32617 12.3242 8.91217 12.3242H8.86717C8.45317 12.3242 8.11717 11.9882 8.11717 11.5742C8.11717 11.1602 8.45317 10.8242 8.86717 10.8242ZM11.7778 3.5003H11.7628C10.8218 3.5003 9.90477 3.8793 9.23977 4.5403C8.69807 5.07957 8.34379 5.78849 8.22918 6.53963L15.3085 6.53991C15.0515 4.82168 13.5657 3.5003 11.7778 3.5003Z" fill="orange"/>
            </Svg>
       </TouchableOpacity>
        </ImageBackground>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:14,fontFamily:'Outfit'}}>{name}</Text>
        <TouchableOpacity> 
            <Svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.99902 0.745991C8.11094 0.00798182 9.58802 -0.195904 10.8641 0.233405C13.6397 1.17315 14.5014 4.34989 13.7307 6.87764C12.5415 10.8477 7.46266 13.809 7.24725 13.9332C7.17067 13.9777 7.08587 14 7.00107 14C6.91628 14 6.83217 13.9785 6.75558 13.9347C6.54154 13.8119 1.49962 10.8943 0.270769 6.87836C0.270085 6.87836 0.270085 6.87764 0.270085 6.87764C-0.501281 4.34917 0.357616 1.17171 3.13057 0.233405C4.43259 -0.208826 5.85155 -0.0142733 6.99902 0.745991ZM3.44513 1.25858C1.20147 2.01812 0.637989 4.55162 1.24729 6.54956C2.20602 9.68107 5.99378 12.2131 7.00039 12.8399C8.01041 12.2067 11.8255 9.64661 12.7535 6.55243C13.3628 4.55234 12.7973 2.01884 10.5502 1.25858C9.46151 0.891726 8.19163 1.115 7.31495 1.82716C7.13169 1.97505 6.8773 1.97792 6.69266 1.83147C5.76402 1.09848 4.55089 0.883829 3.44513 1.25858ZM9.8937 2.68427C10.8258 3.00087 11.4788 3.86738 11.5588 4.89184C11.5814 5.18833 11.3715 5.44821 11.089 5.4719C11.0747 5.47334 11.061 5.47406 11.0466 5.47406C10.782 5.47406 10.5577 5.26084 10.5358 4.97942C10.4907 4.3893 10.1146 3.89107 9.57913 3.70944C9.30902 3.61755 9.16131 3.31387 9.24816 3.03174C9.33637 2.74888 9.6229 2.59525 9.8937 2.68427Z" fill="#8E8D8D"/>
            </Svg>
</TouchableOpacity>

        </View>
        <Text style={{fontWeight:400,fontSize:16}}>{price} <Text style={{fontWeight:'normal',fontSize:14}}>$</Text></Text>
      
        
    </TouchableOpacity>
  )
}

export default HotSales