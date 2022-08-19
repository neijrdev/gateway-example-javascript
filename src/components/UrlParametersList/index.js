import { Typography } from "@mui/material";
import React from "react";
import { ContainerFlexWidth } from "../styles";
import {
  Alert,
  AlertContainer,
  Container,
  Legend,
  ListContainer,
  ListItem,
  SectionTitle,
} from "./styles";

const UrlParametersList = ({ parameters, baseUrl, requiredFields }) => {
  const validationArray = [];

  Object.entries(parameters).forEach((param) =>
    validationArray.push(
      requiredFields.includes(param[0]) && param[1].length === 0
    )
  );

  function renderParametersItem(param, index) {
    const isRequired = requiredFields.includes(param[0]);
    const isEmpty = param[1].length === 0;
    return (
      <ListItem key={index} isEmpty={isEmpty}>
        {isRequired && "* "}
        {`${param[0]} = ${param[1]}`}
      </ListItem>
    );
  }

  function renderAlert() {
    return (
      <AlertContainer>
        {validationArray.includes(true) && (
          <Alert>All mandatory fields must be filled!</Alert>
        )}
        <Typography style={{ marginTop: 10 }} component="p">
          Legend:
        </Typography>
        <Legend>* - Mandatory field</Legend>
      </AlertContainer>
    );
  }

  return (
    <Container>
      {validationArray.includes(true) && renderAlert()}
      <ContainerFlexWidth>
        <SectionTitle>Url Parameters</SectionTitle>
        <ListContainer>
          <ListItem>{baseUrl}</ListItem>
          <br />
          {Object.entries(parameters).map((param, index) =>
            renderParametersItem(param, index)
          )}
        </ListContainer>
      </ContainerFlexWidth>
      {!validationArray.includes(true) && renderAlert()}
    </Container>
  );
};

export default UrlParametersList;
