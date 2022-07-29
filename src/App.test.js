import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor , screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/index.js";
import { useDispatch } from "react-redux";
import { getTestsStore } from './redux/actions';

describe('<App />', () => {
  let component
  
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <App>
          <div className='testDiv'>testDivContent</div>
        </App>
      </Provider>
    )
  })

  test('renders its children', () => {
    expect(component.container.querySelector('.testDiv')).toBeDefined()

  });
  
  test('renders results card', () => {
  expect(component.container.querySelector('#resultsCard')).toBeDefined()
  });

  test('renders navbar', () => {
  expect(component.container.querySelector('#navbar')).toBeDefined()
  });

  test('input onSubmit clears', async () => {
    const input = component.container.querySelector('#input');
    fireEvent.change(input, {target: {value: 'acurruca'}})
    const button = component.getByText('Send')
    fireEvent.click(button)
    await waitFor(() => expect(component.container.querySelector('#input')).toHaveValue(''))
  });

});

/* describe('<Provider />', () => {
  let component
  
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <App>
          <button onClick={() => dispatch(getTestsStore('Buymilk'))} className="testProviderButton">Confirm</button>
        </App>
      </Provider>
    )
  })

  test('renders results', async () => {
    expect(component.container.querySelector('.testProviderButton')).toBeDefined()
    const button = screen.getByText('Confirm');
    await undefined
    fireEvent.click(button)
    await waitFor(() => expect(component.container.querySelector('#1')).toHaveValue('klimyub'))
  })

}) */


