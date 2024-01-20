import * as React from 'react';

import Navbar from './Navbar';
import Intro from './Intro';
import About from './About';

//import tableStyle from "/src/index.css"

const Table = () => {
  return (
    <table>
        <tr>
          <td>
            <Navbar/>
          </td>
        </tr>
        <tr>
          <td>
            <Intro/>
          </td>
        </tr>
        <tr>
          <td>
            <About/>
          </td>
        </tr>
    </table>
  )
}

export default Table