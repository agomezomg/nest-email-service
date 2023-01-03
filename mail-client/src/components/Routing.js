import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import LoginModal from "./LoginModal";
import Inbox from "./Inbox"
import PropsRoute from "../../shared/components/PropsRoute";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const {
    classes,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    posts,
    transactions,
    toggleAccountActivation,
    CardChart,
    statistics,
    targets,
    setTargets,
    setPosts,
    isAccountActivated,
    selectDashboard,
    selectPosts,
    selectSubscription,
    openAddBalanceDialog,
  } = props;
  useLocationBlocker();
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path="/c"
          component={LoginModal}
        />
        <PropsRoute
          path="/c/mail"
          component={Inbox}
          mailList={mailList}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  mailList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default (memo(Routing));
