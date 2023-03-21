import { getOriginDataApi } from '../api/dataApi';
import { useQuery } from '@tanstack/react-query';

export default function useSearchQuery() {
  const {
    isLoading,
    error,
    data: getData,
  } = useQuery(['data', currentPage], getOriginDataApi);

  return { getData, error, isLoading };
}
