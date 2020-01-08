import { UserinfoComponent } from 'userinfo';

export default {
  title: 'User Info',
};

export const toStorybook = () => ({
  component: UserinfoComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};