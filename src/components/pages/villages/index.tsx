import { FC } from 'react';

import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid,
} from '@material-ui/core';

const Villages: FC = () => {
    return (
        <Grid container justify={"center"} alignItems={"center"}>
            <Grid item xs={10}>
                <h2>村を探す</h2>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>村名</TableCell>
                                <TableCell>人数</TableCell>
                                <TableCell>議論</TableCell>
                                <TableCell>状態</TableCell>
                                <TableCell>開始予定</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>らりらり村</TableCell>
                                <TableCell>人数</TableCell>
                                <TableCell>議論</TableCell>
                                <TableCell>状態</TableCell>
                                <TableCell>開始予定</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>世界の晩餐</TableCell>
                                <TableCell>人数</TableCell>
                                <TableCell>議論</TableCell>
                                <TableCell>状態</TableCell>
                                <TableCell>開始予定</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default Villages;