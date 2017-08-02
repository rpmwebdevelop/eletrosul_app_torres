var app = angular.module("linhasEletrosul",["ngRoute"]);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

var subs =
[
  {
    'desc':'alguma coisa',
    'codigo':'ITA'
  },
  {
    'desc':'alguma coisa',
    'codigo':'PCS'
  },
  {
    'desc':'alguma coisa',
    'codigo':'BIG'
  },
  {
    'desc':'alguma coisa',
    'codigo':'JBL'
  },
  {
    'desc':'alguma coisa',
    'codigo':'UHBC'
  },
  {
    'desc':'alguma coisa',
    'codigo':'BNE'
  }
];
var lns =
[
  {
    'codigo':6160,
    'nome': 'LI ITA-PCS',
    'subestacao1':subs[0],
    'subestacao2':subs[1],
    'torres':[
      {
        'id':1,
        'distSub1':400,
        'distSub2':7750,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':2,
        'distSub1':750,
        'distSub2':7400,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':3,
        'distSub1':1100,
        'distSub2':7050,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':4,
        'distSub1':1450,
        'distSub2':6700,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':5,
        'distSub1':1800,
        'distSub2':6350,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':6,
        'distSub1':2150,
        'distSub2':6000,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':7,
        'distSub1':2500,
        'distSub2':5650,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':8,
        'distSub1':2850,
        'distSub2':5300,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':9,
        'distSub1':3200,
        'distSub2':4950,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':10,
        'distSub1':3550,
        'distSub2':4600,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':11,
        'distSub1':3900,
        'distSub2':4259,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':12,
        'distSub1':4250,
        'distSub2':3900,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':13,
        'distSub1':4600,
        'distSub2':3550,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':14,
        'distSub1':4950,
        'distSub2':3200,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':15,
        'distSub1':5300,
        'distSub2':2850,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':16,
        'distSub1':5650,
        'distSub2':2500,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':17,
        'distSub1':6000,
        'distSub2':2150,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':18,
        'distSub1':6350,
        'distSub2':1800,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':19,
        'distSub1':6700,
        'distSub2':1450,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':20,
        'distSub1':7050,
        'distSub2':1100,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':21,
        'distSub1':7400,
        'distSub2':50,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      },
      {
        'id':22,
        'distSub1':7750,
        'distSub2':400,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR'
      }
    ]
  },
  {
    'codigo':7140,
    'nome': 'LI BIG-JBL',
    'subestacao1':subs[2],
    'subestacao2':subs[3],
    'torres':[
      {
        'id':219,
        'distSub1':5000,
        'distSub2':17760,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':220,
        'distSub1':5440,
        'distSub2':17320,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':221,
        'distSub1':5880,
        'distSub2':16880,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':222,
        'distSub1':6320,
        'distSub2':16440,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':223,
        'distSub1':6760,
        'distSub2':16000,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':224,
        'distSub1':7200,
        'distSub2':15560,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':225,
        'distSub1':7640,
        'distSub2':15120,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':226,
        'distSub1':8080,
        'distSub2':14680,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':227,
        'distSub1':8520,
        'distSub2':14240,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':228,
        'distSub1':8960,
        'distSub2':13800,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':229,
        'distSub1':9400,
        'distSub2':13360,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':230,
        'distSub1':9840,
        'distSub2':12920,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':231,
        'distSub1':10280,
        'distSub2':12480,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':232,
        'distSub1':10720,
        'distSub2':12040,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':233,
        'distSub1':11160,
        'distSub2':11600,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':234,
        'distSub1':11600,
        'distSub2':11160,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':235,
        'distSub1':12040,
        'distSub2':10720,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':236,
        'distSub1':12480,
        'distSub2':10280,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':237,
        'distSub1':12920,
        'distSub2':9840,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':238,
        'distSub1':13360,
        'distSub2':9400,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':239,
        'distSub1':13800,
        'distSub2':8960,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':240,
        'distSub1':14240,
        'distSub2':8520,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':241,
        'distSub1':14680,
        'distSub2':8080,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':242,
        'distSub1':15120,
        'distSub2':7640,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':243,
        'distSub1':15560,
        'distSub2':7200,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':244,
        'distSub1':16000,
        'distSub2':6760,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':245,
        'distSub1':16440,
        'distSub2':6320,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':246,
        'distSub1':16880,
        'distSub2':5880,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':247,
        'distSub1':17320,
        'distSub2':5440,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      },
      {
        'id':248,
        'distSub1':17760,
        'distSub2':5000,
        'faseA':'LATERAL DIREITA',
        'faseB':'CENTRAL',
        'faseC':'LATERAL ESQUERDA',
      }
    ]
  },
  {
    'codigo':5140,
    'nome': 'LI UHBC-BNE',
    'subestacao1':subs[4],
    'subestacao2':subs[5],
    'torres':[
      {
        'id':1,
        'distSub1':60,
        'distSub2':4310,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':2,
        'distSub1':310,
        'distSub2':4060,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':3,
        'distSub1':560,
        'distSub2':3810,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':4,
        'distSub1':810,
        'distSub2':3560,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':5,
        'distSub1':1060,
        'distSub2':3310,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':6,
        'distSub1':1310,
        'distSub2':3060,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':7,
        'distSub1':1560,
        'distSub2':2810,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':8,
        'distSub1':1810,
        'distSub2':2560,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':9,
        'distSub1':2060,
        'distSub2':2310,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':10,
        'distSub1':2310,
        'distSub2':2060,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':11,
        'distSub1':2560,
        'distSub2':1810,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':12,
        'distSub1':2810,
        'distSub2':1560,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':13,
        'distSub1':3060,
        'distSub2':1310,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':14,
        'distSub1':3310,
        'distSub2':1060,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':15,
        'distSub1':3560,
        'distSub2':810,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':16,
        'distSub1':3810,
        'distSub2':560,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':17,
        'distSub1':4060,
        'distSub2':310,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
      {
        'id':18,
        'distSub1':4310,
        'distSub2':60,
        'faseA':'INFERIOR',
        'faseB':'CENTRAL',
        'faseC':'SUPERIOR',
      },
    ]
  }
];
