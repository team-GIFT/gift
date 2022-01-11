import React, { ReactElement } from 'react';

import App from './App';

export default {
  title: 'App',
  component: App,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

interface headerProps {
  color: string;
}

const Template = (args: headerProps): ReactElement => <App {...args} />;

export const AppStory = Template.bind({});
AppStory.args = {
  color: 'blue',
};
