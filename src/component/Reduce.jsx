import React, { useReducer } from "react";

const Reduce = () => {
  const initialValue = {
    name: "",
    age: "",
    email: "",
  };
  const formReducer = function (state, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_AGE":
        return { ...state, age: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(formReducer, initialValue);
  return (
    <div>
      <form>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
        />
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "SET_AGE", payload: e.target.value })
          }
        />
        <input
          type="text"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
        />
      </form>
    </div>
  );
};

export default Reduce;
