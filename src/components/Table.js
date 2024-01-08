import * as React from 'react';

import Header from "./Header";
import Navbar from './Navbar';

//import tableStyle from "/src/index.css"

const Table = () => {
  return (
    <table>
        <tr>
          <td>
              <Header/>
          </td>
        </tr>
        <tr>
          <td>
            <Navbar/>
            <p>Nicholas baker is a blank <a href='/personal-website/public/NB_Resume2022.pdf'>pdf</a></p>

          </td>
        </tr>
    </table>
  )
}

export default Table