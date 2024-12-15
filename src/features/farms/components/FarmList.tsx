import { useFarms } from '../hooks/useFarms';
import { FarmCard } from './FarmCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import { farmListContainerStyles } from './FarmList.styles';
import { useState } from 'react';
import { ConfirmationDialog } from './ConfirmationDialog';

export function FarmList() {
  const { loading: isLoading, farms } = useFarms();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddFarm = () => {
    navigate('new');
  };

  const handleDeleteCard = (info: { id: string; farmName: string }) => {
    setOpenDialog(true);
  };

  const farmList = farms.map((farm) => <FarmCard key={farm.id} {...farm} onDelete={handleDeleteCard} />);

  return (
    <Box sx={farmListContainerStyles}>
      <Button variant="contained" onClick={handleAddFarm}>
        Add Farm
      </Button>
      {isLoading ? <h2>loading</h2> : farmList}
      <ConfirmationDialog open={openDialog} />
    </Box>
  );
}
