/* ==========================================================================
   #API SERVICE
========================================================================== */

/**
 * Service for connected to the Offset Earth API endpoint.
 *
 * 1. This service is designed to be a singleton. Although in this current
 *    project there really is no need for it to be, in a more complex scenario,
 *    it would make sense as we would want a "source of truth" for the
 *    authentication of users, refreshing auth tokens and any Axios instances.
 *
 * 2. We create an explicit export for testing. This allows us to mock the
 *    service. Of course this provides the developer with a back-door around
 *    the singleton, but without this export, it makes testing _extremely_
 *    difficult.
 */

import axios from 'axios';

class ApiService {
  _axios = null;

  constructor() {
    if (ApiService._instance) {
      return ApiService._instance;
    }

    this._axios = this._createAxiosInstance();
    ApiService._instance = this;
  }

  /**
   * Fetch all planted trees.
   *
   * @returns {Array}
   */
  fetchAllPlanted() {
    return this._axios.get('/trees');
  }

  _createAxiosInstance() {
    const baseUrl = 'https://api.offset.earth';

    return axios.create({ baseUrl });
  }
}

const instance = new ApiService();
const __TestApiService = ApiService; /* [2] */

Object.freeze(instance); /* [1] */

export default instance;
export { __TestApiService }; /* [2] */
