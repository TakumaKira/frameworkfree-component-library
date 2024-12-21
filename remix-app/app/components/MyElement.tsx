/**
 * @see https://lit.dev/docs/frameworks/react/
 */
import React from 'react';
import {createComponent} from '@lit/react';
import {MyElement} from '../../../shared-components/my-element';

export const MyElementComponent = createComponent({
  tagName: 'my-element',
  elementClass: MyElement,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});