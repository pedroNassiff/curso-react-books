import CustomAxios from './CustomAxios';

export const getInfoPlaces = () => {
    return CustomAxios.get("places/");
}