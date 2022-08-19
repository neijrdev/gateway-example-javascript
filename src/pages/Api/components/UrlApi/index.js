import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "react-notifications/lib/notifications.css";
import copyToClipboard from "copy-to-clipboard";
import { NotificationManager } from "react-notifications";
import "./jsonStyle.css";
import { Typography } from "@mui/material";
import {
  Container,
  PColor,
  FormLabelCustom,
  ContainerFlexWidthCustom,
  CustomButton,
  FlagPost,
} from "./styles";
import { ContainerRow } from "../styles";

import { useForceReloadData } from "../../../../contexts/forceReloadData";

function UrlApi({ dataDefault }) {
  const { disable } = useForceReloadData();
  const base_url = `${dataDefault.api_base_url}/merchant/payments`;
  function handleCopyToClipboard() {
    if (!disable) {
      copyToClipboard(base_url);
      const textToNotification = "Copied URL";
      NotificationManager.success(textToNotification, "", 1000);
    }
  }

  const IconButtonMain = ContentCopyIcon;

  function handleButtonAction() {
    handleCopyToClipboard();
  }

  return (
    <Container>
      <ContainerRow style={{ alignItems: "center", marginBottom: 0 }}>
        <ContainerFlexWidthCustom widthPercent={50} style={{ paddingTop: 0 }}>
          <ContainerRow
            style={{
              alignItems: "center",
              paddingTop: 10,
              marginBottom: 10,
              justifyContent: "flex-start",
            }}
          >
            <FlagPost>
              <Typography color="primary">POST</Typography>
            </FlagPost>
            <FormLabelCustom>JSON Post Url:</FormLabelCustom>
          </ContainerRow>
        </ContainerFlexWidthCustom>
        <ContainerFlexWidthCustom widthPercent={50}>
          <CustomButton
            disabled={disable}
            endIcon={<IconButtonMain />}
            onClick={() => handleButtonAction()}
            style={{ width: "100%", textTransform: "none" }}
            variant="contained"
          >
            Copy URL API
          </CustomButton>
        </ContainerFlexWidthCustom>
      </ContainerRow>

      <PColor color="#ffff80">{base_url}</PColor>
    </Container>
  );
}

export default UrlApi;
