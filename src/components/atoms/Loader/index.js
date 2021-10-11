import SyncLoader from 'react-spinners/ClipLoader';
import { colors } from 'styles';
import React from 'react';

const Loader = ({ size = 45 }) => (
  <SyncLoader color={colors.pink.primary} loading={true} size={size} />
);

export default Loader;
