/* lifedata.js — 合并数据文件 */
const hisData = [
  {
    "id": "zhuge",
    "name": "诸葛亮",
    "birthYear": 181,
    "deathYear": 234,
    "dynasty": "三国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "鞠躬尽瘁，死而后已。",
    "quoteSource": "《后出师表》",
    "isKeyFigure": true,
    "relationships": {
      "next": {
        "id": "sima",
        "type": "对手",
        "description": "诸葛亮六出祁山，与司马懿多次交锋，两人互为一生之敌亦为一生的知己。"
      }
    }
  },
  {
    "id": "sima",
    "name": "司马懿",
    "birthYear": 179,
    "deathYear": 251,
    "dynasty": "三国",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "夫将兵者，不战则守，不守则走。",
    "quoteSource": "《晋书·宣帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "zhuge",
        "type": "对手",
        "description": "与诸葛亮在渭滨对峙，叹其天下奇才。"
      },
      "next": {
        "id": "jikang",
        "type": "其他",
        "description": "司马氏掌权后，嵇康因不合作态度被司马昭所杀，思想传承却在魏晋名士中延续。"
      }
    }
  },
  {
    "id": "jikang",
    "name": "嵇康",
    "birthYear": 223,
    "deathYear": 262,
    "dynasty": "三国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "目送归鸿，手挥五弦。俯仰自得，游心太玄。",
    "quoteSource": "《赠秀才入军》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "sima",
        "type": "敌对",
        "description": "拒不出仕司马氏，终遭构陷被害。"
      },
      "next": {
        "id": "shantao",
        "type": "知己",
        "description": "与山涛为竹林之交，虽绝交于纸，却托孤以子，真情可见。"
      }
    }
  },
  {
    "id": "shantao",
    "name": "山涛",
    "birthYear": 205,
    "deathYear": 283,
    "dynasty": "三国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "山公启事，朝野无遗才。",
    "quoteSource": "《晋书·山涛传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "jikang",
        "type": "知己",
        "description": "与嵇康竹林同游，嵇康临刑前将子女托付于山涛。"
      },
      "next": {
        "id": "ruanji",
        "type": "同僚",
        "description": "同为竹林七贤，在朝中共事，互相敬重。"
      }
    }
  },
  {
    "id": "ruanji",
    "name": "阮籍",
    "birthYear": 210,
    "deathYear": 263,
    "dynasty": "三国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "夜中不能寐，起坐弹鸣琴。薄帷鉴明月，清风吹我襟。",
    "quoteSource": "《咏怀诗》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "shantao",
        "type": "同僚",
        "description": "竹林七贤之友，与山涛共隐共仕。"
      },
      "next": {
        "id": "xizhi",
        "type": "其他",
        "description": "魏晋风骨传至东晋，王羲之承其风流，书法中见名士精神。"
      }
    }
  },
  {
    "id": "xizhi",
    "name": "王羲之",
    "birthYear": 303,
    "deathYear": 361,
    "dynasty": "东晋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱。",
    "quoteSource": "《兰亭集序》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "ruanji",
        "type": "其他",
        "description": "承魏晋名士风流，兰亭雅集再现竹林之逸。"
      },
      "next": {
        "id": "xiean",
        "type": "同僚",
        "description": "与谢安同为东晋名士，兰亭雅集座上宾，共支撑江左风流。"
      }
    }
  },
  {
    "id": "xiean",
    "name": "谢安",
    "birthYear": 320,
    "deathYear": 385,
    "dynasty": "东晋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "安石不出，如苍生何？",
    "quoteSource": "《晋书·谢安传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "xizhi",
        "type": "同僚",
        "description": "与王羲之相交甚笃，兰亭集会共论天下。"
      },
      "next": {
        "id": "taoyuan",
        "type": "其他",
        "description": "谢安身后，陶渊明以另一种方式诠释了东晋士人的精神追求。"
      }
    }
  },
  {
    "id": "taoyuan",
    "name": "陶渊明",
    "birthYear": 365,
    "deathYear": 427,
    "dynasty": "东晋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "采菊东篱下，悠然见南山。山气日夕佳，飞鸟相与还。",
    "quoteSource": "《饮酒·其五》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "xiean",
        "type": "其他",
        "description": "东晋最后的名士之光，以归隐完成了士人精神的另一种表达。"
      },
      "next": {
        "id": "huiyuan",
        "type": "忘年交",
        "description": "与慧远法师为方外之友，虎溪三笑传为千古佳话。"
      }
    }
  },
  {
    "id": "huiyuan",
    "name": "慧远",
    "birthYear": 334,
    "deathYear": 416,
    "dynasty": "东晋",
    "class": "僧侣",
    "classColor": "#F0C239",
    "quote": "法音之流，譬彼尘霭。尘霭弥敛，朗照愈明。",
    "quoteSource": "《沙门不敬王者论》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "taoyuan",
        "type": "忘年交",
        "description": "庐山脚下，与陶渊明谈玄论道，儒释交融。"
      },
      "next": {
        "id": "lidaoyuan",
        "type": "其他",
        "description": "慧远之后，南北朝佛教兴盛，郦道元以地理之学记录山川与佛教遗迹。"
      }
    }
  },
  {
    "id": "lidaoyuan",
    "name": "郦道元",
    "birthYear": 466,
    "deathYear": 527,
    "dynasty": "南北朝",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "巴东三峡巫峡长，猿鸣三声泪沾裳。",
    "quoteSource": "《水经注·江水》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "zuchongzhi",
        "type": "其他",
        "description": "祖冲之算经，郦道元注水经，南北朝科学并兴。"
      },
      "next": {
        "id": "taohongjing",
        "type": "其他",
        "description": "南北朝科学、隐逸相继。"
      }
    }
  },
  {
    "id": "wangwei",
    "name": "王维",
    "birthYear": 701,
    "deathYear": 761,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "空山不见人，但闻人语响。返景入深林，复照青苔上。",
    "quoteSource": "《鹿柴》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "taohongjing",
        "type": "其他",
        "description": "承南北朝山水传统，开盛唐山水田园诗派。"
      },
      "next": {
        "id": "libai",
        "type": "同僚",
        "description": "与李白并称盛唐双璧，一个诗佛一个诗仙，交相辉映。"
      }
    }
  },
  {
    "id": "libai",
    "name": "李白",
    "birthYear": 701,
    "deathYear": 762,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "飞流直下三千尺，疑是银河落九天。",
    "quoteSource": "《望庐山瀑布》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "wangwei",
        "type": "同僚",
        "description": "与王维同朝为官，诗风迥异却互相欣赏。"
      },
      "next": {
        "id": "dufu",
        "type": "知己",
        "description": "与杜甫相见恨晚，虽年龄相差十一岁，却成千古莫逆之交。"
      }
    }
  },
  {
    "id": "dufu",
    "name": "杜甫",
    "birthYear": 712,
    "deathYear": 770,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "安得广厦千万间，大庇天下寒士俱欢颜，风雨不动安如山！",
    "quoteSource": "《茅屋为秋风所破歌》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "libai",
        "type": "知己",
        "description": "与李白相交甚深，一生作诗怀念李白不下十余首。"
      },
      "next": {
        "id": "hanyu",
        "type": "其他",
        "description": "杜甫之后，韩愈承其现实主义精神，倡导古文运动。"
      }
    }
  },
  {
    "id": "hanyu",
    "name": "韩愈",
    "birthYear": 768,
    "deathYear": 824,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "师者，所以传道受业解惑也。",
    "quoteSource": "《师说》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "dufu",
        "type": "其他",
        "description": "继承杜甫现实主义传统，以古文运动革除骈文之弊。"
      },
      "next": {
        "id": "baijuyi",
        "type": "同僚",
        "description": "与白居易同为中唐文坛领袖，诗风各异却志同道合。"
      }
    }
  },
  {
    "id": "baijuyi",
    "name": "白居易",
    "birthYear": 772,
    "deathYear": 846,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "同是天涯沦落人，相逢何必曾相识。",
    "quoteSource": "《琵琶行》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "hanyu",
        "type": "同僚",
        "description": "与韩愈共倡古文，又开创新乐府运动，诗求通俗而意深远。"
      },
      "next": {
        "id": "sushi",
        "type": "其他",
        "description": "白居易之后，宋人继其通俗精神，至苏轼而集大成。"
      }
    }
  },
  {
    "id": "sushi",
    "name": "苏轼",
    "birthYear": 1037,
    "deathYear": 1101,
    "dynasty": "北宋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "大江东去，浪淘尽，千古风流人物。",
    "quoteSource": "《念奴娇·赤壁怀古》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "baijuyi",
        "type": "其他",
        "description": "继唐代白居易通俗精神，北宋苏轼集文学、书法、绘画之大成。"
      },
      "next": {
        "id": "zhuxi",
        "type": "其他",
        "description": "苏轼之后，南宋朱熹承北宋儒学，开理学之宗。"
      }
    }
  },
  {
    "id": "zhuxi",
    "name": "朱熹",
    "birthYear": 1130,
    "deathYear": 1200,
    "dynasty": "南宋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "问渠那得清如许？为有源头活水来。",
    "quoteSource": "《观书有感》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "sushi",
        "type": "其他",
        "description": "承北宋文化之盛，朱熹集理学之大成，影响东亚数百年。"
      },
      "next": {
        "id": "wentianxiang",
        "type": "其他",
        "description": "朱熹理学之后，文天祥以气节实践了儒家精神的最高理想。"
      }
    }
  },
  {
    "id": "wentianxiang",
    "name": "文天祥",
    "birthYear": 1236,
    "deathYear": 1283,
    "dynasty": "南宋",
    "class": "武将",
    "classColor": "#000000",
    "quote": "人生自古谁无死，留取丹心照汗青。",
    "quoteSource": "《过零丁洋》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "zhuxi",
        "type": "其他",
        "description": "以朱熹理学为精神根基，以死明志，成千古忠义之范。"
      },
      "next": {
        "id": "wangyangming",
        "type": "其他",
        "description": "文天祥之后，明代王阳明承宋儒之学，创心学一派。"
      }
    }
  },
  {
    "id": "wangyangming",
    "name": "王阳明",
    "birthYear": 1472,
    "deathYear": 1529,
    "dynasty": "明",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "知行合一。",
    "quoteSource": "《传习录》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "wentianxiang",
        "type": "其他",
        "description": "承宋儒理学，文天祥之忠义精神内化于心学之中。"
      },
      "next": {
        "id": "lizhi",
        "type": "其他",
        "description": "王阳明心学之后，李贽以异端自居，将思想解放推向极致。"
      }
    }
  },
  {
    "id": "lizhi",
    "name": "李贽",
    "birthYear": 1527,
    "deathYear": 1602,
    "dynasty": "明",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "夫童心者，真心也。若以童心为不可，是以真心为不可也。",
    "quoteSource": "《童心说》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "wangyangming",
        "type": "其他",
        "description": "承王阳明心学，李贽更进一步，倡童心说，挑战传统礼教。"
      },
      "next": {
        "id": "guyanwu",
        "type": "其他",
        "description": "李贽之后，明清之际顾炎武承其批判精神，开朴学之风。"
      }
    }
  },
  {
    "id": "guyanwu",
    "name": "顾炎武",
    "birthYear": 1613,
    "deathYear": 1682,
    "dynasty": "明",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "天下兴亡，匹夫有责。",
    "quoteSource": "《日知录》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "lizhi",
        "type": "其他",
        "description": "继李贽批判精神，明清之际顾炎武以实学救国。"
      },
      "next": {
        "id": "huangzongxi",
        "type": "同僚",
        "description": "与黄宗羲同为明末清初三大思想家，互相砥砺。"
      }
    }
  },
  {
    "id": "huangzongxi",
    "name": "黄宗羲",
    "birthYear": 1610,
    "deathYear": 1695,
    "dynasty": "明",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "天下为主，君为客。",
    "quoteSource": "《明夷待访录》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "guyanwu",
        "type": "同僚",
        "description": "与顾炎武并称清初大儒，共同反思明亡教训。"
      },
      "next": {
        "id": "wangfuzhi",
        "type": "同僚",
        "description": "与王夫之同为明末清初思想巨擘，三家并称。"
      }
    }
  },
  {
    "id": "wangfuzhi",
    "name": "王夫之",
    "birthYear": 1619,
    "deathYear": 1692,
    "dynasty": "明",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "知行相资以为用。",
    "quoteSource": "《礼记章句》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "huangzongxi",
        "type": "同僚",
        "description": "与黄宗羲、顾炎武并称明末清初三大思想家。"
      },
      "next": {
        "id": "caoxueqin",
        "type": "其他",
        "description": "清初思想启蒙之后，曹雪芹以小说承载时代之思。"
      }
    }
  },
  {
    "id": "caoxueqin",
    "name": "曹雪芹",
    "birthYear": 1715,
    "deathYear": 1763,
    "dynasty": "清",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味。",
    "quoteSource": "《红楼梦》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "wangfuzhi",
        "type": "其他",
        "description": "承清初思想之遗，曹雪芹以文学之笔写尽人间悲欢。"
      },
      "next": {
        "id": "luxun",
        "type": "其他",
        "description": "《红楼梦》之后，鲁迅以现代文学重新审视国民性。"
      }
    }
  },
  {
    "id": "luxun",
    "name": "鲁迅",
    "birthYear": 1881,
    "deathYear": 1936,
    "dynasty": "民国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "横眉冷对千夫指，俯首甘为孺子牛。",
    "quoteSource": "《自嘲》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "caoxueqin",
        "type": "其他",
        "description": "曹雪芹以小说写尽封建末世，鲁迅以杂文唤醒沉睡国民。"
      }
    }
  },
  {
    "id": "kongzi",
    "name": "孔子",
    "birthYear": -551,
    "deathYear": -479,
    "dynasty": "春秋",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "学而时习之，不亦说乎？",
    "quoteSource": "《论语》",
    "isKeyFigure": true,
    "relationships": {
      "next": {
        "id": "laozi",
        "type": "亲友",
        "description": "孔子问礼于老子，儒道两家思想由此分途并立。"
      }
    }
  },
  {
    "id": "laozi",
    "name": "老子",
    "birthYear": -571,
    "deathYear": -471,
    "dynasty": "春秋",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "道可道，非常道；名可名，非常名。",
    "quoteSource": "《道德经》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "kongzi",
        "type": "亲友",
        "description": "孔子问礼，老子以道德之旨相授。"
      },
      "next": {
        "id": "sunzi",
        "type": "其他",
        "description": "道家自然无为思想，下启孙武兵家之学。"
      }
    }
  },
  {
    "id": "sunzi",
    "name": "孙武",
    "birthYear": -545,
    "deathYear": -470,
    "dynasty": "春秋",
    "class": "武将",
    "classColor": "#000000",
    "quote": "知己知彼，百战不殆。",
    "quoteSource": "《孙子兵法》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "laozi",
        "type": "其他",
        "description": "道家辩证思维启迪兵家谋略。"
      },
      "next": {
        "id": "mozi",
        "type": "对手",
        "description": "兵家尚战，墨家非攻，思想对立。"
      }
    }
  },
  {
    "id": "mozi",
    "name": "墨子",
    "birthYear": -470,
    "deathYear": -391,
    "dynasty": "春秋",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "兼相爱，交相利。",
    "quoteSource": "《墨子》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "sunzi",
        "type": "对手",
        "description": "非攻反战，与兵家思想相对。"
      },
      "next": {
        "id": "mengzi",
        "type": "其他",
        "description": "墨家兼爱思想对孟子仁政有所启发。"
      }
    }
  },
  {
    "id": "mengzi",
    "name": "孟子",
    "birthYear": -372,
    "deathYear": -289,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "民为贵，社稷次之，君为轻。",
    "quoteSource": "《孟子》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "mozi",
        "type": "其他",
        "description": "承孔子之教，发扬仁义。"
      },
      "next": {
        "id": "quyuan",
        "type": "其他",
        "description": "孟子仁政与屈原忠贞，同为战国精神。"
      }
    }
  },
  {
    "id": "quyuan",
    "name": "屈原",
    "birthYear": -340,
    "deathYear": -278,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "路漫漫其修远兮，吾将上下而求索。",
    "quoteSource": "《离骚》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "mengzi",
        "type": "其他",
        "description": "孟子仁义与屈原忠贞，同为战国精神。"
      },
      "next": {
        "id": "xunzi",
        "type": "其他",
        "description": "屈原以辞赋见志，荀子以礼法立说。"
      }
    }
  },
  {
    "id": "zhuangzi",
    "name": "庄子",
    "birthYear": -369,
    "deathYear": -286,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "天地与我并生，而万物与我为一。",
    "quoteSource": "《庄子》",
    "isKeyFigure": true,
    "relationships": {
      "next": {
        "id": "hanfeizi",
        "type": "其他",
        "description": "道家逍遥与法家严刑，思想两极。"
      }
    }
  },
  {
    "id": "xunzi",
    "name": "荀子",
    "birthYear": -313,
    "deathYear": -238,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "青，取之于蓝，而青于蓝。",
    "quoteSource": "《荀子》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "quyuan",
        "type": "其他",
        "description": "屈原以辞赋见志，荀子以礼法立说。"
      },
      "next": {
        "id": "hanfeizi",
        "type": "师徒",
        "description": "韩非、李斯皆出其门下，儒法由此分流。"
      }
    }
  },
  {
    "id": "hanfeizi",
    "name": "韩非",
    "birthYear": -280,
    "deathYear": -233,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "法不阿贵，绳不挠曲。",
    "quoteSource": "《韩非子》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "xunzi",
        "type": "师徒",
        "description": "荀子弟子，集法家大成。"
      },
      "next": {
        "id": "jingke",
        "type": "其他",
        "description": "法家集大成之后，荆轲刺秦，以血肉之躯刺向暴政。"
      }
    }
  },
  {
    "id": "jingke",
    "name": "荆轲",
    "birthYear": -275,
    "deathYear": -227,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "风萧萧兮易水寒，壮士一去兮不复还。",
    "quoteSource": "《易水歌》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "hanfeizi",
        "type": "其他",
        "description": "战国末路，韩非法家之论与荆轲刺秦之举，同为时代绝响。"
      },
      "next": {
        "id": "gaojianli",
        "type": "亲友",
        "description": "与高渐离为挚友，同刺秦，共赴死。"
      }
    }
  },
  {
    "id": "gaojianli",
    "name": "高渐离",
    "birthYear": -275,
    "deathYear": -221,
    "dynasty": "战国",
    "class": "士",
    "classColor": "#1685A9",
    "quote": "击筑悲歌，慷慨赴义。",
    "quoteSource": "《史记·刺客列传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "jingke",
        "type": "亲友",
        "description": "与荆轲为挚友，荆轲刺秦后，图谋复仇，为秦王所害。"
      },
      "next": {
        "id": "wangjian",
        "type": "其他",
        "description": "秦并天下，李斯为相，王翦率大军灭六国，奠定秦基。"
      }
    }
  },
  {
    "id": "wangjian",
    "name": "王翦",
    "birthYear": -220,
    "deathYear": -180,
    "dynasty": "秦",
    "class": "武将",
    "classColor": "#000000",
    "quote": "非六十万不可。",
    "quoteSource": "《史记·王翦列传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "gaojianli",
        "type": "其他",
        "description": "秦并天下，高渐离之后，王翦为秦灭六国。"
      },
      "next": {
        "id": "lixin",
        "type": "同僚",
        "description": "与李信同为秦将，王翦老谋深算，李信锐意进取。"
      }
    }
  },
  {
    "id": "lixin",
    "name": "李信",
    "birthYear": -230,
    "deathYear": -200,
    "dynasty": "秦",
    "class": "武将",
    "classColor": "#000000",
    "quote": "不过二十万。",
    "quoteSource": "《史记·王翦列传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "wangjian",
        "type": "同僚",
        "description": "王翦之后，李信继为秦将。"
      },
      "next": {
        "id": "lisi",
        "type": "其他",
        "description": "秦并天下，李信为将，李斯为相，共佐秦皇。"
      }
    }
  },
  {
    "id": "lisi",
    "name": "李斯",
    "birthYear": -280,
    "deathYear": -208,
    "dynasty": "秦",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "泰山不让土壤，故能成其大。",
    "quoteSource": "《谏逐客书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "lixin",
        "type": "其他",
        "description": "秦并天下，李信为将，李斯为相，共佐秦皇。"
      },
      "next": {
        "id": "qinshihuang",
        "type": "君臣",
        "description": "助秦统一六国，辅秦始皇建立帝制。"
      }
    }
  },
  {
    "id": "qinshihuang",
    "name": "秦始皇",
    "birthYear": -259,
    "deathYear": -210,
    "dynasty": "秦",
    "class": "帝王",
    "classColor": "#8C4356",
    "quote": "天下共苦战斗不休，以有侯王。",
    "quoteSource": "《史记·秦始皇本纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "lisi",
        "type": "君臣",
        "description": "李斯为相，助其统一六国，建立皇帝制度。"
      },
      "next": {
        "id": "zhaogao",
        "type": "对手",
        "description": "沙丘之谋，赵高伪造遗诏，致使帝国崩塌。"
      }
    }
  },
  {
    "id": "zhaogao",
    "name": "赵高",
    "birthYear": -258,
    "deathYear": -207,
    "dynasty": "秦",
    "class": "其它",
    "classColor": "#8C4356",
    "quote": "指鹿为马。",
    "quoteSource": "《史记》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "qinshihuang",
        "type": "对手",
        "description": "沙丘合谋，后反噬之。"
      },
      "next": {
        "id": "zhangliang",
        "type": "其他",
        "description": "秦亡之后，张良辅汉开新朝。"
      }
    }
  },
  {
    "id": "zhangliang",
    "name": "张良",
    "birthYear": -250,
    "deathYear": -186,
    "dynasty": "西汉",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "运筹帷幄之中，决胜千里之外。",
    "quoteSource": "《史记》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "zhaogao",
        "type": "其他",
        "description": "秦亡之后，张良辅汉开新朝。"
      },
      "next": {
        "id": "libi",
        "type": "同僚",
        "description": "与李必同为汉初谋士，运筹帷幄，佐汉定天下。"
      }
    }
  },
  {
    "id": "libi",
    "name": "李必",
    "birthYear": -250,
    "deathYear": -190,
    "dynasty": "西汉",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "臣请借箸为大王筹之。",
    "quoteSource": "《史记·留侯世家》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "zhangliang",
        "type": "同僚",
        "description": "张良谋圣，李必辅之，同为汉初三杰之属。"
      },
      "next": {
        "id": "hanxin",
        "type": "同僚",
        "description": "李必与韩信同为汉初功臣，一文一武，定天下基业。"
      }
    }
  },
  {
    "id": "hanxin",
    "name": "韩信",
    "birthYear": -231,
    "deathYear": -196,
    "dynasty": "西汉",
    "class": "武将",
    "classColor": "#000000",
    "quote": "多多益善。",
    "quoteSource": "《史记》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "libi",
        "type": "同僚",
        "description": "与李必同为汉初功臣，一文一武，定天下基业。"
      },
      "next": {
        "id": "weiqing",
        "type": "其他",
        "description": "韩信之后，卫青继为汉之名将。"
      }
    }
  },
  {
    "id": "weiqing",
    "name": "卫青",
    "birthYear": -156,
    "deathYear": -106,
    "dynasty": "西汉",
    "class": "武将",
    "classColor": "#000000",
    "quote": "匈奴未灭，何以家为。",
    "quoteSource": "《史记》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "hanxin",
        "type": "其他",
        "description": "继韩信之后，汉之名将。"
      },
      "next": {
        "id": "huoqubing",
        "type": "家族",
        "description": "霍去病为其外甥，舅侄并称。"
      }
    }
  },
  {
    "id": "huoqubing",
    "name": "霍去病",
    "birthYear": -140,
    "deathYear": -117,
    "dynasty": "西汉",
    "class": "武将",
    "classColor": "#000000",
    "quote": "匈奴未灭，何以家为。",
    "quoteSource": "《史记》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "weiqing",
        "type": "家族",
        "description": "卫青之甥，英年早逝。"
      },
      "next": {
        "id": "dongzhongshu",
        "type": "其他",
        "description": "武功之后，董仲舒以文治辅汉。"
      }
    }
  },
  {
    "id": "dongzhongshu",
    "name": "董仲舒",
    "birthYear": -179,
    "deathYear": -104,
    "dynasty": "西汉",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "罢黜百家，独尊儒术。",
    "quoteSource": "《天人三策》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "huoqubing",
        "type": "其他",
        "description": "武功之后，文治辅汉。"
      },
      "next": {
        "id": "simaqian",
        "type": "其他",
        "description": "儒术既尊，司马迁继之以史家绝笔。"
      }
    }
  },
  {
    "id": "simaqian",
    "name": "司马迁",
    "birthYear": -145,
    "deathYear": -86,
    "dynasty": "西汉",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "人固有一死，或重于泰山，或轻于鸿毛。",
    "quoteSource": "《报任安书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "dongzhongshu",
        "type": "其他",
        "description": "儒术既尊，司马迁继之以史。"
      },
      "next": {
        "id": "simaxiangru",
        "type": "其他",
        "description": "史家绝笔与辞赋大家，并称西汉双璧。"
      }
    }
  },
  {
    "id": "simaxiangru",
    "name": "司马相如",
    "birthYear": -179,
    "deathYear": -117,
    "dynasty": "西汉",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "凤兮凤兮归故乡，遨游四海求其凰。",
    "quoteSource": "《凤求凰》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "simaqian",
        "type": "其他",
        "description": "史家绝笔与辞赋大家，并称西汉双璧。"
      },
      "next": {
        "id": "hanxuandi",
        "type": "其他",
        "description": "西汉辞赋之盛，汉宣帝以霸王道杂之，中兴汉室。"
      }
    }
  },
  {
    "id": "hanxuandi",
    "name": "汉宣帝",
    "birthYear": -91,
    "deathYear": -49,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#8C4356",
    "quote": "汉家自有制度，本以霸王道杂之。",
    "quoteSource": "《汉书·元帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "simaxiangru",
        "type": "其他",
        "description": "西汉辞赋之盛，汉宣帝中兴，以史为鉴。"
      },
      "next": {
        "id": "hanchengdi",
        "type": "其他",
        "description": "宣帝中兴，成帝承业，西汉渐衰。"
      }
    }
  },
  {
    "id": "hanchengdi",
    "name": "汉成帝",
    "birthYear": -51,
    "deathYear": 8,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#8C4356",
    "quote": "汉道行于天下，后世其有以见我。",
    "quoteSource": "《汉书·成帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "hanxuandi",
        "type": "其他",
        "description": "宣帝中兴，成帝继统，西汉由盛转衰。"
      },
      "next": {
        "id": "wangmang",
        "type": "其他",
        "description": "成帝之后，王莽托古改制，新朝代汉。"
      }
    }
  },
  {
    "id": "wangmang",
    "name": "王莽",
    "birthYear": -45,
    "deathYear": 23,
    "dynasty": "新朝",
    "class": "帝王",
    "classColor": "#8C4356",
    "quote": "予本无言，诸生其无妄言。",
    "quoteSource": "《汉书·王莽传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "hanchengdi",
        "type": "其他",
        "description": "成帝之后，王莽托古改制，改天换地。"
      },
      "next": {
        "id": "banggu",
        "type": "其他",
        "description": "新朝昙花一现，班固修汉书，记其兴亡。"
      }
    }
  },
  {
    "id": "banggu",
    "name": "班固",
    "birthYear": 32,
    "deathYear": 92,
    "dynasty": "东汉",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "汉书之作，以继史记。",
    "quoteSource": "《汉书》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "wangmang",
        "type": "其他",
        "description": "新朝昙花一现，东汉班固修汉书，记其兴亡。"
      },
      "next": {
        "id": "cailun",
        "type": "其他",
        "description": "班固修史，蔡伦造纸，文化并兴。"
      }
    }
  },
  {
    "id": "cailun",
    "name": "蔡伦",
    "birthYear": 63,
    "deathYear": 121,
    "dynasty": "东汉",
    "class": "工",
    "classColor": "#CA6924",
    "quote": "用树肤、麻头及敝布、鱼网以为纸。",
    "quoteSource": "《后汉书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "banggu",
        "type": "其他",
        "description": "班固修史，蔡伦造纸，文化并兴。"
      },
      "next": {
        "id": "zhangheng",
        "type": "其他",
        "description": "造纸之后，张衡以科学名世。"
      }
    }
  },
  {
    "id": "zhangheng",
    "name": "张衡",
    "birthYear": 78,
    "deathYear": 139,
    "dynasty": "东汉",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "浑天如鸡子，地如鸡中黄。",
    "quoteSource": "《浑天仪注》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "cailun",
        "type": "其他",
        "description": "造纸之后，张衡以科学名世。"
      },
      "next": {
        "id": "huatuo",
        "type": "其他",
        "description": "科学之外，华佗以医术济世。"
      }
    }
  },
  {
    "id": "huatuo",
    "name": "华佗",
    "birthYear": 145,
    "deathYear": 208,
    "dynasty": "东汉",
    "class": "郎中",
    "classColor": "#F0C239",
    "quote": "人体欲得劳动，但不当使极尔。",
    "quoteSource": "《后汉书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "zhangheng",
        "type": "其他",
        "description": "科学之外，华佗以医术济世。"
      },
      "next": {
        "id": "liubei",
        "type": "其他",
        "description": "汉末乱世，华佗行医，刘备以仁德兴蜀汉。"
      }
    }
  },
  {
    "id": "liubei",
    "name": "刘备",
    "birthYear": 161,
    "deathYear": 223,
    "dynasty": "三国",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "勿以恶小而为之，勿以善小而不为。",
    "quoteSource": "《遗诏敕后主》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "huatuo",
        "type": "其他",
        "description": "汉末乱世，华佗行医，刘备以仁德兴蜀汉。"
      },
      "next": {
        "id": "zhuge",
        "type": "君臣",
        "description": "三顾茅庐，请诸葛亮出山，奠定蜀汉基业。"
      }
    }
  },
  {
    "id": "zhouyu",
    "name": "周瑜",
    "birthYear": 175,
    "deathYear": 210,
    "dynasty": "东汉",
    "class": "武将",
    "classColor": "#000000",
    "quote": "曲有误，周郎顾。",
    "quoteSource": "《三国志》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "liubei",
        "type": "对手",
        "description": "孙刘争霸，瑜亮之争，赤壁奠定三分天下。"
      },
      "next": {
        "id": "luxun_sanguo",
        "type": "其他",
        "description": "周瑜之后，陆逊继为东吴名将。"
      }
    }
  },
  {
    "id": "luxun_sanguo",
    "name": "陆逊",
    "birthYear": 183,
    "deathYear": 245,
    "dynasty": "三国",
    "class": "武将",
    "classColor": "#000000",
    "quote": "夷陵之战，火烧连营。",
    "quoteSource": "《三国志》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "zhouyu",
        "type": "其他",
        "description": "继周瑜之后，为东吴名将。"
      },
      "next": {
        "id": "caiwenji",
        "type": "其他",
        "description": "三国武将之后，蔡文姬以才女名世。"
      }
    }
  },
  {
    "id": "caiwenji",
    "name": "蔡文姬",
    "birthYear": 177,
    "deathYear": 249,
    "dynasty": "三国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "汉季失权柄，董卓乱天常。",
    "quoteSource": "《悲愤诗》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "huatuo",
        "type": "其他",
        "description": "汉末乱世，华佗行医，文姬以才女名世。"
      },
      "next": {
        "id": "duyu",
        "type": "其他",
        "description": "三国之后，两晋杜预文武兼资。"
      }
    }
  },
  {
    "id": "duyu",
    "name": "杜预",
    "birthYear": 222,
    "deathYear": 285,
    "dynasty": "西晋",
    "class": "武将",
    "classColor": "#000000",
    "quote": "春秋左氏经传集解。",
    "quoteSource": "《左传》注",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "caiwenji",
        "type": "其他",
        "description": "三国之后，两晋杜预文武兼资。"
      },
      "next": {
        "id": "xiean_jin",
        "type": "其他",
        "description": "杜预之后，东晋谢安继为名将。"
      }
    }
  },
  {
    "id": "xiean_jin",
    "name": "谢安",
    "birthYear": 320,
    "deathYear": 385,
    "dynasty": "东晋",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "小儿辈大破贼。",
    "quoteSource": "《晋书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "duyu",
        "type": "其他",
        "description": "淝水之战，谢安以少胜多，继杜预文武之风。"
      },
      "next": {
        "id": "zuchongzhi",
        "type": "其他",
        "description": "东晋之后，南朝祖冲之精于算术。"
      }
    }
  },
  {
    "id": "zuchongzhi",
    "name": "祖冲之",
    "birthYear": 429,
    "deathYear": 500,
    "dynasty": "南北朝",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "圆周率介于3.1415926与3.1415927之间。",
    "quoteSource": "《缀术》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "xiean_jin",
        "type": "其他",
        "description": "东晋之后，南朝祖冲之精于算术。"
      },
      "next": {
        "id": "lidaoyuan",
        "type": "其他",
        "description": "祖冲之算经，郦道元注水经，南北朝科学并兴。"
      }
    }
  },
  {
    "id": "taohongjing",
    "name": "陶弘景",
    "birthYear": 456,
    "deathYear": 536,
    "dynasty": "南北朝",
    "class": "道士",
    "classColor": "#F0C239",
    "quote": "山中宰相。",
    "quoteSource": "《南史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "lidaoyuan",
        "type": "其他",
        "description": "南北朝科学、隐逸相继。"
      },
      "next": {
        "id": "wangwei",
        "type": "其他",
        "description": "南北朝隐逸之后，唐代王维承山水之趣。"
      }
    }
  },
  {
    "id": "fangxuanling",
    "name": "房玄龄",
    "birthYear": 579,
    "deathYear": 648,
    "dynasty": "唐",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "房谋杜断。",
    "quoteSource": "《旧唐书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "taohongjing",
        "type": "其他",
        "description": "南北朝之后，唐初房玄龄开贞观之治。"
      },
      "next": {
        "id": "weizheng",
        "type": "同僚",
        "description": "与魏徵同为贞观名臣。"
      }
    }
  },
  {
    "id": "weizheng",
    "name": "魏徵",
    "birthYear": 580,
    "deathYear": 643,
    "dynasty": "唐",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "以铜为镜，可以正衣冠；以古为镜，可以知兴替。",
    "quoteSource": "《旧唐书》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "fangxuanling",
        "type": "同僚",
        "description": "与房玄龄同为贞观名臣。"
      },
      "next": {
        "id": "yanzhenqing",
        "type": "其他",
        "description": "贞观之后，颜真卿以忠义名世。"
      }
    }
  },
  {
    "id": "yanzhenqing",
    "name": "颜真卿",
    "birthYear": 709,
    "deathYear": 785,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "祭侄文稿，天下第二行书。",
    "quoteSource": "《祭侄文稿》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "weizheng",
        "type": "其他",
        "description": "贞观之后，颜真卿以忠义名世。"
      },
      "next": {
        "id": "liuzongyuan",
        "type": "其他",
        "description": "颜真卿之后，柳宗元、刘禹锡继起。"
      }
    }
  },
  {
    "id": "liuzongyuan",
    "name": "柳宗元",
    "birthYear": 773,
    "deathYear": 819,
    "dynasty": "唐",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "千山鸟飞绝，万径人踪灭。",
    "quoteSource": "《江雪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "yanzhenqing",
        "type": "其他",
        "description": "颜真卿之后，柳宗元继起。"
      },
      "next": {
        "id": "huangchao",
        "type": "其他",
        "description": "中唐之后，黄巢起义，唐祚将终。"
      }
    }
  },
  {
    "id": "huangchao",
    "name": "黄巢",
    "birthYear": 835,
    "deathYear": 884,
    "dynasty": "唐",
    "class": "武将",
    "classColor": "#000000",
    "quote": "冲天香阵透长安，满城尽带黄金甲。",
    "quoteSource": "《不第后赋菊》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "liuzongyuan",
        "type": "其他",
        "description": "中唐之后，黄巢起义。"
      },
      "next": {
        "id": "liyu",
        "type": "其他",
        "description": "唐亡之后，五代李煜以词名世。"
      }
    }
  },
  {
    "id": "liyu",
    "name": "李煜",
    "birthYear": 937,
    "deathYear": 978,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#8C4356",
    "quote": "问君能有几多愁？恰似一江春水向东流。",
    "quoteSource": "《虞美人》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "huangchao",
        "type": "其他",
        "description": "唐末黄巢之后，五代李煜以词名世。"
      },
      "next": {
        "id": "ouyangxiu",
        "type": "其他",
        "description": "五代之后，北宋欧阳修开古文新风。"
      }
    }
  },
  {
    "id": "ouyangxiu",
    "name": "欧阳修",
    "birthYear": 1007,
    "deathYear": 1072,
    "dynasty": "北宋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "醉翁之意不在酒，在乎山水之间也。",
    "quoteSource": "《醉翁亭记》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "liyu",
        "type": "其他",
        "description": "五代之后，北宋欧阳修开古文新风。"
      },
      "next": {
        "id": "fanzhongyan",
        "type": "同僚",
        "description": "与范仲淹、包拯同为北宋名臣。"
      }
    }
  },
  {
    "id": "fanzhongyan",
    "name": "范仲淹",
    "birthYear": 989,
    "deathYear": 1052,
    "dynasty": "北宋",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "先天下之忧而忧，后天下之乐而乐。",
    "quoteSource": "《岳阳楼记》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "ouyangxiu",
        "type": "同僚",
        "description": "与欧阳修同为北宋名臣。"
      },
      "next": {
        "id": "baogong",
        "type": "同僚",
        "description": "与包拯、沈括同朝。"
      }
    }
  },
  {
    "id": "baogong",
    "name": "包拯",
    "birthYear": 999,
    "deathYear": 1062,
    "dynasty": "北宋",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "清心为治本，直道是身谋。",
    "quoteSource": "《书端州郡斋壁》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "fanzhongyan",
        "type": "同僚",
        "description": "与范仲淹同朝。"
      },
      "next": {
        "id": "shenkuo",
        "type": "其他",
        "description": "包拯之后，沈括以科学名世。"
      }
    }
  },
  {
    "id": "shenkuo",
    "name": "沈括",
    "birthYear": 1031,
    "deathYear": 1095,
    "dynasty": "北宋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "梦溪笔谈，集科学之大成。",
    "quoteSource": "《梦溪笔谈》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "baogong",
        "type": "其他",
        "description": "包拯之后，沈括以科学名世。"
      },
      "next": {
        "id": "luyou",
        "type": "其他",
        "description": "北宋之后，南宋陆游以诗名世。"
      }
    }
  },
  {
    "id": "luyou",
    "name": "陆游",
    "birthYear": 1125,
    "deathYear": 1210,
    "dynasty": "南宋",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "王师北定中原日，家祭无忘告乃翁。",
    "quoteSource": "《示儿》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "shenkuo",
        "type": "其他",
        "description": "北宋之后，南宋陆游以诗名世。"
      },
      "next": {
        "id": "yuefei",
        "type": "其他",
        "description": "陆游之诗与岳飞之志，同为南宋精神。"
      }
    }
  },
  {
    "id": "yuefei",
    "name": "岳飞",
    "birthYear": 1103,
    "deathYear": 1142,
    "dynasty": "南宋",
    "class": "武将",
    "classColor": "#000000",
    "quote": "怒发冲冠，凭栏处、潇潇雨歇。",
    "quoteSource": "《满江红》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "luyou",
        "type": "其他",
        "description": "陆游之诗与岳飞之志，同为南宋精神。"
      },
      "next": {
        "id": "liubofu",
        "type": "其他",
        "description": "岳飞之后，陆秀夫继为南宋忠臣。"
      }
    }
  },
  {
    "id": "liubofu",
    "name": "陆秀夫",
    "birthYear": 1236,
    "deathYear": 1279,
    "dynasty": "南宋",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "背帝投海，与国俱亡。",
    "quoteSource": "《宋史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": "yuefei",
        "type": "其他",
        "description": "岳飞之后，陆秀夫继为南宋忠臣。"
      },
      "next": {
        "id": "liubofu_end",
        "type": "其他",
        "description": "南宋之后，明代刘伯温开基。"
      }
    }
  },
  {
    "id": "liubofu_end",
    "name": "刘伯温",
    "birthYear": 1311,
    "deathYear": 1375,
    "dynasty": "明",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "前知五百年，后知五百年。",
    "quoteSource": "《烧饼歌》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "liubofu",
        "type": "其他",
        "description": "南宋陆秀夫之后，明代刘伯温开基。"
      },
      "next": {
        "id": "yuqian",
        "type": "其他",
        "description": "刘伯温之后，于谦继为明代名臣。"
      }
    }
  },
  {
    "id": "yuqian",
    "name": "于谦",
    "birthYear": 1398,
    "deathYear": 1457,
    "dynasty": "明",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "粉骨碎身浑不怕，要留清白在人间。",
    "quoteSource": "《石灰吟》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "liubofu_end",
        "type": "其他",
        "description": "刘伯温之后，于谦继为明代名臣。"
      },
      "next": {
        "id": "hairui",
        "type": "其他",
        "description": "于谦之后，海瑞继为明代清官。"
      }
    }
  },
  {
    "id": "hairui",
    "name": "海瑞",
    "birthYear": 1514,
    "deathYear": 1587,
    "dynasty": "明",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "直言敢谏，刚锋济物。",
    "quoteSource": "《治安疏》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "yuqian",
        "type": "其他",
        "description": "于谦之后，海瑞继为明代清官。"
      },
      "next": {
        "id": "zhenghe",
        "type": "其他",
        "description": "海瑞之后，郑和、徐光启继起。"
      }
    }
  },
  {
    "id": "zhenghe",
    "name": "郑和",
    "birthYear": 1371,
    "deathYear": 1433,
    "dynasty": "明",
    "class": "武将",
    "classColor": "#000000",
    "quote": "七下西洋，宣德海外。",
    "quoteSource": "《明史》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "hairui",
        "type": "其他",
        "description": "明代名臣相继。"
      },
      "next": {
        "id": "linzexu",
        "type": "其他",
        "description": "明代之后，清末林则徐开眼看世界。"
      }
    }
  },
  {
    "id": "linzexu",
    "name": "林则徐",
    "birthYear": 1785,
    "deathYear": 1850,
    "dynasty": "清",
    "class": "贵族",
    "classColor": "#8C4356",
    "quote": "苟利国家生死以，岂因祸福避趋之。",
    "quoteSource": "《赴戍登程口占示家人》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "zhenghe",
        "type": "其他",
        "description": "明代之后，清末林则徐开眼看世界。"
      },
      "next": {
        "id": "zuozongtang",
        "type": "同僚",
        "description": "与左宗棠、曾国藩同为晚清名臣。"
      }
    }
  },
  {
    "id": "zuozongtang",
    "name": "左宗棠",
    "birthYear": 1812,
    "deathYear": 1885,
    "dynasty": "清",
    "class": "武将",
    "classColor": "#000000",
    "quote": "身无半亩，心忧天下。",
    "quoteSource": "《左文襄公全集》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "linzexu",
        "type": "同僚",
        "description": "与林则徐、曾国藩同为晚清名臣。"
      },
      "next": {
        "id": "tansitong",
        "type": "其他",
        "description": "左宗棠之后，谭嗣同以维新名世。"
      }
    }
  },
  {
    "id": "tansitong",
    "name": "谭嗣同",
    "birthYear": 1865,
    "deathYear": 1898,
    "dynasty": "清",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "我自横刀向天笑，去留肝胆两昆仑。",
    "quoteSource": "《狱中题壁》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "zuozongtang",
        "type": "其他",
        "description": "左宗棠之后，谭嗣同以维新名世。"
      },
      "next": {
        "id": "huangxing",
        "type": "其他",
        "description": "戊戌之后，黄兴继以革命。"
      }
    }
  },
  {
    "id": "huangxing",
    "name": "黄兴",
    "birthYear": 1874,
    "deathYear": 1916,
    "dynasty": "民国",
    "class": "其它",
    "classColor": "#8C4356",
    "quote": "革命不怕死，怕死不革命。",
    "quoteSource": "《黄兴集》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "tansitong",
        "type": "其他",
        "description": "戊戌之后，黄兴继以革命。"
      },
      "next": {
        "id": "caiYuanpei",
        "type": "其他",
        "description": "革命之后，蔡元培以教育救国。"
      }
    }
  },
  {
    "id": "caiYuanpei",
    "name": "蔡元培",
    "birthYear": 1868,
    "deathYear": 1940,
    "dynasty": "民国",
    "class": "文人",
    "classColor": "#1685A9",
    "quote": "思想自由，兼容并包。",
    "quoteSource": "《北京大学开学之演说》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": "huangxing",
        "type": "其他",
        "description": "革命之后，蔡元培以教育救国。"
      }
    }
  }
];

const predefinedHis = [
  [
    "liubei",
    "zhuge",
    "sima",
    "jikang",
    "shantao",
    "ruanji",
    "xizhi",
    "xiean",
    "taoyuan",
    "huiyuan",
    "lidaoyuan",
    "wangwei",
    "libai",
    "dufu",
    "hanyu",
    "baijuyi",
    "sushi",
    "zhuxi",
    "wentianxiang",
    "wangyangming",
    "lizhi",
    "guyanwu",
    "huangzongxi",
    "wangfuzhi",
    "caoxueqin",
    "luxun"
  ],
  [
    "liubei",
    "zhuge",
    "sima",
    "jikang",
    "xizhi",
    "taoyuan",
    "wangwei",
    "libai",
    "dufu",
    "sushi",
    "zhuxi",
    "wangyangming",
    "caoxueqin",
    "luxun"
  ],
  [
    "libai",
    "dufu",
    "hanyu",
    "baijuyi",
    "sushi"
  ],
  [
    "xizhi",
    "xiean",
    "taoyuan",
    "wangwei"
  ],
  [
    "zhuxi",
    "wentianxiang",
    "wangyangming",
    "guyanwu",
    "huangzongxi",
    "wangfuzhi"
  ],
  [
    "jikang",
    "shantao",
    "ruanji",
    "xizhi"
  ],
  [
    "wangwei",
    "libai",
    "dufu",
    "sushi",
    "zhuxi"
  ],
  [
    "caoxueqin",
    "luxun"
  ]
];

var historyChainSave = {
  "positions": {
    "zhuge": {
      "x": 3644.4861343227235,
      "y": 229.55823232323232
    },
    "sima": {
      "x": 3686.708356544946,
      "y": 143.66430555555553
    },
    "jikang": {
      "x": 3744.9412882718534,
      "y": 113
    },
    "shantao": {
      "x": 4028.6762280308894,
      "y": 132
    },
    "ruanji": {
      "x": 3766.708356544946,
      "y": 251.44444444444446
    },
    "xizhi": {
      "x": 4098.498645534086,
      "y": 233.24065656565656
    },
    "xiean": {
      "x": 4184.0542010896415,
      "y": 290.7445959595959
    },
    "taoyuan": {
      "x": 4296.570579689565,
      "y": 356.58186868686875
    },
    "huiyuan": {
      "x": 4337.387534422975,
      "y": 438.96222222222224
    },
    "lidaoyuan": {
      "x": 4647.075630194616,
      "y": 162.15540404040405
    },
    "wangwei": {
      "x": 5377.828724993658,
      "y": 326.09368686868686
    },
    "libai": {
      "x": 5525.606502771437,
      "y": 403.4865151515151
    },
    "dufu": {
      "x": 5696.717613882547,
      "y": 426.3832828282828
    },
    "hanyu": {
      "x": 5874.495391660325,
      "y": 444.2205555555555
    },
    "baijuyi": {
      "x": 6006.717613882547,
      "y": 397.72449494949495
    },
    "sushi": {
      "x": 6910.710111524975,
      "y": 329.85136363636366
    },
    "zhuxi": {
      "x": 7325.521172025665,
      "y": 428.30368686868684
    },
    "wentianxiang": {
      "x": 7638.244980526518,
      "y": 425.64500000000004
    },
    "wangyangming": {
      "x": 8456.710843373494,
      "y": 311.36318181818183
    },
    "lizhi": {
      "x": 8695.240963855422,
      "y": 368.20045454545453
    },
    "guyanwu": {
      "x": 8874.469879518072,
      "y": 346.875
    },
    "huangzongxi": {
      "x": 8940.240963855422,
      "y": 393.03772727272724
    },
    "wangfuzhi": {
      "x": 8964.927710843374,
      "y": 463.7122727272727
    },
    "caoxueqin": {
      "x": 9442.808567603748,
      "y": 522.8828787878788
    },
    "luxun": {
      "x": 9835.475234270416,
      "y": 325.8391414141414
    },
    "kongzi": {
      "x": 969.0890227576974,
      "y": 114
    },
    "laozi": {
      "x": 1070.0782853383919,
      "y": 114
    },
    "sunzi": {
      "x": 1160.6338408939473,
      "y": 114
    },
    "mozi": {
      "x": 1288.9671742272808,
      "y": 174.83333333333334
    },
    "mengzi": {
      "x": 1388.1338408939473,
      "y": 182.16666666666669
    },
    "quyuan": {
      "x": 1482.1927710843374,
      "y": 289.68944444444446
    },
    "zhuangzi": {
      "x": 1358.689396449503,
      "y": 499.51883838383833
    },
    "xunzi": {
      "x": 1433.1338408939473,
      "y": 371.8600505050505
    },
    "hanfeizi": {
      "x": 1290.6338408939473,
      "y": 370.475101010101
    },
    "jingke": {
      "x": 1328.411618671725,
      "y": 281.72222222222223
    },
    "gaojianli": {
      "x": 1401.0040160642573,
      "y": 221.33333333333331
    },
    "wangjian": {
      "x": 1645.228115330173,
      "y": 421.38888888888886
    },
    "lixin": {
      "x": 1810.228115330173,
      "y": 289.9722222222222
    },
    "lisi": {
      "x": 1549.3373493975905,
      "y": 204.24999999999997
    },
    "qinshihuang": {
      "x": 1581.8373493975905,
      "y": 114
    },
    "zhaogao": {
      "x": 1627.670682730924,
      "y": 163.4759722222222
    },
    "zhangliang": {
      "x": 2111.0614486635063,
      "y": 249.75069444444443
    },
    "libi": {
      "x": 2259.39478199684,
      "y": 321.66666666666663
    },
    "hanxin": {
      "x": 2329.39478199684,
      "y": 361.1405555555556
    },
    "weiqing": {
      "x": 2378.5614486635063,
      "y": 297.57166666666666
    },
    "huoqubing": {
      "x": 2267.7281153301733,
      "y": 261.72499999999997
    },
    "dongzhongshu": {
      "x": 2091.0614486635063,
      "y": 172.64570707070703
    },
    "simaqian": {
      "x": 2159.848945494883,
      "y": 114
    },
    "simaxiangru": {
      "x": 2268.3211677171053,
      "y": 114
    },
    "hanxuandi": {
      "x": 2360.126723272661,
      "y": 114
    },
    "hanchengdi": {
      "x": 2404.39478199684,
      "y": 143.72222222222223
    },
    "wangmang": {
      "x": 2482.948998864309,
      "y": 114
    },
    "banggu": {
      "x": 2747.5296721102372,
      "y": 186.63636363636365
    },
    "cailun": {
      "x": 2873.4261367567015,
      "y": 157.73151515151505
    },
    "zhangheng": {
      "x": 2983.2125053866725,
      "y": 230.4720707070707
    },
    "huatuo": {
      "x": 3131.0534144775816,
      "y": 323.74030303030304
    },
    "liubei": {
      "x": 3504.9911848277743,
      "y": 323
    },
    "zhouyu": {
      "x": 3592.7190660496312,
      "y": 348.7394444444444
    },
    "luxun_sanguo": {
      "x": 3588.930578767168,
      "y": 416.0316666666667
    },
    "caiwenji": {
      "x": 3598.9305787671683,
      "y": 496.7209595959596
    },
    "duyu": {
      "x": 4028.6762280308894,
      "y": 447.1016666666667
    },
    "xiean_jin": {
      "x": 4398.498645534086,
      "y": 231.91125
    },
    "zuchongzhi": {
      "x": 4552.126135245121,
      "y": 149.89388888888885
    },
    "taohongjing": {
      "x": 4728.186741305727,
      "y": 167.33313131313133
    },
    "fangxuanling": {
      "x": 5426.717613882548,
      "y": 155.55555555555554
    },
    "weizheng": {
      "x": 5513.384280549214,
      "y": 179.73847222222224
    },
    "yanzhenqing": {
      "x": 5626.717613882547,
      "y": 146.87934343434344
    },
    "liuzongyuan": {
      "x": 5725.606502771437,
      "y": 201.1173232323232
    },
    "huangchao": {
      "x": 5954.495391660325,
      "y": 192.94944444444445
    },
    "liyu": {
      "x": 6386.265667080531,
      "y": 153.65208333333334
    },
    "ouyangxiu": {
      "x": 6532.932333747197,
      "y": 163.5101515151515
    },
    "fanzhongyan": {
      "x": 6708.487889302753,
      "y": 127.34347222222222
    },
    "baogong": {
      "x": 6776.265667080531,
      "y": 132.47930555555553
    },
    "shenkuo": {
      "x": 6839.599000413864,
      "y": 179.34742424242424
    },
    "luyou": {
      "x": 7165.521172025665,
      "y": 234.57752525252525
    },
    "yuefei": {
      "x": 7213.298949803443,
      "y": 149.4638888888889
    },
    "liubofu": {
      "x": 7680.4672027487395,
      "y": 198.61513888888888
    },
    "liubofu_end": {
      "x": 7904.759036144578,
      "y": 183.52875
    },
    "yuqian": {
      "x": 8113.397590361446,
      "y": 215.33125
    },
    "hairui": {
      "x": 8519.915662650603,
      "y": 121.13375000000002
    },
    "zhenghe": {
      "x": 8686.003216856543,
      "y": 256.71500000000003
    },
    "linzexu": {
      "x": 9073.927710843373,
      "y": 165.93625
    },
    "zuozongtang": {
      "x": 9274.987951807228,
      "y": 170.11833333333334
    },
    "tansitong": {
      "x": 9467.4765729585,
      "y": 161.27570707070706
    },
    "huangxing": {
      "x": 9555.052208835341,
      "y": 197.8498611111111
    },
    "caiYuanpei": {
      "x": 9607.927710843373,
      "y": 119.22409090909093
    }
  },
  "customPersons": []
};
