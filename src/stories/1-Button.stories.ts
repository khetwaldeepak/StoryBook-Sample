import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from 'button';
import { action } from '@storybook/addon-actions';
storiesOf('button', module)
  
  .add('primary', () => ({
    component: ButtonComponent,
    props: {
      text: 'Primary Button',
      customClass: 'btn btn-primary'
    }
  })).add('secondary', () => ({
    component: ButtonComponent,
    props: {
      text: 'Secondary Button',
      customClass: 'btn btn-secondary'
    }
  }));
 
