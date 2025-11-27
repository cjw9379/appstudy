import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
//useState 생년월일 문자열 저장

export default function SettingsScreen(){
    const [birthday, setBirthday]=useState("");//문자열 초기화

    return (
        <View style={styles.container}>
            <Text style={styles.title}>생년월일 입력하기</Text>
            <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#587c92ff"
                value={birthday}
                onChangeText={setBirthday}
            />
            <Text style={styles.result}>입력: {birthday}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex:1,//화면 전체 채우기
        backgroundColor: "#15104aff",//배경색 검정
        alignItems: "center",//가로축 가운데 정렬
        justifyContent: "center",//세로축 가운데 정렬
        paddingHorizontal: 20,//좌우 패딩, 화면 끝에 여백
    },
    title: {
        fontSize: 20,
        color: "#77b6c7ff",
        marginBottom: 20,//아래쪽 여백
    },
    input: {
        width: "80%",//View 너비의 80% 차지(유동적)
        padding: 12,//안쪽 여백(입력텍스트와 경계 사이)
        backgroundColor: "#9896cfff",
        borderRadius: 8,//모서리 둥글게!!
        fontSize: 16,
        marginBottom: 20,//입련란 아래 여백
    },
    result: {
        fontSize: 16,
        color: "#fff",
    },
});