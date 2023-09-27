import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import Link from 'next/link';
import Tic from "./Tic";
import Layout from '../../components/layout';

export default function Game({postData}) {
    return (
      <>
      <Layout>
      <StrictMode>
      <div className='title'>
      <h2> Tic Tac Toe</h2>
      <h5> Play the game and click the button to move back!</h5>
      </div>
      <div className='tic-container'>

        <div><Tic /></div>
        </div>
        </StrictMode>
     
        </Layout>
      </>
    );
  }


  