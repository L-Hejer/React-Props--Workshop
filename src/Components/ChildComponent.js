import React from 'react';

import PropTypes from 'prop-types';

const ChildComponent = ({
  title,
  subTitle,
  studentsNumber,
  address: { city, country },
  workshopAgenda,
  myAlertFunction,
  children,
  conditionalProp,
}) => {
  //console.log(props);

  // Destructuring the old way
  /*   const {
    title,
    subTitle,
    studentsNumber,
    address: { city, country },
    workshopAgenda,
    children,
  } = props; */

  return (
    <div>
      {/*     {myAlertFunction(title)} */}
      <h1> {title} </h1>
      <p>{subTitle}</p>
      <h4>Students attending the workshop: {studentsNumber}</h4>
      <p>
        {city}, {country}
      </p>
      <h4>Workshop Agenda:</h4>
      <ul>
        {workshopAgenda.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <button onClick={() => myAlertFunction(title)}>Alert</button>
      {children}
      {conditionalProp ? ( // if conditional prop === true
        <h3> This is the {conditionalProp}</h3>
      ) : (
        // else
        <h3> There is no conditonal prop</h3>
      )}
    </div>
  );
};

// Default Props
ChildComponent.defaultProps = {
  title: 'This is the title default value',
};

// PropTypes
ChildComponent.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string.isRequired,
  studentsNumber: PropTypes.number.isRequired,
  workshopAgenda: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChildComponent;
