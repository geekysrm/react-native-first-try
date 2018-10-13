/** @format */

import { AppRegistry, YellowBox } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

YellowBox.ignoreWarnings(["Remote debugger"]); //ignore warnings which appear in a yellow box at the bottom of screen containing 'Remote debugger'

AppRegistry.registerComponent(appName, () => App);
