import React from "react";
import {Fab, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const TableReqsComponent = ({classes, ...props}) => {
    return (
        <Grid container direction="row">

            <Grid item lg={11}> <Table className="mb-0">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Description</b></TableCell>
                        <TableCell><b>Min Value</b></TableCell>
                        <TableCell><b>Max Value</b></TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.rowsData.map(feature => (
                        <TableRow>
                            <TableCell>
                                <TextField
                                    id="feature-name"
                                    className={classes.textField}
                                    margin="normal"
                                    //value={feature.name}
                                />


                            </TableCell>
                            <TableCell>
                                <TextField
                                    id="feature-description"
                                    className={classes.textField}
                                    margin="normal"
                                    multiline
                                    //value={feature.description}
                                />
                            </TableCell>
                            <TableCell>
                                <TextField
                                    id="feature-min"
                                    className={classes.textField}
                                    margin="normal"
                                    type="number"
                                    //value={feature.min}
                                />
                            </TableCell>
                            <TableCell><TextField
                                id="feature-max"
                                className={classes.textField}
                                margin="normal"
                                type="number"
                                //value={feature.max}
                            /></TableCell>
                        </TableRow>
                    ))}
                 </TableBody>
            </Table>
        </Grid>
        <Grid item lg={1}>
            <Fab color="primary" aria-label="Add" className={classes.fab}
                                   onClick={() => console.log("clicj")}>
                <AddIcon/>
            </Fab>
        </Grid>

    </Grid>
    );
};

export default TableReqsComponent;
