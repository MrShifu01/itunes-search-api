import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';
import store from '../store/store';
import { Provider } from 'react-redux';

test('Navigation renders correctly', () => {
    // Create a React test renderer instance
    const tree = renderer
        .create(
            // Wrap the Navigation component with the Provider and provide the store
            <Provider store={store}>
                <Navigation/>
            </Provider>
        )
        // Convert the rendered component to a JSON representation
        .toJSON();
    
    // Compare the rendered component snapshot with the saved snapshot
    expect(tree).toMatchSnapshot();
});