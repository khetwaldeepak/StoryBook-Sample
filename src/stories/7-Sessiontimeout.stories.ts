import { SessiontimeoutComponent } from 'sessiontimeout';

export default {
  title: 'sessiontimeout',
};

export const toStorybook = () => ({
  component: SessiontimeoutComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};