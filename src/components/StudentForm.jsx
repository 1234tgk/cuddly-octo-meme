import { useState, useEffect } from "react";

const StudentForm = ({ updateId, updateName, updateGrade, onSubmitForm }) => {
  return (
    <form default onSubmit={onSubmitForm}>
      <input placeholder="ID" onChange={(e) => updateId(e.target.value)} />
      <input placeholder="Name" onChange={(e) => updateName(e.target.value)} />
      <input
        placeholder="Grade"
        onChange={(e) => updateGrade(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

export default StudentForm;
