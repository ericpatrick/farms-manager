import { useState } from 'react';
import { api, apiRoutes } from '../../../api/api';
import { FarmType } from '../types/Farm.type';
import { Nullable } from '../../../types/Nullable.type';

export function useDeleteFarm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Nullable<Error>>(null);
  const [farmDeleted, setFarmDeleted] = useState<Nullable<FarmType>>();

  const deleteFarm = (farmId: string) => {
    setLoading(false);
    api
      .delete<FarmType>(`${apiRoutes.farms}/${farmId}`)
      .then((response) => setFarmDeleted(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(true));
  };

  return { loading, error, farmUpdated: farmDeleted, deleteFarm };
}
