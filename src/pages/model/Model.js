import React from "react";
import {Button, Grid, InputLabel, MenuItem, Select, withStyles} from "@material-ui/core";
import PageTitle from "../../components/PageTitle";
import {Typography} from "../../components/Wrappers";

const handleChange = () => {
    console.log("Change")
};


const Model = ({classes, theme, ...props}) => {

    return (

        <React.Fragment>
            <PageTitle title="Create New Model"/>
            <Grid container spacing={32}>
                <Grid item lg={3} md={4} sm={6} xs={12}>

                    <Typography color="textSecondary">Model Requirements</Typography>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <InputLabel htmlFor="model-type">Model Type</InputLabel>
                            <Select
                                value={props.modelType}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'modelType',
                                    id: 'model-type',
                                }}
                            >
                                {(props.modelTypes.map(modelType => (
                                    <MenuItem value={modelType}>{modelType}</MenuItem>
                                )))}

                            </Select>
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary">Iterations</Typography>
                            <Typography size="md">2</Typography>
                        </Grid>
                        <Grid item>
                            <Typography color="textSecondary">Cost</Typography>
                            <Typography size="md">$2</Typography>
                        </Grid>
                        <Grid item>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" component="span" className={classes.upLoadButton}>
                                    Upload Dataset
                                </Button>
                            </label>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </React.Fragment>
    );
};

const styles = theme => ({
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
    }
});

export default withStyles(styles, {withTheme: true})(Model);
