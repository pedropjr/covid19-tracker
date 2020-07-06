export function getCountryInfoRequest(name) {
  return {
    type: '@application/COUNTRY_REQUEST',
    payload: { name },
  };
}

export function getCountryInfoSuccess(data) {
  return {
    type: '@application/COUNTRY_SUCCESS',
    payload: { data },
  };
}

export function getBrazilInfoRequest() {
  return {
    type: '@application/BRAZIL_REQUEST',
  };
}

export function getBrazilInfoSuccess(data) {
  return {
    type: '@application/BRAZIL_SUCCESS',
    payload: { data },
  };
}

export function getWorldInfoRequest() {
  return {
    type: '@application/WORLD_REQUEST',
  };
}

export function getWorldInfoSuccess(data) {
  return {
    type: '@application/WORLD_SUCCESS',
    payload: { data },
  };
}

export function setCountrySearchInput(countrySearchInput) {
  return {
    type: '@application/SET_COUNTRY_INPUT',
    payload: { countrySearchInput },
  };
}

export function setCitySearchInput(citySearchInput) {
  return {
    type: '@application/SET_CITY_INPUT',
    payload: { citySearchInput },
  };
}
