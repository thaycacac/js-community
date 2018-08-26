import React, { Component } from 'react';

import './login.css';

import Facebook from './Facebook';

import logojs from '../images/logoJSColor.png';

import houseJS from '../images/houseJS.png';

import logoJSNon from '../images/logoJS.png';

export default class Login extends Component {
    render()  {
        return (
            <div className="main-body">
                <div className="intro-header">
                    
                    <p className="intro-js"><img src={logoJSNon} style={{width:'50px', margin: '3px'}}/>JS Community</p>
                    {/* <div class="link-sign-in btn-sign-in">
                        <a href="#">
                            <img src="iconFB.png" width="24px"/>
                            <span>Login with Facebook</span>
                        </a>
                    </div> */}
                    <Facebook className="link-sign-in btn-sign-in"/>
                </div>
                <div className="main-content">
                    <h1>Welcome to JS Community</h1>
                    <h3>Nơi gặp gỡ của những tâm hồn</h3>
                    <img src={logojs} width="40%" className="img-left"/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>JS Club</strong> là tên viết tắt của Japanese Software Engineers Club – Câu lạc bộ Kỹ sư phần mềm Nhật Bản. Được thành lập vào tháng 2/2014, cái tên JS được đặt theo một chuyên ngành hẹp của ngành Kỹ thuật phần mềm tại ĐH FPT. Từ những ngày đầu thành lập, JS mang sứ mạng trở thành một cộng đồng kết nối các sinh viên theo chuyên ngành hẹp JS. Sau này, câu lạc bộ được mở rộng, trở thành nơi chia sẻ kiến thức của các sinh viên YÊU THÍCH TIẾNG NHẬT và ĐAM MÊ LẬP TRÌNH. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trở thành một phần của JS Club, tôi ngẫu nhiên có một chiếc vé miễn phí tham gia các lớp học lập trình và ngôn ngữ Nhật từ cơ bản đến nâng cao với giảng viên là các anh chị thành viên của câu lạc bộ. Những con người không những giỏi về mặt chuyên môn mà còn rất yêu thương, nhiệt huyết giảng dạy nữa. Giáo trình siêu chất, do anh chị tự biên soạn, tích lũy trong quá trình học tập để giúp cho quá trình tiếp thu kiến thức của chúng tôi hiệu quả nhất có thể.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bên cạnh việc được học tập, chúng tôi được cọ sát bản thân trong các cuộc thi nội bộ Coding Project. Được tự mình làm ra sản phẩm công nghệ bằng chính những ý tưởng sáng tạo mà chúng tôi nghĩ ra. Và một điều khiến tôi yên tâm hơn nữa là chắc chắn chúng tôi sẽ có sản phẩm bởi một dàn supporter siêu giỏi, siêu chất, siêu nhiệt tình và siêu thương sót đàn em bé nhỏ. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JS Club được biết đến là một trong những câu lạc bộ học thuật hàng đầu ở xứ sở Hòa Lạc. Không quá sôi nổi như những câu lạc bộ phòng trào khác nhưng những sự kiện ở JS đều mang chất riêng, một màu sắc văn hóa không thể hòa trộn với bất kỳ câu lạc bộ nào khác. Hai sự kiện mang dấu ấn của JS đó là Coding Inspiration và FPTU Hackathon Open được tổ chức xen kẽ giữa các năm. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hòa Lạc xa xôi ấy chưa bao giờ khiến tôi cô đơn, buồn tủi, bởi tôi hiểu bên tôi còn có cả một đội quân áo đỏ, sẵn sàng bên tôi trong lúc tôi yếu lòng nhất. Là con gái JS lúc nào cũng phải ngẩng cao đầu, tự hào vì những chàng trai của chúng tôi quá ngọt ngào và lãng mạn. Những chàng hoàng tử ấy chưa bao giờ để chúng tôi phải tủi thân trong những ngày đặc biệt dành riêng cho chị em. Không quá khoa trương, màu mè nhưng lúc nào cũng đầy ấm áp và ngọt ngào. Còn con gái JS thì cũng có dành một ngày riêng trong năm để dành cho anh em. <br/>
                    </p>
                    <img src={houseJS} width="60%" className="img-right"/>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kết thúc một kỳ học vất vả, một kỳ hoạt động hiệu quả là khoảng thời gian những người con JS dành riêng cho nhau trong sự kiện Teambuilding. Tôi vẫn nghe đâu đó câu nói: “Đi đâu không quan trọng, quan trọng nơi đó có màu áo JS hay không”. Teambuilding như một món ăn tinh thần đặc biệt với những con người ấy. Là khoảng thời gian chúng tôi xích lại bên nhau, kể cho nhau nghe về những gì đã qua, tâm sự cho những gì sắp tới và hứa sẽ mãi bên nhau, cũng nhau cố gắng. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ở JS Club còn một món ăn tinh thần giúp gắn kết anh chị em trong đại gia đình chúng tôi, đó là những buổi overnight, chơi boardgame và tâm sự, san sẻ nỗi lòng. Với tôi những buổi tối như thế trở nên thật ý nghĩa, thời gian trôi qua chậm hơn, không gian tĩnh lặng. Mỗi câu nói, mỗi lời tâm sự rở nên thật chất chứa. Đó có thể chút buồn tủi của bản thân, một vài niềm vui nho nhỏ, là cả nỗi niềm trăn trở để phát triển JS, không những mạnh bên ngoài mà còn chất bên trong. <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hơn cả một câu lạc bộ, bên JS tôi có cả một vùng trời thương nhớ! Cảm ơn thanh xuân đã đưa tôi tới đây, trở thành một mảnh ghép của ngôi nhà ấy. Cảm ơn vì đã là gia đình tôi, anh em tôi, bạn bè tôi, trở thành nơi nuôi dưỡng đam mê của tôi thêm cháy rực, là động lực cho tôi vẽ thêm màu sắc cho ước mơ, cho tuổi trẻ nhiệt huyết.<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>- Linh Cancer Nguyễn </em>
                    </p>
                    
                </div>
            </div>
        )
    }
}

