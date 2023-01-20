## 01-biblioteca-de-midia

**Documentação**

## Instalação: https://docs.expo.dev/versions/latest/sdk/imagepicker/

`npx expo install expo-image-picker`

### Configuração necessária no aquivo app.json

Adicione ( após a chave `web`) o recurso a seguir:

```json
"plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ]
```
