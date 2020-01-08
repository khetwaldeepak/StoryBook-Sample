import { OfficeComponent } from 'office';

export default {
  title: 'Office',
};

export const toStorybook = () => ({
  component: OfficeComponent,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};
  
  