import * as React from 'react';

import Table from "./Table";

const MainPage = () => {
  return (
    <div className='MainPage'>
        <Table />
        <a href='https://github.com/nicbake'>
          <img src='/images/githublogo.png' alt='logo' width="60" height="60"/>
        </a>
    </div>
  )
}

export default MainPage