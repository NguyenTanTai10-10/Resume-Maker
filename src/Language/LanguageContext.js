import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  vn: {
    translation: {
      //===== Header===
      "Sửa" : "Sửa" ,
      //=====Login===
      "Tên đăng nhập": "Tên đăng nhập hoặc Email",
      "Mật khẩu": "Mật khẩu",
      "Ghi nhớ": "Ghi nhớ mật khẩu",
      "Đăng nhập": "Đăng nhập",
      "Quên mật khẩu": "Quên mật khẩu",
      "Đăng kí": "Đăng kí",
      //=====Home===
      "Trang chủ": "Trang chủ",
      "Xin đi trễ": "Xin đi trễ",
      "Bạn chưa checkin": "Bạn chưa Check In",
      "Bạn chưa checkout": "Bạn chưa Check Out",
      "Thành công checkin": "Check In thành công",
      "Thành công checkout": "Check Out thành công",
      "Xin về sớm": "Xin về sớm",
    //=====Attendance===
    "Ngày tháng" :"Ngày tháng",
    "Thời gian" :"Thời gian",
    "Trạng thái":"Trạng thái",
    "Điểm danh": "Điểm danh",
    "Đúng giờ" :"Đúng giờ",
    "Trễ giờ":"Trễ giờ",
    "Đến sớm": "Đến sớm",
    
    //=====Member===
    "Tìm kiếm tên ...":"Tìm kiếm tên...",
    "Thành viên": "Thành viên",
    //=====permission===
    "Đồng ý" : "Đồng ý",
    "Chờ đợi" : "Chờ đợi",
    "Từ chối":"Từ chối",
    "Thời gian đăng ký" : "Thời gian đăng ký",
    "Thời gian yêu cầu":"Thời gian yêu cầu",
    "Xin phép": "Xin phép",
    //=====Drawer===
    "Thông tin cá nhân": "Thông tin cá nhân",
    "Đổi mật khẩu": "Đổi mật khẩu",
    "Thông tin chi tiết": "Thông tin chi tiết",
    "Hướng dẫn sử dụng": "Hướng dẫn sử dụng",
    "Cài đặt": "Cài đặt",
    "Đăng xuất": "Đăng xuất",
    //=====Language===
    "Chọn ngôn ngữ" : "Chọn ngôn ngữ",
    "Ngôn ngữ": "Ngôn ngữ",
    "Thay đổi ngôn ngữ": "Thay đổi ngôn ngữ",
    //=====Add permission===
    "Thêm yêu cầu" : "Thêm yêu cầu" ,
    "Yêu cầu" : "Yêu cầu" ,
    "Dạng yêu cầu" : "Dạng yêu cầu",
    "Ghi chú":"Ghi chú",
    "Số ngày" : "Số ngày",
    "Chọn thời gian" : "Chọn thời gian",
    "Chọn buổi" : "Chọn buổi",
    "Ngày bắt đầu" : "Ngày bắt đầu",
    "Chọn ngày bắt đầu" : "Chọn ngày bắt đầu",
    "Ngày kết thúc" : "Ngày kết thúc",
    "Chọn ngày kết thúc" : "Chọn ngày kết thúc",
    "Thời gian bắt đầu" : "Thời gian bắt đầu",
    "Chọn thời gian bắt đầu" : "Chọn thời gian bắt đầu",
    "Thời gian kết thúc" : "Thời gian kết thúc",
    "Chọn thời gian kết thúc" : "Chọn thời gian kết thúc",
    "Thời gian":"Thời gian",
    "Thời gian (giờ,phút)":"Thời gian (giờ,phút)",
    "Yêu cầu chưa thanh toán":"Yêu cầu chưa thanh toán",
    "Nghỉ chính thức":"Nghỉ chính thức",
    "Tăng ca":"Tăng ca",
    "Đến trễ":"Đến trễ",
    "Về sớm":"Về sớm",
    "XÁC NHẬN" :"XÁC NHẬN",
    //=====Changepassword===
    "Thay đổi mật khẩu" :"Thay đổi mật khẩu",
    "Mật khẩu hiện tại": "Mật khẩu hiện tại",
    "Mật khẩu mới": "Mật khẩu mới",
    "Nhập lại mật khẩu" : "Nhập lại mật khẩu" ,
    //=====InforPerson===
    "Thông tin cá nhân": "Thông tin cá nhân",
    "Sửa thông tin cá nhân":"Sửa thông tin cá nhân",
    "Họ và tên" :"Họ và tên",
    "Ngày sinh": "Ngày sinh",
    "Email": "Email",
    "Số điện thoại" : "Số điện thoại",
    "Nghề nghiệp" : "Nghề nghiệp" ,
    //=====Forgot password===
    "Quên mật khẩu" :"Quên mật khẩu",
    "Thay đổi" :"Thay đổi",
    "Chỉ người dùng được mời mới có thể sử dụng ứng dụng này. Vui lòng vào trang dịch vụ tạo tài khoản. Bấm vào đây" :"Chỉ người dùng được mời mới có thể sử dụng ứng dụng này. Vui lòng vào trang dịch vụ tạo tài khoản. Bấm vào đây",
    //=====Detail Member======
    "Detail Member":"Chi tiết thành viên",
    "Họ và tên" :"Họ và tên",
    "Ngày sinh": "Ngày sinh",
    "Email": "Email",
    "Số điện thoại" : "Phone",
    //=====BottomSheetPhoto========
    "Take Photo" : "Chụp ảnh",
    "Choose From Library":"Thư viện"
    

    

   



      
      
    }
  },
  en: {
    translation: {
      //===== Header===
      "Sửa" : "Edit" ,
      //=====Login===
      "Tên đăng nhập": "User name or Email",
      "Mật khẩu": "Password",
      "Ghi nhớ": "Remember password",
      "Đăng nhập": "Sign In",
      "Quên mật khẩu": "Forgot password",
      "Đăng kí": "Sign Up",
      //=====Home===
      "Trang chủ": "Home",
      "Xin đi trễ": "Request to go late",
      "Xin về sớm": "Request to go soon",
      "Bạn chưa checkin": "You are not Check In",
      "Bạn chưa checkout": "You are not Check Out",
      "Thành công checkin": "Check In Successed",
      "Thành công checkout": "Check Out Successed",
      //=====Attendance===
      "Ngày tháng" :"Date",
    "Thời gian" :"Time",
    "Trạng thái":"Status",
    "Điểm danh": "Attendance",
    "Đúng giờ" :"Ontime",
    "Trễ giờ":"Late",
    "Đến sớm": "Early",
    //=====Member===
    "Tìm kiếm tên ...":"Search name...",
    "Thành viên": "Member",
    //=====Permission===
    // approved
    "Đồng ý" : "Approved",
    "Chờ đợi" : "Waitting",
    "Từ chối":"Decline",
    "Thời gian đăng ký" : "Time apply",
    "Thời gian yêu cầu":"Time requiest",
    "Xin phép": "Permission",
    //=====Drawer===
    "Thông tin cá nhân": "Information person",
    "Đổi mật khẩu": "Change password",
    "Thông tin chi tiết": "Details",
    "Hướng dẫn sử dụng": "User manual",
    "Cài đặt": "Setting",
    "Đăng xuất": "Log out",
     //=====Language===
     "Chọn ngôn ngữ" : "Choose language",
     "Ngôn ngữ": "Language",
     "Thay đổi ngôn ngữ": "Change language",
     //=====Add permission===
    "Thêm yêu cầu" : "Add requiest" ,
    "Yêu cầu" : "Requiest" ,
    "Dạng yêu cầu" : "Type requiest",
    "Ghi chú":"Note",
    "Số ngày" : "Total day",
    "Chọn thời gian" : "Choose time",
    "Chọn buổi" : "Choose session",
    "Ngày bắt đầu" : "Day start",
    "Chọn ngày bắt đầu" : "Choose day start",
    "Ngày kết thúc" : "Day end",
    "Chọn ngày kết thúc" : "Choose day end",
    "Thời gian bắt đầu" : "Time start",
    "Chọn thời gian bắt đầu" : "Choose time start",
    "Thời gian kết thúc" : "Time end",
    "Chọn thời gian kết thúc" : "Choose time end",
    "Thời gian":"Time",
    "Thời gian (giờ,phút)":"Time (hour,minute)",
    "Yêu cầu chưa thanh toán":"Unpaid request",
    "Nghỉ chính thức":"Official leave",
    "Tăng ca":"OT",
    "Đến trễ":"Late",
    "Về sớm":"Soon",
    "XÁC NHẬN" :"SUBMIT",
    //=====Changepassword===
    "Thay đổi mật khẩu" :"Change password",
    "Mật khẩu hiện tại": "Password",
    "Mật khẩu mới": "New password",
    "Nhập lại mật khẩu" : 'Confirm password',
    //=====InforPerson===
    "Thông tin cá nhân": "Personal information",
    "Sửa thông tin cá nhân": "Update personal information",
    "Họ và tên" :"Name",
    "Ngày sinh": "Birthday",
    "Email": "Email",
    "Số điện thoại" : "Phone",
    "Nghề nghiệp" : "Position" ,
    //=====Forgot password===
    "Quên mật khẩu" :"Forgot password",
    "Thay đổi" :"Update",
    "Chỉ người dùng được mời mới có thể sử dụng ứng dụng này. Vui lòng vào trang dịch vụ tạo tài khoản. Bấm vào đây" : "Only invited user can use this app. Please go to service page create account .  Click here",
    //=====Detail Member======
    "Detail Member":"Detail Member",
    "Họ và tên" :"Name",
    "Ngày sinh": "Birthday",
    "Email": "Email",
    "Số điện thoại" : "Phone",
    //=====BottomSheetPhoto========
    "Take Photo" : "Take Photo",
    "Choose From Library":"Choose From Library"



      
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;