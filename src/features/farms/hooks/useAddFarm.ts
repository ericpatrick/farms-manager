import { apiRoutes } from '../../../api/api';
import { FarmType } from '../types/Farm.type';
import { Nullable } from '../../../types/Nullable.type';
import { useLazyApi } from '../../../hooks/useLazyApi';

export function useAddFarm() {
  const { loading, data, error, fetchData } = useLazyApi<Nullable<FarmType>>(apiRoutes.farms, 'post');

  return { loading, error, farmUpdated: data, addFarm: fetchData };
}
