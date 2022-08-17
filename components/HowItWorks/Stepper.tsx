import * as React from 'react';
import styled from 'styled-components';


export default function SteaperComponent() {
  return (
    <div className="container">
    <div className="step completed">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="content">
      Mint or Bring Your Own Token
      </div>
  </div>
  <div className="step empty">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="content">
      </div>
  </div>
  <div className="step active">
    <div className="v-stepper">
      <div className="circle"></div>
      <div className="line"></div>
    </div>

    <div className="content">
    Generate Smart Contracts for 
Investors & Employees
    </div>
  </div>
  
  <div className="step empty">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="content">
      </div>
  </div>
  
  <div className="step">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="content">
      Token  Analytics (coming soon) 
      </div>
  </div>
  <div className="step empty">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="content">
      </div>
  </div>
  <div className="step">
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>

      <div className="content">
      Token  Analytics (coming soon) 
      </div>
  </div>
  
</div>

  );
}
