import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [foto, setFoto] = useState();
  useEffect(() => {
    async function verPermissoes() {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      requestPermission(cameraStatus === "granted");
    }

    verPermissoes();
  }, []);

  const acessaCamera = async () => {
    const imagem = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [9, 16],
      quality: 0.5,
    });

    console.log(imagem);
    setFoto(imagem.assets[0].uri);
  };

  return (
    <>
      <StatusBar />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="acessar câmera" onPress={acessaCamera} />
        {foto && (
          <Image source={{ uri: foto }} style={{ width: 300, height: 400 }} />
        )}
      </View>
    </>
  );
}
