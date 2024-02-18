module.exports = [
  {
    id: "get-products",
    url: "/api/products",
    method: "GET",
    variants: [
      {
        id: "success", // id of the variant
        delay: 180, // delay of the variant
        type: "json", // variant type
        options: {
          // options for the variant type handler
          status: 200, // status to send
          body: [
            {
              id: "329699637",
              name: "JEANS STRAIGHT BOLSILLOS",
              price: "49,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/8062/445/703/2/w/282/8062445703_15_1_1.jpg?ts=1707478754777",
            },
            {
              id: "327872883",
              name: "JEANS REGULAR FIT",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/2553/421/811/2/w/282/2553421811_15_1_1.jpg?ts=1707478754844",
            },
            {
              id: "330375837",
              name: "JEANS STRAIGHT BOLSILLOS",
              price: "49,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/8062/445/679/2/w/282/8062445679_15_1_1.jpg?ts=1707478754775",
            },
            {
              id: "333090047",
              name: "JEANS BAGGY FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/1538/460/802/2/w/282/1538460802_15_1_1.jpg?ts=1707468667277",
            },
            {
              id: "328232456",
              name: "JEANS BAGGY FIT",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/0840/460/400/2/w/282/0840460400_15_1_1.jpg?ts=1707468667211",
            },
            {
              id: "330274277",
              name: "JEANS STRAIGHT ACID WASH",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/6688/402/409/2/w/282/6688402409_15_1_1.jpg?ts=1708013699850",
            },
            {
              id: "329763927",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/8062/400/800/2/w/282/8062400800_15_1_1.jpg?ts=1708010813140",
            },
            {
              id: "329787808",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/8062/400/406/2/w/282/8062400406_15_1_1.jpg?ts=1708010813155",
            },
            {
              id: "329763928",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/1538/411/802/2/w/282/1538411802_15_1_1.jpg?ts=1708010813145",
            },
            {
              id: "345888663",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/1538/437/505/2/w/282/1538437505_15_1_1.jpg?ts=1708076286757",
            },
            {
              id: "314756289",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/8062/320/822/2/w/282/8062320822_15_1_1.jpg?ts=1695971084653",
            },
            {
              id: "314756292",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/8062/320/802/2/w/282/8062320802_15_1_1.jpg?ts=1695971084513",
            },
            {
              id: "314756291",
              name: "JEANS STRAIGHT FIT",
              price: "29,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/8062/320/427/2/w/282/8062320427_15_1_1.jpg?ts=1704453829649",
            },
            {
              id: "324864382",
              name: "JEANS SLIM FIT",
              price: "25,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/0774/330/407/2/w/282/0774330407_15_1_1.jpg?ts=1689606583050",
            },
            {
              id: "312670608",
              name: "JEANS SKINNY FIT",
              price: "19,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/5575/320/427/2/w/282/5575320427_15_1_1.jpg?ts=1689606319308",
            },
            {
              id: "324864379",
              name: "JEANS SLIM FIT",
              price: "25,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/0774/330/427/2/w/282/0774330427_15_1_1.jpg?ts=1689605528490",
            },
            {
              id: "324864378",
              name: "JEANS SLIM FIT",
              price: "25,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/1/p/0774/330/800/2/w/282/0774330800_15_1_1.jpg?ts=1689609651347",
            },
            {
              id: "312670605",
              name: "JEANS SKINNY FIT",
              price: "19,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/5575/320/400/2/w/282/5575320400_15_1_1.jpg?ts=1689607862371",
            },
            {
              id: "324864377",
              name: "JEANS SLIM FIT",
              price: "25,95 EUR",
              image:
                "https://static.zara.net/photos///2023/I/0/2/p/0774/330/822/2/w/282/0774330822_15_1_1.jpg?ts=1689606673922",
            },
            {
              id: "312670607",
              name: "JEANS SKINNY FIT",
              price: "19,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/5575/320/800/2/w/282/5575320800_15_1_1.jpg?ts=1704452457889",
            },
            {
              id: "317333040",
              name: "JEANS STRAIGHT FIT",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/0774/430/431/2/w/282/0774430431_15_1_1.jpg?ts=1707215709460",
            },
            {
              id: "345407922",
              name: "JEANS STRAIGHT FIT",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/0774/430/431/2/w/282/0774430431_15_2_1.jpg?ts=1707215709469",
            },
            {
              id: "318820307",
              name: "JEANS STRAIGHT FIT",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/9123/440/251/2/w/282/9123440251_15_1_1.jpg?ts=1707215709439",
            },
            {
              id: "321496877",
              name: "JEANS STRAIGHT OVERDYED",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/3991/460/800/2/w/282/3991460800_15_1_1.jpg?ts=1707216674543",
            },
            {
              id: "322660859",
              name: "JEANS SPECIAL DYED",
              price: "39,95 EUR",
              image:
                "https://static.zara.net/photos///2024/V/0/2/p/3991/410/250/2/w/282/3991410250_15_1_1.jpg?ts=1707216674612",
            },
          ],
        },
      },
    ],
  },
];
