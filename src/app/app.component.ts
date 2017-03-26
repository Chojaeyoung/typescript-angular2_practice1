import { Component, OnInit } from '@angular/core';

import { News } from './news';

@Component({
  // moduleId: module.id, // problem with bundle-sfx
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent{
  constructor() {
  }
  
  title = '인기기사 순위';
//test code
  private tmp_news :News[] = [
    {
       score : 88,
       title : "BBC 인터뷰 방송사고 패러디 ‘스타워즈’ 폭...",
       imgUrl :"http://image.zdnet.co.kr/2017/03/19/paikshow_mxJ11V3Ap02.jpg"
    },
    {
       score : 32,
       title : "MS, 최신 PC에 윈도 구버전 설치 제한",
       imgUrl :"http://image.zdnet.co.kr/2017/03/19/yong2_2LbVz1BU130yBn.jpg"
    },
    {
       score : 24,
       title : "네이버 쇼핑도 쓰는 딥러닝 CNN을 아시나요",
       imgUrl :"http://image.zdnet.co.kr/2017/03/18/sontech_7DmAcBk8S23n.jpg"
    },
    {
       score : 64,
       title : "삼성 ‘퀀텀닷’ 킬러 LG ‘나노셀’ 출격",
       imgUrl :"http://image.zdnet.co.kr/2017/03/19/lejj_dBs3Ohdq7ajx1v0.jpg"
    },
    {
       score : 1,
       title : "삼성 갤럭시S8, 세 종류 색상 출시",
       imgUrl :"http://image.zdnet.co.kr/2017/03/20/hohocho_X9LALcDp7DKn.jpg"
    },
    {
       score : 35,
       title : "인텔CPU·MS오피스 해킹하면 상금 탄다",
       imgUrl :"http://image.zdnet.co.kr/2017/03/18/imc_crxyOftG7lMojMnb.jpg"
    },
    {
       score : 89,
       title : "일주일 만에 '랩하는 AI' 만든 美 10대 소년",
       imgUrl :"http://image.zdnet.co.kr/2017/03/20/sontech_htwdYxBIzIzL.jpg"
    },
    {
       score : 6,
       title : "현대차, '2017 아반떼' 출시...1천570만원부터",
       imgUrl :"http://image.zdnet.co.kr/2017/03/20/guyer73_27pY4A56LkVU.jpg"
    },
    {
       score : 43,
       title : "구글, JPEG 압축률 35% 높인 인코더 공개",
       imgUrl :"http://image.zdnet.co.kr/2017/03/19/yong2_xYShYnLDhZ0QvP.jpg"
    },
    {
       score : 65,
       title : "IT 개발자?…부품과 다를 바 없어요",
       imgUrl :"http://image.zdnet.co.kr/2017/03/17/yong2_f0vIkD3wFSJfWi.jpg"
    }
  ]
  newss = sortPopularNews(this.tmp_news);
}
 
function sortPopularNews(news:News[]) : any {
  console.log(news);
  news.sort(function (a, b) { 
  	return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;  
  });
  console.log(news);
  return news;
}