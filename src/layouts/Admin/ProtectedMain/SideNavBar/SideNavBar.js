import React from 'react';
import {useNavigate} from 'react-router-dom';
import './SideNavBar.scss';
import PropTypes from 'prop-types';
import {Dropdown, Nav, Sidenav} from 'rsuite';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {Images} from '../../../../common/Assets/Images';
import {Hidden} from '@mui/material';

const SideNavBar = props => {
  const {pages, className, children, sub_children, onClose, ...rest} = props;
  const navigate = useNavigate();

  const navigationDetail = (route, index) => {
    navigate(route, {state: {index: index}});
  };

  return (
    <div>
      <Hidden smUp={true}>
        <Stack sx={{backgroundColor: '#373856', ml: 2}} display={'flex'} flexDirection={'column'}>
          <img draggable={'false'} style={{borderRadius: 25, width: 50, height: 50, objectFit: 'cover'}} src={Images.logo} alt=""/>
          <Typography fontSize={14} fontWeight={700} sx={{mt: 0.5}} color={'primary'}>Admin</Typography>
          <Typography fontSize={14} sx={{mt: 1, color: '#2b2b2b'}}>Sangay Tenzin</Typography>
        </Stack>
      </Hidden>
      <Sidenav>
        <Sidenav.Body>
          <Nav {...rest}>
            {pages?.map((page, index) => (
              page?.children?.length > 0 ?
                <Dropdown eventKey={page.index} title={page?.title} icon={page?.icon}>
                  {page?.children?.map((child, childIndex) => (
                    child?.sub_children?.length > 0 ?
                      <Dropdown.Menu eventKey={`${page?.index}-${child?.index}`} title={child?.title} key={childIndex}>
                        {child?.sub_children?.map((sub, subIndex) => (
                          <Dropdown.Item eventKey={`${page?.index}-${child?.index}-${sub?.index}`}
                                         onClick={() => navigationDetail(sub?.href, sub?.index)}
                                         key={subIndex} style={{fontSize: 14}}>
                            {sub?.title}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                      :
                      <Dropdown.Item eventKey={`${page?.index}-${child?.index}`}
                                     onClick={() => navigationDetail(child?.href, child?.index)}
                                     key={childIndex} style={{fontSize: 14}}>
                        {child?.title}
                      </Dropdown.Item>
                  ))}
                </Dropdown>
                :
                <Nav.Item eventKey={page.index} icon={page?.icon} key={index}
                          style={{textDecoration: 'none', fontSize: 14, backgroundColor: '#373856', color: '#A0A1AC'}}
                          onClick={() => navigationDetail(page.href, page?.index)}>
                  {page?.title}
                </Nav.Item>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

SideNavBar.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

export default SideNavBar;
