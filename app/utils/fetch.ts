/**
 *
 * Util to request data from api and sent back a consistent response.
 *
 */
type LoaderData = {
  data: any;
};

type FetchError = {
  error: string;
  status: number;
};

export default (url: string, body: object | boolean = false, auth: string | boolean = false) => {
  return new Promise<LoaderData | FetchError | boolean>((resolve) => {
    const params: RequestInit = {
      method: 'GET',
    };

    if (body) {
      params.method = 'POST';
      params.headers = {
        'Content-Type': 'application/json',
      };
      params.body = JSON.stringify(body);
    }

    //Set all needed headers and response options in this or seperate util
    //response util should contain response statusses, correct headers for different responses.

    fetch(url, params)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          resolve(data as LoaderData);
        }
        resolve(data as FetchError);
      })
      .catch((e) => {
        resolve(false);
      });
  });
};
