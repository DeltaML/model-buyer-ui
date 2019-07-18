import {serverProtocol, serverDomain, serverPort} from '../config/serverConfig';

function ServerException(msg) {
   this.msg = msg;
   this.name = "ServerException";
}

const executeRequest = async (httpMethod, path, requestData) => {
    const settings = {
        method: httpMethod,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
         body: JSON.stringify(requestData),
    };
    const url = `${serverProtocol}://${serverDomain}:${serverPort}/${path}`;
    const response =  await fetch(url, settings);
    if (response.ok){
        return await response.json()
    }
    throw new ServerException(response)

};


export const post = async (url, requestData) => {
    return await executeRequest("POST", url, requestData)
};

export const get = async (url) => {
    return await executeRequest("GET", url)
};
