var APP_DATA = {
  "scenes": [
    {
      "id": "0-tavolo-sala",
      "name": "Tavolo sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.43372459762578686,
          "pitch": 0.2826431262018154,
          "rotation": 6.283185307179586,
          "target": "1-mobile-bianco-sala"
        },
        {
          "yaw": -0.6854566188714486,
          "pitch": 0.48655410926950005,
          "rotation": 0,
          "target": "4-finestra-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-mobile-bianco-sala",
      "name": "Mobile bianco sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2577121935174951,
          "pitch": 0.17655047411298597,
          "rotation": 0,
          "target": "0-tavolo-sala"
        },
        {
          "yaw": 1.3989431946370932,
          "pitch": 0.8755571551038379,
          "rotation": 0,
          "target": "4-finestra-sala"
        },
        {
          "yaw": -0.19624196241694314,
          "pitch": 0.31927826829305417,
          "rotation": 0,
          "target": "5-divano-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingresso-telefono",
      "name": "Ingresso telefono",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6486842879381634,
          "pitch": 0.4109203261986458,
          "rotation": 0,
          "target": "3-ingresso"
        },
        {
          "yaw": 1.5746243431215348,
          "pitch": 0.1922686941640528,
          "rotation": 0,
          "target": "5-divano-sala"
        },
        {
          "yaw": 2.2190380046091462,
          "pitch": 0.5101310358850348,
          "rotation": 0,
          "target": "8-cucina-ingresso"
        },
        {
          "yaw": -2.4144565058905343,
          "pitch": 0.669354049381564,
          "rotation": 0,
          "target": "13-camera-1-ingresso"
        },
        {
          "yaw": -2.5408940307903904,
          "pitch": 0.3230999443385869,
          "rotation": 0,
          "target": "14-camera-1-centro"
        },
        {
          "yaw": -1.7258530898544322,
          "pitch": 0.631029343973168,
          "rotation": 0,
          "target": "17-bagno-1-ingresso"
        },
        {
          "yaw": -0.1918422349395339,
          "pitch": 0.3917821869695395,
          "rotation": 0,
          "target": "16-bagno-2-centro"
        },
        {
          "yaw": 0.027031189847294357,
          "pitch": 0.19523845524486916,
          "rotation": 0,
          "target": "10-camera-2-tv"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ingresso",
      "name": "Ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2764256005945285
      },
      "linkHotspots": [
        {
          "yaw": 3.0073806746729836,
          "pitch": 0.25656849275408966,
          "rotation": 0,
          "target": "5-divano-sala"
        },
        {
          "yaw": 0.0551860237439179,
          "pitch": 0.4449616225376811,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-finestra-sala",
      "name": "Finestra sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1221287390584802,
          "pitch": 0.06755616822239574,
          "rotation": 0,
          "target": "0-tavolo-sala"
        },
        {
          "yaw": -2.5674819042324426,
          "pitch": 0.28952847569149043,
          "rotation": 0,
          "target": "1-mobile-bianco-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-divano-sala",
      "name": "Divano sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.3779056516841628,
        "pitch": 0.08747078988846191,
        "fov": 1.2764256005945285
      },
      "linkHotspots": [
        {
          "yaw": -0.8326375755713968,
          "pitch": 0.15972064613634274,
          "rotation": 0,
          "target": "0-tavolo-sala"
        },
        {
          "yaw": 0.4757861726497232,
          "pitch": 0.09016276337231943,
          "rotation": 0,
          "target": "1-mobile-bianco-sala"
        },
        {
          "yaw": 0.19009835226793115,
          "pitch": 0.2060031582233144,
          "rotation": 0,
          "target": "4-finestra-sala"
        },
        {
          "yaw": -2.53109783585578,
          "pitch": 0.1804311328112327,
          "rotation": 0,
          "target": "3-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cucina-tavolo",
      "name": "Cucina tavolo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "7-cucina-mensola",
      "name": "Cucina mensola",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-cucina-ingresso",
      "name": "Cucina ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.978501779819263,
          "pitch": 0.47316850263199584,
          "rotation": 0,
          "target": "3-ingresso"
        },
        {
          "yaw": 2.8110364909466323,
          "pitch": 0.49554492919345705,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cucina-finestra",
      "name": "Cucina finestra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "10-camera-2-tv",
      "name": "Camera 2 tv",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8564894175669622,
          "pitch": 0.1308349615989215,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        },
        {
          "yaw": 1.1296263421133332,
          "pitch": 0.04962221551280521,
          "rotation": 0,
          "target": "11-camera-2-mobile"
        },
        {
          "yaw": 0.6194018187716956,
          "pitch": 0.24293895198954374,
          "rotation": 0,
          "target": "12-camera-2-finestra"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-camera-2-mobile",
      "name": "Camera 2 mobile",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2666668853298297,
          "pitch": 0.6427886796611375,
          "rotation": 0,
          "target": "10-camera-2-tv"
        },
        {
          "yaw": 0.9458452018166064,
          "pitch": 0.6204975580013468,
          "rotation": 0,
          "target": "12-camera-2-finestra"
        },
        {
          "yaw": -0.46285285237488694,
          "pitch": 0.24130348671620183,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-camera-2-finestra",
      "name": "Camera 2 finestra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3320384322237402,
          "pitch": 0.020656459642822256,
          "rotation": 0,
          "target": "11-camera-2-mobile"
        },
        {
          "yaw": -0.9187523257375165,
          "pitch": 0.30094708169467665,
          "rotation": 0,
          "target": "10-camera-2-tv"
        },
        {
          "yaw": -0.08384701754403956,
          "pitch": 0.007272792289224839,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-camera-1-ingresso",
      "name": "Camera 1 ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "14-camera-1-centro",
      "name": "Camera 1 centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0179143177042071,
          "pitch": 0.23410062599308645,
          "rotation": 0,
          "target": "13-camera-1-ingresso"
        },
        {
          "yaw": 1.0979345895409107,
          "pitch": 0.4347305724871049,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        },
        {
          "yaw": 0.15839415812335034,
          "pitch": 0.4960588895350533,
          "rotation": 0,
          "target": "15-camera-1-angolo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-camera-1-angolo",
      "name": "Camera 1 angolo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25513825607873564,
          "pitch": 0.5142799882997657,
          "rotation": 0,
          "target": "14-camera-1-centro"
        },
        {
          "yaw": -1.2669527879096805,
          "pitch": 0.3976785326126304,
          "rotation": 0,
          "target": "13-camera-1-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bagno-2-centro",
      "name": "Bagno 2 centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.058092515663148,
          "pitch": 0.1664042634350551,
          "rotation": 0,
          "target": "19-bagno-2-finestra"
        },
        {
          "yaw": -2.0883699349040974,
          "pitch": 0.564699752540518,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bagno-1-ingresso",
      "name": "Bagno 1 ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5252328822116681,
          "pitch": 0.3221765937375185,
          "rotation": 0,
          "target": "18-bagno-1-finestra"
        },
        {
          "yaw": -2.541094969937511,
          "pitch": 0.6920878896873504,
          "rotation": 0,
          "target": "13-camera-1-ingresso"
        },
        {
          "yaw": 2.998656806886993,
          "pitch": 0.8160477380582059,
          "rotation": 0,
          "target": "2-ingresso-telefono"
        },
        {
          "yaw": 3.0928312867577237,
          "pitch": 0.33759258825496197,
          "rotation": 0,
          "target": "3-ingresso"
        },
        {
          "yaw": 3.0795508091562507,
          "pitch": 0.08612224406945046,
          "rotation": 0,
          "target": "5-divano-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bagno-1-finestra",
      "name": "Bagno 1 finestra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23865859154582303,
          "pitch": 0.6389572086657722,
          "rotation": 0,
          "target": "17-bagno-1-ingresso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bagno-2-finestra",
      "name": "Bagno 2 finestra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10353768391349227,
          "pitch": 0.48097110410850163,
          "rotation": 0,
          "target": "16-bagno-2-centro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "VIA BOSCO DEGLI ARVALI",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
