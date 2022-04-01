import type { Types, FetchType } from '../../types/fetch';

import endpoints from './endpoints.json';

//This function fetches correct endpoints that corresponds to the given type
export default function getEndpointUrl<T extends keyof Types>(
  type: T,
  params: FetchType[T]['parameters']['urlParameters']
): string {
  //turns params into string so dynamic url parameters can be used
  const parameters = params as object;
  const paramsToString =
    parameters &&
    Object.keys(parameters).map((item: string) => {
      return `/${params[item]}`;
    });

  //Paste params behind original endpoint if theyre there
  if (paramsToString) {
    return `${endpoints[type]}${paramsToString}`;
  }

  //return correct endpoint that corresponds to type
  return endpoints[type];
}
