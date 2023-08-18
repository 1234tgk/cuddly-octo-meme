import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";

// tr => table row
// td => table data?

const Students = () => {
  const url = "http://localhost:3000/students";

  const [students, setStudents] = useState();
  // students => [ { id, name, grade }, ...  ]

  useEffect(() => {
    let ignore = false;
    const fetchStudents = async () => {
      const { data } = await (await fetch(url)).json();

      if (!ignore) {
        setStudents(data);
      }
    };

    fetchStudents();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
      <Header name="John Doe" />

      <div className="main">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Grade</td>
            </tr>
          </thead>

          <tbody>
            {students &&
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
