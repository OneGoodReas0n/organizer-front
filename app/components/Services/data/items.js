import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';

// SVGs
import MusicIcon from '../assets/compact-disc.svg';
import CameraIcon from '../assets/photo-camera.svg';
import FoodIcon from '../assets/burger.svg';
import CarIcon from '../assets/car.svg';
import EntertainmentIcon from '../assets/employee.svg';
import WaiterIcon from '../assets/waiter.svg';

const items = [
  {
    id: 1,
    title: <FormattedMessage {...messages.MusicText} />,
    icon: <MusicIcon />,
  },
  {
    id: 2,
    title: <FormattedMessage {...messages.CameraText} />,
    icon: <CameraIcon />,
  },
  {
    id: 3,
    title: <FormattedMessage {...messages.FoodText} />,
    icon: <FoodIcon />,
  },
  {
    id: 4,
    title: <FormattedMessage {...messages.LogisticText} />,
    icon: <CarIcon />,
  },
  {
    id: 5,
    title: <FormattedMessage {...messages.EntertainText} />,
    icon: <EntertainmentIcon />,
  },
  {
    id: 6,
    title: <FormattedMessage {...messages.WaitorText} />,
    icon: <WaiterIcon />,
  },
];

export default items;
