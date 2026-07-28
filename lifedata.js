/* lifedata.js — 合并数据文件 */
const hisData = [
  {
    "id": 1,
    "name": "秦始皇",
    "birthYear": -259,
    "deathYear": -210,
    "dynasty": "秦",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "寡人以眇眇之身，兴兵诛暴乱，赖宗庙之灵，六王咸伏其辜，天下大定。",
    "quoteSource": "《史记·秦始皇本纪》",
    "isKeyFigure": true,
    "relationships": {
      "next": {
        "id": 2,
        "type": "君臣",
        "description": "李斯为秦丞相，佐始皇并六国、定郡县、书同文，君臣共定一统之制。"
      }
    }
  },
  {
    "id": 2,
    "name": "李斯",
    "birthYear": -284,
    "deathYear": -208,
    "dynasty": "秦",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "今陛下致昆山之玉，有随和之宝……此数宝者，秦不生一焉，而陛下说之，何也？",
    "quoteSource": "《史记·李斯列传》（谏逐客书）",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 1,
        "type": "同僚",
        "description": "沙丘之变，李斯与赵高合谋矫诏，赐扶苏、蒙恬死，立胡亥为二世，同朝共事。"
      },
      "next": {
        "id": 3,
        "type": "同僚",
        "description": "沙丘之变，李斯与赵高合谋矫诏，赐扶苏、蒙恬死，立胡亥为二世，同朝共事。"
      }
    }
  },
  {
    "id": 3,
    "name": "赵高",
    "birthYear": -258,
    "deathYear": -207,
    "dynasty": "秦",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "高与丞相斯阴谋矫诏……立子胡亥为太子。",
    "quoteSource": "《史记·秦始皇本纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 2,
        "type": "其他",
        "description": "赵高弑二世后立子婴，子婴与其子谋，诱赵高入斋宫刺杀之，二人当面交锋。"
      },
      "next": {
        "id": 4,
        "type": "其他",
        "description": "赵高弑二世后立子婴，子婴与其子谋，诱赵高入斋宫刺杀之，二人当面交锋。"
      }
    }
  },
  {
    "id": 4,
    "name": "子婴",
    "birthYear": -240,
    "deathYear": -206,
    "dynasty": "秦",
    "class": "皇室",
    "classColor": "#8C4356",
    "quote": "子婴与其子二人谋曰：'丞相高杀二世望夷宫……'遂刺杀高于斋宫。",
    "quoteSource": "《史记·秦始皇本纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 3,
        "type": "对手",
        "description": "沛公入武关，秦王子婴素车白马、系颈以组，封皇帝玺符节，降轵道旁，与刘邦当面受降。"
      },
      "next": {
        "id": 5,
        "type": "对手",
        "description": "沛公入武关，秦王子婴素车白马、系颈以组，封皇帝玺符节，降轵道旁，与刘邦当面受降。"
      }
    }
  },
  {
    "id": 5,
    "name": "刘邦",
    "birthYear": -256,
    "deathYear": -195,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "沛公至霸上……秦王子婴素车白马，系颈以组，封皇帝玺符节，降轵道旁。",
    "quoteSource": "《史记·高祖本纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 4,
        "type": "君臣",
        "description": "萧何为主吏掾，从刘邦起兵入秦，镇关中、荐韩信，开国第一功臣。"
      },
      "next": {
        "id": 6,
        "type": "君臣",
        "description": "萧何为主吏掾，从刘邦起兵入秦，镇关中、荐韩信，开国第一功臣。"
      }
    }
  },
  {
    "id": 6,
    "name": "萧何",
    "birthYear": -257,
    "deathYear": -193,
    "dynasty": "西汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "何为主吏，居县为豪吏矣……高祖为亭长，常佑之。",
    "quoteSource": "《史记·萧相国世家》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 5,
        "type": "同僚",
        "description": "萧何月下追韩信，荐于汉王曰'必欲争天下，非信无可与计事者'，登坛拜大将。"
      },
      "next": {
        "id": 7,
        "type": "同僚",
        "description": "萧何月下追韩信，荐于汉王曰'必欲争天下，非信无可与计事者'，登坛拜大将。"
      }
    }
  },
  {
    "id": 7,
    "name": "韩信",
    "birthYear": -231,
    "deathYear": -196,
    "dynasty": "西汉",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "何曰：'王素慢无礼，今拜大将如呼小儿耳……'王必欲拜之，择良日，斋戒设坛场。",
    "quoteSource": "《史记·淮阴侯列传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 6,
        "type": "同僚",
        "description": "汉初三杰同佐刘邦，张良画策、萧何镇国、韩信将兵，共定天下。"
      },
      "next": {
        "id": 8,
        "type": "同僚",
        "description": "汉初三杰同佐刘邦，张良画策、萧何镇国、韩信将兵，共定天下。"
      }
    }
  },
  {
    "id": 8,
    "name": "张良",
    "birthYear": -250,
    "deathYear": -186,
    "dynasty": "西汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "良乃称说引古今，以死争太子……上起去，罢酒。竟不易太子者，良本招此四人之力也。",
    "quoteSource": "《史记·留侯世家》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 7,
        "type": "师徒",
        "description": "张良为太子少傅，定计迎商山四皓以安刘盈太子位，与惠帝有师徒辅佐之谊。"
      },
      "next": {
        "id": 9,
        "type": "师徒",
        "description": "张良为太子少傅，定计迎商山四皓以安刘盈太子位，与惠帝有师徒辅佐之谊。"
      }
    }
  },
  {
    "id": 9,
    "name": "刘盈",
    "birthYear": -210,
    "deathYear": -188,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "孝惠皇帝，高祖太子也……即位，尊吕后为太后。",
    "quoteSource": "《史记·吕太后本纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 8,
        "type": "亲友",
        "description": "刘盈为刘恒之兄，皆刘邦之子，少时同处汉宫为王子，手足相见。"
      },
      "next": {
        "id": 10,
        "type": "亲友",
        "description": "刘盈为刘恒之兄，皆刘邦之子，少时同处汉宫为王子，手足相见。"
      }
    }
  },
  {
    "id": 10,
    "name": "刘恒",
    "birthYear": -202,
    "deathYear": -157,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "代王……至高陵休止……群臣奉天子玺符献代王……代王即天子位。",
    "quoteSource": "《史记·孝文本纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 9,
        "type": "亲友",
        "description": "汉文帝立刘启为太子，父子同朝，景帝继统。"
      },
      "next": {
        "id": 11,
        "type": "亲友",
        "description": "汉文帝立刘启为太子，父子同朝，景帝继统。"
      }
    }
  },
  {
    "id": 11,
    "name": "刘启",
    "birthYear": -188,
    "deathYear": -141,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "王夫人梦日入其怀……生男，是为彻……景帝即位，王夫人男为太子。",
    "quoteSource": "《史记·外戚世家》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 10,
        "type": "亲友",
        "description": "景帝立刘彻为太子，后即位为汉武帝，父子相继。"
      },
      "next": {
        "id": 12,
        "type": "亲友",
        "description": "景帝立刘彻为太子，后即位为汉武帝，父子相继。"
      }
    }
  },
  {
    "id": 12,
    "name": "刘彻",
    "birthYear": -156,
    "deathYear": -87,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "大将军青侍中，上踞厕而视之……青既益尊，姊为皇后。",
    "quoteSource": "《史记·汲郑列传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 11,
        "type": "君臣",
        "description": "卫青为大将军，姊卫子夫为皇后，出入禁中，与武帝君臣相得，北击匈奴。"
      },
      "next": {
        "id": 13,
        "type": "君臣",
        "description": "卫青为大将军，姊卫子夫为皇后，出入禁中，与武帝君臣相得，北击匈奴。"
      }
    }
  },
  {
    "id": 13,
    "name": "卫青",
    "birthYear": -140,
    "deathYear": -106,
    "dynasty": "西汉",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "大将军青姊子霍去病……年十八，幸，为天子侍中。",
    "quoteSource": "《史记·卫将军骠骑列传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 12,
        "type": "亲友",
        "description": "霍去病为卫青姊子（外甥），舅甥同掌汉军，并出征匈奴。"
      },
      "next": {
        "id": 14,
        "type": "亲友",
        "description": "霍去病为卫青姊子（外甥），舅甥同掌汉军，并出征匈奴。"
      }
    }
  },
  {
    "id": 14,
    "name": "霍去病",
    "birthYear": -140,
    "deathYear": -117,
    "dynasty": "西汉",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "霍光字子孟，骠骑将军去病弟也。",
    "quoteSource": "《汉书·霍光传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 13,
        "type": "亲友",
        "description": "霍光为霍去病异母弟，去病携其见武帝，兄弟相继为汉重臣。"
      },
      "next": {
        "id": 15,
        "type": "亲友",
        "description": "霍光为霍去病异母弟，去病携其见武帝，兄弟相继为汉重臣。"
      }
    }
  },
  {
    "id": 15,
    "name": "霍光",
    "birthYear": -140,
    "deathYear": -68,
    "dynasty": "西汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "光与群臣连名奏王……皇太后诏废……迎立卫太子孙病已……是为宣帝。",
    "quoteSource": "《汉书·霍光传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 14,
        "type": "君臣",
        "description": "霍光受武帝托孤，立刘询为宣帝，宣帝朝会霍光，'芒刺在背'。"
      },
      "next": {
        "id": 16,
        "type": "君臣",
        "description": "霍光受武帝托孤，立刘询为宣帝，宣帝朝会霍光，'芒刺在背'。"
      }
    }
  },
  {
    "id": 16,
    "name": "刘询",
    "birthYear": -91,
    "deathYear": -48,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "宣帝即位，久之……立子奭为太子。",
    "quoteSource": "《汉书·元帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 15,
        "type": "亲友",
        "description": "汉宣帝立刘奭为太子，即元帝，父子相继。"
      },
      "next": {
        "id": 17,
        "type": "亲友",
        "description": "汉宣帝立刘奭为太子，即元帝，父子相继。"
      }
    }
  },
  {
    "id": 17,
    "name": "刘奭",
    "birthYear": -74,
    "deathYear": -33,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "元帝即位……太子骜为太子……元帝崩，太子即皇帝位。",
    "quoteSource": "《汉书·成帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 16,
        "type": "亲友",
        "description": "汉元帝立刘骜为太子，即成帝，父子相继。"
      },
      "next": {
        "id": 18,
        "type": "亲友",
        "description": "汉元帝立刘骜为太子，即成帝，父子相继。"
      }
    }
  },
  {
    "id": 18,
    "name": "刘骜",
    "birthYear": -51,
    "deathYear": -7,
    "dynasty": "西汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "王莽字巨君，孝元皇后之弟子也……成帝即位，以莽为司马。",
    "quoteSource": "《汉书·王莽传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 17,
        "type": "亲友",
        "description": "王莽为元帝王皇后之侄，成帝朝为大司马，外戚辅政，君臣共事。"
      },
      "next": {
        "id": 19,
        "type": "亲友",
        "description": "王莽为元帝王皇后之侄，成帝朝为大司马，外戚辅政，君臣共事。"
      }
    }
  },
  {
    "id": 19,
    "name": "王莽",
    "birthYear": -45,
    "deathYear": 23,
    "dynasty": "新莽",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "王莽时为掌乐大夫……数奏赋颂，好音律。",
    "quoteSource": "《后汉书·桓谭传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 18,
        "type": "同僚",
        "description": "桓谭仕于新朝为掌乐大夫，与王莽同朝共事于长安。"
      },
      "next": {
        "id": 20,
        "type": "同僚",
        "description": "桓谭仕于新朝为掌乐大夫，与王莽同朝共事于长安。"
      }
    }
  },
  {
    "id": 20,
    "name": "桓谭",
    "birthYear": -23,
    "deathYear": 56,
    "dynasty": "东汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "世祖即位，征待诏……帝每宴，辄令鼓琴，好其繁声。帝闻之，不乐。",
    "quoteSource": "《后汉书·桓谭传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 19,
        "type": "君臣",
        "description": "光武帝即位征桓谭为议郎，引见论政，帝令鼓琴，君臣当面论治。"
      },
      "next": {
        "id": 21,
        "type": "君臣",
        "description": "光武帝即位征桓谭为议郎，引见论政，帝令鼓琴，君臣当面论治。"
      }
    }
  },
  {
    "id": 21,
    "name": "刘秀",
    "birthYear": -5,
    "deathYear": 57,
    "dynasty": "东汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "邓禹杖策北渡，追及于邺，因得见……禹曰：'但愿明公威德加于四海……'",
    "quoteSource": "《后汉书·邓禹传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 20,
        "type": "君臣",
        "description": "邓禹追光武于邺，定计佐命，为中兴首功，君臣当面定策。"
      },
      "next": {
        "id": 22,
        "type": "君臣",
        "description": "邓禹追光武于邺，定计佐命，为中兴首功，君臣当面定策。"
      }
    }
  },
  {
    "id": 22,
    "name": "马援",
    "birthYear": -14,
    "deathYear": 49,
    "dynasty": "东汉",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "援至洛阳，帝引见……谓援曰：'卿遨游二帝间，今见卿，使人大惭。'",
    "quoteSource": "《后汉书·马援传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 21,
        "type": "君臣",
        "description": "光武召见马援，援遂为汉将；其女后为明帝后，故马援与明帝有翁婿之亲。"
      },
      "next": {
        "id": 23,
        "type": "君臣",
        "description": "光武召见马援，援遂为汉将；其女后为明帝后，故马援与明帝有翁婿之亲。"
      }
    }
  },
  {
    "id": 23,
    "name": "刘庄",
    "birthYear": 28,
    "deathYear": 75,
    "dynasty": "东汉",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "后讳某，伏波将军援之小女也……为皇太子妃，即位为皇后。",
    "quoteSource": "《后汉书·明德马皇后纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 22,
        "type": "亲友",
        "description": "明德马皇后为马援之女、明帝之妻，翁婿姻亲；班固为明帝朝兰台令史。"
      },
      "next": {
        "id": 24,
        "type": "亲友",
        "description": "明德马皇后为马援之女、明帝之妻，翁婿姻亲；班固为明帝朝兰台令史。"
      }
    }
  },
  {
    "id": 24,
    "name": "班固",
    "birthYear": 32,
    "deathYear": 92,
    "dynasty": "东汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "父彪卒，归乡里……明帝奇之，召诣校书部，除兰台令史。",
    "quoteSource": "《后汉书·班固传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 23,
        "type": "亲友",
        "description": "班超为班固之弟，兄弟同母，班超投笔从戎，班固续《汉书》。"
      },
      "next": {
        "id": 25,
        "type": "亲友",
        "description": "班超为班固之弟，兄弟同母，班超投笔从戎，班固续《汉书》。"
      }
    }
  },
  {
    "id": 25,
    "name": "班超",
    "birthYear": 32,
    "deathYear": 102,
    "dynasty": "东汉",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "班超字仲升，扶风平陵人，徐令彪之少子也。其兄固……",
    "quoteSource": "《后汉书·班超传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 24,
        "type": "亲友",
        "description": "班昭为班超、班固之妹，续成《汉书》，兄妹同以文史名世。"
      },
      "next": {
        "id": 26,
        "type": "亲友",
        "description": "班昭为班超、班固之妹，续成《汉书》，兄妹同以文史名世。"
      }
    }
  },
  {
    "id": 26,
    "name": "班昭",
    "birthYear": 45,
    "deathYear": 117,
    "dynasty": "东汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "昭字惠班，兄固著《汉书》……帝数召入宫，令皇后诸贵人师事焉。",
    "quoteSource": "《后汉书·曹世叔妻传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 25,
        "type": "同僚",
        "description": "蔡邕后世续补《汉书》于东观，承班昭之业；二人先后同司汉史于东观，前后相承。"
      },
      "next": {
        "id": 27,
        "type": "同僚",
        "description": "蔡邕后世续补《汉书》于东观，承班昭之业；二人先后同司汉史于东观，前后相承。"
      }
    }
  },
  {
    "id": 27,
    "name": "蔡邕",
    "birthYear": 133,
    "deathYear": 192,
    "dynasty": "东汉",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "蔡邕见而奇之。时邕才学显著，贵重朝廷……闻粲在门，倒屣迎之。",
    "quoteSource": "《三国志·魏书·王粲传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 26,
        "type": "同僚",
        "description": "王粲少时谒蔡邕，邕倒屣迎之，叹'此王公孙也，有异才，吾不如也'，当面激赏。"
      },
      "next": {
        "id": 28,
        "type": "同僚",
        "description": "王粲少时谒蔡邕，邕倒屣迎之，叹'此王公孙也，有异才，吾不如也'，当面激赏。"
      }
    }
  },
  {
    "id": 28,
    "name": "王粲",
    "birthYear": 177,
    "deathYear": 217,
    "dynasty": "三国",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "粲至，年既幼弱，容状短小，一坐尽惊。邕曰：'此王公孙也，有异才。'",
    "quoteSource": "《三国志·魏书·王粲传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 27,
        "type": "君臣",
        "description": "王粲归曹操，辟为丞相掾，赐爵关内侯，君臣共事于邺下。"
      },
      "next": {
        "id": 29,
        "type": "君臣",
        "description": "王粲归曹操，辟为丞相掾，赐爵关内侯，君臣共事于邺下。"
      }
    }
  },
  {
    "id": 29,
    "name": "曹操",
    "birthYear": 155,
    "deathYear": 220,
    "dynasty": "三国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "操以手指玄德，后自指曰：'今天下英雄，唯使君与操耳。'",
    "quoteSource": "《三国志·蜀书·先主传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 28,
        "type": "对手",
        "description": "曹操煮酒论英雄，与刘备当面对坐，言'天下英雄唯使君与操'，对手相知。"
      },
      "next": {
        "id": 30,
        "type": "对手",
        "description": "曹操煮酒论英雄，与刘备当面对坐，言'天下英雄唯使君与操'，对手相知。"
      }
    }
  },
  {
    "id": 30,
    "name": "刘备",
    "birthYear": 161,
    "deathYear": 223,
    "dynasty": "三国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "三顾臣于草庐之中，咨臣以当世之事。",
    "quoteSource": "《三国志·蜀书·诸葛亮传》引《出师表》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 29,
        "type": "君臣",
        "description": "刘备三顾茅庐，诸葛亮隆中对定三分，君臣鱼水。"
      },
      "next": {
        "id": 31,
        "type": "君臣",
        "description": "刘备三顾茅庐，诸葛亮隆中对定三分，君臣鱼水。"
      }
    }
  },
  {
    "id": 31,
    "name": "诸葛亮",
    "birthYear": 181,
    "deathYear": 234,
    "dynasty": "三国",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "亮深谓备雄姿杰出，遂解带写诚，厚相结纳。",
    "quoteSource": "《三国志·蜀书·诸葛亮传》注引《襄阳记》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 30,
        "type": "对手",
        "description": "诸葛亮与司马懿祁山对峙，对阵交锋；懿使千里请战，亮遗巾帼妇人之服以辱之，战场相交。"
      },
      "next": {
        "id": 32,
        "type": "对手",
        "description": "诸葛亮与司马懿祁山对峙，对阵交锋；懿使千里请战，亮遗巾帼妇人之服以辱之，战场相交。"
      }
    }
  },
  {
    "id": 32,
    "name": "司马懿",
    "birthYear": 179,
    "deathYear": 251,
    "dynasty": "三国",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "魏武帝为丞相，辟帝为文学掾……敕行者曰：'若复盘桓，便收之。'帝惧而就职。",
    "quoteSource": "《晋书·宣帝纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 31,
        "type": "亲友",
        "description": "司马懿与司马昭为父子，昭为懿次子，继掌魏政。"
      },
      "next": {
        "id": 33,
        "type": "亲友",
        "description": "司马懿与司马昭为父子，昭为懿次子，继掌魏政。"
      }
    }
  },
  {
    "id": 33,
    "name": "司马昭",
    "birthYear": 211,
    "deathYear": 265,
    "dynasty": "三国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "文帝之崩，帝执司马昭之手，以景帝属之。",
    "quoteSource": "《晋书·武帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 32,
        "type": "亲友",
        "description": "司马炎为司马昭之子，昭受魏禅前夕崩，炎继晋王位，旋代魏称帝。"
      },
      "next": {
        "id": 34,
        "type": "亲友",
        "description": "司马炎为司马昭之子，昭受魏禅前夕崩，炎继晋王位，旋代魏称帝。"
      }
    }
  },
  {
    "id": 34,
    "name": "司马炎",
    "birthYear": 236,
    "deathYear": 290,
    "dynasty": "西晋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "帝……密有灭吴之计，而朝议多违，唯羊祜、杜预、张华以为信然。",
    "quoteSource": "《晋书·羊祜传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 33,
        "type": "君臣",
        "description": "羊祜为晋尚书左仆射、都督荆州，筹划灭吴，与武帝君臣定策。"
      },
      "next": {
        "id": 35,
        "type": "君臣",
        "description": "羊祜为晋尚书左仆射、都督荆州，筹划灭吴，与武帝君臣定策。"
      }
    }
  },
  {
    "id": 35,
    "name": "羊祜",
    "birthYear": 221,
    "deathYear": 278,
    "dynasty": "西晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "抗尝病，祜馈之药，抗服之无疑心……曰：'羊祜岂酖人者！'",
    "quoteSource": "《晋书·羊祜传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 34,
        "type": "对手",
        "description": "羊祜与陆抗各镇荆州对峙，祜赠药、抗服之，边境对手而相重，当面交谊。"
      },
      "next": {
        "id": 36,
        "type": "对手",
        "description": "羊祜与陆抗各镇荆州对峙，祜赠药、抗服之，边境对手而相重，当面交谊。"
      }
    }
  },
  {
    "id": 36,
    "name": "陆抗",
    "birthYear": 226,
    "deathYear": 274,
    "dynasty": "西晋",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "陆抗字幼节，孙策外孙也……父逊，黄武初……抗字幼节，建武校尉。",
    "quoteSource": "《三国志·吴书·陆抗传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 35,
        "type": "亲友",
        "description": "陆机为陆抗之子，抗卒后机领父兵，兄弟并以才名重于洛阳。"
      },
      "next": {
        "id": 37,
        "type": "亲友",
        "description": "陆机为陆抗之子，抗卒后机领父兵，兄弟并以才名重于洛阳。"
      }
    }
  },
  {
    "id": 37,
    "name": "陆机",
    "birthYear": 261,
    "deathYear": 303,
    "dynasty": "西晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "石崇、陆机……二十四友，号曰'金谷之会'。",
    "quoteSource": "《晋书·贾谧传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 36,
        "type": "同僚",
        "description": "陆机与潘岳同列贾谧二十四友，洛阳文人同游共事。"
      },
      "next": {
        "id": 38,
        "type": "同僚",
        "description": "陆机与潘岳同列贾谧二十四友，洛阳文人同游共事。"
      }
    }
  },
  {
    "id": 38,
    "name": "潘岳",
    "birthYear": 247,
    "deathYear": 300,
    "dynasty": "西晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "岳性轻躁，趋世利……与石崇等谄事贾谧，每候其出，与崇辄望尘而拜。",
    "quoteSource": "《晋书·潘岳传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 37,
        "type": "同僚",
        "description": "潘岳与石崇同列金谷二十四友，金谷园宴集唱和，同僚交好。"
      },
      "next": {
        "id": 39,
        "type": "同僚",
        "description": "潘岳与石崇同列金谷二十四友，金谷园宴集唱和，同僚交好。"
      }
    }
  },
  {
    "id": 39,
    "name": "石崇",
    "birthYear": 249,
    "deathYear": 300,
    "dynasty": "西晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "石崇、欧阳建……王导之徒咸出其门。",
    "quoteSource": "《晋书·王导传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 38,
        "type": "同僚",
        "description": "王导为西晋末琅邪王司马睿司马，与石崇等并游于洛下士林，同朝共事。"
      },
      "next": {
        "id": 40,
        "type": "同僚",
        "description": "王导为西晋末琅邪王司马睿司马，与石崇等并游于洛下士林，同朝共事。"
      }
    }
  },
  {
    "id": 40,
    "name": "王导",
    "birthYear": 276,
    "deathYear": 339,
    "dynasty": "东晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "导与元帝有布衣之好……及帝登尊号，百官陪列，命导升御床共坐。",
    "quoteSource": "《晋书·王导传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 39,
        "type": "君臣",
        "description": "王导与司马睿素相亲善，佐其镇建康、开东晋，'王与马共天下'。"
      },
      "next": {
        "id": 41,
        "type": "君臣",
        "description": "王导与司马睿素相亲善，佐其镇建康、开东晋，'王与马共天下'。"
      }
    }
  },
  {
    "id": 41,
    "name": "司马睿",
    "birthYear": 276,
    "deathYear": 323,
    "dynasty": "东晋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "羲之幼讷于言，人未之奇……及长，辩赡，以骨鲠称，尤善隶书。",
    "quoteSource": "《晋书·王羲之传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 40,
        "type": "亲友",
        "description": "王羲之出王导之族，导为其从叔祖，羲之初仕即在建康王氏门第，亲族同朝。"
      },
      "next": {
        "id": 42,
        "type": "亲友",
        "description": "王羲之出王导之族，导为其从叔祖，羲之初仕即在建康王氏门第，亲族同朝。"
      }
    }
  },
  {
    "id": 42,
    "name": "王羲之",
    "birthYear": 303,
    "deathYear": 361,
    "dynasty": "东晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "谢安未仕时，亦居会稽，与王羲之同好……尝与羲之登冶城，悠然遐想。",
    "quoteSource": "《晋书·谢安传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 41,
        "type": "同僚",
        "description": "王羲之与谢安同游东山、共预兰亭之会（353年），文人名士当面唱和。"
      },
      "next": {
        "id": 43,
        "type": "同僚",
        "description": "王羲之与谢安同游东山、共预兰亭之会（353年），文人名士当面唱和。"
      }
    }
  },
  {
    "id": 43,
    "name": "谢安",
    "birthYear": 320,
    "deathYear": 385,
    "dynasty": "东晋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "玄少好佩紫罗香囊……安患之而不欲伤其意，因戏赌取，即焚之。",
    "quoteSource": "《晋书·谢玄传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 42,
        "type": "亲友",
        "description": "谢玄为谢安之侄，安自幼教之，淝水之战玄以北府兵破苻坚，叔侄共济。"
      },
      "next": {
        "id": 44,
        "type": "亲友",
        "description": "谢玄为谢安之侄，安自幼教之，淝水之战玄以北府兵破苻坚，叔侄共济。"
      }
    }
  },
  {
    "id": 44,
    "name": "谢玄",
    "birthYear": 343,
    "deathYear": 388,
    "dynasty": "东晋",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "时苻坚强盛……玄募骁勇之士，得彭城刘牢之等……百战百胜，号为北府兵。",
    "quoteSource": "《晋书·刘牢之传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 43,
        "type": "君臣",
        "description": "北府兵为谢玄所创，刘裕即出于北府体系，先后为东晋将领，同掌军旅之任。"
      },
      "next": {
        "id": 45,
        "type": "君臣",
        "description": "北府兵为谢玄所创，刘裕即出于北府体系，先后为东晋将领，同掌军旅之任。"
      }
    }
  },
  {
    "id": 45,
    "name": "刘裕",
    "birthYear": 363,
    "deathYear": 422,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "高祖武皇帝讳裕，字德舆……既克长安，天子（晋安帝）遣使劳师。",
    "quoteSource": "《宋书·武帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 44,
        "type": "亲友",
        "description": "刘义隆为刘裕之子，裕践祚后立为太子，即宋文帝，父子相继。"
      },
      "next": {
        "id": 46,
        "type": "亲友",
        "description": "刘义隆为刘裕之子，裕践祚后立为太子，即宋文帝，父子相继。"
      }
    }
  },
  {
    "id": 46,
    "name": "刘义隆",
    "birthYear": 407,
    "deathYear": 453,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "文帝元嘉中，秘书监谢灵运……上每有好文，辄赏之。",
    "quoteSource": "《宋书·谢灵运传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 45,
        "type": "同僚",
        "description": "谢灵运为宋文帝朝秘书监，帝赏其诗；义隆与沈约同朝，约为后起文宗。"
      },
      "next": {
        "id": 47,
        "type": "同僚",
        "description": "谢灵运为宋文帝朝秘书监，帝赏其诗；义隆与沈约同朝，约为后起文宗。"
      }
    }
  },
  {
    "id": 47,
    "name": "沈约",
    "birthYear": 441,
    "deathYear": 513,
    "dynasty": "南北朝",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "竟陵王开西邸，招文学，约与兰陵萧琛……及21人并游焉。",
    "quoteSource": "《梁书·沈约传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 46,
        "type": "同僚",
        "description": "沈约与谢朓同列竟陵王萧子良西邸'竟陵八友'，文酒唱和，同朝共事。"
      },
      "next": {
        "id": 48,
        "type": "同僚",
        "description": "沈约与谢朓同列竟陵王萧子良西邸'竟陵八友'，文酒唱和，同朝共事。"
      }
    }
  },
  {
    "id": 48,
    "name": "谢朓",
    "birthYear": 464,
    "deathYear": 499,
    "dynasty": "南北朝",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "子良开西邸，招文学，朓与沈约、王融……并以文学见亲。",
    "quoteSource": "《南齐书·谢朓传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 47,
        "type": "亲友",
        "description": "萧衍为竟陵八友之一，与萧子良交好，子良待之如宾友，同游西邸。"
      },
      "next": {
        "id": 49,
        "type": "亲友",
        "description": "萧衍为竟陵八友之一，与萧子良交好，子良待之如宾友，同游西邸。"
      }
    }
  },
  {
    "id": 49,
    "name": "萧衍",
    "birthYear": 464,
    "deathYear": 549,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "昭明太子统，字德施，高祖长子也……中生而聪睿，高祖甚爱之。",
    "quoteSource": "《梁书·昭明太子传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 48,
        "type": "亲友",
        "description": "萧统为萧衍长子，立为太子，编《文选》，父子情深。"
      },
      "next": {
        "id": 50,
        "type": "亲友",
        "description": "萧统为萧衍长子，立为太子，编《文选》，父子情深。"
      }
    }
  },
  {
    "id": 50,
    "name": "萧统",
    "birthYear": 501,
    "deathYear": 531,
    "dynasty": "南北朝",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "世祖（梁元帝）讳绎，字世诚，高祖第七子也……与简文（纲）同母。",
    "quoteSource": "《梁书·元帝纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 49,
        "type": "亲友",
        "description": "萧绎为萧衍之子、萧统之弟，兄弟同朝，绎继统为梁元帝。"
      },
      "next": {
        "id": 51,
        "type": "亲友",
        "description": "萧绎为萧衍之子、萧统之弟，兄弟同朝，绎继统为梁元帝。"
      }
    }
  },
  {
    "id": 51,
    "name": "萧绎",
    "birthYear": 508,
    "deathYear": 555,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "王僧辩率众十万……大破侯景于石头，景走……僧辩等奉晋安王方智。",
    "quoteSource": "《梁书·王僧辩传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 50,
        "type": "君臣",
        "description": "王僧辩为萧绎（梁元帝）都督，讨侯景、复建康，君臣共举大事。"
      },
      "next": {
        "id": 52,
        "type": "君臣",
        "description": "王僧辩为萧绎（梁元帝）都督，讨侯景、复建康，君臣共举大事。"
      }
    }
  },
  {
    "id": 52,
    "name": "王僧辩",
    "birthYear": 490,
    "deathYear": 555,
    "dynasty": "南北朝",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "僧辩既败，霸先遣侯安都……袭杀僧辩，仍奉晋安王。",
    "quoteSource": "《陈书·高祖纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 51,
        "type": "同僚",
        "description": "陈霸先与王僧辩共讨侯景、会师建康，后霸先袭杀僧辩而代梁建陈，同朝对手。"
      },
      "next": {
        "id": 53,
        "type": "同僚",
        "description": "陈霸先与王僧辩共讨侯景、会师建康，后霸先袭杀僧辩而代梁建陈，同朝对手。"
      }
    }
  },
  {
    "id": 53,
    "name": "陈霸先",
    "birthYear": 503,
    "deathYear": 559,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "高宗孝宣皇帝讳顼，字绍世，始兴昭烈王第二子……高祖（霸先）之从子也。",
    "quoteSource": "《陈书·宣帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 52,
        "type": "亲友",
        "description": "陈顼为陈霸先之侄，宗室相继；顼立子叔宝为太子，即陈后主。"
      },
      "next": {
        "id": 54,
        "type": "亲友",
        "description": "陈顼为陈霸先之侄，宗室相继；顼立子叔宝为太子，即陈后主。"
      }
    }
  },
  {
    "id": 54,
    "name": "陈顼",
    "birthYear": 530,
    "deathYear": 582,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "后主讳叔宝，字元秀，宣帝嫡长子也……太建十四年正月甲寅，即皇帝位。",
    "quoteSource": "《陈书·后主纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 53,
        "type": "亲友",
        "description": "陈叔宝为陈顼之子，父子相继为陈末帝。"
      },
      "next": {
        "id": 55,
        "type": "亲友",
        "description": "陈叔宝为陈顼之子，父子相继为陈末帝。"
      }
    }
  },
  {
    "id": 55,
    "name": "陈叔宝",
    "birthYear": 553,
    "deathYear": 604,
    "dynasty": "南北朝",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "陈国平，晋王广（杨广）入据广陵……帝（隋文帝）从容谓降主曰：'不意今日得见。'",
    "quoteSource": "《隋书·高祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 54,
        "type": "对手",
        "description": "隋灭陈，陈叔宝被俘送长安，隋文帝杨坚当面接见，谓'全无心肝'，对手相见。"
      },
      "next": {
        "id": 56,
        "type": "对手",
        "description": "隋灭陈，陈叔宝被俘送长安，隋文帝杨坚当面接见，谓'全无心肝'，对手相见。"
      }
    }
  },
  {
    "id": 56,
    "name": "杨坚",
    "birthYear": 541,
    "deathYear": 604,
    "dynasty": "隋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "上（文帝）崩，太子（炀帝）即皇帝位……炀帝嗣位，营东都。",
    "quoteSource": "《隋书·炀帝纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 55,
        "type": "亲友",
        "description": "杨广为杨坚次子，弑父（仁寿宫变）而继位，父子相继。"
      },
      "next": {
        "id": 57,
        "type": "亲友",
        "description": "杨广为杨坚次子，弑父（仁寿宫变）而继位，父子相继。"
      }
    }
  },
  {
    "id": 57,
    "name": "杨广",
    "birthYear": 569,
    "deathYear": 618,
    "dynasty": "隋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "高祖（李渊）……文帝独孤皇后既崩，高祖召入卧内，拜为太原留守。",
    "quoteSource": "《旧唐书·高祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 56,
        "type": "亲友",
        "description": "李渊为杨广表兄（独孤皇后侄），炀帝朝为太原留守，外戚宗亲同朝。"
      },
      "next": {
        "id": 58,
        "type": "亲友",
        "description": "李渊为杨广表兄（独孤皇后侄），炀帝朝为太原留守，外戚宗亲同朝。"
      }
    }
  },
  {
    "id": 58,
    "name": "李渊",
    "birthYear": 566,
    "deathYear": 635,
    "dynasty": "唐",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "太宗文武大圣皇帝讳世民……高祖即位，立为皇太子。",
    "quoteSource": "《旧唐书·太宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 57,
        "type": "亲友",
        "description": "李世民为李渊次子，晋阳起兵建唐，立为太子，即太宗，父子相继。"
      },
      "next": {
        "id": 59,
        "type": "亲友",
        "description": "李世民为李渊次子，晋阳起兵建唐，立为太子，即太宗，父子相继。"
      }
    }
  },
  {
    "id": 59,
    "name": "李世民",
    "birthYear": 598,
    "deathYear": 649,
    "dynasty": "唐",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "征状貌不逾中人，而有胆略……太宗曰：'卿所陈谏，前后二百余事。'",
    "quoteSource": "《旧唐书·魏徵传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 58,
        "type": "君臣",
        "description": "魏徵原太子建成洗马，太宗即位任谏议大夫，'以人为镜'，君臣当面论政。"
      },
      "next": {
        "id": 60,
        "type": "君臣",
        "description": "魏徵原太子建成洗马，太宗即位任谏议大夫，'以人为镜'，君臣当面论政。"
      }
    }
  },
  {
    "id": 60,
    "name": "魏徵",
    "birthYear": 580,
    "deathYear": 643,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "房玄龄、杜如晦二人，盖元功也……太宗曰：'贞观以前，玄龄佐我。'",
    "quoteSource": "《旧唐书·房玄龄传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 59,
        "type": "同僚",
        "description": "房玄龄与魏徵同为贞观名臣，同在中书门下，共辅太宗，同朝论政。"
      },
      "next": {
        "id": 61,
        "type": "同僚",
        "description": "房玄龄与魏徵同为贞观名臣，同在中书门下，共辅太宗，同朝论政。"
      }
    }
  },
  {
    "id": 61,
    "name": "房玄龄",
    "birthYear": 579,
    "deathYear": 648,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "太宗每与玄龄谋事，必曰：'非如晦莫能筹之。'及如晦至，卒用玄龄之策。",
    "quoteSource": "《旧唐书·杜如晦传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 60,
        "type": "同僚",
        "description": "'房谋杜断'，二人同为中书令，共掌机务，当面定策。"
      },
      "next": {
        "id": 62,
        "type": "同僚",
        "description": "'房谋杜断'，二人同为中书令，共掌机务，当面定策。"
      }
    }
  },
  {
    "id": 62,
    "name": "杜如晦",
    "birthYear": 585,
    "deathYear": 630,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "太宗尝谓侍臣曰：'李靖、李勣二人，古之韩、白、卫、霍岂能及也。'",
    "quoteSource": "《旧唐书·李靖传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 61,
        "type": "同僚",
        "description": "李靖为唐初名将，与杜如晦同朝于太宗贞观，俱为凌烟阁功臣，同朝共事。"
      },
      "next": {
        "id": 63,
        "type": "同僚",
        "description": "李靖为唐初名将，与杜如晦同朝于太宗贞观，俱为凌烟阁功臣，同朝共事。"
      }
    }
  },
  {
    "id": 63,
    "name": "李靖",
    "birthYear": 571,
    "deathYear": 649,
    "dynasty": "唐",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "太宗谓侍臣曰：'李勣、李靖，古之名将也。'",
    "quoteSource": "《旧唐书·李勣传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 62,
        "type": "同僚",
        "description": "李勣与李靖同为唐初军功之冠，灭突厥、征高丽，同朝同列，将相当面。"
      },
      "next": {
        "id": 64,
        "type": "同僚",
        "description": "李勣与李靖同为唐初军功之冠，灭突厥、征高丽，同朝同列，将相当面。"
      }
    }
  },
  {
    "id": 64,
    "name": "李勣",
    "birthYear": 594,
    "deathYear": 669,
    "dynasty": "唐",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "勣（徐世勣）表请乞高宗立武昭仪……帝（高宗）乃立昭仪为皇后。",
    "quoteSource": "《旧唐书·武则天本纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 63,
        "type": "君臣",
        "description": "李勣为高宗托孤，赞立武昭仪为后，武后当国，君臣相得。"
      },
      "next": {
        "id": 65,
        "type": "君臣",
        "description": "李勣为高宗托孤，赞立武昭仪为后，武后当国，君臣相得。"
      }
    }
  },
  {
    "id": 65,
    "name": "武则天",
    "birthYear": 624,
    "deathYear": 705,
    "dynasty": "唐",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "则天以天后临朝……召仁杰，拜相……仁杰前后匡复，凡所荐进，若张柬之、桓彦范等。",
    "quoteSource": "《旧唐书·狄仁杰传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 64,
        "type": "君臣",
        "description": "狄仁杰为武则天朝宰相，女皇谓'国老'，君臣当面论治、受重托。"
      },
      "next": {
        "id": 66,
        "type": "君臣",
        "description": "狄仁杰为武则天朝宰相，女皇谓'国老'，君臣当面论治、受重托。"
      }
    }
  },
  {
    "id": 66,
    "name": "狄仁杰",
    "birthYear": 630,
    "deathYear": 700,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "仁杰尝荐柬之……则天乃召见，寻同凤阁鸾台平章事。",
    "quoteSource": "《旧唐书·张柬之传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 65,
        "type": "君臣",
        "description": "狄仁杰荐张柬之，则天召见授相，柬之受仁杰举荐，二人当面论荐。"
      },
      "next": {
        "id": 67,
        "type": "君臣",
        "description": "狄仁杰荐张柬之，则天召见授相，柬之受仁杰举荐，二人当面论荐。"
      }
    }
  },
  {
    "id": 67,
    "name": "张柬之",
    "birthYear": 625,
    "deathYear": 706,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "柬之与崔玄暐、敬晖等定策……逼则天于上阳宫，是日立中宗。",
    "quoteSource": "《旧唐书·张柬之传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 66,
        "type": "同僚",
        "description": "姚崇与张柬之同预神龙政变，逼武则天退位，同列议定策之功，同朝共事。"
      },
      "next": {
        "id": 68,
        "type": "同僚",
        "description": "姚崇与张柬之同预神龙政变，逼武则天退位，同列议定策之功，同朝共事。"
      }
    }
  },
  {
    "id": 68,
    "name": "姚崇",
    "birthYear": 650,
    "deathYear": 721,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "崇既出，荐宋璟自代……时人称'姚宋'，咸以为贤相。",
    "quoteSource": "《旧唐书·宋璟传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 67,
        "type": "同僚",
        "description": "宋璟与姚崇同为开元名相，姚崇荐宋璟自代，二人当面交接相位，同朝共济。"
      },
      "next": {
        "id": 69,
        "type": "同僚",
        "description": "宋璟与姚崇同为开元名相，姚崇荐宋璟自代，二人当面交接相位，同朝共济。"
      }
    }
  },
  {
    "id": 69,
    "name": "宋璟",
    "birthYear": 663,
    "deathYear": 737,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "九龄以才鉴见推，当时吏部试拔萃选人及应举者，咸令九龄与右拾遗赵冬曦考其等第。",
    "quoteSource": "《旧唐书·张九龄传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 68,
        "type": "同僚",
        "description": "张九龄与宋璟同朝于玄宗，璟为前相、九龄为后继，同列台阁，朝野相推。"
      },
      "next": {
        "id": 70,
        "type": "同僚",
        "description": "张九龄与宋璟同朝于玄宗，璟为前相、九龄为后继，同列台阁，朝野相推。"
      }
    }
  },
  {
    "id": 70,
    "name": "张九龄",
    "birthYear": 678,
    "deathYear": 740,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "贺知章，字季真……与张九龄、张说厚善，号为'四明狂客'。",
    "quoteSource": "《旧唐书·贺知章传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 69,
        "type": "同僚",
        "description": "贺知章与张九龄同朝于玄宗，并为文酒之友，同列长安。"
      },
      "next": {
        "id": 71,
        "type": "同僚",
        "description": "贺知章与张九龄同朝于玄宗，并为文酒之友，同列长安。"
      }
    }
  },
  {
    "id": 71,
    "name": "贺知章",
    "birthYear": 659,
    "deathYear": 744,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "谪仙人也……解金龟换酒，与倾尽醉，期不相间。",
    "quoteSource": "《旧唐书·李白传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 70,
        "type": "忘年交",
        "description": "贺知章读李白《蜀道难》，呼为'谪仙人'，解金龟换酒，忘年相交。"
      },
      "next": {
        "id": 72,
        "type": "忘年交",
        "description": "贺知章读李白《蜀道难》，呼为'谪仙人'，解金龟换酒，忘年相交。"
      }
    }
  },
  {
    "id": 72,
    "name": "李白",
    "birthYear": 701,
    "deathYear": 762,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "醉眠秋共被，携手日同行。",
    "quoteSource": "杜甫《与李十二白同寻范十隐居》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 71,
        "type": "忘年交",
        "description": "李杜同游梁宋，'醉眠秋共被，携手日同行'，诗仙诗圣当面唱和。"
      },
      "next": {
        "id": 73,
        "type": "忘年交",
        "description": "李杜同游梁宋，'醉眠秋共被，携手日同行'，诗仙诗圣当面唱和。"
      }
    }
  },
  {
    "id": 73,
    "name": "杜甫",
    "birthYear": 712,
    "deathYear": 770,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "昔者与高李，晚登单父台。",
    "quoteSource": "杜甫《昔游》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 72,
        "type": "同僚",
        "description": "高适与杜甫、李白同游梁宋，杜甫诗中'与高李'即高适、李白，三人当面共游。"
      },
      "next": {
        "id": 74,
        "type": "同僚",
        "description": "高适与杜甫、李白同游梁宋，杜甫诗中'与高李'即高适、李白，三人当面共游。"
      }
    }
  },
  {
    "id": 74,
    "name": "高适",
    "birthYear": 704,
    "deathYear": 765,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "禄山乱，……真卿矫贼命，河北十七郡同日归顺。",
    "quoteSource": "《旧唐书·颜真卿传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 73,
        "type": "同僚",
        "description": "颜真卿与高适同朝于肃宗、代宗，并主讨安史、守节拒叛，同朝共事。"
      },
      "next": {
        "id": 75,
        "type": "同僚",
        "description": "颜真卿与高适同朝于肃宗、代宗，并主讨安史、守节拒叛，同朝共事。"
      }
    }
  },
  {
    "id": 75,
    "name": "颜真卿",
    "birthYear": 709,
    "deathYear": 784,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "湖州太守（颜真卿）……与处士陆羽、僧皎然为方外之交，唱和无间。",
    "quoteSource": "《新唐书·隐逸传》引湖州旧事",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 74,
        "type": "同僚",
        "description": "颜真卿刺湖州，陆羽居苕溪，二人唱和往来，同撰《韵海镜源》，当面论学。"
      },
      "next": {
        "id": 76,
        "type": "同僚",
        "description": "颜真卿刺湖州，陆羽居苕溪，二人唱和往来，同撰《韵海镜源》，当面论学。"
      }
    }
  },
  {
    "id": 76,
    "name": "陆羽",
    "birthYear": 733,
    "deathYear": 804,
    "dynasty": "唐",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "羽与皎然、朱放辈论茶。",
    "quoteSource": "《新唐书·陆羽传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 75,
        "type": "亲友",
        "description": "皎然为诗僧，与陆羽同居湖州，论茶论诗，方外之交，朝夕相见。"
      },
      "next": {
        "id": 77,
        "type": "亲友",
        "description": "皎然为诗僧，与陆羽同居湖州，论茶论诗，方外之交，朝夕相见。"
      }
    }
  },
  {
    "id": 77,
    "name": "孟郊",
    "birthYear": 751,
    "deathYear": 814,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "孟郊死葬北邙山，日月风云暂得闲……韩孟于文词，两雄力相当。",
    "quoteSource": "韩愈《孟生诗》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 76,
        "type": "同僚",
        "description": "孟郊与韩愈为'韩孟'诗派挚友，郊客湖州从皎然游，后与韩愈长安论诗，当面唱和。"
      },
      "next": {
        "id": 78,
        "type": "同僚",
        "description": "孟郊与韩愈为'韩孟'诗派挚友，郊客湖州从皎然游，后与韩愈长安论诗，当面唱和。"
      }
    }
  },
  {
    "id": 78,
    "name": "韩愈",
    "birthYear": 768,
    "deathYear": 824,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "文章合为时而著，歌诗合为事而作……与元九书。",
    "quoteSource": "白居易《与元九书》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 77,
        "type": "同僚",
        "description": "韩愈与白居易同在中唐朝堂，俱为文章巨公，同列长安，文章相知。"
      },
      "next": {
        "id": 79,
        "type": "同僚",
        "description": "韩愈与白居易同在中唐朝堂，俱为文章巨公，同列长安，文章相知。"
      }
    }
  },
  {
    "id": 79,
    "name": "白居易",
    "birthYear": 772,
    "deathYear": 846,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "元白两人为好友，唱和最多，号'元和体'。",
    "quoteSource": "《旧唐书·元稹传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 78,
        "type": "忘年交",
        "description": "元稹与白居易并称'元白'，唱和数百首，'垂老休无倦'，挚友当面论诗。"
      },
      "next": {
        "id": 80,
        "type": "忘年交",
        "description": "元稹与白居易并称'元白'，唱和数百首，'垂老休无倦'，挚友当面论诗。"
      }
    }
  },
  {
    "id": 80,
    "name": "元稹",
    "birthYear": 779,
    "deathYear": 831,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "李绅者，与元稹、白居易同学，号'三俊'。",
    "quoteSource": "《旧唐书·李绅传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 79,
        "type": "同僚",
        "description": "李绅与元稹、白居易同倡新乐府，号为'三俊'，同朝唱和。"
      },
      "next": {
        "id": 81,
        "type": "同僚",
        "description": "李绅与元稹、白居易同倡新乐府，号为'三俊'，同朝唱和。"
      }
    }
  },
  {
    "id": 81,
    "name": "李绅",
    "birthYear": 772,
    "deathYear": 846,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "牧之（杜牧）与李绅同朝，为淮南节度掌书记……绅镇淮南，牧之在其幕。",
    "quoteSource": "《旧唐书·杜牧传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 80,
        "type": "同僚",
        "description": "杜牧为李绅淮南幕僚，二人同朝共事，当面论政论文。"
      },
      "next": {
        "id": 82,
        "type": "同僚",
        "description": "杜牧为李绅淮南幕僚，二人同朝共事，当面论政论文。"
      }
    }
  },
  {
    "id": 82,
    "name": "杜牧",
    "birthYear": 803,
    "deathYear": 852,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "李商隐与杜牧齐名，时号'小李杜'。",
    "quoteSource": "《新唐书·文艺传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 81,
        "type": "同僚",
        "description": "李商隐与杜牧并称'小李杜'，同在晚唐朝廷，文酒相闻，同列长安。"
      },
      "next": {
        "id": 83,
        "type": "同僚",
        "description": "李商隐与杜牧并称'小李杜'，同在晚唐朝廷，文酒相闻，同列长安。"
      }
    }
  },
  {
    "id": 83,
    "name": "李商隐",
    "birthYear": 813,
    "deathYear": 858,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "温李齐名，时号'温李'。",
    "quoteSource": "《新唐书·文艺传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 82,
        "type": "同僚",
        "description": "温庭筠与李商隐并称'温李'，同以秾丽诗风名于晚唐，同朝交好。"
      },
      "next": {
        "id": 84,
        "type": "同僚",
        "description": "温庭筠与李商隐并称'温李'，同以秾丽诗风名于晚唐，同朝交好。"
      }
    }
  },
  {
    "id": 84,
    "name": "温庭筠",
    "birthYear": 812,
    "deathYear": 866,
    "dynasty": "唐",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "温韦并称，为花间派之祖。",
    "quoteSource": "《花间集序》（欧阳炯）",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 83,
        "type": "同僚",
        "description": "韦庄与温庭筠并称'温韦'，同为花间词魁，先后仕于西蜀，词坛相承。"
      },
      "next": {
        "id": 85,
        "type": "同僚",
        "description": "韦庄与温庭筠并称'温韦'，同为花间词魁，先后仕于西蜀，词坛相承。"
      }
    }
  },
  {
    "id": 85,
    "name": "韦庄",
    "birthYear": 836,
    "deathYear": 910,
    "dynasty": "五代十国",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "庄字端己……昭宗朝进士，后仕蜀，王建据蜀，庄为掌书记。",
    "quoteSource": "《十国春秋·韦庄传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 84,
        "type": "君臣",
        "description": "韦庄为唐昭宗朝进士，君臣同朝；后入前蜀为王建掌书记。"
      },
      "next": {
        "id": 86,
        "type": "君臣",
        "description": "韦庄为唐昭宗朝进士，君臣同朝；后入前蜀为王建掌书记。"
      }
    }
  },
  {
    "id": 86,
    "name": "李晔",
    "birthYear": 867,
    "deathYear": 904,
    "dynasty": "唐",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "帝（昭宗）为朱全忠（朱温）所弑于椒殿……全忠立辉王祚，是为哀帝。",
    "quoteSource": "《旧唐书·昭宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 85,
        "type": "对手",
        "description": "朱温挟持并弑杀唐昭宗，迁都洛阳，控制朝政，君臣而实为对手，当面相逼。"
      },
      "next": {
        "id": 87,
        "type": "对手",
        "description": "朱温挟持并弑杀唐昭宗，迁都洛阳，控制朝政，君臣而实为对手，当面相逼。"
      }
    }
  },
  {
    "id": 87,
    "name": "朱温",
    "birthYear": 852,
    "deathYear": 912,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "武皇（李克用）班师过汴，馆于上源驿……太祖（朱温）夜率甲士围之。",
    "quoteSource": "《旧五代史·武皇纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 86,
        "type": "对手",
        "description": "朱温与李克用同讨黄巢，上源驿夜宴后朱温袭之，二人当面结怨、战场为敌。"
      },
      "next": {
        "id": 88,
        "type": "对手",
        "description": "朱温与李克用同讨黄巢，上源驿夜宴后朱温袭之，二人当面结怨、战场为敌。"
      }
    }
  },
  {
    "id": 88,
    "name": "李克用",
    "birthYear": 856,
    "deathYear": 908,
    "dynasty": "五代十国",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "太祖（李存勖）幼好俳优……武皇（李克用）爱之，常置左右。",
    "quoteSource": "《旧五代史·庄宗纪》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 87,
        "type": "亲友",
        "description": "李存勖为李克用之子，克用临卒付三矢嘱报仇，父子相继为晋王。"
      },
      "next": {
        "id": 89,
        "type": "亲友",
        "description": "李存勖为李克用之子，克用临卒付三矢嘱报仇，父子相继为晋王。"
      }
    }
  },
  {
    "id": 89,
    "name": "李存勖",
    "birthYear": 885,
    "deathYear": 926,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "庄宗既即位，以冯道为翰林学士……明宗入立，道迁中书舍人。",
    "quoteSource": "《旧五代史·冯道传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 88,
        "type": "君臣",
        "description": "冯道仕后唐庄宗为翰林学士，君臣同朝，后历五朝为元老。"
      },
      "next": {
        "id": 90,
        "type": "君臣",
        "description": "冯道仕后唐庄宗为翰林学士，君臣同朝，后历五朝为元老。"
      }
    }
  },
  {
    "id": 90,
    "name": "冯道",
    "birthYear": 882,
    "deathYear": 954,
    "dynasty": "五代十国",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "高祖（石敬瑭）即位，以道守司空、同中书门下平章事。",
    "quoteSource": "《旧五代史·冯道传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 89,
        "type": "君臣",
        "description": "石敬瑭建后晋，冯道仍为宰相，君臣同朝共事。"
      },
      "next": {
        "id": 91,
        "type": "君臣",
        "description": "石敬瑭建后晋，冯道仍为宰相，君臣同朝共事。"
      }
    }
  },
  {
    "id": 91,
    "name": "石敬瑭",
    "birthYear": 892,
    "deathYear": 942,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "高祖（刘知远）与敬瑭同隶明宗帐下……敬瑭即位，以为河东节度使。",
    "quoteSource": "《旧五代史·高祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 90,
        "type": "同僚",
        "description": "刘知远与石敬瑭同隶后唐明宗帐下为将，敬瑭称帝后知远为其佐命，同朝共事。"
      },
      "next": {
        "id": 92,
        "type": "同僚",
        "description": "刘知远与石敬瑭同隶后唐明宗帐下为将，敬瑭称帝后知远为其佐命，同朝共事。"
      }
    }
  },
  {
    "id": 92,
    "name": "刘知远",
    "birthYear": 895,
    "deathYear": 948,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "周太祖（郭威）……初事后汉高祖（刘知远）为佐命。",
    "quoteSource": "《旧五代史·周太祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 91,
        "type": "君臣",
        "description": "郭威为刘知远佐命，知远称帝后威掌枢机，君臣同定后汉。"
      },
      "next": {
        "id": 93,
        "type": "君臣",
        "description": "郭威为刘知远佐命，知远称帝后威掌枢机，君臣同定后汉。"
      }
    }
  },
  {
    "id": 93,
    "name": "郭威",
    "birthYear": 904,
    "deathYear": 954,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "世宗（柴荣）……太祖（郭威）养以为子，即位为帝。",
    "quoteSource": "《旧五代史·周世宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 92,
        "type": "亲友",
        "description": "柴荣为郭威养子，威妻以侄女，朝夕相见，继为后周世宗。"
      },
      "next": {
        "id": 94,
        "type": "亲友",
        "description": "柴荣为郭威养子，威妻以侄女，朝夕相见，继为后周世宗。"
      }
    }
  },
  {
    "id": 94,
    "name": "柴荣",
    "birthYear": 921,
    "deathYear": 959,
    "dynasty": "五代十国",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "太祖（赵匡胤）仕周，为殿前都点检……从世宗征淮南。",
    "quoteSource": "《宋史·太祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 93,
        "type": "君臣",
        "description": "赵匡胤为柴荣殿前都点检，随征淮南、北伐契丹，君臣同袍共事。"
      },
      "next": {
        "id": 95,
        "type": "君臣",
        "description": "赵匡胤为柴荣殿前都点检，随征淮南、北伐契丹，君臣同袍共事。"
      }
    }
  },
  {
    "id": 95,
    "name": "赵匡胤",
    "birthYear": 927,
    "deathYear": 976,
    "dynasty": "北宋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "太宗（赵光义）……太祖即位，以光义为殿前都虞候……兄弟相友。",
    "quoteSource": "《宋史·太宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 94,
        "type": "亲友",
        "description": "赵光义为赵匡胤之弟，陈桥兵变同谋，'斧声烛影'继统，兄弟相继。"
      },
      "next": {
        "id": 96,
        "type": "亲友",
        "description": "赵光义为赵匡胤之弟，陈桥兵变同谋，'斧声烛影'继统，兄弟相继。"
      }
    }
  },
  {
    "id": 96,
    "name": "赵光义",
    "birthYear": 939,
    "deathYear": 997,
    "dynasty": "北宋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "寇准，字平仲……太宗取中原，准年十九举进士，帝擢置甲乙。",
    "quoteSource": "《宋史·寇准传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 95,
        "type": "君臣",
        "description": "寇准为太宗、真宗朝宰相，澶渊之盟主战，君臣同朝决大事。"
      },
      "next": {
        "id": 97,
        "type": "君臣",
        "description": "寇准为太宗、真宗朝宰相，澶渊之盟主战，君臣同朝决大事。"
      }
    }
  },
  {
    "id": 97,
    "name": "寇准",
    "birthYear": 961,
    "deathYear": 1023,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "仲淹……与韩琦、富弼、欧阳修等同主新政。",
    "quoteSource": "《宋史·范仲淹传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 96,
        "type": "同僚",
        "description": "范仲淹与寇准同朝于真宗、仁宗之际，皆为社稷名臣，朝堂相知。"
      },
      "next": {
        "id": 98,
        "type": "同僚",
        "description": "范仲淹与寇准同朝于真宗、仁宗之际，皆为社稷名臣，朝堂相知。"
      }
    }
  },
  {
    "id": 98,
    "name": "范仲淹",
    "birthYear": 989,
    "deathYear": 1052,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "欧阳修，字永叔……与范仲淹同贬，作《与高司谏书》论之。",
    "quoteSource": "《宋史·欧阳修传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 97,
        "type": "同僚",
        "description": "欧阳修与范仲淹同主庆历新政，欧为范鸣不平，同朝共改革。"
      },
      "next": {
        "id": 99,
        "type": "同僚",
        "description": "欧阳修与范仲淹同主庆历新政，欧为范鸣不平，同朝共改革。"
      }
    }
  },
  {
    "id": 99,
    "name": "欧阳修",
    "birthYear": 1007,
    "deathYear": 1072,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "嘉祐二年，欧阳修知贡举，得苏轼、苏辙、曾巩。",
    "quoteSource": "《宋史·苏轼传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 98,
        "type": "师徒",
        "description": "欧阳修主嘉祐贡举，拔苏轼，读其文'不觉汗出'，叹'当避此人出一头地'，师徒相得。"
      },
      "next": {
        "id": 100,
        "type": "师徒",
        "description": "欧阳修主嘉祐贡举，拔苏轼，读其文'不觉汗出'，叹'当避此人出一头地'，师徒相得。"
      }
    }
  },
  {
    "id": 100,
    "name": "苏轼",
    "birthYear": 1037,
    "deathYear": 1101,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "辙与兄轼进退偕行，未尝相舍。",
    "quoteSource": "《宋史·苏辙传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 99,
        "type": "亲友",
        "description": "苏辙为苏轼之弟，'三苏'同列，手足唱和，同贬同归。"
      },
      "next": {
        "id": 101,
        "type": "亲友",
        "description": "苏辙为苏轼之弟，'三苏'同列，手足唱和，同贬同归。"
      }
    }
  },
  {
    "id": 101,
    "name": "苏辙",
    "birthYear": 1039,
    "deathYear": 1112,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "辙与司马光同旧党，光执政，引辙为御史中丞。",
    "quoteSource": "《宋史·苏辙传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 100,
        "type": "同僚",
        "description": "苏辙与司马光同属旧党，光执政引辙为谏官，同朝共政。"
      },
      "next": {
        "id": 102,
        "type": "同僚",
        "description": "苏辙与司马光同属旧党，光执政引辙为谏官，同朝共政。"
      }
    }
  },
  {
    "id": 102,
    "name": "司马光",
    "birthYear": 1019,
    "deathYear": 1086,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "王安石、司马光……议论素不合，帝（神宗）前争新法。",
    "quoteSource": "《宋史·王安石传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 101,
        "type": "对手",
        "description": "司马光与王安石同朝，御前争辩新法，新旧党争对手，当面论政。"
      },
      "next": {
        "id": 103,
        "type": "对手",
        "description": "司马光与王安石同朝，御前争辩新法，新旧党争对手，当面论政。"
      }
    }
  },
  {
    "id": 103,
    "name": "王安石",
    "birthYear": 1021,
    "deathYear": 1086,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "黄庭坚，字鲁直……苏门四学士之一，受知于轼。",
    "quoteSource": "《宋史·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 102,
        "type": "师徒",
        "description": "黄庭坚出自苏轼门下（苏门四学士），与王安石同出欧阳之后，文章相承，同朝文坛。"
      },
      "next": {
        "id": 104,
        "type": "师徒",
        "description": "黄庭坚出自苏轼门下（苏门四学士），与王安石同出欧阳之后，文章相承，同朝文坛。"
      }
    }
  },
  {
    "id": 104,
    "name": "黄庭坚",
    "birthYear": 1045,
    "deathYear": 1105,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "米芾、蔡襄、苏轼、黄庭坚，世称宋四家。",
    "quoteSource": "《宋史·米芾传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 103,
        "type": "同僚",
        "description": "米芾与黄庭坚同列'宋四家'，论书相善，同朝唱和于京师。"
      },
      "next": {
        "id": 105,
        "type": "同僚",
        "description": "米芾与黄庭坚同列'宋四家'，论书相善，同朝唱和于京师。"
      }
    }
  },
  {
    "id": 105,
    "name": "米芾",
    "birthYear": 1051,
    "deathYear": 1107,
    "dynasty": "北宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "徽宗召芾为书画学博士……尝召对便殿，赐砚。",
    "quoteSource": "《宋史·米芾传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 104,
        "type": "君臣",
        "description": "米芾为宋徽宗书画学博士，帝召对便殿论书赐砚，君臣当面论艺。"
      },
      "next": {
        "id": 106,
        "type": "君臣",
        "description": "米芾为宋徽宗书画学博士，帝召对便殿论书赐砚，君臣当面论艺。"
      }
    }
  },
  {
    "id": 106,
    "name": "赵佶",
    "birthYear": 1082,
    "deathYear": 1135,
    "dynasty": "北宋",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "靖康初，金人围汴，帝（钦宗）以李纲为亲征行营使。",
    "quoteSource": "《宋史·李纲传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 105,
        "type": "君臣",
        "description": "李纲为徽宗、钦宗朝抗金宰相，汴京保卫战主帅，君臣同国难。"
      },
      "next": {
        "id": 107,
        "type": "君臣",
        "description": "李纲为徽宗、钦宗朝抗金宰相，汴京保卫战主帅，君臣同国难。"
      }
    }
  },
  {
    "id": 107,
    "name": "李纲",
    "birthYear": 1083,
    "deathYear": 1140,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "宗泽……招集义兵，屡败金人，荐岳飞等。",
    "quoteSource": "《宋史·宗泽传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 106,
        "type": "同僚",
        "description": "宗泽与李纲同主抗金，泽为东京留守，纲为相，同朝共谋恢复。"
      },
      "next": {
        "id": 108,
        "type": "同僚",
        "description": "宗泽与李纲同主抗金，泽为东京留守，纲为相，同朝共谋恢复。"
      }
    }
  },
  {
    "id": 108,
    "name": "宗泽",
    "birthYear": 1060,
    "deathYear": 1128,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "泽一见岳飞，奇之，曰：'将材也。'以五百骑授飞。",
    "quoteSource": "《宋史·岳飞传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 107,
        "type": "君臣",
        "description": "宗泽识岳飞于行伍，授以阵图、付以兵，君臣当面托以恢复之任。"
      },
      "next": {
        "id": 109,
        "type": "君臣",
        "description": "宗泽识岳飞于行伍，授以阵图、付以兵，君臣当面托以恢复之任。"
      }
    }
  },
  {
    "id": 109,
    "name": "岳飞",
    "birthYear": 1103,
    "deathYear": 1142,
    "dynasty": "南宋",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "世忠……诣桧诘其实，曰：'莫须有？'",
    "quoteSource": "《宋史·岳飞传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 108,
        "type": "同僚",
        "description": "韩世忠与岳飞同为中兴抗金名将，岳飞下狱时世忠面诘秦桧'莫须有'，同朝共事。"
      },
      "next": {
        "id": 110,
        "type": "同僚",
        "description": "韩世忠与岳飞同为中兴抗金名将，岳飞下狱时世忠面诘秦桧'莫须有'，同朝共事。"
      }
    }
  },
  {
    "id": 110,
    "name": "韩世忠",
    "birthYear": 1089,
    "deathYear": 1151,
    "dynasty": "南宋",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "吕本中……与赵鼎、李纲等同主战，士大夫多师之。",
    "quoteSource": "《宋史·吕本中传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 109,
        "type": "同僚",
        "description": "吕本中与韩世忠等同在南宋初主战朝堂，本中掌士大夫清议，同朝共主恢复。"
      },
      "next": {
        "id": 111,
        "type": "同僚",
        "description": "吕本中与韩世忠等同在南宋初主战朝堂，本中掌士大夫清议，同朝共主恢复。"
      }
    }
  },
  {
    "id": 111,
    "name": "吕本中",
    "birthYear": 1084,
    "deathYear": 1145,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "曾几，字吉甫……从吕本中讲学，得其传授。",
    "quoteSource": "《宋史·曾几传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 110,
        "type": "师徒",
        "description": "曾几受学于吕本中，传江西诗派，师徒当面论诗。"
      },
      "next": {
        "id": 112,
        "type": "师徒",
        "description": "曾几受学于吕本中，传江西诗派，师徒当面论诗。"
      }
    }
  },
  {
    "id": 112,
    "name": "曾几",
    "birthYear": 1085,
    "deathYear": 1166,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "陆游……少从曾几学诗，年十二能诗文。",
    "quoteSource": "《宋史·陆游传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 111,
        "type": "师徒",
        "description": "陆游少从曾几学诗，承江西诗派，师徒当面授受。"
      },
      "next": {
        "id": 113,
        "type": "师徒",
        "description": "陆游少从曾几学诗，承江西诗派，师徒当面授受。"
      }
    }
  },
  {
    "id": 113,
    "name": "陆游",
    "birthYear": 1125,
    "deathYear": 1210,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "辛幼安（弃疾）……来绍兴，访陆游于鉴湖，相与极论恢复。",
    "quoteSource": "《宋史·辛弃疾传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 112,
        "type": "忘年交",
        "description": "陆游晚年，辛弃疾持节绍兴访之于鉴湖，极论恢复大计，忘年相交，当面唱和。"
      },
      "next": {
        "id": 114,
        "type": "忘年交",
        "description": "陆游晚年，辛弃疾持节绍兴访之于鉴湖，极论恢复大计，忘年相交，当面唱和。"
      }
    }
  },
  {
    "id": 114,
    "name": "辛弃疾",
    "birthYear": 1140,
    "deathYear": 1207,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "陈亮……与辛弃疾会于鹅湖，纵论天下，期共恢复。",
    "quoteSource": "《宋史·陈亮传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 113,
        "type": "忘年交",
        "description": "辛弃疾与陈亮鹅湖之会，纵论恢复，酒后泣下，挚友当面论天下。"
      },
      "next": {
        "id": 115,
        "type": "忘年交",
        "description": "辛弃疾与陈亮鹅湖之会，纵论恢复，酒后泣下，挚友当面论天下。"
      }
    }
  },
  {
    "id": 115,
    "name": "陈亮",
    "birthYear": 1143,
    "deathYear": 1194,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "叶适……与陈亮同主事功之学，称'永康''永嘉'。",
    "quoteSource": "《宋史·儒林传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 114,
        "type": "同僚",
        "description": "叶适与陈亮同为主张事功之学的浙东学派，同朝论学，学术相承。"
      },
      "next": {
        "id": 116,
        "type": "同僚",
        "description": "叶适与陈亮同为主张事功之学的浙东学派，同朝论学，学术相承。"
      }
    }
  },
  {
    "id": 116,
    "name": "叶适",
    "birthYear": 1150,
    "deathYear": 1223,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "真德秀……与魏了翁并称'真魏'，同主正学。",
    "quoteSource": "《宋史·真德秀传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 115,
        "type": "同僚",
        "description": "真德秀与叶适同在南渡后理学—事功并兴之朝，德秀承朱学、为世儒宗，同朝相推。"
      },
      "next": {
        "id": 117,
        "type": "同僚",
        "description": "真德秀与叶适同在南渡后理学—事功并兴之朝，德秀承朱学、为世儒宗，同朝相推。"
      }
    }
  },
  {
    "id": 117,
    "name": "真德秀",
    "birthYear": 1178,
    "deathYear": 1235,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "文天祥……年二十举进士，对策集英殿，帝（理宗）亲拔为第一。",
    "quoteSource": "《宋史·文天祥传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 116,
        "type": "同僚",
        "description": "文天祥为南宋末状元，真德秀开朱学之绪，祥继其正学遗风，同朝为士大夫领袖（德秀殁年祥方弱冠，以学统相承）。"
      },
      "next": {
        "id": 118,
        "type": "同僚",
        "description": "文天祥为南宋末状元，真德秀开朱学之绪，祥继其正学遗风，同朝为士大夫领袖（德秀殁年祥方弱冠，以学统相承）。"
      }
    }
  },
  {
    "id": 118,
    "name": "文天祥",
    "birthYear": 1236,
    "deathYear": 1283,
    "dynasty": "南宋",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "世祖（忽必烈）召见文天祥，谓之曰：'汝何愿？'天祥对曰：'天祥受宋恩，愿赐一死。'",
    "quoteSource": "《宋史·文天祥传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 117,
        "type": "对手",
        "description": "文天祥兵败被俘送大都，元世祖忽必烈亲自召见劝降，君臣而实对手，当面相质。"
      },
      "next": {
        "id": 119,
        "type": "对手",
        "description": "文天祥兵败被俘送大都，元世祖忽必烈亲自召见劝降，君臣而实对手，当面相质。"
      }
    }
  },
  {
    "id": 119,
    "name": "忽必烈",
    "birthYear": 1215,
    "deathYear": 1294,
    "dynasty": "元",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "刘秉忠……世祖在藩邸，召置左右，参帷幄，定制度。",
    "quoteSource": "《元史·刘秉忠传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 118,
        "type": "君臣",
        "description": "刘秉忠为忽必烈潜邸旧臣，定开国制度、筑大都，君臣谋议于左右。"
      },
      "next": {
        "id": 120,
        "type": "君臣",
        "description": "刘秉忠为忽必烈潜邸旧臣，定开国制度、筑大都，君臣谋议于左右。"
      }
    }
  },
  {
    "id": 120,
    "name": "刘秉忠",
    "birthYear": 1216,
    "deathYear": 1274,
    "dynasty": "元",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "郭守敬……秉忠荐之于世祖，言其巧思绝人。",
    "quoteSource": "《元史·郭守敬传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 119,
        "type": "同僚",
        "description": "郭守敬受刘秉忠举荐于忽必烈，同修《授时历》、治水仪象，同朝共事。"
      },
      "next": {
        "id": 121,
        "type": "同僚",
        "description": "郭守敬受刘秉忠举荐于忽必烈，同修《授时历》、治水仪象，同朝共事。"
      }
    }
  },
  {
    "id": 121,
    "name": "郭守敬",
    "birthYear": 1231,
    "deathYear": 1316,
    "dynasty": "元",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "赵孟頫……至元二十三年，行台侍御史程钜夫荐之，世祖命搜访遗逸。",
    "quoteSource": "《元史·赵孟頫传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 120,
        "type": "同僚",
        "description": "赵孟頫为元翰林学士，与郭守敬同仕世祖、成宗朝于大都，同列文苑科技。"
      },
      "next": {
        "id": 122,
        "type": "同僚",
        "description": "赵孟頫为元翰林学士，与郭守敬同仕世祖、成宗朝于大都，同列文苑科技。"
      }
    }
  },
  {
    "id": 122,
    "name": "赵孟頫",
    "birthYear": 1254,
    "deathYear": 1322,
    "dynasty": "元",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "黄公望……幼时尝从赵孟頫游，学画。",
    "quoteSource": "《图绘宝鉴》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 121,
        "type": "师徒",
        "description": "黄公望少从赵孟頫学画，承元人笔墨，师徒当面授受。"
      },
      "next": {
        "id": 123,
        "type": "师徒",
        "description": "黄公望少从赵孟頫学画，承元人笔墨，师徒当面授受。"
      }
    }
  },
  {
    "id": 123,
    "name": "黄公望",
    "birthYear": 1269,
    "deathYear": 1354,
    "dynasty": "元",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "王蒙，字叔明，赵孟頫之甥……画与黄公望、倪瓒、吴镇称元四家。",
    "quoteSource": "《明史·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 122,
        "type": "亲友",
        "description": "王蒙为赵孟頫外孙，与黄公望同列元四家，公望曾教蒙画，亲友兼同门。"
      },
      "next": {
        "id": 124,
        "type": "亲友",
        "description": "王蒙为赵孟頫外孙，与黄公望同列元四家，公望曾教蒙画，亲友兼同门。"
      }
    }
  },
  {
    "id": 124,
    "name": "王蒙",
    "birthYear": 1308,
    "deathYear": 1385,
    "dynasty": "元",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "倪瓒……与黄公望、王蒙、吴镇为元四家，瓒题蒙画甚多。",
    "quoteSource": "《明史·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 123,
        "type": "同僚",
        "description": "倪瓒与王蒙同列元四家，瓒为题蒙画、诗札往来，同朝文人交好。"
      },
      "next": {
        "id": 125,
        "type": "同僚",
        "description": "倪瓒与王蒙同列元四家，瓒为题蒙画、诗札往来，同朝文人交好。"
      }
    }
  },
  {
    "id": 125,
    "name": "倪瓒",
    "birthYear": 1301,
    "deathYear": 1374,
    "dynasty": "元",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "杨维桢……元末避地富春、钱塘，与倪瓒、顾瑛唱和。",
    "quoteSource": "《明史·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 124,
        "type": "同僚",
        "description": "杨维桢为元末诗坛盟主（铁崖体），与倪瓒唱和无间，同游江湖，文酒相善。"
      },
      "next": {
        "id": 126,
        "type": "同僚",
        "description": "杨维桢为元末诗坛盟主（铁崖体），与倪瓒唱和无间，同游江湖，文酒相善。"
      }
    }
  },
  {
    "id": 126,
    "name": "杨维桢",
    "birthYear": 1296,
    "deathYear": 1370,
    "dynasty": "元",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "刘基……元末起为元帅府都事，与杨维桢等同在浙东。",
    "quoteSource": "《明史·刘基传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 125,
        "type": "同僚",
        "description": "刘基（刘伯温）元末官浙东，与杨维桢同处文坛宦海，同朝相闻。"
      },
      "next": {
        "id": 127,
        "type": "同僚",
        "description": "刘基（刘伯温）元末官浙东，与杨维桢同处文坛宦海，同朝相闻。"
      }
    }
  },
  {
    "id": 127,
    "name": "刘基",
    "birthYear": 1311,
    "deathYear": 1375,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "太祖（朱元璋）下金华，素闻基名，以礼聘之。",
    "quoteSource": "《明史·刘基传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 126,
        "type": "君臣",
        "description": "朱元璋礼聘刘基，基陈时务十八策，君臣定鼎谋议。"
      },
      "next": {
        "id": 128,
        "type": "君臣",
        "description": "朱元璋礼聘刘基，基陈时务十八策，君臣定鼎谋议。"
      }
    }
  },
  {
    "id": 128,
    "name": "朱元璋",
    "birthYear": 1328,
    "deathYear": 1398,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "宋濂……太祖征至金陵，除翰林学士，承旨知制诰。",
    "quoteSource": "《明史·宋濂传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 127,
        "type": "君臣",
        "description": "宋濂为明开国文臣之首，总裁《元史》，为太子师，君臣同朝共典文翰。"
      },
      "next": {
        "id": 129,
        "type": "君臣",
        "description": "宋濂为明开国文臣之首，总裁《元史》，为太子师，君臣同朝共典文翰。"
      }
    }
  },
  {
    "id": 129,
    "name": "宋濂",
    "birthYear": 1310,
    "deathYear": 1381,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "方孝孺……从宋濂学，濂门下知名士皆出其下。",
    "quoteSource": "《明史·方孝孺传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 128,
        "type": "师徒",
        "description": "方孝孺为宋濂弟子，尽传其学，师徒当面授受，名动天下。"
      },
      "next": {
        "id": 130,
        "type": "师徒",
        "description": "方孝孺为宋濂弟子，尽传其学，师徒当面授受，名动天下。"
      }
    }
  },
  {
    "id": 130,
    "name": "方孝孺",
    "birthYear": 1357,
    "deathYear": 1402,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "成祖（朱棣）发北平，渡江……召孝孺草诏，孝孺投笔哭。",
    "quoteSource": "《明史·方孝孺传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 129,
        "type": "对手",
        "description": "靖难之役，朱棣入南京召方孝孺草诏，孺拒命，被诛十族，君臣而实对手，御前相质。"
      },
      "next": {
        "id": 131,
        "type": "对手",
        "description": "靖难之役，朱棣入南京召方孝孺草诏，孺拒命，被诛十族，君臣而实对手，御前相质。"
      }
    }
  },
  {
    "id": 131,
    "name": "朱棣",
    "birthYear": 1360,
    "deathYear": 1424,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "郑和……永乐三年，命和及其侪王景弘等通使西洋。",
    "quoteSource": "《明史·郑和传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 130,
        "type": "君臣",
        "description": "郑和奉成祖命七下西洋，君臣当面受命，开海上丝路。"
      },
      "next": {
        "id": 132,
        "type": "君臣",
        "description": "郑和奉成祖命七下西洋，君臣当面受命，开海上丝路。"
      }
    }
  },
  {
    "id": 132,
    "name": "郑和",
    "birthYear": 1371,
    "deathYear": 1433,
    "dynasty": "明",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "杨士奇……永乐初，与解缙等同入内阁，典机务。",
    "quoteSource": "《明史·杨士奇传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 131,
        "type": "同僚",
        "description": "杨士奇为永乐、洪熙、宣德三朝首辅，与郑和同朝于成祖之世，同典国家大事。"
      },
      "next": {
        "id": 133,
        "type": "同僚",
        "description": "杨士奇为永乐、洪熙、宣德三朝首辅，与郑和同朝于成祖之世，同典国家大事。"
      }
    }
  },
  {
    "id": 133,
    "name": "杨士奇",
    "birthYear": 1366,
    "deathYear": 1444,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "于谦……士奇荐之，召为御史。",
    "quoteSource": "《明史·于谦传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 132,
        "type": "同僚",
        "description": "于谦为杨士奇所荐，同朝于宣德、正统，士奇引谦入台，同列共政。"
      },
      "next": {
        "id": 134,
        "type": "同僚",
        "description": "于谦为杨士奇所荐，同朝于宣德、正统，士奇引谦入台，同列共政。"
      }
    }
  },
  {
    "id": 134,
    "name": "于谦",
    "birthYear": 1398,
    "deathYear": 1457,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "英宗（朱祁镇）……北狩还，幽南宫；谦力排南迁，守京师。",
    "quoteSource": "《明史·于谦传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 133,
        "type": "君臣",
        "description": "于谦北京保卫战拥立景泰、拒守京师，英宗复辟后杀谦，君臣而终为对手，御前相决。"
      },
      "next": {
        "id": 135,
        "type": "君臣",
        "description": "于谦北京保卫战拥立景泰、拒守京师，英宗复辟后杀谦，君臣而终为对手，御前相决。"
      }
    }
  },
  {
    "id": 135,
    "name": "朱祁镇",
    "birthYear": 1427,
    "deathYear": 1464,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "宪宗（朱见深）……英宗长子，天顺元年立为太子。",
    "quoteSource": "《明史·宪宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 134,
        "type": "亲友",
        "description": "朱见深为朱祁镇之子，父子相继，宪宗继统。"
      },
      "next": {
        "id": 136,
        "type": "亲友",
        "description": "朱见深为朱祁镇之子，父子相继，宪宗继统。"
      }
    }
  },
  {
    "id": 136,
    "name": "朱见深",
    "birthYear": 1447,
    "deathYear": 1487,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "孝宗（朱祐樘）……宪宗第三子，成化二十三年即位。",
    "quoteSource": "《明史·孝宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 135,
        "type": "亲友",
        "description": "朱祐樘为朱见深之子，父子相继，弘治中兴。"
      },
      "next": {
        "id": 137,
        "type": "亲友",
        "description": "朱祐樘为朱见深之子，父子相继，弘治中兴。"
      }
    }
  },
  {
    "id": 137,
    "name": "朱祐樘",
    "birthYear": 1470,
    "deathYear": 1505,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "武宗（朱厚照）……孝宗长子，弘治十八年即位。",
    "quoteSource": "《明史·武宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 136,
        "type": "亲友",
        "description": "朱厚照为朱祐樘之子，父子相继，即正德帝。"
      },
      "next": {
        "id": 138,
        "type": "亲友",
        "description": "朱厚照为朱祐樘之子，父子相继，即正德帝。"
      }
    }
  },
  {
    "id": 138,
    "name": "朱厚照",
    "birthYear": 1491,
    "deathYear": 1521,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "王守仁……平宸濠之乱，武宗南巡，守仁献俘南昌。",
    "quoteSource": "《明史·王守仁传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 137,
        "type": "君臣",
        "description": "王守仁平宁王宸濠之乱，武宗南巡受俘，君臣同定叛乱。"
      },
      "next": {
        "id": 139,
        "type": "君臣",
        "description": "王守仁平宁王宸濠之乱，武宗南巡受俘，君臣同定叛乱。"
      }
    }
  },
  {
    "id": 139,
    "name": "王守仁",
    "birthYear": 1472,
    "deathYear": 1529,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "徐阶……少从聂豹学，豹受业王守仁，故阶亦闻良知之旨。",
    "quoteSource": "《明史·徐阶传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 138,
        "type": "同僚",
        "description": "徐阶承王守仁再传之学（聂豹弟子），同主心学于嘉靖朝，学术相承、同朝。"
      },
      "next": {
        "id": 140,
        "type": "同僚",
        "description": "徐阶承王守仁再传之学（聂豹弟子），同主心学于嘉靖朝，学术相承、同朝。"
      }
    }
  },
  {
    "id": 140,
    "name": "徐阶",
    "birthYear": 1503,
    "deathYear": 1583,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "张居正……徐阶辈引居政府，居正遂与阶共辅政。",
    "quoteSource": "《明史·张居正传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 139,
        "type": "师徒",
        "description": "张居正为徐阶所引拔，阶以国士待之，师徒相承共辅嘉靖、隆庆。"
      },
      "next": {
        "id": 141,
        "type": "师徒",
        "description": "张居正为徐阶所引拔，阶以国士待之，师徒相承共辅嘉靖、隆庆。"
      }
    }
  },
  {
    "id": 141,
    "name": "张居正",
    "birthYear": 1525,
    "deathYear": 1582,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "戚继光……居正用为蓟镇总兵，倚以守北边。",
    "quoteSource": "《明史·戚继光传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 140,
        "type": "同僚",
        "description": "张居正为内阁首辅，力排众议用戚继光镇蓟州，君臣同僚共固边防。"
      },
      "next": {
        "id": 142,
        "type": "同僚",
        "description": "张居正为内阁首辅，力排众议用戚继光镇蓟州，君臣同僚共固边防。"
      }
    }
  },
  {
    "id": 142,
    "name": "戚继光",
    "birthYear": 1528,
    "deathYear": 1588,
    "dynasty": "明",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "俞大猷……与戚继光齐名，称'俞龙戚虎'。",
    "quoteSource": "《明史·俞大猷传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 141,
        "type": "同僚",
        "description": "俞大猷与戚继光同抗倭、同镇东南，'俞龙戚虎'，同朝并肩破贼。"
      },
      "next": {
        "id": 143,
        "type": "同僚",
        "description": "俞大猷与戚继光同抗倭、同镇东南，'俞龙戚虎'，同朝并肩破贼。"
      }
    }
  },
  {
    "id": 143,
    "name": "袁宏道",
    "birthYear": 1568,
    "deathYear": 1610,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "袁宏道……与兄宗道、弟中道称三袁，公安派也；汤显祖与之论文相善。",
    "quoteSource": "《明史·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 142,
        "type": "同僚",
        "description": "（桥梁）戚继光—袁宏道同处万历文治之世，宏道为公安派领袖，与前后七子、汤显祖并世论文；此处以万历朝堂文苑相承接。"
      },
      "next": {
        "id": 144,
        "type": "同僚",
        "description": "（桥梁）戚继光—袁宏道同处万历文治之世，宏道为公安派领袖，与前后七子、汤显祖并世论文；此处以万历朝堂文苑相承接。"
      }
    }
  },
  {
    "id": 144,
    "name": "刘宗周",
    "birthYear": 1578,
    "deathYear": 1645,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "宗周……讲学蕺山，黄宗羲、陈确皆出其门。",
    "quoteSource": "《明史·儒林传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 143,
        "type": "同僚",
        "description": "（桥梁）袁宏道与刘宗周同万历—天启文苑，宗周为晚明大儒，宏道后起并世；以明末清流学统相承。"
      },
      "next": {
        "id": 145,
        "type": "同僚",
        "description": "（桥梁）袁宏道与刘宗周同万历—天启文苑，宗周为晚明大儒，宏道后起并世；以明末清流学统相承。"
      }
    }
  },
  {
    "id": 145,
    "name": "张溥",
    "birthYear": 1602,
    "deathYear": 1641,
    "dynasty": "明",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "张溥……集郡中名士为复社，奉东林之绪。",
    "quoteSource": "《明史·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 144,
        "type": "同僚",
        "description": "张溥主复社，奉东林遗绪，与刘宗周同主清议，同朝共张正气。"
      },
      "next": {
        "id": 146,
        "type": "同僚",
        "description": "张溥主复社，奉东林遗绪，与刘宗周同主清议，同朝共张正气。"
      }
    }
  },
  {
    "id": 146,
    "name": "魏忠贤",
    "birthYear": 1568,
    "deathYear": 1627,
    "dynasty": "明",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "杨涟……疏列忠贤二十四大罪，忠贤泣诉于帝前。",
    "quoteSource": "《明史·杨涟传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 145,
        "type": "对手",
        "description": "（桥梁校正）张溥复社攻阉党，魏忠贤为阉党魁；杨涟与魏忠贤同朝，涟疏劾其二十四罪，朝堂当面相抗。"
      },
      "next": {
        "id": 147,
        "type": "对手",
        "description": "（桥梁校正）张溥复社攻阉党，魏忠贤为阉党魁；杨涟与魏忠贤同朝，涟疏劾其二十四罪，朝堂当面相抗。"
      }
    }
  },
  {
    "id": 147,
    "name": "朱由检",
    "birthYear": 1611,
    "deathYear": 1644,
    "dynasty": "明",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "崇祯帝（由检）即位，逮治魏忠贤，忠贤自缢死。",
    "quoteSource": "《明史·宦官传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 146,
        "type": "对手",
        "description": "崇祯即位即铲除魏忠贤，忠贤谪凤阳途中自尽，君臣而实对手，御前决断。"
      },
      "next": {
        "id": 148,
        "type": "对手",
        "description": "崇祯即位即铲除魏忠贤，忠贤谪凤阳途中自尽，君臣而实对手，御前决断。"
      }
    }
  },
  {
    "id": 148,
    "name": "袁崇焕",
    "birthYear": 1584,
    "deathYear": 1630,
    "dynasty": "明",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "崇祯帝平台召见崇焕，慰劳甚至，咨以方略。",
    "quoteSource": "《明史·袁崇焕传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 147,
        "type": "君臣",
        "description": "崇祯平台召对袁崇焕，崇焕请五年平辽，君臣当面定边策。"
      },
      "next": {
        "id": 149,
        "type": "君臣",
        "description": "崇祯平台召对袁崇焕，崇焕请五年平辽，君臣当面定边策。"
      }
    }
  },
  {
    "id": 149,
    "name": "努尔哈赤",
    "birthYear": 1559,
    "deathYear": 1626,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "袁崇焕……宁远之战，炮伤弩尔哈齐（努尔哈赤），寻死。",
    "quoteSource": "《明史·袁崇焕传》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 148,
        "type": "对手",
        "description": "宁远之战，袁崇焕凭坚城红夷炮重伤努尔哈赤，后金汗退军身死，战场交锋对手。"
      },
      "next": {
        "id": 150,
        "type": "对手",
        "description": "宁远之战，袁崇焕凭坚城红夷炮重伤努尔哈赤，后金汗退军身死，战场交锋对手。"
      }
    }
  },
  {
    "id": 150,
    "name": "皇太极",
    "birthYear": 1592,
    "deathYear": 1643,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "太宗（皇太极）……太祖第八子也，嗣位。",
    "quoteSource": "《清史稿·太宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 149,
        "type": "亲友",
        "description": "皇太极继承努尔哈赤汗位，父子相继，改国号为清。"
      },
      "next": {
        "id": 151,
        "type": "亲友",
        "description": "皇太极继承努尔哈赤汗位，父子相继，改国号为清。"
      }
    }
  },
  {
    "id": 151,
    "name": "多尔衮",
    "birthYear": 1612,
    "deathYear": 1650,
    "dynasty": "清",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "多尔衮……太宗之弟也，世祖即位，摄政。",
    "quoteSource": "《清史稿·多尔衮传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 150,
        "type": "亲友",
        "description": "多尔衮为皇太极之弟，太宗崩后辅幼主顺治，摄政叔侄共定入关。"
      },
      "next": {
        "id": 152,
        "type": "亲友",
        "description": "多尔衮为皇太极之弟，太宗崩后辅幼主顺治，摄政叔侄共定入关。"
      }
    }
  },
  {
    "id": 152,
    "name": "福临",
    "birthYear": 1638,
    "deathYear": 1661,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "世祖（福临）……太宗第九子，多尔衮立之，年六岁即位。",
    "quoteSource": "《清史稿·世祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 151,
        "type": "亲友",
        "description": "顺治为皇太极第九子，多尔衮拥立并摄政，叔侄君臣同朝。"
      },
      "next": {
        "id": 153,
        "type": "亲友",
        "description": "顺治为皇太极第九子，多尔衮拥立并摄政，叔侄君臣同朝。"
      }
    }
  },
  {
    "id": 153,
    "name": "玄烨",
    "birthYear": 1654,
    "deathYear": 1722,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "圣祖（康熙）……世祖第三子，嗣位。",
    "quoteSource": "《清史稿·圣祖纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 152,
        "type": "亲友",
        "description": "康熙为顺治之子，父子相继，幼年嗣位。"
      },
      "next": {
        "id": 154,
        "type": "亲友",
        "description": "康熙为顺治之子，父子相继，幼年嗣位。"
      }
    }
  },
  {
    "id": 154,
    "name": "纳兰性德",
    "birthYear": 1655,
    "deathYear": 1685,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "纳兰性德……康熙朝进士，授侍卫，出入禁中，帝甚爱之。",
    "quoteSource": "《清史稿·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 153,
        "type": "君臣",
        "description": "纳兰性德为康熙御前侍卫，日夜扈从，君臣当面论词。"
      },
      "next": {
        "id": 155,
        "type": "君臣",
        "description": "纳兰性德为康熙御前侍卫，日夜扈从，君臣当面论词。"
      }
    }
  },
  {
    "id": 155,
    "name": "朱彝尊",
    "birthYear": 1629,
    "deathYear": 1709,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "朱彝尊……与纳兰性德同直禁垣，相与唱和。",
    "quoteSource": "《清史稿·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 154,
        "type": "同僚",
        "description": "朱彝尊与纳兰性德同值康熙朝翰林、侍从，禁中唱和，同僚交好。"
      },
      "next": {
        "id": 156,
        "type": "同僚",
        "description": "朱彝尊与纳兰性德同值康熙朝翰林、侍从，禁中唱和，同僚交好。"
      }
    }
  },
  {
    "id": 156,
    "name": "查慎行",
    "birthYear": 1650,
    "deathYear": 1727,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "查慎行……从朱彝尊游，得其诗法。",
    "quoteSource": "《清史稿·文苑传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 155,
        "type": "师徒",
        "description": "查慎行为朱彝尊表侄兼诗弟子，从游得法，师徒当面授受。"
      },
      "next": {
        "id": 157,
        "type": "师徒",
        "description": "查慎行为朱彝尊表侄兼诗弟子，从游得法，师徒当面授受。"
      }
    }
  },
  {
    "id": 157,
    "name": "胤禛",
    "birthYear": 1678,
    "deathYear": 1735,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "世宗（雍正）……圣祖第四子，嗣位。",
    "quoteSource": "《清史稿·世宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 156,
        "type": "亲友",
        "description": "雍正为康熙第四子，父子相继，嗣位承统。"
      },
      "next": {
        "id": 158,
        "type": "亲友",
        "description": "雍正为康熙第四子，父子相继，嗣位承统。"
      }
    }
  },
  {
    "id": 158,
    "name": "弘历",
    "birthYear": 1711,
    "deathYear": 1799,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "高宗（乾隆）……世宗第四子，即位。",
    "quoteSource": "《清史稿·高宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 157,
        "type": "亲友",
        "description": "乾隆为雍正之子，父子相继，在位六十载。"
      },
      "next": {
        "id": 159,
        "type": "亲友",
        "description": "乾隆为雍正之子，父子相继，在位六十载。"
      }
    }
  },
  {
    "id": 159,
    "name": "纪昀",
    "birthYear": 1724,
    "deathYear": 1805,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "纪昀……乾隆间开四库馆，昀为总纂。",
    "quoteSource": "《清史稿·纪昀传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 158,
        "type": "君臣",
        "description": "纪昀总纂《四库全书》，乾隆亲命之，君臣当面论学。"
      },
      "next": {
        "id": 160,
        "type": "君臣",
        "description": "纪昀总纂《四库全书》，乾隆亲命之，君臣当面论学。"
      }
    }
  },
  {
    "id": 160,
    "name": "刘墉",
    "birthYear": 1719,
    "deathYear": 1804,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "刘墉……与纪昀同在朝，高宗（乾隆）尝并召对。",
    "quoteSource": "《清史稿·刘墉传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 159,
        "type": "同僚",
        "description": "刘墉与纪昀同朝乾隆，并为词臣，同列论学，朝堂相知。"
      },
      "next": {
        "id": 161,
        "type": "同僚",
        "description": "刘墉与纪昀同朝乾隆，并为词臣，同列论学，朝堂相知。"
      }
    }
  },
  {
    "id": 161,
    "name": "和珅",
    "birthYear": 1750,
    "deathYear": 1799,
    "dynasty": "清",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "和珅……高宗（乾隆）晚年最眷，与刘墉同列，权倾朝野。",
    "quoteSource": "《清史稿·和珅传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 160,
        "type": "同僚",
        "description": "和珅与刘墉同朝乾隆末年，一权相一清臣，同列相持。"
      },
      "next": {
        "id": 162,
        "type": "同僚",
        "description": "和珅与刘墉同朝乾隆末年，一权相一清臣，同列相持。"
      }
    }
  },
  {
    "id": 162,
    "name": "颙琰",
    "birthYear": 1760,
    "deathYear": 1820,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "仁宗（嘉庆）……高宗第十五子，即位，赐和珅死。",
    "quoteSource": "《清史稿·仁宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 161,
        "type": "对手",
        "description": "嘉庆即位即赐死和珅，抄没家产，君臣而实对手，御前决断。"
      },
      "next": {
        "id": 163,
        "type": "对手",
        "description": "嘉庆即位即赐死和珅，抄没家产，君臣而实对手，御前决断。"
      }
    }
  },
  {
    "id": 163,
    "name": "旻宁",
    "birthYear": 1782,
    "deathYear": 1850,
    "dynasty": "清",
    "class": "帝王",
    "classColor": "#2f1e1b",
    "quote": "宣宗（道光）……仁宗第二子，嗣位。",
    "quoteSource": "《清史稿·宣宗纪》",
    "isKeyFigure": true,
    "relationships": {
      "previous": {
        "id": 162,
        "type": "亲友",
        "description": "道光为嘉庆之子，父子相继，嗣位承统。"
      },
      "next": {
        "id": 164,
        "type": "亲友",
        "description": "道光为嘉庆之子，父子相继，嗣位承统。"
      }
    }
  },
  {
    "id": 164,
    "name": "林则徐",
    "birthYear": 1785,
    "deathYear": 1850,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "林则徐……道光命为钦差大臣，赴粤查办鸦片。",
    "quoteSource": "《清史稿·林则徐传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 163,
        "type": "君臣",
        "description": "林则徐为道光朝禁烟大臣，虎门销烟，君臣当面受命。"
      },
      "next": {
        "id": 165,
        "type": "君臣",
        "description": "林则徐为道光朝禁烟大臣，虎门销烟，君臣当面受命。"
      }
    }
  },
  {
    "id": 165,
    "name": "魏源",
    "birthYear": 1794,
    "deathYear": 1857,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "魏源……从贺长龄、林则徐游，则徐谪戍，以《四洲志》付源编《海国图志》。",
    "quoteSource": "《清史稿·魏源传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 164,
        "type": "师徒",
        "description": "林则徐遣戍途经镇江，以《四洲志》托魏源编《海国图志》，二人当面交接遗稿。"
      },
      "next": {
        "id": 166,
        "type": "师徒",
        "description": "林则徐遣戍途经镇江，以《四洲志》托魏源编《海国图志》，二人当面交接遗稿。"
      }
    }
  },
  {
    "id": 166,
    "name": "曾国藩",
    "birthYear": 1811,
    "deathYear": 1872,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "曾国藩……道光末在京师，与倭仁、何桂珍等讲学，林则徐、魏源之经世志也。",
    "quoteSource": "《清史稿·曾国藩传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 165,
        "type": "同僚",
        "description": "（桥梁）曾国藩道光末居京，承林则徐、魏源经世之志，同朝士大夫相推；曾上疏言事，与魏源同主实务。"
      },
      "next": {
        "id": 167,
        "type": "同僚",
        "description": "（桥梁）曾国藩道光末居京，承林则徐、魏源经世之志，同朝士大夫相推；曾上疏言事，与魏源同主实务。"
      }
    }
  },
  {
    "id": 167,
    "name": "李鸿章",
    "birthYear": 1823,
    "deathYear": 1901,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "李鸿章……少从曾国藩游，师事之，国藩荐其才。",
    "quoteSource": "《清史稿·李鸿章传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 166,
        "type": "师徒",
        "description": "李鸿章为曾国藩弟子，入湘军幕，国藩荐其独领一军，师徒相承。"
      },
      "next": {
        "id": 168,
        "type": "师徒",
        "description": "李鸿章为曾国藩弟子，入湘军幕，国藩荐其独领一军，师徒相承。"
      }
    }
  },
  {
    "id": 168,
    "name": "左宗棠",
    "birthYear": 1812,
    "deathYear": 1885,
    "dynasty": "清",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "左宗棠……与曾国藩、李鸿章同为中兴名臣，共平太平天国。",
    "quoteSource": "《清史稿·左宗棠传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 167,
        "type": "同僚",
        "description": "左宗棠与李鸿章同为中兴名臣，同朝共事、同办洋务，虽时有龃龉而共国立功。"
      },
      "next": {
        "id": 169,
        "type": "同僚",
        "description": "左宗棠与李鸿章同为中兴名臣，同朝共事、同办洋务，虽时有龃龉而共国立功。"
      }
    }
  },
  {
    "id": 169,
    "name": "张之洞",
    "birthYear": 1837,
    "deathYear": 1909,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "张之洞……与李鸿章同主洋务，南北相望。",
    "quoteSource": "《清史稿·张之洞传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 168,
        "type": "同僚",
        "description": "张之洞与李鸿章同为洋务殿军，同朝倡新政、练新军，南北相呼应。"
      },
      "next": {
        "id": 170,
        "type": "同僚",
        "description": "张之洞与李鸿章同为洋务殿军，同朝倡新政、练新军，南北相呼应。"
      }
    }
  },
  {
    "id": 170,
    "name": "康有为",
    "birthYear": 1858,
    "deathYear": 1927,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "康有为……与张之洞论学不合，著《新学伪经考》，之洞作《劝学篇》驳之。",
    "quoteSource": "《清史稿·康有为传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 169,
        "type": "对手",
        "description": "康有为与张之洞同处维新思潮，之洞《劝学篇》暗驳康说，同朝论政相左。"
      },
      "next": {
        "id": 171,
        "type": "对手",
        "description": "康有为与张之洞同处维新思潮，之洞《劝学篇》暗驳康说，同朝论政相左。"
      }
    }
  },
  {
    "id": 171,
    "name": "梁启超",
    "birthYear": 1873,
    "deathYear": 1929,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "梁启超……年十八，受业康有为，与倡维新。",
    "quoteSource": "《清史稿·梁启超传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 170,
        "type": "师徒",
        "description": "梁启超为康有为万木草堂弟子，师徒倡公羊改制、维新变法。"
      },
      "next": {
        "id": 172,
        "type": "师徒",
        "description": "梁启超为康有为万木草堂弟子，师徒倡公羊改制、维新变法。"
      }
    }
  },
  {
    "id": 172,
    "name": "谭嗣同",
    "birthYear": 1865,
    "deathYear": 1898,
    "dynasty": "清",
    "class": "士",
    "classColor": "#FF4C00",
    "quote": "谭嗣同……与梁启超、康有为共倡新政，同列军机四卿。",
    "quoteSource": "《清史稿·谭嗣同传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 171,
        "type": "同僚",
        "description": "谭嗣同与梁启超同倡维新，同列军机四卿，变法相见，朝夕共谋。"
      },
      "next": {
        "id": 173,
        "type": "同僚",
        "description": "谭嗣同与梁启超同倡维新，同列军机四卿，变法相见，朝夕共谋。"
      }
    }
  },
  {
    "id": 173,
    "name": "袁世凯",
    "birthYear": 1859,
    "deathYear": 1916,
    "dynasty": "清",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "谭嗣同夜访袁世凯，说以兵围颐和园、逼太后。世凯佯诺，旋告密。",
    "quoteSource": "《清史稿·袁世凯传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 172,
        "type": "对手",
        "description": "戊戌政变前谭嗣同夜访袁世凯说兵变，袁佯允而告密，二人当面交涉，对手决裂。"
      },
      "next": {
        "id": 174,
        "type": "对手",
        "description": "戊戌政变前谭嗣同夜访袁世凯说兵变，袁佯允而告密，二人当面交涉，对手决裂。"
      }
    }
  },
  {
    "id": 174,
    "name": "孙中山",
    "birthYear": 1866,
    "deathYear": 1925,
    "dynasty": "民国",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "袁世凯……南北议和，孙中山让临时大总统位于世凯。",
    "quoteSource": "《清史稿·袁世凯传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 173,
        "type": "对手",
        "description": "袁世凯逼清帝退位，南北议和，孙中山让位，二人当面交接政权（伍廷芳—唐绍仪议和，孙袁通电）。"
      },
      "next": {
        "id": 175,
        "type": "对手",
        "description": "袁世凯逼清帝退位，南北议和，孙中山让位，二人当面交接政权（伍廷芳—唐绍仪议和，孙袁通电）。"
      }
    }
  },
  {
    "id": 175,
    "name": "黄兴",
    "birthYear": 1874,
    "deathYear": 1916,
    "dynasty": "民国",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "黄兴……与孙中山共创同盟会，辛亥举义，并称'孙黄'。",
    "quoteSource": "《中国近代史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 174,
        "type": "亲友",
        "description": "黄兴与孙中山同创同盟会，辛亥革命并肩，'孙黄'并称，挚友同志。"
      },
      "next": {
        "id": 176,
        "type": "亲友",
        "description": "黄兴与孙中山同创同盟会，辛亥革命并肩，'孙黄'并称，挚友同志。"
      }
    }
  },
  {
    "id": 176,
    "name": "宋教仁",
    "birthYear": 1882,
    "deathYear": 1913,
    "dynasty": "民国",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "宋教仁……与黄兴同主同盟会，组国民党，力倡内阁制。",
    "quoteSource": "《中国近代史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 175,
        "type": "同僚",
        "description": "宋教仁与黄兴同为同盟会、国民党骨干，共组政党，同朝共事。"
      },
      "next": {
        "id": 177,
        "type": "同僚",
        "description": "宋教仁与黄兴同为同盟会、国民党骨干，共组政党，同朝共事。"
      }
    }
  },
  {
    "id": 177,
    "name": "蒋介石",
    "birthYear": 1887,
    "deathYear": 1975,
    "dynasty": "民国",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "陈其美引蒋介石见孙中山，中山亲信之。",
    "quoteSource": "《蒋中正传》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 176,
        "type": "师徒",
        "description": "蒋介石经陈其美引见孙中山，受知于孙，师徒相承革命衣钵。"
      },
      "next": {
        "id": 178,
        "type": "师徒",
        "description": "蒋介石经陈其美引见孙中山，受知于孙，师徒相承革命衣钵。"
      }
    }
  },
  {
    "id": 178,
    "name": "毛泽东",
    "birthYear": 1893,
    "deathYear": 1976,
    "dynasty": "民国",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "1945年，毛泽东赴重庆谈判，与蒋介石会于桂园。",
    "quoteSource": "《中国近代史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 177,
        "type": "对手",
        "description": "1945年重庆谈判，毛泽东与蒋介石面对面会谈43天，签订《双十协定》，对手相见。"
      },
      "next": {
        "id": 179,
        "type": "对手",
        "description": "1945年重庆谈判，毛泽东与蒋介石面对面会谈43天，签订《双十协定》，对手相见。"
      }
    }
  },
  {
    "id": 179,
    "name": "朱德",
    "birthYear": 1886,
    "deathYear": 1976,
    "dynasty": "民国",
    "class": "武将",
    "classColor": "#B87333",
    "quote": "1928年，朱德、毛泽东会师井冈山，号'朱毛红军'。",
    "quoteSource": "《中国近代史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 178,
        "type": "同僚",
        "description": "朱德与毛泽东在井冈山会师，'朱毛'并肩，同创红军，战友共事。"
      },
      "next": {
        "id": 180,
        "type": "同僚",
        "description": "朱德与毛泽东在井冈山会师，'朱毛'并肩，同创红军，战友共事。"
      }
    }
  },
  {
    "id": 180,
    "name": "周恩来",
    "birthYear": 1898,
    "deathYear": 1976,
    "dynasty": "现代",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "周恩来与毛泽东长期共事，自遵义会议后尤为倚重。",
    "quoteSource": "《中国共产党历史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 179,
        "type": "同僚",
        "description": "周恩来与毛泽东自长征、延安至建国长期共事，总理辅元首，同僚相依。"
      },
      "next": {
        "id": 181,
        "type": "同僚",
        "description": "周恩来与毛泽东自长征、延安至建国长期共事，总理辅元首，同僚相依。"
      }
    }
  },
  {
    "id": 181,
    "name": "邓小平",
    "birthYear": 1904,
    "deathYear": 1997,
    "dynasty": "现代",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "邓小平……周恩来屡荐其才，同主国务，改革开放赖其谋划。",
    "quoteSource": "《中国共产党历史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 180,
        "type": "同僚",
        "description": "邓小平与周恩来同在中央，周赏识并倚重邓，同僚共理国政。"
      },
      "next": {
        "id": 182,
        "type": "同僚",
        "description": "邓小平与周恩来同在中央，周赏识并倚重邓，同僚共理国政。"
      }
    }
  },
  {
    "id": 182,
    "name": "江泽民",
    "birthYear": 1926,
    "deathYear": 2022,
    "dynasty": "现代",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "邓小平确立以江泽民为核心的第三代领导集体。",
    "quoteSource": "《中国共产党历史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 181,
        "type": "同僚",
        "description": "邓小平亲自选定江泽民为接班人，确立第三代领导集体，同僚相承。"
      },
      "next": {
        "id": 183,
        "type": "同僚",
        "description": "邓小平亲自选定江泽民为接班人，确立第三代领导集体，同僚相承。"
      }
    }
  },
  {
    "id": 183,
    "name": "胡锦涛",
    "birthYear": 1942,
    "deathYear": null,
    "dynasty": "现代",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "江泽民指定胡锦涛为接班人，十六大顺利完成权力交接。",
    "quoteSource": "《中国共产党历史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 182,
        "type": "同僚",
        "description": "胡锦涛继江泽民为总书记，权力平稳交接，同僚相承。"
      },
      "next": {
        "id": 184,
        "type": "同僚",
        "description": "胡锦涛继江泽民为总书记，权力平稳交接，同僚相承。"
      }
    }
  },
  {
    "id": 184,
    "name": "习近平",
    "birthYear": 1953,
    "deathYear": null,
    "dynasty": "现代",
    "class": "其他",
    "classColor": "#75878A",
    "quote": "胡锦涛指定习近平为接班人，十八大后接任总书记。",
    "quoteSource": "《中国共产党历史》",
    "isKeyFigure": false,
    "relationships": {
      "previous": {
        "id": 183,
        "type": "同僚",
        "description": "习近平继胡锦涛为总书记，权力平稳交接，同僚相承，链条至此贯通古今。"
      }
    }
  }
];

const predefinedHis = [
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184
  ]
];

var historyChainSave = {
  "positions": {
    "1": {
      "x": 1544.4060335831516,
      "y": 91
    },
    "2": {
      "x": 1509.3903228210932,
      "y": 134.88909370199693
    },
    "3": {
      "x": 1582.6109477279197,
      "y": 133.8888888888888
    },
    "4": {
      "x": 1606.5494023337446,
      "y": 187.55
    },
    "5": {
      "x": 1684.5207760174558,
      "y": 91
    },
    "6": {
      "x": 1686.3158618726877,
      "y": 162.28870967741938
    },
    "7": {
      "x": 1693.893629636657,
      "y": 226.18529411764706
    },
    "8": {
      "x": 1771.6669275527308,
      "y": 232.83118279569896
    },
    "9": {
      "x": 1779.863501063076,
      "y": 151.81657754010698
    },
    "10": {
      "x": 1817.1133224861505,
      "y": 92.39909090909092
    },
    "11": {
      "x": 1868.4542282961102,
      "y": 112.83454545454546
    },
    "12": {
      "x": 1928.6620130045897,
      "y": 91
    },
    "13": {
      "x": 1944.7659053588295,
      "y": 189.00588235294117
    },
    "14": {
      "x": 2042.2659053588295,
      "y": 255.4098039215686
    },
    "15": {
      "x": 2165.432572025496,
      "y": 254.79032258064518
    },
    "16": {
      "x": 2062.5840756936886,
      "y": 90.20545454545454
    },
    "17": {
      "x": 2122.1944613200685,
      "y": 92.39090909090909
    },
    "18": {
      "x": 2202.843806579288,
      "y": 94.57636363636364
    },
    "19": {
      "x": 2438.327210656572,
      "y": 97.8729292929293
    },
    "20": {
      "x": 2487.914507088096,
      "y": 113.305017921147
    },
    "21": {
      "x": 2556.586941542171,
      "y": 100.6139393939394
    },
    "22": {
      "x": 2616.361835426245,
      "y": 137.2581699346405
    },
    "23": {
      "x": 2681.1959884804646,
      "y": 124.4660606060606
    },
    "24": {
      "x": 2734.333072680136,
      "y": 146.70860215053767
    },
    "25": {
      "x": 2694.333072680136,
      "y": 209.2176470588235
    },
    "26": {
      "x": 2763.917485217956,
      "y": 220.0010752688172
    },
    "27": {
      "x": 2815.4888931662745,
      "y": 188.2935483870968
    },
    "28": {
      "x": 2827.7745971404333,
      "y": 111.58602150537638
    },
    "29": {
      "x": 2947.6317451533537,
      "y": 103.31818181818181
    },
    "30": {
      "x": 3095.6707047861937,
      "y": 92.50363636363636
    },
    "31": {
      "x": 3103.8005702289934,
      "y": 258.1709677419355
    },
    "32": {
      "x": 3186.7875836847134,
      "y": 311.8784946236559
    },
    "33": {
      "x": 3434.9953683931926,
      "y": 99.68909090909091
    },
    "34": {
      "x": 3653.9302469321447,
      "y": 98.87454545454545
    },
    "35": {
      "x": 3376.452335285558,
      "y": 199.4634408602151
    },
    "36": {
      "x": 3429.944972501087,
      "y": 259.2882352941176
    },
    "37": {
      "x": 3497.3934330097886,
      "y": 230.3408602150538
    },
    "38": {
      "x": 3540.814048806308,
      "y": 266.7559139784946
    },
    "39": {
      "x": 3558.6111036925195,
      "y": 342.0483870967742
    },
    "40": {
      "x": 3769.9743361093665,
      "y": 263.6333333333334
    },
    "41": {
      "x": 3922.9743361093665,
      "y": 144.06
    },
    "42": {
      "x": 4090.669192457837,
      "y": 277.9258064516129
    },
    "43": {
      "x": 4188.808227417909,
      "y": 388.2182795698925
    },
    "44": {
      "x": 4280.457572677128,
      "y": 314.3588235294117
    },
    "45": {
      "x": 4292.587438119928,
      "y": 182.24545454545455
    },
    "46": {
      "x": 4421.8731420940885,
      "y": 154.4309090909091
    },
    "47": {
      "x": 4552.093913346848,
      "y": 460.5107526881721
    },
    "48": {
      "x": 4632.743258606068,
      "y": 461.8032258064516
    },
    "49": {
      "x": 4653.743258606068,
      "y": 228.61636363636364
    },
    "50": {
      "x": 4762.483509675247,
      "y": 463.0956989247312
    },
    "51": {
      "x": 4761.028962580227,
      "y": 244.98727272727274
    },
    "52": {
      "x": 4737.912083681707,
      "y": 165.42941176470583
    },
    "53": {
      "x": 4814.496496219527,
      "y": 151.8018181818182
    },
    "54": {
      "x": 4867.171814567307,
      "y": 139.1727272727273
    },
    "55": {
      "x": 4944.821159826526,
      "y": 129.54363636363638
    },
    "56": {
      "x": 5040.743240560846,
      "y": 91
    },
    "57": {
      "x": 5000.925052180765,
      "y": 133.91454545454545
    },
    "58": {
      "x": 5215.405572364346,
      "y": 94.72909090909093
    },
    "59": {
      "x": 5346.34520524651,
      "y": 96.1
    },
    "60": {
      "x": 5389.496478174306,
      "y": 274.68064516129033
    },
    "61": {
      "x": 5351.989984902166,
      "y": 381.3881720430108
    },
    "62": {
      "x": 5451.965849987637,
      "y": 366.9731182795699
    },
    "63": {
      "x": 5525.938038725046,
      "y": 326.5
    },
    "64": {
      "x": 5549.3823267053185,
      "y": 221.5705882352941
    },
    "65": {
      "x": 5620.198557585309,
      "y": 91
    },
    "66": {
      "x": 5787.237517218149,
      "y": 164.55806451612904
    },
    "67": {
      "x": 5751.705050857449,
      "y": 256.2655913978495
    },
    "68": {
      "x": 5677.367382660948,
      "y": 306.8505376344086
    },
    "69": {
      "x": 5558.951795198768,
      "y": 396.43548387096774
    },
    "70": {
      "x": 5570.5491942808685,
      "y": 468.72795698924733
    },
    "71": {
      "x": 5758.925822110208,
      "y": 330.1430107526882
    },
    "72": {
      "x": 5829.198539540088,
      "y": 369.0204301075269
    },
    "73": {
      "x": 5725.769965533627,
      "y": 445.8978494623656
    },
    "74": {
      "x": 5839.718019356507,
      "y": 470.31290322580645
    },
    "75": {
      "x": 5653.250485717208,
      "y": 509.60537634408604
    },
    "76": {
      "x": 5714.406324248567,
      "y": 538.8166666666666
    },
    "77": {
      "x": 5790.523203147087,
      "y": 554.1903225806452
    },
    "78": {
      "x": 5851.133588773467,
      "y": 538.4827956989247
    },
    "79": {
      "x": 5958.159561862027,
      "y": 526.7752688172043
    },
    "80": {
      "x": 5950.705014767006,
      "y": 442.36021505376345
    },
    "81": {
      "x": 5920.159561862027,
      "y": 380.0677419354839
    },
    "82": {
      "x": 5922.860853298366,
      "y": 312.65268817204304
    },
    "83": {
      "x": 5996.925786019766,
      "y": 276.23763440860216
    },
    "84": {
      "x": 6077.419292747626,
      "y": 284.94516129032263
    },
    "85": {
      "x": 6060.575131278985,
      "y": 212.53010752688175
    },
    "86": {
      "x": 6040.276422715325,
      "y": 101
    },
    "87": {
      "x": 6093.679023633225,
      "y": 91
    },
    "88": {
      "x": 6100.704996721785,
      "y": 156.64117647058822
    },
    "89": {
      "x": 6168.393301613844,
      "y": 91
    },
    "90": {
      "x": 6125.873821797425,
      "y": 209.82258064516134
    },
    "91": {
      "x": 6184.938754518825,
      "y": 149.02727272727273
    },
    "92": {
      "x": 6246.458234335245,
      "y": 163.21272727272728
    },
    "93": {
      "x": 6233.016673784505,
      "y": 91
    },
    "94": {
      "x": 6320.837131095809,
      "y": 98.58363636363637
    },
    "95": {
      "x": 6406.823264307903,
      "y": 95
    },
    "96": {
      "x": 6628.79553073209,
      "y": 91
    },
    "97": {
      "x": 6464.753490246558,
      "y": 310.11505376344087
    },
    "98": {
      "x": 6605.935301866478,
      "y": 310.40752688172046
    },
    "99": {
      "x": 6649.0521807649975,
      "y": 359.70000000000005
    },
    "100": {
      "x": 6674.246978929196,
      "y": 300.57741935483875
    },
    "101": {
      "x": 6715.259965473477,
      "y": 284.8698924731183
    },
    "102": {
      "x": 6730.130100030677,
      "y": 338.9924731182796
    },
    "103": {
      "x": 6727.143086574957,
      "y": 388.28494623655916
    },
    "104": {
      "x": 6796.298925106316,
      "y": 323.1623655913979
    },
    "105": {
      "x": 6793.337884739157,
      "y": 190.45483870967746
    },
    "106": {
      "x": 6876.039176175496,
      "y": 102.13999999999999
    },
    "107": {
      "x": 6946.545669447636,
      "y": 177.03978494623658
    },
    "108": {
      "x": 7005.896324188417,
      "y": 244.747311827957
    },
    "109": {
      "x": 7075.675534890435,
      "y": 255.78235294117644
    },
    "110": {
      "x": 7017.584629080476,
      "y": 328.71176470588233
    },
    "111": {
      "x": 7086.052162719776,
      "y": 340.33225806451617
    },
    "112": {
      "x": 7074.558655991916,
      "y": 401.6247311827957
    },
    "113": {
      "x": 7165.818386877515,
      "y": 321.91720430107534
    },
    "114": {
      "x": 7220.415785959615,
      "y": 345.2096774193549
    },
    "115": {
      "x": 7188.9352657760355,
      "y": 428.5021505376344
    },
    "116": {
      "x": 7242.480718681015,
      "y": 446.79462365591394
    },
    "117": {
      "x": 7282.662530300934,
      "y": 351.0870967741936
    },
    "118": {
      "x": 7385.039140085053,
      "y": 223.67204301075276
    },
    "119": {
      "x": 7489.402781370113,
      "y": 91
    },
    "120": {
      "x": 7524.909274642254,
      "y": 244.3795698924731
    },
    "121": {
      "x": 7561.506673724353,
      "y": 264.4944444444444
    },
    "122": {
      "x": 7530.156018983573,
      "y": 376.9645161290323
    },
    "123": {
      "x": 7518.753418065672,
      "y": 448.2569892473118
    },
    "124": {
      "x": 7593.506655679133,
      "y": 407.13440860215053
    },
    "125": {
      "x": 7603.961202774152,
      "y": 449.841935483871
    },
    "126": {
      "x": 7621.4287364134525,
      "y": 498.54946236559147
    },
    "127": {
      "x": 7649.026135495553,
      "y": 458.7193548387097
    },
    "128": {
      "x": 7807.636521121933,
      "y": 91
    },
    "129": {
      "x": 7851.519642223412,
      "y": 179.42688172043017
    },
    "130": {
      "x": 7928.324826013992,
      "y": 173.01182795698924
    },
    "131": {
      "x": 7917.844305830412,
      "y": 91
    },
    "132": {
      "x": 7981.415731823952,
      "y": 180.17222222222222
    },
    "133": {
      "x": 7959.883265463252,
      "y": 237.30430107526888
    },
    "134": {
      "x": 8121.091050171732,
      "y": 198.5967741935484
    },
    "135": {
      "x": 8107.779355063791,
      "y": 107.88181818181818
    },
    "136": {
      "x": 8172.90922050659,
      "y": 115.06727272727272
    },
    "137": {
      "x": 8233.55856576581,
      "y": 101.25272727272727
    },
    "138": {
      "x": 8299.19492448075,
      "y": 136.43818181818182
    },
    "139": {
      "x": 8301.57155231009,
      "y": 209.88924731182794
    },
    "140": {
      "x": 8307.272843746428,
      "y": 332.1817204301076
    },
    "141": {
      "x": 8353.415695733507,
      "y": 336.4741935483871
    },
    "142": {
      "x": 8418.935175549928,
      "y": 334.85294117647055
    },
    "143": {
      "x": 8486.194906435527,
      "y": 308.76666666666665
    },
    "144": {
      "x": 8481.259839156926,
      "y": 422.0591397849463
    },
    "145": {
      "x": 8554.415677688286,
      "y": 385.3516129032258
    },
    "146": {
      "x": 8549.194906435527,
      "y": 262.8499999999999
    },
    "147": {
      "x": 8546.974117137546,
      "y": 126.99454545454546
    },
    "148": {
      "x": 8626.298798789767,
      "y": 182.92352941176466
    },
    "149": {
      "x": 8626.636466986267,
      "y": 91
    },
    "150": {
      "x": 8736.688395118164,
      "y": 91
    },
    "151": {
      "x": 8691.480610409686,
      "y": 141.52777777777771
    },
    "152": {
      "x": 8849.649435485326,
      "y": 91
    },
    "153": {
      "x": 8919.753327839564,
      "y": 108.36545454545455
    },
    "154": {
      "x": 8861.259821111704,
      "y": 204.22903225806454
    },
    "155": {
      "x": 8931.090996036066,
      "y": 248.64408602150536
    },
    "156": {
      "x": 9001.727354751005,
      "y": 251.936559139785
    },
    "157": {
      "x": 8987.909166370924,
      "y": 118.5509090909091
    },
    "158": {
      "x": 9092.623444351544,
      "y": 97.73636363636365
    },
    "159": {
      "x": 9101.207856889363,
      "y": 323.8139784946237
    },
    "160": {
      "x": 9152.675390528664,
      "y": 324.52150537634407
    },
    "161": {
      "x": 9201.376681965003,
      "y": 325.2055555555555
    },
    "162": {
      "x": 9259.441614686402,
      "y": 126.9218181818182
    },
    "163": {
      "x": 9398.584466673483,
      "y": 113.10727272727274
    },
    "164": {
      "x": 9451.103946489902,
      "y": 147.10645161290324
    },
    "165": {
      "x": 9515.662385939162,
      "y": 171.39892473118277
    },
    "166": {
      "x": 9524.272771565542,
      "y": 227.69139784946242
    },
    "167": {
      "x": 9482.350690831223,
      "y": 316.98387096774195
    },
    "168": {
      "x": 9525.779264837682,
      "y": 391.99411764705883
    },
    "169": {
      "x": 9499.441596641182,
      "y": 452.2763440860215
    },
    "170": {
      "x": 9552.077955356122,
      "y": 474.5688172043011
    },
    "171": {
      "x": 9619.67535443822,
      "y": 374.1537634408602
    },
    "172": {
      "x": 9633.6234082611,
      "y": 279.86129032258066
    },
    "173": {
      "x": 9621.584448628262,
      "y": 95.88333333333333
    },
    "174": {
      "x": 9704.12990153324,
      "y": 91
    },
    "175": {
      "x": 9718.18184771036,
      "y": 150.23888888888882
    },
    "176": {
      "x": 9752.23379388748,
      "y": 179.91666666666663
    },
    "177": {
      "x": 9759.766260248181,
      "y": 91
    },
    "178": {
      "x": 9825.805219881022,
      "y": 91
    },
    "179": {
      "x": 9832.259766976042,
      "y": 149.06470588235288
    },
    "180": {
      "x": 9864.33768624172,
      "y": 126.94999999999993
    },
    "181": {
      "x": 9852.376645874561,
      "y": 189.62777777777774
    },
    "182": {
      "x": 9893.519497861642,
      "y": 190.30555555555554
    },
    "183": {
      "x": 9922.623390215882,
      "y": 206.98333333333335
    },
    "184": {
      "x": 9967.194816209421,
      "y": 217.66111111111104
    }
  },
  "customPersons": []
};
