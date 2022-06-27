import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <div className="login_body">
      <div className="login_box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="imput_wrap">
            <input type="text" placeholder="Email hoặc số điện thoại" id="email" value={email} onChange={handleChangeEmail}/>
          </div>
          <div className="imput_wrap">
            <input type="password" placeholder="Mật khẩu"  id="password" value={password} onChange={handleChangePassword}/>
          </div>
          <div className="input_wrap">
            <button>Đăng nhập</button>
          </div>
          <div className="support">
            <div className="remember">
              <span>
                {" "}
                <input type="checkbox" />
              </span>
              <span>Ghi nhớ tôi</span>
            </div>
            <div className="need_help">Bạn cần trợ giúp</div>
          </div>
          <div className="invite">
            Mời bạn tham gia Neflix
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              Đăng ký ngay
            </a>
          </div>
          <div className="more">
            Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
            robot.
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              Tìm hiểu thêm.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
