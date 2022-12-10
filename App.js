import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Alert, Modal } from 'react-native';

const App = () => {
  const [modalVisible, setOpen] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Text style={styles.textStyle}>HELLO WORLD!</Text>
      <Text style={styles.textStyle}>MY FIRST PHONE APP</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setOpen(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>MY FIRST MODAL!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setOpen(!modalVisible)}
            >
              <Text style={styles.textStyle}>PRESS TO CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.textStyle}>PRESS ME</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center", 
  },
  centeredView: {
    flex: 1,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
