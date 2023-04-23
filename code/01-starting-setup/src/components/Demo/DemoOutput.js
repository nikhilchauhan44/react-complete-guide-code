import React, { useMemo } from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is new!" : ""}</p>;
  const { items } = props;
  const sortedList = useMemo(() => {
    return [1, 6, 3, 8, 3].sort((a, b) => a - b);
  });
};

export default React.memo(DemoOutput);
