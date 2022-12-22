import { Button, TextField } from "@mui/material";
import { useEventListener } from "@react-hooks-library/core";
import React, { useState } from "react";
import { useRef } from "react";

function GetOne() {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [clickCount, setClickCount] = useState(0)

  useEventListener(buttonRef, 'click', () => {
    setClickCount((c) => c + 1)
  })

  return (
    <div>
      <TextField label="Outlined" variant="filled" />
      <Button variant="outlined" ref={buttonRef} >button clicked {clickCount} times!</Button>
    </div>
  );
}

export default GetOne;
