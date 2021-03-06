import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ButtonPrimary from "./ButtonPrimary";
import {FormattedHTMLMessage, injectIntl} from "react-intl";


const styles = theme => ({
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: 'auto',
        backgroundColor: '#fbfbfb',
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    infoBtnPanel: {
        display: 'flex',
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});

class AlertErrApi extends React.Component {
    render() {
        const {classes, goClose, lang, intl, alertData} = this.props
        if (alertData && alertData.show) {
            return (
                <Modal open={true} onClose={() => goClose()}>
                    <div className={classes.paper}>
                        <Typography variant="h6">
                            <FormattedHTMLMessage id="AlertErrApi.title"/>
                        </Typography>
                        <br/>
                        <Typography variant="subtitle1">
                            <FormattedHTMLMessage id="AlertErrApi.errCode" values={{errCode: alertData.errCode}}/>
                        </Typography>
                        <Typography variant="subtitle1">
                            <FormattedHTMLMessage id="AlertErrApi.errMsg" values={{errMsg: alertData.errMsg}}/>
                        </Typography>
                        <br/>
                        <div className={classes.infoBtnPanel}>
                            <ButtonPrimary variant="outlined" onClick={() => goClose()} style={{width: 100}}>
                                {intl.formatMessage({id: 'AlertErrApi.ok.label'})}
                            </ButtonPrimary>
                        </div>
                    </div>
                </Modal>
            )
        } else {
            return (
                <Modal open={false} onClose={goClose}>
                    <div className={classes.paper}/>
                </Modal>
            )
        }
    }
}

export default injectIntl(withStyles(styles)(AlertErrApi));