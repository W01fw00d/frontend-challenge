import React from "react";

import Button from "../atoms/Button";
import IconTextField from "../molecules/IconTextField";

function AddressesForm() {
  return (
    <div>
      <IconTextField
        icon={<img src="src/assets/pickUpBadgeBlank.svg" alt="Pick Up" />}
      />
      <IconTextField
        icon={<img src="src/assets/dropOffBadgeBlank.svg" alt="Drop Off" />}
      />
      <Button />
    </div>
  );
}

export default AddressesForm;
