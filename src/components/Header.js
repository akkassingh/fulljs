import React from 'react';

const Header =({ message }) => {
  return(
    <h2 className="Header text-center">
    Hello {message}
  </h2>
  );
};

//Prop Validation
// Header.prototypes = {
//   message : React.ProtoTypes.string.isRequired,
// };

//Prop default value.
// Header.defaultProps ={
//   message : 'this is default value.'
// };


export default Header;