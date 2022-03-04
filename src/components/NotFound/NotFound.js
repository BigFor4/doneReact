import { Component } from 'react';
import './NotFound.css'
class NotFound extends Component {
    render(){
        return (
            <div className="body-pagenotfount">
                <div className="noise" />
                <div className="overlay" />
                <div className="terminal">
                <h1>Error <span className="errorcode">404</span></h1>
                <p className="output">Bạn Đã Nhập Sai Thông Tin Tài Khoản Hoặc Mật Khẩu Không Trùng Khớp Hoặc Tài Khoản Đã Có</p>
                <p className="output">Vui Lòng Quay Lại</p>
                <p className="output">Chúc May Mắn.</p>
                </div>
            </div>
        );
    }
}

export default NotFound;
