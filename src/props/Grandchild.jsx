import { useContext } from "react";
import UserContext from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h5>GrandChild Component</h5>
      <p>User: {user}</p>
    </div>
  );
}

export default GrandChild;
