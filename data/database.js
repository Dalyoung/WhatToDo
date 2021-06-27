import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function test1 (){
    console.log('called by list');
    alert('called by list');
}

export function test2 (){
    console.log('called by calendar');
    alert('called by calendar');
}

export function initDB(){
    console.log('init database..');
}
 
export async function updateLastKey(){
    try {
        let lastKey = await AsyncStorage.getItem('uid');

        if(lastKey == null){
            lastKey = 0;
        }
        else {
            console.log('lastKey1 : ', lastKey);
            lastKey++;
            console.log('lastKey2 : ', lastKey);
            
        }
        try {
            await AsyncStorage.setItem('uid', lastKey.toString());
        }
        catch (error) {
            console.log('Error while setItem');
        }

        console.log('lastKey : ', lastKey);
    } catch (error) {
        console.log('Error while getItem');
    }

     
     
 }