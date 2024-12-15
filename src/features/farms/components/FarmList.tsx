import { useFarms } from '../hooks/useFarms';
import { FarmCard } from './FarmCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import { farmListContainerStyles } from './FarmList.styles';
import { useState } from 'react';
import { FarmDeleteConfirmation } from './FarmDeleteConfirmation';
import { FarmType } from '../types/Farm.type';
import { useNotifications } from '../../../hooks/useNotifications';

export function FarmList() {
  const { loading: isLoading, farms, farmsReload } = useFarms();
  const navigate = useNavigate();
  const [farmToDelete, setFarmToDelete] = useState<FarmType | undefined>(undefined);
  const { showNotification } = useNotifications();

  const handleAddFarm = () => {
    navigate('new');
  };

  const handleDeleteCard = (farm: FarmType) => {
    setFarmToDelete(farm);
  };

  const handleConfirmation = (confirmed: boolean) => {
    setFarmToDelete(undefined);
    if (confirmed) {
      farmsReload();
      showNotification('Farm removed with success!');
    }
  };

  const farmList = farms.map((farm) => <FarmCard key={farm.id} farm={farm} onDelete={handleDeleteCard} />);

  return (
    <Box sx={farmListContainerStyles}>
      <Button variant="contained" onClick={handleAddFarm}>
        Add Farm
      </Button>
      {isLoading ? <h2>loading</h2> : farmList}
      <FarmDeleteConfirmation farm={farmToDelete} onConfirmation={handleConfirmation} />
    </Box>
  );
}
