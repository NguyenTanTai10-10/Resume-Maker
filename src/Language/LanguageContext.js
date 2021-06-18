import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  vn: {
    translation: {
      //================================================
      'Tiếp tục' : 'Tiếp tục', 
      "Trở lại" :'Trở lại',
      'Cập nhập' :'Cập nhập',
      'Cập nhật thông tin thành công':'Cập nhật thông tin thành công',
      'Thông báo':'Thông báo',
      'Cập nhật không thành công' : 'Cập nhật không thành công',
      'Đăng nhập thành công':'Đăng nhập thành công',
      'Đăng nhập thất bại':'Đăng nhập thất bại',
      'Lối sever':'Lối sever',
      'Đăng ký hoàn tất':'Đăng ký hoàn tất',
      'Email này đã tồn tại':'Email này đã tồn tại',
      'email có thể dùng':'email có thể dùng',
      'email đã được đăng ký':'email đã được đăng ký',
      'Lưu ý':'Lưu ý',
      'Bạn phải nhập đầy đủ thông tin đăng nhập':'Bạn phải nhập đầy đủ thông tin đăng nhập',
      'Lưu mật khẩu':'Lưu mật khẩu',
      'Xóa Thành Công':'Xóa Thành Công',
      'Thêm Thành Công':'Thêm Thành Công',
      'Sửa Thành Công' : 'Sửa Thành Công',
      "Trang chủ":"Trang chủ",
      //================HOME============================
      'Mức độ hoàn thiện CiVi': 'Mức độ hoàn thiện CiVi',
      'Liên kết của bạn' : 'Liên kết của bạn',
      "Tiêu đề Civi" : "Tiêu đề Civi",
      'Thông tin liên lạc' : 'Thông tin liên lạc',
      'Thông tin xin việc' : 'Thông tin xin việc',
      'Ngôn ngữ':'Ngôn ngữ',
      'Trình độ học vấn':'Trình độ học vấn',
      'Kinh nghiệm làm việc':'Kinh nghiệm làm việc',
      'Kỹ năng':'Kỹ năng',
      'Xuất PDF':'Xuất PDF',
      //================Login============================
      'Đăng nhập Facebook' : 'Đăng nhập Facebook',
      'Đăng nhập Google' : 'Đăng nhập Google',
      'Đăng nhập Apple' : 'Đăng nhập Apple',
      'Bạn là thành viên? Đăng nhập':'Bạn là thành viên? Đăng nhập',
      //================Drawer============================
      'Cài đặt tài khoản' :'Cài đặt tài khoản',
      'Thay đổi thông tin': 'Thay đổi thông tin',
      'Thay đổi mật khẩu':'Thay đổi mật khẩu',
      'Cài đặt':'Cài đặt',
      'Đánh giá':'Đánh giá',
      'Phản hồi':'Phản hồi',
      'Chính sách bảo mật':'Chính sách bảo mật',
      'Điều khoàn và điều kiện':'Điều khoàn và điều kiện',
      'Đăng xuất':'Đăng xuất',
      //================LoginHome============================
      'Đăng nhập':'Đăng nhập',
      'Mật khẩu' :'Mật khẩu',
      'Tạo tài khoản':'Tạo tài khoản',
      'Quên mật khẩu':'Quên mật khẩu',
      //================ResumeTitle============================
      "Tiêu đề" : "Tiêu đề",
      "Vui lòng nhập tiêu đề của bạn":"Vui lòng nhập tiêu đề của bạn",
      //================Contact============================
      "Thông tin liên hệ" : "Thông tin liên hệ",
      "Tỉnh/thành phố" :"Tỉnh/thành phố",
      "Ngày sinh" :"Ngày sinh",
      "Vui lòng nhập đầy đủ họ và tên của bạn":"Vui lòng nhập đầy đủ họ và tên của bạn",
      "Vui lòng chọn ngày sinh của bạn" :"Vui lòng chọn ngày sinh của bạn",
      "Vui lòng nhập Email của bạn":"Vui lòng nhập Email của bạn",
      "Vui lòng nhập Email đúng định dạng":"Vui lòng nhập Email đúng định dạng",
      "Vui lòng nhập số điện thoại":"Vui lòng nhập số điện thoại",
      "Vui lòng nhập số điện thoại hợp lệ":"Vui lòng nhập số điện thoại hợp lệ",
      "Vui lòng chọn tỉnh thành phố":"Vui lòng chọn tỉnh thành phố",
      "Vui lòng chọn địa chỉ":"Vui lòng chọn địa chỉ",
      "Chọn tỉnh thành":"Chọn tỉnh thành",
      "Thêm ảnh":"Thêm ảnh",
      "Địa chỉ":"Địa chỉ",
      "Họ và tên":"Họ và tên",
      "Nam":"Nam",
      "Nữ":"Nữ",
      "Chụp ảnh":"Chụp ảnh",
      "Thư viện ảnh":"Thư viện ảnh",
      "Mật khẩu hơn 4 kí tự trở lên":"Mật khẩu hơn 4 kí tự trở lên",
      "Vui lòng nhập mật khẩu của bạn":"Vui lòng nhập mật khẩu của bạn",
      
      //================Basic============================
     "Lĩnh vực" :"Lĩnh vực",
     "Vui lòng chọn lĩnh vực":"Vui lòng chọn lĩnh vực",
     "Vị trí":"Vị trí",
     "Lương hiện tại":"Lương hiện tại",
     "Không hiển thị":"Không hiển thị",
     "Vui lòng nhập lương hiện tại":"Vui lòng nhập lương hiện tại",
     "Vui lòng nhập lương mong muốn":"Vui lòng nhập lương mong muốn",
     "Lương mong muốn":"Lương mong muốn",
     "Thỏa thuận":"Thỏa thuận",
     "Vui lòng chọn vị trí":"Vui lòng chọn vị trí",
     "Vui lòng chọn khu vực":"Vui lòng chọn khu vực",
     "Khu vực bạn muốn":"Khu vực bạn muốn",
     "Chọn lĩnh vực":"Chọn lĩnh vực",
     "Chọn vị trí":"Chọn vị trí",
     "Chọn khu vực":"Chọn khu vực",
     "Vui lòng chọn một mẫu CV để xuất":"Vui lòng chọn một mẫu CV để xuất",
     "Cơ bản":"Cơ bản"



      
      



      
      
    },
  },
  en: {
    translation: {
      //================================================
      'Tiếp tục' : 'Continue',
      'Trở lại' : 'Back',
      'Cập nhập' :'Update',
      'Cập nhật thông tin thành công':'Successfully updated',
      'Thông báo' : 'Notification',
      'Cập nhật không thành công': "Update failed",
      'Đăng nhập thành công':'Logged in successfully',
      'Đăng nhập thất bại':'Login failed',
      'Lối sever':'Erorr sever',
      'Đăng ký hoàn tất':'Registration is complete',
      'Email này đã tồn tại':'This email already exists',
      'email có thể dùng':'email can be used',
      'email đã được đăng ký':'The Email was registered',
      'Lưu ý':'Note',
      'Bạn phải nhập đầy đủ thông tin đăng nhập':'You must enter full login information',
      'Lưu mật khẩu':'Save Password',
      'Sửa Thành Công':'Successfully Edited',
      'Thêm Thành Công' :'Successfully Added',
      'Xóa Thành Công':'Successfully Deleted',
      "Trang chủ":"Home",

      //================HOME============================
      'Mức độ hoàn thiện CiVi': 'Level of perfection Civi',
      'Liên kết của bạn' : 'Your link',
      "Tiêu đề Civi" : "Resume title",
      'Thông tin liên lạc' : 'Contact information',
      'Thông tin xin việc' : 'Job application information',
      'Ngôn ngữ':'Language',
      'Trình độ học vấn':'Education',
      'Kinh nghiệm làm việc':'Work experience',
      'Kỹ năng':'Skills',
      'Xuất PDF':'Export PDF',
      //================Login============================
      'Đăng nhập Facebook' : 'Sign in with Facebook',
      'Đăng nhập Google' : 'Sign in with Google',
      'Đăng nhập Apple' : 'Sign in with Apple',
      'Bạn là thành viên? Đăng nhập':'Already a member? Login',
      //================Drawer============================
      "Cài đặt tài khoản":'Account settings',
      'Thay đổi thông tin':'Edit information',
      'Thay đổi mật khẩu':'Change password',
      'Cài đặt': 'Setting',
      'Đánh giá':'Rate',
      'Phản hồi':'Feedback',
      'Chính sách bảo mật':'Privacy policy',
      'Điều khoàn và điều kiện':'Terms and conditions',
      'Đăng xuất':'Logout',
      //================LoginHome============================
      'Đăng nhập':'Login',
      'Mật khẩu':'Password',
      'Tạo tài khoản':'Create a new account',
      'Quên mật khẩu':'Forget password',
      //================ResumeTitle============================
      "Tiêu đề" : "Title",
      "Vui lòng nhập tiêu đề của bạn":"Please enter your title",
      //================Contact============================
      "Thông tin liên hệ" : "Contact infomation",
      "Tỉnh/thành phố" :"Province/city",
      "Ngày sinh" :"Birthday",
      "Vui lòng nhập đầy đủ họ và tên của bạn":"Please enter your full name",
      "Vui lòng chọn ngày sinh của bạn" :"Please select your date of birth",
      "Vui lòng nhập Email của bạn":"Please enter your email",
      "Vui lòng nhập Email đúng định dạng":"Please enter Email in correct format",
      "Vui lòng nhập số điện thoại":"Please enter the phone number",
      "Vui lòng nhập số điện thoại hợp lệ":"Please enter a valid phone number",
      "Vui lòng chọn tỉnh thành phố":"Please select city or province",
      "Vui lòng chọn địa chỉ":"Please select the address",
      "Chọn tỉnh thành":"Choose a province",
      "Thêm ảnh":"More photos",
      "Địa chỉ":"Adress",
      "Họ và tên":"Full name",
      "Nam":"Male",
      "Nữ":"Female",
      "Chụp ảnh":"Take a photo",
      "Thư viện ảnh":"Photo library",
      "Mật khẩu hơn 4 kí tự trở lên":'Password more than 4 characters',
      "Vui lòng nhập mật khẩu của bạn":"Please enter your password",
      //================Basic============================
      "Lĩnh vực" :"Field ",
      "Vui lòng chọn lĩnh vực":"Please select field",
      "Vị trí":"Location",
      "Lương hiện tại":"Current salary",
      "Không hiển thị":"Not displayed",
      'Vui lòng nhập lương hiện tại':'Please enter your current salary',
      "Vui lòng nhập lương mong muốn":'Please enter desired salary',
      "Lương mong muốn":"Desired salary",
      "Thỏa thuận":"Agree",
      "Vui lòng chọn vị trí":"Please select location",
      "Vui lòng chọn khu vực":"Please select region",
       "Khu vực bạn muốn":"Region you want",
       "Chọn lĩnh vực":"Choose field",
     "Chọn vị trí":"Choose location",
     "Chọn khu vực":"Choose region",
     "Vui lòng chọn một mẫu CV để xuất":"Please select a CV form to export",
     "Cơ bản":'Basic'
      



    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;



