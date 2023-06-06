// added act import to fix warning error
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import MediaSearch from "../components/MediaSearch.js";
import { Provider } from "react-redux"; // Import the Provider
import store from "../store/store"; // Import the Redux store

// Mock the axios module
jest.mock("axios", () => ({
	get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
}));

// Mock the window.alert function since it can't be accessed in the testing environment
let alertMessage;
window.alert = (msg) => {
	alertMessage = msg;
};

test("Fails when less than 2 characters are searched", () => {
	// Render the MediaSearch component
	render(
		<Provider store={store}>
			<MediaSearch />
		</Provider>
	);

	// Find the search input by its placeholder text
	const searchInput = screen.getByPlaceholderText("Search Content...");

	// Find the search button by role and type
	const searchButton = screen.getByRole("button", { type: "submit" });

	// Update state inside act() since it was throwing a warning error even though the tests were passing
	act(() => {
		// Type 'a' into the search input
		userEvent.type(searchInput, "a");
	});

	// Update state inside act() since it was throwing a warning error even though the tests were passing
	act(() => {
		// Click the search button
		userEvent.click(searchButton);
	});

	// Assert that the error message is displayed
	expect(alertMessage).toBe(
		"Please enter a valid search term of 2 or more characters"
	);
});