export interface QuizQuestion {
  id: number;
  title: string;
  level: string;
  missionType: string;
  question: string;
  options: string[];
  correctAnswer: number;
  image: string;
  locationHint: string;
}

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 0,
    title: "銀河系",
    level: "LEVEL 1",
    missionType: "宇宙任務：初步觀測",
    question: "我們所在的星系稱為什麼？",
    options: ["仙女座星系", "銀河系", "麥哲倫星雲", "太陽系"],
    correctAnswer: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBncKzjRPvYUAbmTOdkEUts6ScGwU5v5F6guSTV5eUP9b49EbWdaUp0ikpPnQVQfZx1UumPiVmmrh_WzEDW2WwpPFGt_a2q4ZR8dzKtFFVIe9YQr8vbhFur_7ENUm8QwfVpMeLA1RjUy4zUcuLQmGafZ2Y525iujB1IzMyEkUipV1VLGVNXIKXg4pH9SerY7ODs43G80mo5T_D5IZHyGYPkFdwtyGpeiPdg9MmI7uFNxMeDcsygaz4CGn3VvSWvT72xansG25IOJXA",
    locationHint: ""
  },
  {
    id: 1,
    title: "蓋亞任務",
    level: "LEVEL 2",
    missionType: "蓋亞任務",
    question: "蓋亞（Gaia）在希臘神話中代表大地之母。蓋亞的主要任務是繪製銀河系的三維地圖，為人類揭開銀河的演化歷史。請問「蓋亞」放在哪裡？",
    options: ["L1", "L2", "L3", "L4"],
    correctAnswer: 1,
    image: "https://lh3.googleusercontent.com/aida/ADBb0uj_CRFZAYHBsNOY6UTYSwOyddYD9-bw62K_SWuE3AwR5987tWGZbEz_q__SCZdbXHwJKDuMmtL8Z1GvnghTDQxl_jEhupJoJbebLhWKX37gNbrTXX3eO4UMB1iPFXkj8NsGbRdPZP5jtTSJg5_AqvBefEj4OslRt4o0ifmqv94LD_TCtlD3glLYN9BCw0tUX9sBjgBrVT804n_z_3e0wTW2FYElmDV6msX9Fn-g9zuaX44zcVPQGDTpYETnVKaxLGrAGTXIE4dvcw",
    locationHint: "特展室「蓋亞任務」"
  },
  {
    id: 2,
    title: "本星系群",
    level: "LEVEL 3",
    missionType: "本星系群 (Local Group)",
    question: "在我們所在的「本星系群」中，哪一個星系不屬於其中較大的三大星系之一？",
    options: ["銀河系 (Milky Way)", "仙女座星系 (Andromeda)", "三角座星系 (Triangulum)", "大麥哲倫星系 (Large Magellanic Cloud)"],
    correctAnswer: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw_CsGjDvGtJ6WFPlStYI5cyzss_Tec4m5MjcivHxfNpiakh9gLW22WWixxesDMYP3upzweq65GS0b1SOOb1IUA2MLdHacCXYPdu9R7VsM63PdRKt3bMLGF6RrL9kcSRJDnGbzR8pMnGWzP1ej699pQhNNvaqXvLzD59H_3-wjj1o15vnndUe2O1PkAigMDTOnaO8N2hQtjuqc4ASAErdy0Nj4iDSSu05TvRN4-H0qtbTx3fDq9bm5QcBQZc45ThLt8_0Qd-_5LwE",
    locationHint: "展示場三樓「星系的群聚」"
  },
  {
    id: 3,
    title: "都卜勒效應",
    level: "LEVEL 4",
    missionType: "都卜勒效應",
    question: "仙女座星系與銀河系正以每秒110公里的速度相互接近。當天體接近我們時它發出的光波長會變短，觀測到的訊號會向光譜藍端移動，遠離我們時則會向紅端移動，稱之為藍移和紅移。不單光波，聲波也具同樣現象。請問物體靠近時，聲音會如何變化？",
    options: ["音調變高", "音調不變", "音調變低"],
    correctAnswer: 0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsvKlC6sabuGEZXgMjkMBoAj3XwQZTetvzHRe0LN0rgOWUa6GwaV3FJGd7_RDwO6L5ZA1_KXopq49iZNGnasYhi1zK1XPYDlSuq2OFWOi43ycx1SMS99wtDt5FC4_jCsuy-15BRFvbCkgsnXF8NWOAVfN2I5sffzcBxfpE0rAf0wD6122aW8muEZWpo6NAfUvztufYc2RIwoNkwSqY0yC5QVfjcJSNs_to69DlQxNTJfEE0zIYKf_L5VvZkfd1A-1afC2FwHx0vdY",
    locationHint: "展示場三樓「都卜勒效應」"
  },
  {
    id: 4,
    title: "星系碰撞",
    level: "LEVEL 5",
    missionType: "銀河系與仙女座星系的合併",
    question: "在星系相遇、即將碰撞融合之時，並不會直接融合在一起，而是歷時數十億的反覆交會與拉扯，兩者的核心也不停互繞並逐漸拉近。請問兩者融合會形成什麼？",
    options: ["橢圓星系 (Elliptical Galaxy)", "超巨大星系 (Megagalaxy)", "不規則星系 (Irregular Galaxy)"],
    correctAnswer: 0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArfqq6ogV9DatChtsURsQuC8bnO9Jnf670JN_ANFD9avJ8KNKCsPt7Xlkp6lz6m0FbgoeLfQAACNtYTn8ZUv9HIUNGS4ekJ6BlFWgRuNgb_D4i95LV6-qp2ctKn7OeEkXA9pfEf7LSS4TSAC3XwJ52PJCHBM73V9LhvAsRi3vHlK-HtTggVzE_zvNuFfqWlrqjTXEg5BIaGqEj0aGA4qLu--0q3R72MXxAyzHueNO_Y_JNZqgUHVDWgZnlEXNIFXVkfbVXRb08uPA",
    locationHint: "特展室「銀河系與仙女座星系的合併」"
  },
  {
    id: 5,
    title: "韋伯望遠鏡",
    level: "LEVEL 6",
    missionType: "韋伯望遠鏡 (JWST)",
    question: "韋伯望遠鏡運用強大的紅外光觀測能力，穿透星際塵埃，看見恆星與黑洞的誕生，更將目光放遠，看見宇宙深處的早期樣貌，解答宇宙演化與星系誕生的奧祕。請問韋伯太空望遠鏡放在哪裡？",
    options: ["L1 點", "L2 點", "L3 點", "L4 點"],
    correctAnswer: 1,
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujoK0Nm5G2_duae-kwIVSYZ5XU96CNIqb9go09nTfiPLwF48XRYL-2tLWM_2a11xysN0ohKG1MdekkwGMy0oSPQaQWBI6uCtjd4d1MJNGuteGYm0CzH8t23G5Z-TBceJQfXHOGxVLR2v-WgIoHqbRTrZlux54cFKPCeN3scxdDGVCir-BFhBcSfmhQ6rykpEyiquD3FJYnGrqSSzxtLP9ctsX5xQNRyIwqxave-tTkIBOUbZEnTAt9uz6fmEumxBus6U_JX0YSWqg",
    locationHint: "展示場三樓「太空望遠鏡」"
  },
  {
    id: 6,
    title: "觀測條件",
    level: "LEVEL 7",
    missionType: "適合觀賞銀河的條件",
    question: "銀河的整體亮度不高，除了最明亮的夏季銀河中心區域外，其餘季節的銀河無法在一般郊區欣賞，需要在最黑暗、純淨無光害的地區才能看見。除了光害，更需要避開月光的干擾。請問在初幾附近可避開月光？",
    options: ["初一", "初七", "初十五", "初二十二"],
    correctAnswer: 0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCpYNNwzxyCApMipfZ-1UcdYPDpQKmqGndpP_zrCIqkRqO_hoDpP2aEGmyJvFMZ1YRz0DhPtf7GnazWDLjnEnGGhh4aURMlV9QtOFWWSRjUzE9KSt3Hna24AFpQdi2w3WekVi1wnsa1LE4V_IR8HPrfzHKtAHg-lCSan3O9PjvYU0vHpZNOeYxKPqDKyfPd4QV6Oepj5w-nDSPvCtrGm0KgUdF0hr3oSERldLGDSQ8obkUzBTGchSrcpyLX4ET9Yny9vZt2JqLYlc",
    locationHint: "特展室「觀賞銀河的條件」"
  }
];
