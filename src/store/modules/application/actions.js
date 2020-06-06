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