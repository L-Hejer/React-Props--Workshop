import React from 'react';

import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleAlert = (name) => alert(`Hi! I am an ${name}`);

  return (
    <div>
      <ChildComponent
        // String Types Props
        title="Introduction To React Props"
        subTitle={'Workshop | Monday 28 June 2021'}
        // Number Types Props
        studentsNumber={5}
        // Object Types Props
        address={{ city: 'Tunis', country: 'Tunisia' }}
        // Array Types Props
        workshopAgenda={[
          'Introduction to React Props',
          'Type of Props',
          'Children Props',
          'Destructuring',
          'PropTypes',
          'Default Props',
          'Conditional Rendering',
          'Handling Events',
        ]}
        myAlertFunction={handleAlert}
        // Conditional Rendering
        conditionalProp="Conditional Prop"
      >
        {/* Children Props */}
        <div>
          <h2>Hello, I'm a child prop</h2>
          <p>Hey! I am a child too</p>
          <button>Click Me!</button>
        </div>
      </ChildComponent>
    </div>
  );
};

export default ParentComponent;
