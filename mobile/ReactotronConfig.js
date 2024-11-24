import Reactotron from "reactotron-react-native";

Reactotron.configure({
  name: "KChat",
  host: '10.10.10.10',
}) 
  .useReactNative()
  .connect();
