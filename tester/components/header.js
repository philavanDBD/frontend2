import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Comfortably</Text>

    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: 120,
    paddingTop: 75,
    backgroundColor: '#B98082',
    // alignItems: 'flex-end', // จัดตำแหน่งข้อความไปทางขวา
    // paddingRight: 230, // เพิ่ม padding ด้านขวาเพื่อไม่ให้ชิดเกินไป
    borderRadius: 20,
    alignItems: 'center' 
  },
  text: {
    color: 'white',
    fontSize: 20, // ปรับขนาดตัวอักษรให้ใหญ่ขึ้น
    alignItems: 'center'      // จัดแนวนอนให้กึ่งกลาง
  }
});

export default Header;
