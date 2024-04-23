import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";

export default function Animation() {
	return (
		<div>
        <Typewriter
          options={{
            strings: ['Page not found', 'Go back!'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
		
	);
}


