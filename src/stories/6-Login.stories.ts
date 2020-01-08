import { LoginComponent } from 'login';

export default {
  title: 'login',
};

export const toStorybook = () => ({
  component: LoginComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};