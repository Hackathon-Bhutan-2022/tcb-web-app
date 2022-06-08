import React, {useState} from 'react';
import {
  Container,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material';
import {Images} from '../../../../common/Assets/Images';
import Search from '../../../../common/Search/Search';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListNotification from '../../../../common/Notification/ListNotification';

export const ListTourGuides = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <div style={{display: 'flex'}}>
        <Typography style={{fontWeight: 700, fontSize: 24, color: '#4F4B4B', marginBottom: 10}}>User</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25, marginTop: 5}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon onClick={() => handleClickOpen()}/>
          </Badge>
        </IconButton>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <Typography style={{fontWeight: 700, color: '#4F4B4B', marginTop: 10}}>Travel Agent</Typography>
        <Search placeholder="Search..."/>
      </div>
      <TableContainer style={{borderRadius: 10}}>
        <Table size={'small'}>
          <TableHead style={{backgroundColor: '#F7F7F7'}}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>License No.</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>CID</TableCell>
              <TableCell>Phone #</TableCell>
              <TableCell colSpan={3}/>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <img src={Images?.bannerImage} style={{width: 25, height: 25, borderRadius: 25}}
                     alt=""/> <span style={{marginLeft: 5, color: 'gray'}}>Rinzin Norbu</span>
              </TableCell>
              <TableCell style={{color: 'gray'}}>#12993</TableCell>
              <TableCell style={{color: 'gray'}}>rinzinbht2018@gmail.com</TableCell>
              <TableCell style={{color: 'gray'}}>1234567890</TableCell>
              <TableCell style={{color: 'gray'}}>+975-17971633</TableCell>
              <TableCell>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{'aria-label': 'controlled'}}
                />
              </TableCell>
              <TableCell>
                <DeleteForeverIcon color="warning"/>
              </TableCell>
              <TableCell>
                <Tooltip title={'Profile'}>
                  <IconButton onClick={()=> navigate("/admin/users/agents/2")} style={{backgroundColor: '#f5f4f4'}}>
                    <ArrowForwardIcon color="success"/>
                  </IconButton>
                </Tooltip>
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
      <ListNotification handleAction={handleClose} open={open}/>
    </Container>
  );
};
