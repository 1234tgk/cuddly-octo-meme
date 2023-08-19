import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./App.css";
import StudentForm from "../components/StudentForm";

const Students = () => {
  const url = "http://localhost:3000/students";

  const [students, setStudents] = useState();
  const [formState, setFormState] = useState({});
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

  // function that validates "formState" variable
  const validateState = () => {
    if (!formState.id || typeof formState.id !== "number") {
      return false;
    }

    if (!formState.name || typeof formState.name !== "string") {
      return false;
    }

    if (!formState.grade || typeof formState.grade !== "number") {
      return false;
    }

    return true;
  };

  const updateId = (value) => {
    // value is always string
    if (!value || isNaN(value)) {
      setFormState((state) => {
        return { ...state, id: undefined };
      });
    } else {
      setFormState((state) => {
        return { ...state, id: Number(value) };
      });
    }
  };
  const updateName = (value) => {
    if (!value) {
      setFormState((state) => {
        return { ...state, name: undefined };
      });
    } else {
      setFormState((state) => {
        return { ...state, name: value };
      });
    }
  };
  const updateGrade = (value) => {
    // value is always string
    if (!value || isNaN(value)) {
      setFormState((state) => {
        return { ...state, grade: undefined };
      });
    } else {
      setFormState((state) => {
        return { ...state, grade: Number(value) };
      });
    }
  };

  const handleSubmit = (e) => {
    const postStudent = async () => {
      // we need to turn formState to JSON string to send the request!
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
    };
    e.preventDefault(); // important to prevent page from automatically refreshed
    // instead of refreshing the entire page, you want to refresh just the component instead
    if (validateState()) {
      postStudent();
      if (students) {
        setStudents((students) => [...students, formState]);
      }
    } else {
      alert("Values not valid");
    }
    /**
     * When we create a student with duplicate id, we may get a warning, saying there's duplicate key within the table
     * We could check if there's any duplicate id when we are creating a student here,
     * but that job's more suitable for backend!
     */
  };

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
            {students && // check if students variable is undefined or not
              students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <StudentForm
          updateId={updateId}
          updateGrade={updateGrade}
          updateName={updateName}
          onSubmitForm={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Students;
