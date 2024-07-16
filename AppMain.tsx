import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function AppMain() {
    const [randomBackground, setrandomBackground] = useState('#ffffff');

    const generatedColor = () => {
        const hexRange = "0123456789ABCDEF"
        let color = "#"

        for (let i = 0; i < 6; i++) {
            color += hexRange[Math.floor(Math.random() * 16)]
        }
        setrandomBackground(color)
    }
    return (
        <>
            <StatusBar backgroundColor={randomBackground} />
            <View style={[styles.container, { backgroundColor: randomBackground }]}>
                <TouchableOpacity onPress={generatedColor}>
                    <View style={[styles.actionBtn,]}>
                        <Text style={styles.actionBtnTxt}>Press Me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: '#6A1B4D',
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    actionBtnTxt: {
        fontSize: 24,
        color: '#fff',
        textTransform: 'uppercase',
    }
})