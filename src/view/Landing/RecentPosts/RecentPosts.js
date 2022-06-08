import React from 'react';
import Typography from '@mui/material/Typography';
import {Card, TextField} from '@mui/material';
import Stack from '@mui/material/Stack';
import {Images} from '../../../common/Assets/Images';
import Box from '@mui/material/Box';
import {truncate} from '../../../common/Truncate/Truncate';

export default function RecentPosts(props) {
  const posts = [
    {
      image: require('../../../assets/Images/roadSide.png'),
      profile: require('../../../assets/Images/Karma.png'),
      name: 'Kinga Dorji',
      comment: '3',
      description: 'The trailer truck which was stuck at Leylang was successfully pulled out today. The trailer truck was pinned down by a huge boulder and it took almost the entire day to pull the truck away from the block area.\n' +
        'The roadblock couldn\'t be cleared today due to frequent falling boulders. clearing works shall resume early in the morning tomorrow.\n' +
        'We would like to again request all commuters not to travel through this location after dusk owing to severe risk from falling boulders.',
    },
    {
      image: require('../../../assets/Images/festival.png'),
      profile: require('../../../assets/Images/Couple.png'),
      name: 'Sonam Zangmo',
      comment: '11',
      description: 'The Punakha Tshechu is one of the most popular Tshechus in the nation. It is held directly after the well known Punakha Drubchen. The spreading out of the thongdrol a large tapestry of Guru Rimpoche is the primary fascination of the festival. It is trusted that a mere sight of the thongdrol liberates an onlooker and cleanses him of his sins. Punakha Tshechu, as all Tshechu festivals, respects Padmasambhawa, also called Guru Rimpoche, the precious yogi and holy person who is credited with having presented Tantric Buddhism all through the Himalayas. The festival\'s masked dances are performed by priests clad in beautiful brocade clothing and pervaded by serenades and reading of Buddhist scripts.',
    },
    {
      image: require('../../../assets/Images/accident.png'),
      profile: require('../../../assets/Images/Dorji.png'),
      name: 'Yeshi Norbu Wangdi',
      comment: '8',
      description: 'A 61-year-old man died when the bolero pick-up truck he was driving veered 20 metres off the road in Wangling village under Mongar gewog on December 26.\n' +
        '\n' +
        'The accident occurred at around 4pm, when the deceased and his 60-year old wife were returning home from Mongar town. The woman escaped with minor injuries.\n' +
        '\n' +
        'Police suspect drink-driving as the cause of the accident.',
    },
    {
      image: require('../../../assets/Images/singing.png'),
      profile: require('../../../assets/Images/buddha.png'),
      comment: '10',
      name: 'Sangay Wangmo',
      description: 'The music of Bhutan is an integral part of its culture and plays a leading role in transmitting social values. Traditional Bhutanese music includes a spectrum of subgenres, ranging from folk to religious song and music. Some genres of traditional Bhutanese music intertwine vocals, instrumentation, and theatre and dance, while others are mainly vocal or instrumental. The much older traditional genres are distinguished from modern popular music such as rigsar.',
    },
  ];

  const [comments, setComments] = React.useState(false);

  const handleComments = () => {
    setComments(!comments);
  };

  return (
    <div>
      <Typography fontSize={18} fontWeight={700} sx={{mb: 2}}>
        Recent Posts
      </Typography>
      <div style={{overflowY: 'scroll', height: '100vh'}}>
        {posts.map(value => (
          <Card className='card-shadow' sx={{borderRadius: 3, mb: 2}}>
            <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', pl: 2, pr: 2, pt: 2}}>
              <img draggable={'false'} width={50} height={50}
                   style={{objectFit: 'cover', borderRadius: '50%', backgroundColor: '#c3c3c3'}}
                   src={value?.profile || Images.defaultProfile} alt="profile" />
              <Stack sx={{display: 'flex', flexDirection: 'column', ml: 1}}>
                <Typography fontSize={14} fontWeight={700}>{value?.name}</Typography>
                <Typography fontSize={12} sx={{mt: -0.5}}>6 Jun, 2022 10: 30 AM</Typography>
              </Stack>
            </Stack>
            <Typography fontSize={12} sx={{mb: 1, pl: 2, pr: 2, pt: 0.5}}>
              {truncate(value?.description, 100)}...
              <span className='hand-cursor' style={{color: '#369cc4', fontWeight: 700}}>Read more</span>
            </Typography>
            <img draggable={'false'} width={'100%'} height={139}
                 style={{objectFit: 'cover', backgroundColor: '#c3c3c3'}}
                 src={value?.image || Images.bannerImage}
                 alt="" />
            <Stack sx={{pl: 2, pr: 2, pt: 2, display: 'flex', flexDirection: 'row'}}>
              <img width={30} height={30} style={{borderRadius: '50%', objectFit: 'cover', backgroundColor: '#c3c3c3'}}
                   src={value?.profile || Images.defaultProfile}
                   alt="profile" />
              <TextField
                placeholder={'Write comment'}
                size={'small'}
                multiline
                maxRows={4}
                InputProps={{
                  style: {
                    fontSize: 12,
                    borderRadius: 25,
                  },
                }}
                fullWidth
                sx={{ml: 1}}
              />
            </Stack>
            <Typography onClick={handleComments} sx={{p: 2}} fontSize={14} className={'hand-cursor noselect'}
                        align={'right'}>
              {value?.comment}&nbsp;comments
            </Typography>
            {comments ?
              <>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#e3e3e3',
                  p: 2,
                  ml: 2,
                  mr: 2,
                  mb: 2,
                  borderRadius: 2,
                }}>
                  <img width={30} height={30} style={{borderRadius: '50%'}} src={Images.defaultProfile} alt="profile" />
                  <Stack sx={{flexDirection: 'column'}}>
                    <Typography fontSize={14} fontWeight={700} sx={{color: '#3c3c3c', ml: 1}}>Pema Dorji</Typography>
                    <Typography fontSize={13} sx={{color: '#3c3c3c', ml: 1}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda aut beatae,
                    </Typography>
                  </Stack>
                </Box>
              </> : <div />
            }
          </Card>
        ))}
      </div>
    </div>
  );
}
