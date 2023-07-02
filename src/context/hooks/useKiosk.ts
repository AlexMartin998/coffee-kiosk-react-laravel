import { useContext } from 'react';

import { KioskContext } from '..';

export const useKiosk = () => useContext(KioskContext);
