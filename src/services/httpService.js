// prettier-ignore
const headers = {
  "Accept": "application/json",
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

function joinURL(baseUrl, url) {
  return `${baseUrl}/${url}`;
}

let API_URL = "https://node-express-copywrite.herokuapp.com";

class httpService {
  constructor() {
    this.domain = API_URL;
  }
  request(url, method = "POST", data = null) {
    url = joinURL(this.domain, url);
    const options = {
      headers,
      method,
    };
    if (data) {
      options.body = JSON.stringify({ ...data });
    }
    return fetch(url, options);
  }
  get(url, id) {
    const method = "GET";
    if (id) {
      url = `${url}/${id}`;
    }
    return this.request(url, method).then((res) => res.json());
  }
  post(url, data) {
    const method = "POST";
    return this.request(url, method, data).then((res) => res.json());
  }
}

// Example for implementation:
//const service = new httpService();
//useEffect(() => {
//  service.post("mails/johndoe@gmail.com");
//});

export default httpService;