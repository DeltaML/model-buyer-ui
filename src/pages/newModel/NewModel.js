import React from "react";
import {FormControl, Grid, Input, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, withStyles} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import ModelWidget from "../../components/ModelWidget";
import PageTitle from "../../components/PageTitle";
import AddIcon from '@material-ui/icons/Add';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableReqs from "../../components/TableReqs";

const NewModel = ({classes, theme, ...props}) => {
    return (

        <React.Fragment>
            <PageTitle title="Create New Model"/>
            <ToastContainer autoClose={2000}/>
            <Grid
                container
                direction="column"
                spacing={2}
            >
                <Grid item container spacing={2} direction="row">
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <ModelWidget
                            upperTitle
                            title="Model"
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                spacing={3}
                            >
                                <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel htmlFor="name">Name</InputLabel>
                                        <Input id="name" value={props.modelName}
                                               onChange={e => props.handleInput("model", "name", e)}/>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={5} md={5} sm={5} xs={5}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel htmlFor="model-type">Model Type</InputLabel>
                                        <Select
                                            id={"modelTypeSelect"}
                                            required
                                            value={props.selectedModelType}
                                            onChange={e => props.handleSelect(e)}
                                            fullWidth={true}
                                        >
                                            {(props.modelTypes.map(modelType => (
                                                <MenuItem id={modelType} value={modelType}>{modelType}</MenuItem>
                                            )))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={3} md={3} sm={3} xs={3}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel shrink={true} htmlFor="hyperparameters">Hyperparameters</InputLabel>
                                        <Input id="hyperparameters" value={(props.selectedModelType === "LINEAR_REGRESSION") ? "step: 1.5" : null} />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </ModelWidget>
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={12}>
                        <ModelWidget
                            title="Payment"
                            upperTitle
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                spacing={3}
                            >
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel htmlFor="currency">Currency</InputLabel>
                                        <Input id="currency" value={props.payment_requirements.pay_for_model.unit}/>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel htmlFor="total_pay">Amount</InputLabel>
                                        <Input id="total_pay" value={props.payment_requirements.pay_for_model.value}
                                               onChange={e => props.handleInput("payment_requirements", "total_pay", e)}/>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </ModelWidget>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <ModelWidget
                            upperTitle
                            title="Preprocessing"
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                spacing={3}
                            >
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel htmlFor="method">Method</InputLabel>
                                        <Select
                                            id={"methodSelect"}
                                            required
                                            value={props.features.pre_processing[0]["method"]}
                                            fullWidth={true}
                                        >
                                            {(props.features.pre_processing.map(preproc => (
                                                <MenuItem id={preproc.method} value={preproc.method}>{preproc.method}</MenuItem>
                                            )))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <FormControl fullWidth={true} className={classes.formControl}>
                                        <InputLabel htmlFor="parameter">Parameters</InputLabel>
                                        <Select
                                            id={"parameter"}
                                            required
                                            value={props.features.pre_processing[0]["parameters"]}
                                            fullWidth={true}
                                        >
                                            {(props.features.pre_processing.map(preproc => (
                                                <MenuItem id={preproc.parameters} value={preproc.parameters}>{preproc.parameters}</MenuItem>
                                            )))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </ModelWidget>
                    </Grid>
                </Grid>

                <Grid item container spacing={2} direction="row">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ModelWidget
                            title="Features"
                            upperTitle
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                             <TableReqs classes={classes.textField} />
                        </ModelWidget>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <ModelWidget
                            title="Target"
                            upperTitle
                            bodyClass={classes.fullHeightBody}
                            className={classes.card}
                        >
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                spacing={3}
                            >
                                <Grid item lg={11}>
                                    <Table className="mb-0" size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><b>Description</b></TableCell>
                                                <TableCell><b>Min Value</b></TableCell>
                                                <TableCell><b>Max Value</b></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableCell style={{ width: '70%' }}>
                                                <TextField
                                                    id="target-desc"
                                                    className={classes.textField2}
                                                    margin="normal"
                                                    multiline
                                                    defaultValue={props.target.desc[0]}
                                                    onChange={e => props.handleInput(e, "desc")}
                                                    fullWidth={true}
                                                />
                                            </TableCell>
                                            <TableCell style={{ width: '15%' }}>
                                                <TextField
                                                    id="target-min"
                                                    className={classes.textField2}
                                                    margin="normal"
                                                    type="number"
                                                    defaultValue={props.modelTarget.min}
                                                    onChange={e => props.handleInput(e, "min")}
                                                    fullWidth={true}
                                                />
                                            </TableCell>
                                            <TableCell style={{ width: '15%' }}>
                                                <TextField
                                                    id="target-max"
                                                    className={classes.textField2}
                                                    margin="normal"
                                                    type="number"
                                                    defaultValue={props.modelTarget.max}
                                                    onChange={e => props.handleInput(e, "max")}
                                                    fullWidth={true}
                                                />
                                            </TableCell>
                                        </TableBody>
                                    </Table>
                                </Grid>
                            </Grid>
                        </ModelWidget>
                    </Grid>
                </Grid>
            </Grid>
            <div>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={props.handleCreateModel}>
                    <AddIcon/>
                </Fab>
            </div>
        </React.Fragment>
    );
};

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    textField2: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 5,
        right: theme.spacing.unit * 10,
    },
    input: {
        display: 'none',
    },
    upLoadButton: {
        boxShadow: theme.customShadows.widget,
        textTransform: 'none',
        '&:active': {
            boxShadow: theme.customShadows.widgetWide,
        },
    },
    card: {
        minHeight: "100%",
        display: "flex",
        flexDirection: "column"
    },
    visitsNumberContainer: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        paddingBottom: theme.spacing.unit
    },
    progressSection: {
        marginBottom: theme.spacing.unit
    },
    progressTitle: {
        marginBottom: theme.spacing.unit * 2
    },
    progress: {
        marginBottom: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main
    },
    pieChartLegendWrapper: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: theme.spacing.unit
    },
    legendItemContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    fullHeightBody: {
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    tableWidget: {
        overflowX: "auto"
    },
    progressBar: {
        backgroundColor: theme.palette.warning.main
    },
    performanceLegendWrapper: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        marginBottom: theme.spacing.unit
    },
    legendElement: {
        display: "flex",
        alignItems: "center",
        marginRight: theme.spacing.unit * 2,
    },
    legendElementText: {
        marginLeft: theme.spacing.unit
    },
    serverOverviewElement: {
        display: "flex",
        alignItems: "center",
        maxWidth: "100%"
    },
    serverOverviewElementText: {
        minWidth: 145,
        paddingRight: theme.spacing.unit * 2
    },
    serverOverviewElementChartWrapper: {
        width: "100%"
    },
    mainChartBody: {
        overflowX: 'auto',
    },
    mainChartHeader: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.only("xs")]: {
            flexWrap: 'wrap',
        }
    },
    mainChartHeaderLabels: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.only("xs")]: {
            order: 3,
            width: '100%',
            justifyContent: 'center',
            marginTop: theme.spacing.unit * 3,
            marginBottom: theme.spacing.unit * 2,
        }
    },
    mainChartHeaderLabel: {
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing.unit * 3,
    },
    mainChartSelectRoot: {
        borderColor: theme.palette.text.hint + '80 !important',
    },
    mainChartSelect: {
        padding: 10,
        paddingRight: 25
    },
    mainChartLegentElement: {
        fontSize: '18px !important',
        marginLeft: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 1,
        width: "100%",
        minWidth: 190
    },
    formInput: {
        marginTop: theme.spacing.unit * 1,
        width: "100%",
        minWidth: "100%"
    },
});

export default withStyles(styles, {withTheme: true})(NewModel);
