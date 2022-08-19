/* eslint-disable no-unused-expressions */
import React from "react";
import { useLocation } from "react-router-dom";
import Form from "./components/Form";
import { getArgon2i } from "../../services/argon2i";
import { utf8_to_b64 } from "../../utils/base64";
import {
  DataDefaultDev,
  DataDefaultPlayground,
  DataDefaultStaging,
} from "../../data/formDataDefault";
import { Container, ContainerResult, CustomButton } from "./styles";
import UrlParametersList from "../../components/UrlParametersList";
import { operation_deposit, operation_withdraw } from "../../data/types";
import RequestJson from "../../components/RequestJson";
import UrlApi from "./components/UrlApi";
import { typesList } from "../../utils/typesUtils";

export const requiredFieldsDefault = [
  "merchant_id",
  "operation",
  "merchant_transaction_id",
  "amount",
  "currency",
  "mock_type",
  "account_id",
  "mock_auto_approve",
  "callback_url",
  "type",
  "auto_approve",
  "signature",
];

export const requiredFieldsDefaultWithdrawPix = [
  ...requiredFieldsDefault,
  "pix_key_type",
  "pix_key",
];

export const requiredFieldsDefaultDepositWallet = [
  ...requiredFieldsDefault,
  "login_email",
  "password",
];

function getRequiredFieldsDefault(isWithdrawPix, isDepositWallet) {
  if (isWithdrawPix) {
    return requiredFieldsDefaultWithdrawPix;
  }
  if (isDepositWallet) {
    return requiredFieldsDefaultDepositWallet;
  }
  return requiredFieldsDefault;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function checkIsDev() {
  return useQuery().get("dev") === "1";
}
export function checkIsDevPlayground() {
  return useQuery().get("playground") === "1";
}
export function checkIsDevStaging() {
  return useQuery().get("staging") === "1";
}

export function getDataDefault() {
  const isDev = checkIsDev();
  const isDevPlayground = checkIsDevPlayground();
  const isDevStaging = checkIsDevStaging();

  const dataDefault = !isDev
    ? DataDefaultPlayground
    : isDevPlayground
    ? DataDefaultPlayground
    : isDevStaging
    ? DataDefaultStaging
    : DataDefaultDev;

  return dataDefault;
}

function App() {
  const isDev = checkIsDev();
  const dataDefault = getDataDefault();
  const [base_url, setBaseUrl] = React.useState(dataDefault.base_url);
  const [data, setData] = React.useState({});
  const [gateway_token, setGateway_token] = React.useState(
    dataDefault.gateway_token
  );
  const [urlGenerated, setUrlGenerated] = React.useState(false);
  const [url, setURL] = React.useState("");
  const [urlGatewayParameters, setUrlGatewayParameters] = React.useState({});
  const typeFormSelected = "json";
  const [requiredFields, setRequiredFields] = React.useState(
    requiredFieldsDefault
  );

  function getUrlGateway(DataURL, signature) {
    const merchant_transaction_id = `merchant_transaction_id=${DataURL.merchant_transaction_id}`;
    const merchant_id = `merchant_id=${DataURL.merchant_id}`;
    const account_id = `account_id=${DataURL.account_id}`;
    const amount = `amount=${DataURL.amount}`;
    const currency = `currency=${DataURL.currency}`;
    const operation = `operation=${DataURL.operation}`;
    const callback_url = `callback_url=${DataURL.callback_url}`;
    const mock_type = `type=${DataURL.type}`;
    const mock_auto_approve = `auto_approve=${DataURL.auto_approve}`;
    const Signature = signature ? `&signature=${signature}` : "";
    const email = DataURL.email ? `&email=${DataURL.email}` : "";
    const document_number = DataURL.document_number
      ? `&document_number=${DataURL.document_number}`
      : "";
    const isWithdrawPix =
      DataURL.operation.toString() === operation_withdraw &&
      DataURL.type.toString() === typesList.PIX.toString();

    const pix_key = isWithdrawPix ? `&pix_key=${DataURL.pix_key}` : "";
    const pix_key_type = isWithdrawPix
      ? `&pix_key_type=${DataURL.pix_key_type}`
      : "";

    return `${base_url}?${merchant_transaction_id}&${merchant_id}&${operation}${email}${document_number}&${amount}&${currency}${pix_key_type}${pix_key}&${mock_type}&${account_id}&${callback_url}&${mock_auto_approve}${Signature}`;
  }

  async function handleGenerateSignature() {
    const urlWithoutSignature = getUrlGateway(data);
    const valueToGetArgon2iHash = gateway_token + urlWithoutSignature;
    const argon2iHash = await getArgon2i(valueToGetArgon2iHash);
    const signature = utf8_to_b64(argon2iHash);

    setURL(urlWithoutSignature);

    setData((oldData) => {
      return { ...oldData, signature };
    });

    setUrlGenerated(true);
    setUrlGatewayParameters({ ...data, signature });
  }

  const isWithdrawPix =
    data?.operation?.toString() === operation_withdraw &&
    data?.type?.toString() === typesList.PIX.toString();

  const isDepositWallet =
    data?.operation?.toString() === operation_deposit &&
    data?.type?.toString() === typesList.WALLET.toString();

  return (
    <Container>
      <Form
        dataDefault={dataDefault}
        base_url={base_url}
        setBaseUrl={setBaseUrl}
        gateway_token={gateway_token}
        setGateway_token={setGateway_token}
        data={data}
        setUrlGenerated={setUrlGenerated}
        handleGenerateURL={() => handleGenerateSignature()}
        setData={setData}
        typeFormSelected={typeFormSelected}
        isDev={isDev}
        setRequiredFields={setRequiredFields}
      />
      <ContainerResult>
        {urlGenerated && (
          <>
            <UrlApi dataDefault={dataDefault} />

            <RequestJson
              type={typeFormSelected}
              style={{ marginBottom: 20 }}
              dataRequest={data}
              url={url}
              label="JSON Post Request:"
              textButton="Copy JSON"
              baseUrl={dataDefault.base_url}
            />
          </>
        )}

        <CustomButton
          size="large"
          onClick={() => handleGenerateSignature()}
          style={{
            width: "100%",
            textTransform: "none",
            minWidth: "100%",
            marginRight: 0,
          }}
          variant="contained"
        >
          {`Generate ${typeFormSelected.toUpperCase()}`}
        </CustomButton>
        {urlGenerated && (
          <UrlParametersList
            baseUrl={base_url}
            parameters={urlGatewayParameters}
            requiredFields={getRequiredFieldsDefault(
              isWithdrawPix,
              isDepositWallet
            )}
          />
        )}
      </ContainerResult>
    </Container>
  );
}

export default App;
