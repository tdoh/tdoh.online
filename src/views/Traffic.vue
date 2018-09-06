<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box spotlight-map">
        <img class="map" src="../assets/images/paper.png" alt="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14725.429635784727!2d120.2908224!3d22.6777352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e050a5586c935%3A0xbf3a2e2c964d999!2z6auY6ZuE6JOu5r2t5ZyL6Zqb5pyD6aSoIEdhcmRlbnZpbGxh!5e0!3m2!1szh-TW!2stw!4v1534230360981" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>公車</span></h1>
        <div class="content">
          <p>搭乘 E11A（鳳山高鐵城市快線）、E11B（鳳山高鐵城市快線）、紅35A（包含有繞崇實社區）、紅35B、紅51B（包含公車式小黃）、38A、38B、38C、38D、301A、301B 或 8021 至蓮潭會館。</p>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>捷運</span></h1>
        <div class="content">
          <p>搭乘 紅線 於生態園區站下車，由 2號出口 出站，並轉乘 紅35A（包含有繞崇實社區）、紅35B 或 紅51B 至蓮潭會館。</p>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>高鐵</span></h1>
        <div class="content">
          <p>搭乘至 高鐵左營站 下車：</p>
          <ul>
            <li>往高鐵路方向並轉乘 紅35A（包含有繞崇實社區）或 紅35B 至蓮潭會館</li>
            <li>往站前北路方向並轉乘 E11A（鳳山高鐵城市快線）、E11B（鳳山高鐵城市快線）、紅51B（包含公車式小黃）、 301A 或 301B 至蓮潭會館</li>
          </ul>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>臺鐵</span></h1>
        <div class="content">
          <p>搭乘至 臺鐵新左營站 下車：</p>
          <ul>
            <li>往高鐵路方向並轉乘 紅35A（包含有繞崇實社區）或 紅35B 至蓮潭會館</li>
            <li>往站前北路方向並轉乘 E11A（鳳山高鐵城市快線）、E11B（鳳山高鐵城市快線）、紅51B（包含公車式小黃）、 301A 或 301B 至蓮潭會館</li>
          </ul>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>客運</span></h1>
        <div class="content">
          <p>高雄車站週邊有多家客運業者提供客運服務，路線遍及各縣市</p>
          <ul>
            <li>國光客運（台北、桃園、新竹、台中、嘉義、台南、屏東等）</li>
            <li>統聯客運（台北、桃園、新竹、台中、嘉義、台南、屏東等）</li>
            <li>阿羅哈客運（台北、桃園、新竹、台中、嘉義、台南、屏東等）</li>
            <li>和欣客運（台北、桃園、新竹、台中、嘉義、台南等）</li>
            <li>中南客運（墾丁、鵝鑾鼻）</li>
            <li>高雄客運（大高雄地區、墾丁）</li>
          </ul>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>開車</span></h1>
        <div class="content">
          <ul>
            <li>
              高速公路：<br />
              國道一號 與 國道3號 南下 ⇢ 接 國道10號 鼎金系統交流道 ⇢ 中華路交流道 下接 翠華路 ⇢ 左轉 崇德路，約距 250公尺 後，蓮潭會館在您右手邊
            </li>
            <li>
              高雄市區：<br />
              北上：博愛三路 ⇢ 左轉 崇德路，距約 650公尺 後，蓮潭會館在您左手邊<br />
              南下：一號省道（民族一路）⇢ 右轉 大中二路 ⇢ 左轉 博愛三路 ⇢ 右轉崇德路
            </li>
            <li>
              停車場位置<br />
              <img src="@/assets/images/parking.png" alt=""><br />
              請前往 政德路 右轉至 文智路（加油站），再右轉進入會館停車場
            </li>
          </ul>
        </div>
      </div>
      <div class="spotlight-box">
        <h1 class="title symbol"><span>航空</span></h1>
        <div class="content">
          <p>到達 高雄國際航空站（高雄國際機場）後，轉乘捷運從 高雄國際機場站 搭到 生態園區站 下車，由 2號出口 出站，再轉乘 紅35A（包含有繞崇實社區）、紅35B 或 紅51B 至蓮潭會館。</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  components: {
    ...layout
  }
}
</script>
