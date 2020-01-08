import { CustomeventComponent } from 'customevent';

export default {
  title: 'Events',
};

export const toStorybook = () => ({
  component: CustomeventComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};