import React, { useEffect, useState } from "react";
import { useMemo } from "react";

export const Input = () => {
  const [username, setUserName] = useState("");
  const [name, setName] = useState({
    name: "",
    selected: false,
  });

  const handleName = () => {
    setName({ ...name, name: username });
  };
  const handleSelect = () => {
    setName({ ...name, selected: true });
  };

  const user = useMemo(
    () => ({
      name: name.name,
      selected: name.selected,
    }),
    [name.name, name.selected]
  );

  //   useEffect(() => {
  //     console.log("User value Changed!");
  //   }, [name.name, name.selected]);

  useEffect(() => {
    console.log("User value Changed!");
  }, [user]);

  return (
    <div>
      <input
        type="text"
        name={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleName}> Add </button>
      <button onClick={handleSelect}> Selected </button>
      <p>{`name: ${name.name}, selected: ${name.selected}`}</p>
    </div>
  );
};
