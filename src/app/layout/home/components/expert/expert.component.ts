import { Component, OnInit, ViewChild } from '@angular/core';
import { Expert } from 'src/app/shared/models/expert';
import { ExpertService } from 'src/app/shared/services/expert.service';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {
  
  @ViewChild('owlElement1') owlElement: OwlCarousel;
  experts: Expert[]=[
    {
      _id: 1,
      name: 'Vũ Khắc An',
      avatarUrl: 'assets/images/anhAn.png',
      position: 'Ban lãnh đạo',
      identify: 'Giám đốc điều hành',
      description: 'Tốt nghiệp chuyên ngành Phân tích kinh doanh; Phân tích & thiết kế hệ thống - Khoa công nghệ thông tin - Đại học Western Sydney, Úc vào năm 2005 Ông Vũ Khắc An đã có hơn 12 năm kinh nghiệm trong việc Phân tích thiết kế hệ thống; Tư vấn quản lý, quy trình & tái cấu trúc doanh nghiệp. Đặc biệt ông là Trưởng dự án tư vấn giải pháp & tư vấn triển khai hệ thống ERP cho nhiều khách hàng tại Việt Nam như: Công ty CP Lâm Việt; Nội thất Phố Xinh; Chi Lai; Nixxin; Đông Hưng; Green Home; Gavi; Tín Thương …',
      facebookLink: '',
      instagramLink: '',
      googlePlusLink: '',
    },
    {
      _id: 2,
      name: 'Trần Trọng Nghĩa',
      avatarUrl: 'assets/images/anhNghia.png',
      position: 'Ban lãnh đạo',
      identify: 'Phó tổng giám đốc',
      description: 'Ông Nghĩa đã có hơn 15 năm hoạt động trong lĩnh vực công nghệ thông tin với vai trò quản lý kinh doanh, tư vấn hệ thống & giải pháp quản lý cho rất nhiều doanh nghiệp lớn như: Hoa Sen Group; Nguyễn Kim; Sơn EXPO; Chuỗi nhà hàng Ngọc Sương; Điện máy Chợ Lớn; Tổng Cty Dầu Việt Nam (PV Oil); Nhựa Long Thành; Đại Đồng Tiến, Saigon Bus, Cám Con Cò, Tập đoàn Tân Hiệp Phát, Cảng Đồng Nai, ...',
      facebookLink: '',
      instagramLink: '',
      googlePlusLink: '',
    },
    {
      _id: 3,
      name: 'Nguyễn Anh Vũ',
      avatarUrl: 'assets/images/anhVu.png',
      position: 'Ban lãnh đạo',
      identify: 'Trưởng bộ phận Tư vấn triển khai',
      description: 'Tốt nghiệp cử nhân tin học - Đại học Đà Lạt (năm 2000) và Khoa quản trị doanh nghiệp – Đại học Bách khoa Hà Nội (năm 2007), ông Nguyễn Anh Vũ đã có hơn 12 năm kinh nghiệm làm quản lý cho nhiều doanh nghiệp. Đặc biệt ông Vũ đã từng tham gia tư vấn quy trình & tư vấn triển khai hệ thống ERP cho nhiều khách hàng tại Việt Nam như: Công ty CP Lâm Việt; Phố Xinh; Green Home; Thành Nghĩa; Witteveen Việt Nam …',
      facebookLink: '',
      instagramLink: '',
      googlePlusLink: '',
    },
    {
      _id: 4,
      name: 'Nguyễn Thị Uyên Thảo',
      avatarUrl: 'assets/images/chiThao.png',
      position: 'Ban lãnh đạo',
      identify: 'Trưởng bộ phận phát triển',
      description: 'Tốt nghiệp kỹ sư phần mềm - Đại học Công nghiệp TP HCM năm 2007, bà Thảo đã có hơn 6 năm kinh nghiệm làm việc cho các công ty gia công phần mềm tại Việt Nam. Một số dự án outsource tiêu biểu mà bà Thảo đã tham gia với vai trò phát triển như: Hệ thống quản lý B2C cho một khách hàng ở Pháp; Hệ thống quản lý bán lẻ, quản lý bệnh viện Esclepieia cho các khách hàng Nhật Bản; Hệ thống ERM cho các phòng khám y tế eCardio tại Mỹ; Chuyển đổi dữ liệu bất động sản từ hệ thống cũ sang mới cho các bang của Mỹ; …',
      facebookLink: '',
      instagramLink: '',
      googlePlusLink: '',
    },
    {
      _id: 5,
      name: 'Hồ Nguyên Đạt',
      avatarUrl: 'assets/images/anhDat.png',
      position: 'Đối tác',
      identify: 'Chuyên gia tư vấn chiến lược, cơ cấu quản lý và điều phối dự án, giải pháp và hệ thống phần mềm.',
      description: 'Tốt nghiệp kỹ sư chuyên ngành CNTT - Đại Học Bách Khoa Tp.HCM (2005) và Học viện Công Nghệ Châu Á (AIT) Bangkok-Thái Lan (2009) chuyên ngành MBA - Quản trị chiến lược. Ông Đạt đã có hơn 12 năm kinh nghiệm điều phối, triển khai các dự án, giải pháp phần mềm và hệ thống thông tin phức tạp cho các tổ chức và công ty công nghệ lớn tại Mỹ, Nhật, Pháp, Trung Quốc, Singapore, Úc và Việt Nam (điển hình là dự án tư vấn & triển khai hệ ERP cho toà nhà 68 tầng Bitexco Tp.HCM).',
      facebookLink: '',
      instagramLink: '',
      googlePlusLink: '',
    },
    {
      _id: 6,
      name: 'Bùi Quang Vinh',
      avatarUrl: 'assets/images/anhVinh.png',
      position: 'Đối tác',
      identify: 'Chuyên gia tư vấn chính sách nhân sự & phát triển nguồn nhân lực',
      description: 'Ông Bùi Quang Vinh cũng là Chuyên gia tư vấn độc lập với các dự án: cơ cấu lương thưởng cho ACB (2003); Nguyễn Kim (2010); Cố vấn HĐQT kiêm Trưởng khối nguồn nhân lực PVCombank (2013-2014); Tư vấn thủ tục thành lập & chính sách nhân sự cho Cty Chu Lai Soda tỉnh Quảng Nam (2015).',
      facebookLink: '',
      instagramLink: '',
      googlePlusLink: '',
    },
  ];
  expertSelected: Expert = new Expert();
  options = {
    items: 1,
    dots: true,
    navigation: false,
    responsive: {
      481: {
        items: 2
      },
      768: {
        items: 3,
      },
      1024: {
        items: 4
      },
      1366: {
        items: 6
      }
    },
  };
  constructor(private expertService: ExpertService) { }

  getExpertsFromService(): void {
    this.expertService.getExperts().subscribe(
      (result)=>{
        this.experts = result;
        const randomNumber = Math.floor(Math.random() * (result.length-1) + 0);
        setTimeout(() => {
          this.owlElement.to([randomNumber]);
          this.expertSelected = result[randomNumber];
        }, 100);
      }
    );
  }

  clickExpert(expert: Expert){
    this.expertSelected = expert;
  }

  ngOnInit() {
    //this.getExpertsFromService();
    const randomNumber = Math.floor(Math.random() * (this.experts.length-1) + 0);
        setTimeout(() => {
          this.owlElement.to([randomNumber]);
          this.expertSelected = this.experts[randomNumber];
        }, 100);
  }

}
