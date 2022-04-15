/**
 *
 * Util to request data from api and sent back a consistent response.
 *
 */
import getEndpointUrl from './getEndpointUrl';

import type { Types, FetchType } from '../../types/fetch';

export default function Fetch<T extends keyof Types>(
  type: T,
  parameters?: FetchType[T]['parameters']
) {
  return new Promise<FetchType[T]['reponseType'] | boolean>((resolve) => {
    const params: RequestInit = {
      method: 'GET',
    };

    //Setting response headers
    //TODO: Set additional response headers where needed
    if (parameters && parameters.body) {
      params.method = 'POST';
      params.headers = {
        'Content-Type': 'application/json',
      };
      params.body = JSON.stringify(parameters && parameters.body);
    }

    //getEndpointUrl is a function that fetches the endpoints and pastes
    //urlParameters behind them where needed
    fetch(getEndpointUrl(type, parameters && parameters.urlParameters), params)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.error) {
          resolve(data);
        }
        resolve(false);
      })
      .catch((e) => {
        resolve(false);
      });
  });
}
