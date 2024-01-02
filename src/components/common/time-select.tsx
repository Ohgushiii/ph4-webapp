// components/StudyTimeSelect.js
import React from 'react';

const StudyTimeSelect = () => {
  const renderOptions = () => {
    const options = [];
    for (let i = 1; i <= 24; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div>
      <select name="time" id="studyTime" className="outline outline-gray-300">
        {renderOptions()}
      </select>
      <span>時間</span>
    </div>
  );
};

export default StudyTimeSelect;
