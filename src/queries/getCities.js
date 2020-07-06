import { toast } from 'react-toastify';
import secondaryApi from '~/services/secondaryApi';

const getCities = async (citySearchInput) => {
  try {
    const response = await secondaryApi.get('', {
      params: {
        search: citySearchInput,
        is_last: 'True',
        place_type: 'city',
      },
    });

    if (response && response.data.count === 0) {
      toast.error('Por favor, digite o nome correto do município!');
    } else {
      return response;
    }
  } catch (err) {
    toast.error('Erro ao buscar cidade, tente novamente em alguns instantes!');
    return null;
  }
};

export default getCities;
