// 中国合伙人
let ChinesePartners = [
    '如果皱纹终将刻在我们的额头，我们唯一能做的，就是不让它刻在我们心上',
    '梦想是什么？梦想就是一种让你感到坚持，就是幸福的东西。',
    '我们只有在失败中寻找胜利，在绝望中寻求希望。',
    '我们改变不了世界，是世界改变了我们。',
    '我觉得我的青春结束了，而且就埋葬在这。',
    '男人的梦想最初都是从女人开始的。',
    '我就是为了我自己，至少我敢承认。',
    '爱情就像录像机，有时候要按快进，有时候要按暂停，生活也一样。',
    '听一个人说话，不是听他说了什么，而是听他没说什么。',
    '其实我们追求的不是成功，而是自己的尊严。',
    '他不敢冒险，因为他害怕失败，害怕变回那个失败者，因为他配不上今天的成功。',
    '当你意识到失败只是成功的弯路的时候，你就已经成功了一半。',
    '总有些更重要的事情赋予我们打败恐惧的勇气。',
    '有这样一种女生，你没开口她已经拒绝了你。',
    '假如生活欺骗了你，你也要欺骗回生活。',
    '人在绝境中做出的选择往往是对的。',
    '我以前只过一种生活，就是跟别人不一样的生活，后来我觉得原来大部分人选择的生活都是有价值的。',
    '最大的骗子其实是我们自己，因为我们总想改变别人，而拒绝改变自己。',
    '成功者总是不约而同的配合时代的需要。',
]

let GreenBook = [
    '不管你做什么 都要做到极致，上班就认真工作笑就尽情大笑，吃东西时 就像是最后一餐那样去享受。',
    '暴力永远无法取胜 ，托尼，坚守尊严才会赢，因为自尊总能让你占理。',
    '因为光靠天赋是不够的 改变大众的想法需要勇气。',
]

let MinningTown = [
    '有奔头那就不算苦，没奔头那才叫真的苦！',
    '有水就有希望，就有前途，过不了几年，那就能变成咱们的‘塞上江南’了！',
    '一步步发展，建设是需要过程的。',
    '这世上最重要的是争气，让家人过得更好。',
    '独木桥有独木桥的好，它危险，但是让人警觉，那高速路是平坦，但是人容易麻痹，就容易出事故，而且高速路速度快，一出事就是大事嘛。',
    '其实人生和溪水一样，只有汇成大河，奋力地把山劈开，把土划破，才有希望奔向大海，如果失去了勇气，就会成为内陆的盐湖，直至干涸。',
]

export default [
    ...ChinesePartners.map(text=>({saying:text,from:'中国合伙人'})),
    ...GreenBook.map(text=>({saying:text,from:'绿皮书'})),
    ...MinningTown.map(text=>({saying:text,from:'山海情'})),
]