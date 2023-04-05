// import {  newTokenMessage} from "@/assets/js/Jslib";
export default class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
        this.loader = props;
        // URL where to send files.
        this.url = process.env.API_URL+'/api/file/upload';
        // this.data=JSON.parse(localStorage.getItem('authentication'));
    }

    // Starts the upload process.
    upload() {
        console.log('upload');
        return new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject);
            this._sendRequest();
        });
    }

    // Aborts the upload process.
    abort() {
        console.log('about');
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    // Example implementation using XMLHttpRequest.
    _initRequest() {
        console.log('_initRequest');
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', this.url, true);
        // xhr.setRequestHeader('authentication',this.data.authentication);
        // xhr.setRequestHeader('refreshToken',this.data.refresh);
        xhr.withCredentials = true;
        xhr.responseType = 'json';

    }

    // Initializes XMLHttpRequest listeners.
    _initListeners(resolve, reject) {
        console.log('_initListeners');

        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = 'Couldn\'t upload file:' + ` ${loader.file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }
            /**
             * 토큰 만료시 재요청
             */
            if (false){
            // if (response.message == newTokenMessage()) {
                /**
                 * jwt 쿠키로변경
                 */
                // let headers=new Object;
                // headers.authentication=xhr.getResponseHeader('authentication');
                // headers.refreshtoken=xhr.getResponseHeader('refreshtoken');
                // setTokenByXhr(headers);
                // this.data=headers;
                this._initRequest();
                this._initListeners(resolve, reject);
                this._sendRequest();
                return;
            }
            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            resolve({
                default: response.url[0]
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    // Prepares the data and sends the request.
    _sendRequest() {
        console.log('_sendRequest');

        const data = new FormData();

        this.loader.file.then(result => {
            data.append('upload', result);
            this.xhr.send(data);
        }
        )
    }

}