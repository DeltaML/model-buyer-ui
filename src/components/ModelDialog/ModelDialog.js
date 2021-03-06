import React from 'react';
import {Grid, withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ReactJson from 'react-json-view'


const DialogTitle = withStyles(styles)(props => {
    const {children, classes, onClose} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Grid container
                  justify="space-between"
            >
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon/>
                    </IconButton>
                ) : null}
            </Grid>
        </MuiDialogTitle>
    );
});
const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);


const ModelDialog = ({classes, ...props}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.pageTitleContainer}>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Show model
            </Button>
            <Grid container direction="column">
                <Dialog onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        maxWidth='xl'
                        fullWidth={true}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {props.title}
                    </DialogTitle>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <DialogContent dividers>
                            <ReactJson src={props.data}

                                       enableClipboard={copy => {
                                           navigator.clipboard.writeText(JSON.stringify(copy.src)).then(
                                               () => console.log("Copy ok"),
                                               () => console.log("Copy error"));
                                       }}
                            />
                        </DialogContent>
                    </Grid>


                </Dialog>
            </Grid>

        </div>
    )
};

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
});

export default withStyles(styles)(ModelDialog);
