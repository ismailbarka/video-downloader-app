import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
    const [selectedApp, setSelectedApp] = useState('facebook');
    const [link, setlink] = useState('');
    const [validlink, setValidlink] = useState(false);
    const navigation = useNavigation();

    const handleSelectedApp = (appName) =>{
        if(appName === 'instagram')
            setSelectedApp('instagram')
        else if(appName === 'facebook')
            setSelectedApp('facebook')
        else if(appName === 'snapchat')
            setSelectedApp('snapchat')
        else if(appName === 'tiktok')
            setSelectedApp('tiktok')
    }
    const handleConvertButton = () => {
        let tmplink = 'https://www.' + selectedApp;
        const isValidLink = link.startsWith(tmplink);
      
        if (link === '' || !isValidLink) {
          setValidlink(false);
        } else {
          setValidlink(true);
        }
      
        console.log('====================================');
        console.log(link);
        console.log(validlink);
        console.log('====================================');
      };
  return (

    <SafeAreaView>
        <View style={styles.navbar}>
            <Text style={styles.title}>Downloader</Text>
            <TouchableOpacity style={styles.button}>
                <Icon.Download color={colors.button}></Icon.Download>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <View style={styles.icons}>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'instagram' ? 20 : 10,
                backgroundColor: selectedApp === 'instagram' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'instagram' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'instagram' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'instagram' ? 0.8 : 0,
                shadowRadius: selectedApp === 'instagram' ? 4 : 0,
                elevation: selectedApp === 'instagram' ? 5 : 0,
            }} onPress={() => handleSelectedApp('instagram')}>
                <Icon.Instagram color={selectedApp === 'instagram' ? 'red' : 'blue'}></Icon.Instagram>
            </TouchableOpacity>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'facebook' ? 20 : 10,
                backgroundColor: selectedApp === 'facebook' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'facebook' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'facebook' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'facebook' ? 0.8 : 0,
                shadowRadius: selectedApp === 'facebook' ? 4 : 0,
                elevation: selectedApp === 'facebook' ? 5 : 0,
            }} onPress={() => handleSelectedApp('facebook')}>
                <Icon.Facebook color={selectedApp === 'facebook' ? 'red' : 'blue'}></Icon.Facebook>
            </TouchableOpacity>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'snapchat' ? 10 : 0,
                backgroundColor: selectedApp === 'snapchat' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'snapchat' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'snapchat' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'snapchat' ? 0.8 : 0,
                shadowRadius: selectedApp === 'snapchat' ? 4 : 0,
                elevation: selectedApp === 'snapchat' ? 5 : 0,
            }} onPress={() => handleSelectedApp('snapchat')}>
                <Image source={require('../assets/images/snaplogo.png')}
                style={{
                    width: 45,
                    height: 45,
                }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'tiktok' ? 10 : 0,
                backgroundColor: selectedApp === 'tiktok' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'tiktok' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'tiktok' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'tiktok' ? 0.8 : 0,
                shadowRadius: selectedApp === 'tiktok' ? 4 : 0,
                elevation: selectedApp === 'tiktok' ? 5 : 0,
            }} onPress={() => handleSelectedApp('tiktok')}>
                <Image source={require('../assets/images/tiktok.png')}
                style={{
                    width: 40,
                    height: 40,
                }}></Image>
            </TouchableOpacity>

        </View>
            <Text style={styles.text}>Please insert the URL link of {selectedApp.toUpperCase()} video</Text>
            <TextInput
                placeholder={
                    selectedApp === 'facebook' ? 'https://www.facebook.com/adekunle_ismail/' : 'https://www.instagram.com/adekunle_ismail/'
                }
                style={styles.inputFeild}
                onChangeText={(v) => setlink(v)}>
            </TextInput>
            <TouchableOpacity style={styles.DownloadButtonConvert} onPress={() => handleConvertButton()}>
                <Text>CONVERT</Text>
                <Icon.Settings></Icon.Settings>
            </TouchableOpacity>
            {validlink === false ? 
            <Text>waiting for a valid link</Text> :
                <ScrollView>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../assets/images/1.png')} style={{
                            width: 200,
                            height: 200,
                        }}></Image>
                        <TouchableOpacity style={styles.qualityButton}>
                            <Text>144p</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.qualityButton}>
                            <Text>720p</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.qualityButton}>
                            <Text>1080p</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DownloadButton}>
                            <Icon.Download color={'red'}></Icon.Download>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    title:{
        fontSize: 30,
        padding: 10,
    },
    button:{
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    inputFeild:{
        backgroundColor: 'white',
        height: 35,
        padding: 4,
        marginBottom: 10,
    },
    text:{
        padding: 10,
        margin: 10,
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    DownloadButton:{
        justifyContent: 'center',
        width: '60%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    qualityButton:{
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    DownloadButtonConvert:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    Image:{
        width: 200,
        height: 200,
    }
  });