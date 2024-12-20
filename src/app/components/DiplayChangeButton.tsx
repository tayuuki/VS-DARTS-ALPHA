// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const DisplayChangeButton = () => {
// 	const pathname = usePathname()
// 	let nextPath = ""
// 	if (pathname == "/cricket/board") {
// 		nextPath = "/cricket/marks"
// 	}
// 	else if (pathname == "/cricket/marks") {
// 		nextPath = "/cricket/board"
// 	}

//   return (
//     <Link href={nextPath}>
//       <img
//         className='m-auto mt-10 cursor-pointer'
//         src='/images/displaychange.png'
//         alt="Display Change Button"
//       />
//     </Link>
//   );
// };

// export default DisplayChangeButton;


import React, { useEffect, useState } from 'react';


const DisplayChangeButton = () => {
  return (
      <img
        className='m-auto mt-10 cursor-pointer'
        src='/images/displaychange.png'
        alt="Display Change Button"
      />
  );
};

export default DisplayChangeButton;
