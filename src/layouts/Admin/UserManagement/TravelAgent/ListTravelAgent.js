import React, {useEffect, useState} from 'react';
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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import ListNotification from '../../../../common/Notification/ListNotification';
import {usersServices} from '../../../../services/UserServices';
import Moment from 'react-moment';

export const ListTravelAgent = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [meta, setMeta] = useState({total_count: 0});
  const [querySearch, setQuerySearch] = useState('');

  useEffect(() => {
    fetchTravelAgents();
  }, [page, querySearch]);

  const fetchTravelAgents = async () => {
    await usersServices('get', {role_id: 2, page: page, query: querySearch}).then(response => {
      setMeta(response?.page_info);
      setUsers(response?.users?.users);
    });
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div style={{display: 'flex'}}>
        <Typography style={{fontWeight: 700, fontSize: 24, color: '#4F4B4B', marginBottom: 10}}>User</Typography>
        <IconButton style={{backgroundColor: '#EAE8E8', width: 30, height: 30, marginLeft: 25, marginTop: 5}}>
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon style={{color: 'gray'}} onClick={() => handleClickOpen()}/>
          </Badge>
        </IconButton>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
        <Typography style={{fontWeight: 700, color: '#4F4B4B', marginTop: 10}}>Travel Agent</Typography>
        <Search placeholder="Search..." onChange={(value) => setQuerySearch(value)}/>
      </div>
      <TableContainer style={{borderRadius: 10}}>
        <Table size={'small'}>
          <TableHead style={{backgroundColor: '#F7F7F7'}}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone #</TableCell>
              <TableCell>Added date</TableCell>
              <TableCell colSpan={3}/>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={user?.profile?.logo_url || Images?.bannerImage}
                       style={{width: 25, height: 25, borderRadius: 25}}
                       alt=""/>
                  <span style={{marginLeft: 5, color: 'gray'}}>{user?.profile?.name || '---'}</span>
                </TableCell>
                <TableCell style={{color: 'gray'}}>{user?.profile?.address || '---'}</TableCell>
                <TableCell style={{color: 'gray'}}>{user?.email || '---'}</TableCell>
                <TableCell style={{color: 'gray'}}>+975-{user?.profile?.mobile_no}</TableCell>
                <TableCell style={{color: 'gray'}}>
                  <Moment format="DD/MM/YYYY">{user?.created_at || new Date()}</Moment>
                </TableCell>
                <TableCell>
                  <Switch
                    checked={user?.activated}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                  />
                </TableCell>
                <TableCell>
                  <DeleteForeverIcon color="warning"/>
                </TableCell>
                <TableCell onClick={() => navigate(`/admin/users/agents/${user?.id}`)}>
                  <Tooltip title={'Profile'}>
                    <IconButton style={{backgroundColor: '#f5f4f4'}}>
                      <ArrowForwardIcon color="success"/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        page={page - 1}
        count={meta?.total_count}
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
