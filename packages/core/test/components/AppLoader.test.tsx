import React from 'react';
import { shallow } from 'enzyme';
import AppLoader from '../../src/components/AppLoader';
import ErrorMessage from '../../src/components/ErrorMessage';
import Loader from '../../src/components/Loader';
import Title from '../../src/components/Title';
import Text from '../../src/components/Text';

describe('<AppLoader />', () => {
  it('renders `Loader` and `loadingText` while fetching', () => {
    const wrapper = shallow(
      <AppLoader failureText="Failed" loadingText="Loading...">
        Content
      </AppLoader>,
    ).dive();

    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
    expect(wrapper.find(Title).prop('children')).toBe('Loading...');
  });

  it('renders `ErrorMessage` and `failureText` when failed', () => {
    const error = new Error('Oops');
    const wrapper = shallow(
      <AppLoader fetched error={error} failureText="Failed" loadingText="Loading...">
        Content
      </AppLoader>,
    ).dive();

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    expect(wrapper.find(ErrorMessage).prop('error')).toEqual(error);
    expect(wrapper.find(Title).prop('children')).toBe('Failed');
  });

  it('renders content if successful', () => {
    const wrapper = shallow(
      <AppLoader fetched failureText="Failed" loadingText="Loading...">
        Content
      </AppLoader>,
    ).dive();

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
    expect(wrapper.find('main')).toHaveLength(1);
    expect(wrapper.find('main').prop('children')).toBe('Content');
  });

  it('renders centered with subtitle', () => {
    const wrapper = shallow(
      <AppLoader centered failureText="Failed" loadingText="Loading...">
        Content
      </AppLoader>,
    ).dive();

    expect(wrapper.find(Text)).toHaveLength(0);

    wrapper.setProps({
      subtitle: 'Hello',
    });

    expect(wrapper.find(Text)).toHaveLength(1);
    expect(wrapper.find(Text).prop('children')).toBe('Hello');
  });

  it('reduces title and subtitle size when `small`', () => {
    const wrapper = shallow(
      <AppLoader centered failureText="Failed" loadingText="Loading..." subtitle="Hello">
        Content
      </AppLoader>,
    ).dive();

    expect(wrapper.find(Title).prop('level')).toBe(1);
    expect(wrapper.find(Text).prop('large')).toBe(true);

    wrapper.setProps({
      small: true,
    });

    expect(wrapper.find(Title).prop('level')).toBe(3);
    expect(wrapper.find(Text).prop('large')).toBe(false);
  });
});
