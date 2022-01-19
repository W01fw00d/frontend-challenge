import React from "react";

import Button from "../atoms/Button";
import IconTextInput from "../molecules/IconTextInput";

function AddressesForm() {
  return (
    <div>
      <IconTextInput
        icon={<img src="src/assets/pickUpBadgeBlank.svg" alt="Pick Up" />}
      />
      <IconTextInput
        icon={<img src="src/assets/dropOffBadgeBlank.svg" alt="Drop Off" />}
      />
      <Button />
    </div>
  );
}

export default AddressesForm;
