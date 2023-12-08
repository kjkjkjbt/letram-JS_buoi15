// ------QUẢN LÝ TUYỂN SINH--------------

/* INPUT: 
-ĐIỂM 3 MÔN (x,y,x)
- ĐIỂM TỔNG KẾT 
-ĐIỂM ƯU TIÊN THEO KHU VỰC, THEO ĐỐI TƯỢNG
+ khu vực A: 2
+ B: 1 
+ C : 0.5 
-----------------
+ đối tượng 1 : 2.5
+2 : 1.5
+3 : 1 

- ĐIỂM CHUẨN

* PROCESS:
- tinh điểm tổng kết của 3 môn x+y+z
- điểm tổng kết = x+y+z+ ưu tiên 
- ưu tiên ( khu vực, đối tượng)

* output:
- nhập điểm 3 môn
- nhập x -> ko phải ưu tiên
-nhập 0 -> ko phải đối tượng ưu tiên
- đậu hay rớt ?? 
- tổng điểm đạt đc

- hiển thị kết quả ra màn hình
*/

function checkResult() {
    // Lấy giá trị nhập vào từ form
    var diemChuan = parseFloat(document.getElementById("diemChuan").value);
    var diemToan = parseFloat(document.getElementById("diemToan").value);
    var diemLy = parseFloat(document.getElementById("diemLy").value);
    var diemHoa = parseFloat(document.getElementById("diemHoa").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = parseInt(document.getElementById("doiTuong").value);

    // Tính điểm ưu tiên theo khu vực
    var diemKhuVuc = 0;
    if (khuVuc == "A") {
        diemKhuVuc = 2;
    } else if (khuVuc == "B") {
        diemKhuVuc = 1;
    } else if (khuVuc == "C") {
        diemKhuVuc = 0.5;
    }

    // Tính điểm ưu tiên theo đối tượng
    var diemDoiTuong = 0;
    if (doiTuong == 1) {
        diemDoiTuong = 2.5;
    } else if (doiTuong == 2) {
        diemDoiTuong = 1.5;
    } else if (doiTuong == 3) {
        diemDoiTuong = 1;
    }

    // Tính điểm tổng kết
    var diemTongKet = diemToan + diemLy + diemHoa + diemKhuVuc + diemDoiTuong;

    // Kiểm tra điều kiện trúng tuyển
    var ketQua = "";
    if (diemTongKet >= diemChuan && diemToan > 0 && diemLy > 0 && diemHoa > 0) {
        ketQua = "Đậu";
    } else {
        ketQua = "Rớt";
    }

    // Hiển thị kết quả ra màn hình
    document.getElementById("ketQua").innerHTML = "Kết quả: " + ketQua;
    document.getElementById("diemTongKet").innerHTML = "Điểm tổng kết: " + diemTongKet;
} ;

//-------------- BÀI TẬP: TÍNH TIÊN ĐIỆN--------------

/* INPUT: -TÊN
- SỐ KW TIÊU THỤ
-500KW ĐẦU: 500 Đ/ KW (price 1)
-50KW KẾ :650Đ/KW  ( price 2)
-100KW KẾ :850 Đ/KW  (price 3)
-150KW KẾ :1100Đ/KW  (price 4)
-CÒN LẠI: 1300Đ/ KW  (price 5)

PROCESS: CÁCH TÍNH TIỀN ĐIỆN:
- Nhập số kw của bạn
- Sau đó :
1/ if dùng điện < = 500kw 
-> giá= kw * price 1
2/ if dùng điện <= 550 kw
-> giá = 500 * price 1 + [(kw - 500) * price 2 ];
3/ if dùng điện <=650 kw ( 551 -650)
-> giá: money = 500 * price 1 + 50 * price 2 + (kw - 550) * price3
4/ if kw khoảng từ 651 đến 800
-> giá = 500 * price1 + 50 * price2 + 100 * price3 + (kw - 650) * price4

5/  if dùng kw > 800
-> giá = 500 * price1 + 50 * price2 + 100 * price3 + 150 * price4 + (kw - 800) * price 5;




Output: tính + xuất tiền trả
-đưa lên giao diện, hiển thị kết quả ra màn hình */



// Hàm tính tiền điện
function calculate() {
    // Lấy giá trị nhập vào từ người dùng
    var name = document.getElementById("name").value;
    var kw = Number(document.getElementById("kw").value);

    // Kiểm tra giá trị nhập vào có hợp lệ không
    if (name == "" || kw <= 0) {
      alert("please check your full name and electric usage");
      return;
    }

    // Khai báo các biến để lưu trữ các mức giá
    var price1 = 500; 
    var price2 = 650; 
    var price3 = 850; 
    var price4 = 1100; 
    var price5 = 1300; // Giá cho phần còn lại

    // Khai báo biến để lưu trữ tiền điện
    var money = 0;

    // Sử dụng IF  để xác định mức giá phù hợp

    // KW đầu 
    if (kw <= 500) {
      money = kw * price1;
    } else if (kw <= 550) {
      // KW -> 501 đến 550
      money = 500 * price1 + (kw - 500) * price2;
    } else if (kw <= 650) {
      // KW -> 551 đến 650
      money = 500 * price1 + 50 * price2 + (kw - 550) * price3;
    } else if (kw <= 800) {
      // KW -> 651 đến 800
      money = 500 * price1 + 50 * price2 + 100 * price3 + (kw - 650) * price4;
    } else {
      // kw> 800
      money = 500 * price1 + 50 * price2 + 100 * price3 + 150 * price4 + (kw - 800) * price5;
    }

    // Hiển thị kết quả trên màn hình
    document.getElementById("result").value = name + " phải trả " + money + " đồng tiền điện";
};

// ----------BÀI TẬP: THUẾ THU NHẬP CÁ NHÂN----

/*  INPUT:
- nhập họ tên
-nhập thu nhập
-nhập số ng phụ thuộc

PROCESS:
thu nhập chịu thuế= tổng thu nhập năm -4tr- số người phụ thuộc *1.6tr 

thu nhập chịu thuế (triệu) 

1/ đến 60 -> thuế suất 5%                  (RATE 1)
2/ trên 60 đến 120 triệu -> thuế suất 10%  (RATE 2)
3/ trên 120 đến 210 triệu -> thuế suất 15% (RATE 3)
4/ trên 210 đến 384 triệu -> thuế suất 20% (RATE 4)
5/ trên 384 đến 624 triệu -> thuế suất 25% (RATE 5)
6/ trên 624 đến 960 triệu -> thuế suất 30%  (RATE 6)
7/ trên 960 triệu -> thuế suất 35%         (RATE 7)

OUTPUT:
-tính và trả kết quả
-hiển thị kết quả trên màn hình 
*/
document.getElementById("btn1").onclick = calculateTax;

function calculateTax() {
    var soNguoiPhuThuoc = parseFloat(document.getElementById('soNguoiPhuThuoc').value) || 0;
    var TongThuNhap = parseFloat(document.getElementById('soTienTongThuNhap').value) || 0;
    var thuNhapChiuThue = TongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
    var thueSuat = calculateThueSuat(thuNhapChiuThue);
    var tienThuePhaiNop = thuNhapChiuThue * thueSuat / 100;

    console.log(tienThuePhaiNop);
    console.log(soNguoiPhuThuoc);
    console.log(TongThuNhap);
    console.log(thuNhapChiuThue);

    function calculateThueSuat(thuNhapChiuThue) {
        if (thuNhapChiuThue <= 60) {
            return 5;
        } else if (thuNhapChiuThue <= 120) {
            return 10;
        } else if (thuNhapChiuThue <= 210) {
            return 15;
        } else if (thuNhapChiuThue <= 384) {
            return 20;
        } else if (thuNhapChiuThue <= 624) {
            return 25;
        } else if (thuNhapChiuThue <= 960) {
            return 30;
        } else {
            return 35;
        }
    }
    document.getElementById('kq3').innerHTML = tienThuePhaiNop.toLocaleString(
        "it-IT",
        {
            style: "currency",
            currency: "VND",
        }
    );
};



// bài tập: TÍNH TIỀN CAP 

document.getElementById ('btn4').onlick = tinhHd () 
function showketnoi () {
  var loai_kh = document.getElementById('loai_kh').value ;
  if (loai_kh== "nha_dan"  ) {
    document.getElementById ('soKetNoi').style.display='none';
    document.getElementById ('soKetnoi').style.display ='none';
  } else if (loai_kh== 'doanh_nghiep') {
    document.getElementById('soKetNoi').style.display ='block';
    document.getElementById ('soKetNoi').style.display ='block';
  }
}

function tinhHd () {
  var loai_kh= document.getElementById ('loai_kh').value;
  var soketNoi =0;
  if (loai_kh== "doanh_nghiep") {
    soKetNoi = parseInt (document.getElementById('soKetNoi').value);
    var phiXuliHd =15;
    var phiDv =75;
    var phiThueKenhCc =50;
    var tongTienCoc= phiXuliHd+ phiDv +phiThueKenhCc* document.getElementById(soKenhCaoCap).value ;

    if (soKetNoi >10) {
      tongTienCoc += (soketNoi-10)*5;
    } else if (loai_kh== 'nha_dan'){
      var phiXuliHd =4.5;
      var phiDv = 20.5;
      var phiThueKenhCc =7.5;
      var tongTienCoc = phiXuliHd + phiDv+ phiThueKenhCc* document.getElementById('soKenhCaoCap').value ;
    }
  }


document.getElementById('kq4').innerHTML ="tổng tiền cap của bạn là: "  + tongTienCoc + "$";
}