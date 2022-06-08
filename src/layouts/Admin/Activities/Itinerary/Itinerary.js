import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

export default function Itinerary(props) {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangePage = (event, newPage) => {
    newPage === page ? setPageIndex(pageIndex + rowsPerPage) : setPageIndex(pageIndex - rowsPerPage);
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Container>
      <Typography
        align={'left'}
        style={{
          fontWeight: 700,
          fontSize: 24,
          color: '#4F4B4B',
          marginBottom: 10,
        }}>
        Itinerary
      </Typography>
      <TableContainer style={{borderRadius: 10}}>
        <Table size={'small'}>
          <TableHead style={{backgroundColor: '#F7F7F7'}}>
            <TableRow>
              <TableCell>Itinerary Title</TableCell>
              <TableCell>No. of days</TableCell>
              <TableCell>No. of Nights</TableCell>
              <TableCell>No. of Guest</TableCell>
              <TableCell colSpan={2} />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={'hand-cursor'} onClick={() => navigate('/admin/activities/itinerary-detail')}>
              <TableCell style={{color: 'gray'}}>A week in Bhutan</TableCell>
              <TableCell style={{color: 'gray'}}>4</TableCell>
              <TableCell style={{color: 'gray'}}>6</TableCell>
              <TableCell style={{color: 'gray'}}>22</TableCell>
              <TableCell>
                <ModeEditRoundedIcon className={'hand-cursor'} color="warning" />
              </TableCell>
              <TableCell>
                <DeleteForeverIcon className={'hand-cursor'} color="warning" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        page={page - 1}
        count={total}
        rowsPerPage={rowsPerPage}
        component={Paper}
        style={{boxShadow: 'none', backgroundColor: 'transparent'}}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
}
