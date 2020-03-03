import React, { Component } from "react";
import { AppLoading } from "expo";

import * as Font from "expo-font";

import Resume from "./screen/Resume";

import style from "./style";
import Colors from "./style/colors";
window.styles = s => new style(s);
window.colors = Colors;

export default class App extends Component {
	state = {
		isReady: false
	};

	async _cacheResourcesAsync() {
		// const images = [require("./assets/snack-icon.png")];

		// const cacheImages = images.map(image => {
		// 	return Asset.fromModule(image).downloadAsync();
		// });

		return Promise.all([
			Font.loadAsync({
				karla: require("./assets/fonts/Karla-Regular.ttf"),
				karlaBold: require("./assets/fonts/Karla-Bold.ttf"),
				italic: require("./assets/fonts/Karla-Italic.ttf")
			})
		]);
	}

	render() {
		if (!this.state.isReady) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({ isReady: true })}
					onError={console.warn}
				/>
			);
		}

		return <Resume></Resume>;
	}
}
