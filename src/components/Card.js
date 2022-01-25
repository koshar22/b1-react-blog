import React from 'react';

export default function Card({class_name}) {
  return(
      <div className={class_name}>
          <h1>I am heading</h1>
          <h6>Sports</h6>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <span>Rahul Das</span>
      </div>
  );
}
