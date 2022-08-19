import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  Container,
  FormLabelCustom,
  ContainerHeight,
  ContainerFlexWidthCustom,
} from "./styles";

import { ContainerRow } from "../styles";

import RadioGroup from "../../../../components/RadioGroup";
import { PixKeyTypes } from "../../../../utils/pixKeyTypes";
import { typesList } from "../../../../utils/typesUtils";
import { getRandomMerchantTransactionId } from "../../../../utils/generatePropsRandom";
import { useForceReloadData } from "../../../../contexts/forceReloadData";
import Input from "../../../../components/Input";
import InputSwitch from "../../../../components/Switch";
import packageJson from "../../../../../package.json";
import { operation_deposit, operation_withdraw } from "../../../../data/types";

const typesAvailableDefault = [
  {
    value: typesList.PIX.toString(),
    label: "Pix",
  },
  {
    value: typesList.WALLET.toString(),
    label: "Paylivre Wallet",
  },
];

function getTypesAvailables(Operation) {
  if (Operation === operation_withdraw) {
    return typesAvailableDefault;
  }
  return [
    ...typesAvailableDefault,
    {
      value: typesList.BILLET.toString(),
      label: "Billet",
    },
    {
      value: typesList.WIRETRANFER.toString(),
      label: "Wire Transfer",
    },
  ];
}

function getOperationsAvailable(isDev) {
  if (isDev === true) {
    return [
      { value: "5", label: "Withdraw" },
      { value: "0", label: "Deposit" },
    ];
  }
  return [{ value: "5", label: "Withdraw" }];
}

function Form({
  setData,
  setGateway_token,
  gateway_token,
  setUrlGenerated,
  base_url,
  setBaseUrl,
  dataDefault,
  isDev,
}) {
  const [merchant_id, setMerchantId] = useState(dataDefault.merchant_id);
  const [merchant_transaction_id, setMerchantTransactionId] = useState(
    getRandomMerchantTransactionId()
  );
  const [email, setEmail] = useState(dataDefault.email);
  const [document_number, setDocumentNumber] = useState(
    dataDefault.document_number
  );
  const [account_id, setAccountId] = useState("123654asd");
  const [currency, setCurrency] = useState("BRL");
  const [operation, setOperation] = useState(operation_withdraw);
  const [amount, setAmount] = useState("500");
  const [callback_url, setcCallback_url] = useState(
    "https://api.dev.paylivre.com/dev/v2/callback"
  );
  const [type, setType] = useState("1");
  const [pix_key_type, setPix_key_type] = useState(PixKeyTypes.document);
  const [pix_key, setPix_key] = useState("");
  const [login_email, setLoginEmail] = useState(dataDefault.email);
  const [password, setPassword] = useState("123123123");
  const [auto_approve, setAuto_approve] = useState(true);
  const { disable, setDisable } = useForceReloadData();

  function checkIsTypeWithdrawValid(Type) {
    switch (Type) {
      case "1": {
        return true;
      }
      case "9": {
        return true;
      }
      default: {
        return false;
      }
    }
  }

  function setOperationAndSetTypeDefault(Operation) {
    setOperation(Operation);
    setType(typesList.PIX.toString());
  }

  const isDepositWallet =
    operation === operation_deposit && type === typesList.WALLET.toString();

  function handleSetPixKey(string_value) {
    if (string_value === PixKeyTypes.document) {
      setPix_key_type(PixKeyTypes.document);
      setPix_key(document_number);
    }

    if (string_value === PixKeyTypes.email) {
      setPix_key_type(PixKeyTypes.email);
      setPix_key(email);
    }

    if (string_value === PixKeyTypes.phone) {
      setPix_key_type(PixKeyTypes.phone);
      setPix_key("");
    }
  }

  const setDefaultData = useCallback((DataDefault) => {
    setOperation(operation_withdraw);
    setMerchantId(DataDefault.merchant_id);
    setGateway_token(DataDefault.gateway_token);
    setBaseUrl(DataDefault.base_url);
  }, []);

  useEffect(() => {
    setDefaultData(dataDefault);
  }, [useLocation().search, dataDefault]);

  useEffect(() => {
    if (operation === operation_withdraw) {
      handleSetPixKey(PixKeyTypes.document);
    }
  }, [operation, type]);

  useEffect(() => {
    if (type === typesList.PIX.toString()) {
      handleSetPixKey(PixKeyTypes.document);
    }
  }, [type]);

  function getNumberIfNotEmpty(valueString) {
    return valueString.toString().length > 0 ? Number(valueString) : "";
  }

  useEffect(() => {
    // Toda vez que alterar algum dado no data
    setUrlGenerated(false);
    setDisable(false);

    const isWithdrawPix =
      operation === operation_withdraw && type === typesList.PIX.toString();

    function getType() {
      return type;
    }

    function getNewData(oldData) {
      const newData = {
        ...oldData,
        account_id,
        amount: getNumberIfNotEmpty(amount),
        auto_approve: auto_approve === true ? 1 : 0,
        callback_url,
        currency,
        document_number,
        email,
        merchant_id: getNumberIfNotEmpty(merchant_id),
        operation: getNumberIfNotEmpty(operation),
        merchant_transaction_id,
        type: getNumberIfNotEmpty(getType()),
        login_email: isDepositWallet ? login_email : "",
        password: isDepositWallet ? password : "",
      };

      if (isWithdrawPix) {
        newData.pix_key_type = isWithdrawPix ? pix_key_type : "";
        newData.pix_key = isWithdrawPix ? pix_key : "";
      } else {
        delete newData.pix_key_type;
        delete newData.pix_key;
      }

      if (isDepositWallet) {
        newData.login_email = isDepositWallet ? login_email : "";
        newData.password = isDepositWallet ? password : "";
      } else {
        delete newData.login_email;
        delete newData.password;
      }

      return newData;
    }

    setData((oldData) => {
      return getNewData(oldData);
    });
  }, [
    setData,
    merchant_id,
    merchant_transaction_id,
    email,
    document_number,
    account_id,
    auto_approve,
    currency,
    operation,
    amount,
    callback_url,
    setUrlGenerated,
    gateway_token,
    base_url,
    type,
    pix_key_type,
    pix_key,
    password,
    login_email,
  ]);

  function handleReloadRandomFormatData() {
    setMerchantTransactionId(getRandomMerchantTransactionId());
    setDisable(false);
  }

  function isAutoApproveSelected() {
    return auto_approve === true ? (
      <Typography component="span" color="primary">
        true
      </Typography>
    ) : (
      <Typography component="span" color="error">
        false
      </Typography>
    );
  }

  return (
    <Container>
      <ContainerRow
        style={{ marginBottom: 0, height: 50, alignItems: "center" }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/gateway-example-javascript/#/">Url Gateway</Link>
          <Typography color="text.primary">Withdraw API</Typography>
        </Breadcrumbs>
      </ContainerRow>

      <FormLabelCustom>Environment:</FormLabelCustom>
      <Input
        value={base_url}
        setValue={(value) => setBaseUrl(value)}
        label="Base URL:"
      />

      <ContainerRow
        style={{
          marginBottom: 20,
          marginTop: 10,
          height: 50,
          alignItems: "center",
        }}
      >
        <ContainerFlexWidthCustom widthPercent={48}>
          <FormLabelCustom style={{ margin: 0 }}>
            Merchant Data:
          </FormLabelCustom>
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={50} style={{}}>
          <Button
            onClick={() => handleReloadRandomFormatData()}
            style={{
              width: "100%",
              textTransform: "none",
            }}
            variant={disable === true ? "contained" : "outlined"}
            color="success"
          >
            Reload Random Data
          </Button>
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <ContainerRow>
        <ContainerFlexWidthCustom widthPercent={48}>
          <Input
            value={merchant_id}
            setValue={(value) => setMerchantId(value)}
            label="Merchant ID:"
            type="number"
          />
          <ContainerHeight height={15} />
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={45}>
          <Input
            value={merchant_transaction_id}
            setValue={(value) => setMerchantTransactionId(value)}
            label="Merchant Transaction ID:"
          />
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <ContainerHeight height={5} />
      <Input
        value={gateway_token}
        setValue={(value) => setGateway_token(value)}
        label="Gateway Token:"
      />
      <FormLabelCustom>User Data:</FormLabelCustom>
      <Input
        value={email}
        setValue={(value) => setEmail(value)}
        label="User Email: (OPTIONAL)"
      />
      <ContainerHeight height={20} />
      <ContainerRow>
        <ContainerFlexWidthCustom widthPercent={48}>
          <Input
            value={document_number}
            setValue={(value) => setDocumentNumber(value)}
            label="User Document - CPF/CNPJ: (OPTIONAL)"
          />
        </ContainerFlexWidthCustom>

        <ContainerFlexWidthCustom widthPercent={48}>
          <Input
            value={account_id}
            setValue={(value) => setAccountId(value)}
            label="User Account ID in Merchant:"
          />
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <FormLabelCustom>Transaction Data:</FormLabelCustom>
      <ContainerRow>
        <ContainerFlexWidthCustom widthPercent={50}>
          <Input
            value={amount}
            setValue={(value) => setAmount(value)}
            label="Amount:"
            type="number"
          />
        </ContainerFlexWidthCustom>
        <ContainerHeight height={15} />
        <ContainerFlexWidthCustom widthPercent={60}>
          <InputSwitch
            label="Auto approve"
            checked={auto_approve}
            onChange={(event) => setAuto_approve(event.target.checked)}
          />
          {isAutoApproveSelected()}
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={60}>
          <RadioGroup
            defaultCheckedValue={currency}
            setChecked={(value) => setCurrency(value)}
            labelGroup="Currency"
            checkData={[
              { value: "BRL", label: "BRL" },
              { value: "USD", label: "USD" },
            ]}
          />
        </ContainerFlexWidthCustom>
      </ContainerRow>
      <ContainerHeight height={15} />
      <RadioGroup
        defaultCheckedValue={operation}
        setChecked={(value) => setOperationAndSetTypeDefault(value)}
        labelGroup="Operation"
        checkData={getOperationsAvailable(isDev)}
      />
      <ContainerHeight height={15} />

      <ContainerHeight height={15} />
      <RadioGroup
        defaultCheckedValue={type}
        setChecked={(value) => setType(value)}
        labelGroup="Type passed by merchant"
        checkData={getTypesAvailables(operation)}
      />

      {isDepositWallet && (
        <>
          <ContainerHeight height={15} />
          <ContainerRow>
            <ContainerFlexWidthCustom widthPercent={48}>
              <Input
                value={login_email}
                setValue={(value) => setLoginEmail(value)}
                label="Email Login Paylivre"
              />
              <ContainerHeight height={15} />
            </ContainerFlexWidthCustom>
            <ContainerFlexWidthCustom widthPercent={45}>
              <Input
                value={password}
                setValue={(value) => setPassword(value)}
                label="Password Login Paylivre"
              />
            </ContainerFlexWidthCustom>
          </ContainerRow>
        </>
      )}
      {operation === operation_withdraw &&
        type === typesList.PIX.toString() &&
        checkIsTypeWithdrawValid(type) && (
          <>
            <ContainerRow>
              <ContainerFlexWidthCustom widthPercent={48}>
                <ContainerHeight height={25} />
                <RadioGroup
                  defaultCheckedValue={pix_key_type}
                  setChecked={(value) => handleSetPixKey(value)}
                  labelGroup="Pix Key Type(OPTIONAL)"
                  checkData={[
                    { value: PixKeyTypes.document, label: "CPF/CNPJ" },
                    { value: PixKeyTypes.phone, label: "Phone" },
                    { value: PixKeyTypes.email, label: "Email" },
                  ]}
                />
              </ContainerFlexWidthCustom>
              <ContainerFlexWidthCustom widthPercent={48}>
                <ContainerHeight height={30} />
                <Input
                  value={pix_key}
                  setValue={(value) => setPix_key(value)}
                  label="User Pix Key"
                />
              </ContainerFlexWidthCustom>
            </ContainerRow>
          </>
        )}
      <ContainerHeight height={15} />
      <Input
        value={callback_url}
        setValue={(value) => setcCallback_url(value)}
        label="Callback URL:"
      />
      <FormLabel component="legend" style={{ margin: "0.6rem 0" }}>
        v{packageJson.version}
      </FormLabel>
    </Container>
  );
}

export default Form;
