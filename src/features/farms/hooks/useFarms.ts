import { FarmType } from '../types/Farm.type';
import { apiRoutes } from '../../../api/api';
import { useApi } from '../../../hooks/useApi';

export function useFarms() {
  const { loading, data, error, fetchReload } = useApi<FarmType[]>(apiRoutes.farms, 'get');

  return { loading, farms: data ?? [], error, farmsReload: fetchReload };
}
