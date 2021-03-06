import React from 'react';
import { Omit } from 'utility-types';
import BaseFormActions, { Props as BaseProps } from '@airbnb/lunar/lib/components/FormActions';
import FormContext from '../FormContext';
import { State } from '../../types';

export type Props = Omit<BaseProps, 'disabled' | 'processing'>;

/** `FormActions` automatically connected to the parent `Form`.  */
export default class FormActions extends React.PureComponent<Props> {
  static contextType = FormContext;

  render() {
    const props = { ...this.props };

    if (this.context) {
      const { submitting, valid }: State = this.context.getState();

      Object.assign(props, {
        disabled: !valid,
        processing: submitting,
      });
    }

    return <BaseFormActions {...props} />;
  }
}
