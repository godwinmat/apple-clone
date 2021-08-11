import "./App.css";
import AppleGrid from "./components/AppleGrid";

import AppleHero from "./components/AppleHero";
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<Nav />

			<AppleHero
				name="iPhone 12"
				description="Blast past fast."
				pricing="From $29.12/mo. for 24 mo. or $699 before trade-in"
				other="Buy directly from Apple with special carrier offers"
				classname="iphone-12"
				id="text-dark"
			/>
			<AppleHero
				name="iPhone 12 Pro"
				description="It's a leap year."
				pricing="From $41.62/mo. for 24 mo. or $999 before trade-in"
				other="Buy directly from Apple with special carrier offers"
				classname="iphone-12-pro"
				id="text-light"
			/>
			<AppleHero
				name="iPad Pro"
				description="Supercharged by the apple M1 chip"
				classname="ipad-pro"
				id="text-light"
			/>
			<AppleGrid />
		</div>
	);
}

export default App;
