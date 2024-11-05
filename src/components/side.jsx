import React from 'react'
// import 'flowbite';

import Content from './Fragments/Content';
import Aside from './Fragments/Side';
import Navi from './Fragments/Navi';


const Side = () => {
  return (
    <>
        <Navi/>
        <Aside/>
        <Content/>
    </>
  )
}

export default Side