import { Story, Meta } from '@storybook/angular/types-6-0';
import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

export default {
    title: 'Example/<%= classify(name) %>Component',
    component: <%= classify(name) %>Component
} as Meta;

const Template: Story<<%= classify(name) %>Component> = (args: <%= classify(name) %>Component) => ({
    props: args
});

export const First<%= classify(name) %>Component = Template.bind({});
First<%= classify(name) %>Component.args = {};

export const Second<%= classify(name) %>Component = Template.bind({});
Second<%= classify(name) %>Component.args = {};