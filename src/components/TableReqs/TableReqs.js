import React from "react";

import {Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@material-ui/core";

const TableReqs = ({classes, modelFeatures, ...props}) => {

    return (

        <Grid container direction="row">

            <Grid item lg={11}> <Table className="mb-0" size="small">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Description</b></TableCell>
                        <TableCell><b>Min Value</b></TableCell>
                        <TableCell><b>Max Value</b></TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {modelFeatures.map((feature, index) => (
                        <TableRow>
                            <TableCell style={{ width: '15%' }}>
                                <TextField
                                    id="feature-name"
                                    className={classes.textField}
                                    margin="normal"
                                    defaultValue={feature.name}
                                    onChange={e => props.handleInput(index, e, "name")}
                                />


                            </TableCell>
                            <TableCell style={{ width: '55%' }}>
                                <TextField
                                    id="feature-description"
                                    className={classes.textField}
                                    margin="normal"
                                    multiline
                                    defaultValue={feature.description}
                                    onChange={e => props.handleInput(index, e, "description")}
                                    fullWidth={true}
                                />
                            </TableCell>
                            <TableCell style={{ width: '15%' }}>
                                <TextField
                                    id="feature-min"
                                    className={classes.textField}
                                    margin="normal"
                                    type="number"
                                    defaultValue={feature.min}
                                    onChange={e => props.handleInput(index, e, "min")}
                                />
                            </TableCell>
                            <TableCell style={{ width: '15%' }}>
                                <TextField
                                    id="feature-max"
                                    className={classes.textField}
                                    margin="normal"
                                    type="number"
                                    defaultValue={feature.max}
                                    onChange={e => props.handleInput(index, e, "max")}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </Grid>
            <Grid item lg={1}>
                <Button variant="contained" size="small" color="primary" className={classes.margin}
                        onClick={props.addItem}>
                    Add
                </Button>
            </Grid>

        </Grid>
    );
};

export default TableReqs;
