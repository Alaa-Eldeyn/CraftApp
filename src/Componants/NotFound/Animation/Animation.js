import React from 'react';

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


