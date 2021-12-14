import React from 'react';
import AccessLink from './AccessLink';
import Header from './Header';
import FormInput from './inputs/FormInput';
import Preview from './Preview';

const Main = function () {
  return (
    <>
      <Header />
      <FormInput />
      <Preview />
      <AccessLink />
    </>
  );
};

export default Main;
