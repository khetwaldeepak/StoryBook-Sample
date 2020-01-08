import { storiesOf } from '@storybook/angular';
import { AddressComponent } from 'address';
import { action } from '@storybook/addon-actions';

storiesOf('address', module)
  
  .add('to Storybook', () => ({
    component: AddressComponent,
    props: {
      onClick: action('Address Submitted')
    }
  }));
 