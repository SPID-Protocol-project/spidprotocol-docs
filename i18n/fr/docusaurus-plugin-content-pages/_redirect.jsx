import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function RedirectHome() {
  return <Redirect to="/docs/intro" />;
}
