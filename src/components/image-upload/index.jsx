import React from 'react';
import Axios from 'axios';
import Socket from '../../socket.js';
import './style.scss';

function compress (file, callback) {
    // const MAX_WIDTH = 1200, MAX_HEIGHT = 900;
    let reader = new FileReader(), img = new Image();
    reader.readAsDataURL(file);
    let canvas = document.createElement('canvas'), context = canvas.getContext('2d');
    reader.onload = (e) => {
        img.src = e.target.result;
    }
    img.onload = (e) => {
        let width = img.width, height = img.height, zoomRatio = 1;
        let shortSide = Math.min(width, height);
        let longSide = Math.max(width, height);
        let scale = shortSide / longSide;
        if (scale > 0.5625 && scale <= 1) {
            if (longSide < 1664) {
                zoomRatio = 1;
            } else if (longSide >= 1664 && longSide < 4990) {
                zoomRatio = 2;
            } else if (longSide >= 4990 && longSide < 10240) {
                zoomRatio = 4;
            } else {
                zoomRatio = longSide > 1280 ? Math.floor(longSide / 1280) : 1;
            }
        } else if (scale > 0.5 && scale <= 0.5625) {
            zoomRatio = longSide > 1280 ? Math.floor(longSide / 1280) : 1;
        } else {
            zoomRatio = Math.ceil(longSide / (1280 / scale));
        }
        canvas.width = width / Math.pow(2, zoomRatio - 1);
        canvas.height = height / Math.pow(2, zoomRatio - 1);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
            callback(blob);
        }, 'image/jpeg', 0.5);
    }
}

class ImageUpload extends React.Component {
    changeHandler (e) {
        console.log(e.target.files);
        let file = e.target.files[0];
        compress(file, (img) => {
            let formData = new FormData();
            formData.append('dir', 'f2e/');
            formData.append('file', img, img.name);
            Axios({
                method: 'post',
                url: 'https://himekaidou.souche.com/upload',
                data: formData,
                timeout: 600000,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                if (res.status === 200 && res.data.success === 1) {
                    // this.props.upload(res.data.path);
                    let author = localStorage.getItem('WECHAT_NICKNAME');
                    Socket.emit('image', {author: author, image: res.data.path});
                } else {
                    throw res.data;
                }
            }).catch((err) => {
                if (err.message === 'Network Error') {
                    err.message = '网络异常';
                }
            });
        });
    }
    render () {
        return (
            <i className="iconfont iconimage wc-image-upload">
                <input type="file" accept="image/*" onChange={this.changeHandler}/>
            </i>
        )
    }
}

export default ImageUpload;