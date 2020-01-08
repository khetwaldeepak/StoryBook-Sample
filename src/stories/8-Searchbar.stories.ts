import { SearchbarComponent } from 'searchbar';

export default {
  title: 'searchbar',
};

export const toStorybook = () => ({
  component: SearchbarComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};