// 발급받은 JavaScript 키로 초기화 (YOUR_APP_KEY를 실제 앱 키로 변경하세요)
Kakao.init('29dbd5c23c9ae600b727e8f061599d13');

// 초기화 여부 확인
if (!Kakao.isInitialized()) {
  console.error('Kakao SDK 초기화 실패');
}

console.log(Kakao.isInitialized());

// 카카오톡 링크 공유 함수
function sendKakaofirst() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '선착순 선물게임을 시작합니다!',
      description: '기회는 단 10분, 선착순 5명에게 선물 증정!',
      imageUrl: 'https://github.com/jaein4722/wow_april_fools/blob/master/assets/first.png?raw=true',
      link: {
        mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools/',
        webUrl: 'https://jaein4722.github.io/wow_april_fools/'
      }
    },
    buttons: [
      {
        title: '당첨자 확인하기',
        link: {
          mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
          webUrl: 'https://jaein4722.github.io/wow_april_fools'
        }
      }
    ]
  });
}

function sendKakaorandom() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '랜덤 3명에게 선물을 보냈습니다.',
      description: '행운의 주인공은?',
      imageUrl: 'https://github.com/jaein4722/wow_april_fools/blob/master/assets/random.png?raw=true',
      link: {
        mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
        webUrl: 'https://jaein4722.github.io/wow_april_fools'
      }
    },
    buttons: [
      {
        title: '당첨자 확인하기',
        link: {
          mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
          webUrl: 'https://jaein4722.github.io/wow_april_fools'
        }
      }
    ]
  });
}

function sendKakaoone() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '',
      description: '선물을 보냈습니다. 지금 확인해 보세요!',
      imageUrl: 'https://github.com/jaein4722/wow_april_fools/blob/master/assets/coffee.png?raw=true',
      link: {
        mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
        webUrl: 'https://jaein4722.github.io/wow_april_fools'
      }
    },
    buttons: [
      {
        title: '주문내역 보기',
        link: {
          mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
          webUrl: 'https://jaein4722.github.io/wow_april_fools'
        }
      }
    ]
  });
}

function sendKakaochicken() {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '',
      description: '선물을 보냈습니다. 지금 확인해 보세요!',
      imageUrl: 'https://github.com/jaein4722/wow_april_fools/blob/master/assets/chicken.png?raw=true',
      link: {
        mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
        webUrl: 'https://jaein4722.github.io/wow_april_fools'
      }
    },
    buttons: [
      {
        title: '주문내역 보기',
        link: {
          mobileWebUrl: 'https://jaein4722.github.io/wow_april_fools',
          webUrl: 'https://jaein4722.github.io/wow_april_fools'
        }
      }
    ]
  });
}