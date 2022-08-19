import React, { useState, useEffect } from "react";
import { typesList, getTypeInteger } from "../../../../../../utils/typesUtils";
import {
  operation_deposit,
  operation_withdraw,
} from "../../../../../../data/types";
import Checkbox from "../../../../../../components/CheckBox";

import { ContainerCheckTypes } from "./styles";

const typesCheckedsDefault = {
  [typesList.WIRETRANFER]: false,
  [typesList.BILLET]: false,
  [typesList.PIX]: false,
  [typesList.WALLET]: false,
};

const TypesTransaction = ({
  setType,
  operation,
  setCheckDataSelectedType,
  showingAndSetPixKeyDefault,
}) => {
  const [typesCheckeds, setTypesCheckeds] = useState({
    ...typesCheckedsDefault,
    [typesList.PIX]: true,
  });

  function setTypesChecked(typeKey, isChecked) {
    let currentTypesCheckeds = typesCheckeds;
    if (operation === operation_withdraw) {
      currentTypesCheckeds = { ...typesCheckedsDefault };
    }
    const newTypesCheckeds = { ...currentTypesCheckeds, [typeKey]: isChecked };
    setTypesCheckeds(newTypesCheckeds);
    const newType = getTypeInteger(newTypesCheckeds);
    setType(newType);
  }

  function setTypesCheckedDefault() {
    if (operation === operation_withdraw) {
      setTypesCheckeds({
        ...typesCheckedsDefault,
        [typesList.PIX]: true,
      });
      setType("1");
    }
  }

  useEffect(() => {
    setTypesCheckedDefault(operation, setTypesCheckeds);
  }, [operation]);

  useEffect(() => {
    function enableCheckDataSelectedType() {
      const newCheckDataSelectedType = [];
      if (typesCheckeds[typesList.PIX]) {
        newCheckDataSelectedType.push({
          value: typesList.PIX.toString(),
          label: "Pix",
        });
      }
      if (typesCheckeds[typesList.BILLET]) {
        newCheckDataSelectedType.push({
          value: typesList.BILLET.toString(),
          label: "Billet",
        });
      }
      if (typesCheckeds[typesList.WIRETRANFER]) {
        newCheckDataSelectedType.push({
          value: typesList.WIRETRANFER.toString(),
          label: "Wire Transfer",
        });
      }
      if (typesCheckeds[typesList.WALLET]) {
        newCheckDataSelectedType.push({
          value: typesList.WALLET.toString(),
          label: "Paylivre Wallet",
        });
      }

      setCheckDataSelectedType(newCheckDataSelectedType);
    }
    enableCheckDataSelectedType();
    showingAndSetPixKeyDefault();
  }, [typesCheckeds]);

  return (
    <ContainerCheckTypes>
      <Checkbox
        label="PIX"
        isChecked={typesCheckeds[typesList.PIX]}
        setChecked={(isChecked) => setTypesChecked(typesList.PIX, isChecked)}
      />
      <Checkbox
        label="Paylivre Wallet"
        isChecked={typesCheckeds[typesList.WALLET]}
        setChecked={(isChecked) => setTypesChecked(typesList.WALLET, isChecked)}
      />
      {operation === operation_deposit && (
        <>
          <Checkbox
            label="Billet"
            isChecked={typesCheckeds[typesList.BILLET]}
            setChecked={(isChecked) =>
              setTypesChecked(typesList.BILLET, isChecked)
            }
          />
          <Checkbox
            label="Wire Transfer"
            isChecked={typesCheckeds[typesList.WIRETRANFER]}
            setChecked={(isChecked) =>
              setTypesChecked(typesList.WIRETRANFER, isChecked)
            }
          />
        </>
      )}
    </ContainerCheckTypes>
  );
};

export default TypesTransaction;
