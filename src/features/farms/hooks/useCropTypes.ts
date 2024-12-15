import { apiRoutes } from '../../../api/api';
import { CropTypeType } from '../types/CropType.type';
import { useApi } from '../../../hooks/useApi';

export function useCropTypes() {
  const { loading, data, error } = useApi<CropTypeType[]>(apiRoutes.cropTypes, 'get');

  return { loading, cropTypes: data ?? [], error };
}
