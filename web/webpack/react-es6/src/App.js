import React from 'react';
import Paragraph from './Paragraph';

// const App = () => {
//   return '<h1>Woop</h1>';
// };

export default function App() {
  return (
    <div className="my-app">
      <h1>This is React!!!</h1>
      <Paragraph text="First Paragraph" />
      <Paragraph text="Second Paragraph" />
    </div>
  );
}

// module.exports = App;
// export default App;
