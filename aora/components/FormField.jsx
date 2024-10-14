import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      {/* <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center"> */}
        {/* The issue of the keyboard not showing up in React Native is often caused by an element above the TextInput (like a View component) not allowing the input to gain focus or the layout being improperly structured
            Here are some steps to fix this:
                Remove className if you're using inline styles: React Native doesn’t support className for styling like in web development. Either replace it with style or if you're using a library like NativeWind, ensure it’s properly set up. */}
        <View style={{ borderWidth: 2, borderColor: '#000000', width: '100%', height: 64, paddingHorizontal: 16, backgroundColor: '#1a1a1a', borderRadius: 16, justifyContent: 'center' }}
        >
        <TextInput
            className="flex-1 text-white font-psemibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  )
}

export default FormField