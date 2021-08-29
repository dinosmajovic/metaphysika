import SyncLoader from 'react-spinners/ClipLoader';
import { colors } from 'styles';
import React from 'react';

const Loader = () => (
  <SyncLoader color={colors.pink.primary} loading={true} size={45} />
);

export default Loader;
