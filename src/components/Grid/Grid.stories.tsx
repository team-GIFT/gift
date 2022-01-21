import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './Grid';

export default {
  title: 'components/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = () => <Grid />;

export const Grid1 = Template.bind({});
