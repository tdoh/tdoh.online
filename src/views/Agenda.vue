<template>
  <div>
    <div class="spotlight">
      <div class="spotlight-box spotlight-table">
        <div class="event desktopTime" v-for="(time, i) in agenda.time" :key="`time-${time}`" :style="{ 'grid-area': `time-${i}` }">
          <p>{{ time }}</p>
        </div>
        <div class="event main" v-for="main in agenda.main" :key="`main-${main.id}`" :style="{ 'grid-area': `${main.id}` }">
          <p>{{ main.name }}</p>
        </div>
        <div class="event room" v-for="room in agenda.room" :key="`room-${room.id}`" :style="{ 'grid-area': `room-${room.id}` }">
          <p>{{ room.name }}</p>
        </div>
        <div class="event session" v-for="(session, index) in agenda.session" :key="`session-${session.id}`" @click="session.summary[0] ? nowFocusSessionIndex = index : null" :style="{ 'grid-area': `session-${session.id}` }">
          <div class="info">
            <div class="box">
              <p class="room tag">{{ agenda.room.filter(e => (e.id === session.id[1]))[0].name }}</p>
              <p v-if="session.time" class="time">{{ session.time }} 分鐘</p>
            </div>
            <p>{{ session.name }}</p>
            <p class="speaker" v-if="session.speaker"><span>{{ session.speaker }}</span></p>
          </div>
        </div>
        <div class="event break" :class="`break-${breaks.id}`" v-for="breaks in agenda.breaks" :key="`break-${breaks.id}`" :style="{ 'grid-area': `break-${breaks.id}` }">
          <p @click="$route.query[' '] ? egg() : null">{{ $route.query[' '] ? '莫風徵伴侶' : breaks.name }}</p>
        </div>
        <div class="event mobileTime" v-for="(time, i) in agenda.mobileTime" :key="`time-${i}`" :style="{ 'grid-area': `time-${i}` }">
          <p>{{ time }}</p>
        </div>
        <div class="event blank"></div>
      </div>
    </div>
    <div class="fullscreen-container" v-if="nowFocusSessionIndex !== ''">
      <div class="container">
        <div class="fullscreen-close" @click="nowFocusSessionIndex = ''">
          <img src="@/assets/images/icon/close.svg">
        </div>
        <div class="fullscreen-header">
          <div class="border" :style="{ 'background-image': 'url(' + `${require('@/assets/images/icon/menu-active-gold.png')}` + ')'}"></div>
          <div class="image">
            <div class="photo" :style="{ 'background-image': 'url(' + require(`@/assets/images/speaker/${agenda.session[nowFocusSessionIndex].image}`) + ')' }"></div>
            <h1><span>{{ agenda.session[nowFocusSessionIndex].speaker }}</span></h1>
          </div>
        </div>
        <div class="fullscreen-content">
          <div class="fullscreen-spliter">
            <p><span>議程介紹</span></p>
          </div>
          <h1><span>{{ agenda.session[nowFocusSessionIndex].name }}</span></h1>
          <p v-for="(paragraph, i) in agenda.session[nowFocusSessionIndex].summary" :key="`summary-${i}`">
            <span v-if="paragraph.match(/(\$html\[)+(.)+(\])/)">
              {{ paragraph.substring(0, paragraph.match(/(\$html\[)+(.)+(\])/).index) }}
              <a
                :href="JSON.parse(paragraph.match(/({)+(.)+(})/)[0]).link"
                target="_brank">{{ JSON.parse(paragraph.match(/({)+(.)+(})/)[0]).text }}</a>
              {{ paragraph.substring(paragraph.match(/(\$html\[)+(.)+(\])/).index + paragraph.match(/(\$html\[)+(.)+(\])/)[0].length) }}
            </span>
            <span v-else>{{ paragraph }}</span>
          </p>
          <div class="fullscreen-spliter" v-if="agenda.session[nowFocusSessionIndex].link">
            <p><span>簡報連結</span></p>
          </div>
          <p v-if="agenda.session[nowFocusSessionIndex].link">
            <a :href="agenda.session[nowFocusSessionIndex].link" target="_blank">
              <span>{{ agenda.session[nowFocusSessionIndex].link }}</span>
            </a>
          </p>
          <div class="fullscreen-spliter">
            <p><span>關於講者</span></p>
          </div>
          <h1><span>{{ agenda.session[nowFocusSessionIndex].speaker }}</span></h1>
          <p v-for="(paragraph, i) in agenda.session[nowFocusSessionIndex].bio" :key="`bio-${i}`">
            <span v-if="paragraph.match(/(\$html\[)+(.)+(\])/)">
              {{ paragraph.substring(0, paragraph.match(/(\$html\[)+(.)+(\])/).index) }}
              <a
                :href="JSON.parse(paragraph.match(/({)+(.)+(})/)[0]).link"
                target="_brank">{{ JSON.parse(paragraph.match(/({)+(.)+(})/)[0]).text }}</a>
              {{ paragraph.substring(paragraph.match(/(\$html\[)+(.)+(\])/).index + paragraph.match(/(\$html\[)+(.)+(\])/)[0].length) }}
            </span>
            <span v-else>{{ paragraph }}</span>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import layout from '@/components/layout'
export default {
  data () {
    return {
      nowFocusSessionIndex: '',
      agenda: {
        time: [
          '10:00',
          '10:30',
          '10:50',
          '11:00',
          '11:20',
          '11:30',
          '11:50',
          '12:00',
          '12:20',
          '12:30',
          '12:50',
          '13:00',
          '13:20',
          '13:30',
          '13:50',
          '14:00',
          '14:20',
          '14:30',
          '14:50',
          '15:00',
          '15:20',
          '15:30',
          '15:50',
          '16:00',
          '16:20',
          '16:30'
        ],
        mobileTime: [
          '10:00',
          '10:30',
          '10:50',
          '11:00',
          '11:30',
          '12:00',
          '12:50',
          '13:00',
          '13:30',
          '13:50',
          '14:00',
          '14:30',
          '15:00',
          '15:50',
          '16:00',
          '16:20',
          '16:30'
        ],
        main: [
          {
            name: '入場',
            id: 'admission'
          },
          {
            name: '開場',
            id: 'start'
          },
          {
            name: 'Lightning Talk',
            id: 'lighting'
          },
          {
            name: '閉幕',
            id: 'closing'
          },
          {
            name: '大會結束',
            id: 'ending'
          }
        ],
        room: [
          {
            name: 'Room 302',
            id: 'A'
          },
          {
            name: 'Room 201',
            id: 'B'
          },
          {
            name: 'Room 203',
            id: 'C'
          },
          {
            name: 'Room 202',
            id: 'D'
          }
        ],
        session: [
          {
            name: 'No outside contact? How a security researcher escape from an isolated country?',
            summary: ['"A young North Korean soldier defected to South Korea across the demilitarized zone (DMZ)", and "Otto Warmbier\'s death after visiting North Korea" raise the people\'s interesting of this mystery country.', 'As a security researcher, any technology, devices, human being and social engineering must be attractive when visiting somewhere.  This is not typical malware analysis and hacking course.', 'It might not be a novel things but it must be an excited experience to share with researchers.  It is really a physical access to the isolated system - North Korea.', 'In this 25 minutes briefing, speaker will bring you into the so-called isolated area - no phone, no internet.', 'During the trip, you will know the wonderful and extremely interesting level of technology either the individual or the community.'],
            link: '',
            image: 'speaker12.png',
            speaker: 'Captain',
            bio: ['Researcher'],
            time: '50',
            id: '1A'
          },
          {
            name: '網路戰爭的演進與變化',
            summary: ['自2016年蔡總統上任以來，多次提到「資安即國安」的願景，並在我國國防自主戰略中也提及資訊安全為我國重要國防產業之一。', '也針對資訊安全法規進行了修訂以及對資安組織的調整，甚至在2017年組建資通電軍，將我國資安戰略開始走向攻防兼備之布局。  但近年資安威脅並未隨我國對資安的重視而下降，資安事件反而隨著新科技的進步與應用、物聯網環境與相關法規的不成熟、數位金融科技的應用與虛擬貨幣所搭建出來的新環境，讓網路犯罪之黑色產業鏈更加蓬勃。', '無論是勒索軟體對個人以及企業用戶所造成的威脅，還是黑帽駭客集團直接對金融體系的勒索或入侵盜領款項，都對我國資安造成相當大的威脅。', '此外，自中共進行軍改以來，由統整過後的解放軍戰略支援部隊更是多次對我國發動有系統與組織的網路攻擊，攻擊對象已由政府機關，轉向民間智庫、電信業者、委外廠商等。', '除以技術為根據的傳統數位入侵之外，有心人士也配合傳媒以及社交平台與通訊軟體進行數位輿論戰，讓原本就已超越地緣限制的資安攻擊更加多元難防，從虛擬空間走向實體，更從實體破壞步向人類的認知與心理，這也代表資安戰略亦須隨其變化與時俱進方能有效捍衛數位國土安全。', '本研究嘗試從威脅導向與目標打擊的角度從察打一體的觀點檢視過往的資安事件與資訊站的變化，以期能精進我國資安戰略，貫徹「資安即國安」之目標。'],
            link: '',
            image: 'speaker14.jpg',
            speaker: '林穎佑',
            bio: ['中正大學戰略暨國際事務研究所 助理教授'],
            time: '50',
            id: '2A'
          },
          {
            name: 'Employing ISO 27001 and GDPR - A Practical Way for Information Security and Data Privacy',
            summary: ['According to the International Data Corporation (IDC) Worldwide Semi-annual Security Spending Guide in 2017, there is a forecast on worldwide spending on security-related products, and services to reach US $119.9 billion in 2021.', 'Under the enforcement of the GDPR and the well-established ISO/IEC 27001 standard, the fear of data breaches and regulatory compliance will continue to drive security investments across all industries.', 'That\'s why the exist of this talk: How to employ ISO/IEC 27001 standard and GDPR compliance in a modern way regarding information security and data privacy for businesses.', 'This talk will be divided into 6 parts respectively as followings:', '(i) The Trends of todays\' cyber world', '(ii) The ISO/IEC 27001:2013 standard', '(iii) The GDPR compliance', '(iv) The relationship between ISO/IEC 27001 and GDPR', '(v) How to employ ISO/IEC 27001 standard and GDPR into pen testing / security audit', '(vi) Real case study in finance sector.', 'After the presentation, Audience should be equipped the essentials of the ISO 27001 standard, GDPR compliance and their linkages.', 'Some real-world case studies in finance sector will be brought to discuss, as for practice, audience will have a chance to brainstorm and discuss what would be happened if these cases were held in EU and regulated by GDPR.', 'Finally, having practical knowledge on how to apply both ISO 27001 standard and GDPR compliance into a real-world scenario via this interactive section.'],
            link: '',
            image: 'speaker13.jpg',
            speaker: 'Forster Chiu',
            bio: ['With a great passion in Information Security and Ethical Hacking, Forster is currently worked as a Security Consultant in Hong Kong, responsible for performing infrastructure & application vulnerability assessment and penetration tests on different platforms and technologies.', 'As the primary auditor and pen tester, Forster played as a critical role throughout the projects, where The Linux & OSS Award – Winner of Professional Security Service Solution of the Year 2018 in Hong Kong would be the greatest achievement in this year.', 'Forster is also responsible for conducting security audit service, gap analysis, and provide guidance to clients in order to conform with ISO/IEC 27001 standard and GDPR compliance. He has over 5 years solid experience in integration of different network and security solutions for small businesses to finance sector.', 'As a training consultant, Forster has also developed and delivered a wide variety of inhouse and onsite Security Awareness Training Campaigns for local organizations and MNC working environments. Starting from 2018, Forster also act as the Subject Matter Expert for EC-Council.', 'Forster has PgD in IT Forensics (University of Hong Kong), 1st class honours in BSc (Hons) Business Information Technology (Coventry University), holding CEH, ISO 27001 Lead Auditor (PECB), Lead Pen Test Professional (PECB), Certified Data Protection Officer (PECB) and Nexpose Certified Administrator credentials.'],
            time: '50',
            id: '3A'
          },
          {
            name: '區塊鏈與私鑰的重大安全威脅與解題',
            summary: ['區塊鏈技術中數據的儲存、驗證、傳遞皆與資安息息相關，本次將分享近兩年區塊鏈與私鑰之間的重大安全漏洞問題，並分析其疏失將帶來多大的威脅與影響，同時將分享可透過哪些技術與辦法進行資料保存及保護。'],
            link: '',
            image: 'speaker16.jpg',
            speaker: 'Tim Hsu',
            bio: ['著名駭客會議 HITCON 創辦人，同時也是台灣駭客技術社群 CHROOT 創辦人。', '從學生時期專研 Linux 系統及投入開放源碼社群，進入職場後便投入資訊安全技術領域，積極參與各類社群活動。2005 年與一群熱血駭客舉辦的 HITCON 會議，至今已是世界知名會議兼社群。', '目前為台灣多家數字貨幣交易所資安顧問，包含幣託 (BitoPro) 和柯賓漢 (Cobinhood)等。'],
            time: '50',
            id: '4A'
          },
          {
            name: '從一個脆弱點到串起整個攻擊鏈 (JavaScript Ver.)',
            summary: ['當業務邏輯擴增、企業架構逐漸複雜時，Bug 或是能解決問題的替代方案便開始增加，這些問題單獨看來可能不起眼或根本無害，但許多微小問題串在一起時，便可能產生嚴重的風險！', '本議程將以 JavaScript 為主軸，分析一個筆者所回報的 0day 以及一個在 Bug Bounty 中因多層次架構所導致遠端代碼執行的案例！'],
            link: '',
            image: 'speaker06.png',
            speaker: 'Orange Tsai',
            bio: ['Blog: $html[$a{"link":"http://blog.orange.tw","text":"http://blog.orange.tw"}]', 'Twitter: $html[$a{"link":"https://twitter.com/@orange_8361","text":"@orange_8361"}]'],
            time: '50',
            id: '5A'
          },
          {
            name: '手機可以埋藏秘密，但是 App 不行 - 淺談 App 安全檢測與實作',
            summary: ['隨著智慧型手機普及，每天有大量APP被下載至行動裝置中，手機APP不僅僅為人們帶來便利性，也成為駭客攻擊的新興手法，由於開發人員在開發程式時，多著重在APP 的功能、效能等議題，較少注意安全上的問題，也因為效能與使用便利性，人們不知不覺就把自己的秘密都放到手機上。'],
            link: '',
            image: 'speaker01.png',
            speaker: 'HTz',
            bio: ['資安新聞事件週報總編輯'],
            time: '50',
            id: '1B'
          },
          {
            name: 'The thing behind the OP-TEE',
            summary: ['OPTEE 是一套執行於 ARM Cortex-A TrustZone 環境的 kernel，作為一個執行於安全環境的 kernel 不會被使用者直接看見讓它有種神祕感！', '本議程會介紹這個 kernel 如何運作跟如何運用在我們平常生活中的產品！'],
            link: '',
            image: 'speaker02.jpg',
            speaker: 'lalaland',
            bio: ['回收業者'],
            time: '50',
            id: '2B'
          },
          {
            name: 'CEH 快速入門',
            summary: ['感謝 TDOH 社群的各位前輩，去年分享相關 CEH 的相關內容，虎虎後續取得證照囉～回來跟各位快速分享證照的內容，也希望對滲透測試的有興趣的各位小伙伴兒們順利考取：)'],
            link: '',
            image: 'speaker10.jpg',
            speaker: '虎虎',
            bio: ['敦陽科技 資安顧問 & HITCON GIRLS 成員'],
            time: '50',
            id: '3B'
          },
          {
            name: 'How to become a wireless hunter',
            summary: ['每個系統如果想要互相溝通，都一定要先約定好一種溝通方式。這一二十年來，人們的生活越來越離不開這些裝置，甚至生活根本是依賴在這些裝置之上的。因為方便的關係，這些裝置中有一大部分是使用無線通信協定，例如 Bluetooth / Wifi 等等。', '這次分享會著重在於帶給入門 Wireless Hacking 新手一些可以參考的資訊，例如設備挑選、學習資訊參考來源、常見攻擊模式與目前常見協定原理 / 協定漏洞等。'],
            link: '',
            image: 'speaker11.png',
            speaker: 'es',
            bio: ['在數年前轉職進軟體業界，任職於某公司。UCCU Hacker 成員。白天的工作主要圍繞著 Web 後端和 DevOps 的領域。但也在業餘時間進行安全相關的研究，主要是研究 Web、嵌入設備和傳輸安全的領域，偶而也打一下 CTF。'],
            time: '50',
            id: '4B'
          },
          {
            name: 'Hack the naive hacker: Ethereum smart contract honeypots',
            summary: ['Ethereum 利用智能合約為鍊圈帶來圖靈完整的可編程區塊鍊生態系，在 Solidity 漸漸成為合約撰寫主流之時，一批善於利用合約與程式碼漏洞的駭客伺機而動，掀起鍊圈諸多資洩與價值流失等資安悲劇，在黑與白的攻防鬥爭之外，一群灰帽駭客開始設下陷阱，製造合約蜜罐，利用顯而易見的假漏洞反駭駭客。', '這堂演講為大家解析一些著名與創新的蜜罐手法。'],
            link: '',
            image: 'speaker04.jpg',
            speaker: 'Jeff Hu',
            bio: ['Jeff 於香港科技大學一級榮譽學位畢業，現任圖靈鍊科技公司創始人與執行長，兼任紐約 Blackbird.AI 區塊鏈科技總監，與 Blockchain Education Network 香港區負責人。', '是歷史首位港科大題名至矽谷的實習生，負責 Google Glass 醫療科技，隔年於 J.P. Morgan 研發 NLP 核心，其專案被選於全球創新頻道播出。曾獲香港 Microsoft Imagine Cup 亞軍及 AI Cup 季軍，Uber 電梯演講冠軍，韓國 UpTown 商務程競亞軍，法國 Atos IT 挑戰賽世界二十強等國內外數十獎項。', '近期成為港科大 Firebird CTF 一員並從事智能合約相關的資安研究，今年六月剛於德國慕尼黑發表 ERC860 合約互動性研究，並獲選為全場最佳論文，將於另篇國際期刊 CPE 發布。'],
            time: '50',
            id: '5B'
          },
          {
            name: '淺談第四軍',
            summary: [],
            link: '',
            image: 'speaker00.jpg',
            speaker: '陳雪芬',
            bio: ['網路戰聯隊'],
            time: '20',
            id: '1C'
          },
          {
            name: '一頁式詐騙之資安風險面面觀',
            summary: [''],
            link: '',
            image: 'speaker00.jpg',
            speaker: '羅文翎',
            bio: ['TWCert 分析師'],
            time: '20',
            id: '2C'
          },
          {
            name: '無形無蹤，好似我本人從未造訪過 - 那些簡單好上手的 Jump Site 實作',
            summary: ['網路世紀末日，有些人掌握天梯、妄想晉升為神。你是一個守序善良魔導師，你操控著一批死靈與殭屍。冀望拯救世界？有何不可。在眾神知道你的真身之前，善用你的每一個化身，將神揣下，重新做人。', '本議程將以 SSH Tunnel、VPN Gate 與 Shadowsocks 技術為例搭建 Jump Site；並枚舉數個情境下的應用方式。', '參與本議程需自備電腦，推薦使用 Manajro Linux (Arch Linux)。並建議自備跳板機，小至 Raspberry Pi，大至 VPS，或任何可供建立 SSH 連線的設備。', '參與本議程前推薦觀賞電影《移動世界》或其原作小說《Jumper》。'],
            link: '',
            image: 'speaker07.jpg',
            speaker: 'PN Wu',
            bio: ['不造神、不捧神，鉚釘被拿來造飛機也不該以為自己從此會飛。', '「真正的工程師不說廢話。」讓我們用技術說話。', '請參閱我的 $html[$a{"link":"https://www.linkedin.com/in/pingnote","text":"LinkedIn Profile"}]'],
            time: '20',
            id: '3C'
          },
          {
            name: 'HackmeCTF 平台背後的心酸血淚歷',
            summary: ['這場議程我將會介紹我建立 $html[$a{"link":"https://hackme.inndy.tw","text":"HackmeCTF"}] 到現在經歷過的心酸血淚史（？）以及背後用到的技術分享。', '$html[$a{"link":"https://hackme.inndy.tw","text":"HackmeCTF"}] 是一個給資安新手的練習平台，上面有一些我曾經解過，覺得好玩的題目，以及我自己出的題目，多數題目有給提示以及相關的工具，對於新手入門有相當幫助，老手也能享受有趣的題目！'],
            link: '',
            image: 'speaker18.png',
            speaker: 'Inndy',
            bio: ['我是 Inndy，也可以叫我木棍。人生目標是成為一個興趣使然的 security master。', '過去曾經講過 HITCON, SITCON, 兩屆的 TDOH Conf，今年也不缺席！'],
            time: '20',
            id: '4C'
          },
          {
            name: '淺談 ATT&CK',
            summary: ['在這個資安產品百家爭鳴的時代，此分享會先帶大家全盤認識何謂 ATT&CK：從一個較為客觀的架構評估在防禦上是否有不足'],
            link: '',
            image: 'speaker09.png',
            speaker: 'JohnThunder',
            bio: ['UCCU co-founder, Security Engineer'],
            time: '20',
            id: '5C'
          },
          {
            name: '區塊鏈世界的吸金亂象',
            summary: ['本議程將揭開區塊鏈【黑色產業鏈】的秘密，探討高科技犯罪者的行為，以及他們是如何利用區塊鏈洗錢、詐騙、並淺淡交易所的相關知識及搬磚對沖的簡易流程！'],
            link: '',
            image: 'speaker17.jpg',
            speaker: 'Singo',
            bio: ['傳說中的黑產大亨Singo，專精於資安黑色產業鏈的研究，並在這次TDOH Conf帶你了解，你所不知道的高科技犯罪者的思維，並解析利用資訊技術洗錢及各種詐騙的手法。', '擔任職位：', '臺灣校園資訊安全推廣暨駭客培育協會 副理事長', 'NTU NSLAB - Hardware Security Team'],
            time: '20',
            id: '6C'
          },
          {
            name: '駭客眼中的身分證',
            summary: ['原來，台灣的身分證編號有這麼有趣的潛規則', '台灣普遍的高中職，甚至部份大學，可能只要讓駭客有了你的學號就可以獲取你的住址？怎麼做到的？', '課堂上，老師只教學生如何驗證身分證是否正確，卻沒有告訴你如何高效率的暴力破解身分證。', '知道編碼歷史後，你可以更輕鬆的搭配網路情蒐，將對方身分證推算出來！進而還可以得到對方的學歷、課表、電話、住址甚至是身高、體重"'],
            link: '',
            image: 'speaker03.jpg',
            speaker: 'Mico',
            bio: ['雖然認為做壞事是成長的最佳動力，但卻很憎恨看到人被騙。', '略懂WebSecurity、小玩BugBounty，嘗試將資安能造成的危害，以幽默的方式分享給大家。', '曾擔任 MOPCON 場務，資訊與網路技術選手，LINE BugBounty Contributor，SITCON 講者，再來是 TDOH～'],
            time: '20',
            id: '7C'
          },
          {
            name: 'Mysterious Talk',
            summary: [],
            link: '',
            image: 'speaker00.jpg',
            speaker: '',
            time: '20',
            id: '8C'
          },
          {
            name: '[Workshop] 企業防禦 DDoS 方式與探討',
            summary: ['傳統的邊際安全性產品不僅在 DDoS 的因應對策方面顯得相對薄弱，亦因其狀態表（Stateful）結構而無法阻擋狀態耗盡攻擊，尤其現在直播和串流視訊或是遊戲，這些服務往往是 TCP 和 UDP 混合使用，在防護上將變得越來越有挑戰性。', '本工作坊將會現場架設一個測試環境, 並且將防禦設備（價值 1400 萬）真實架設在前端，讓各位有機會和企業 DDoS 解決方案現場交手一番。"'],
            link: '',
            image: 'speaker15.png',
            speaker: '資安黑武士',
            bio: ['想分享一切所知卻受束縛的資安人，深怕打開潘朵拉盒子，引起殺生之禍／查水表／歡樂送／失業，只能蒙上面具，以黑武士奉獻自己的淺學'],
            time: '170',
            id: '1D'
          },
          {
            name: '[Workshop] Playing Malware Injection with Exploit thoughts',
            summary: ['以往駭客希望繞過防毒軟體或者系統防護產品的白名單保護時，通常會採用惡意程式碼注入手段，將自身具有惡意的程式碼注入在白名單中的系統服務中執行起來，避免遭受防毒軟體或者防護產品白名單防護查殺。', '當駭客做惡意程式碼注入時，通常會採用 RunPE、AtomBombing、跨行程創建執行緒等等手段來做到程式碼注入、駭客可以偽造自己的執行程式為任何系統關鍵服務；不過在市面上防毒廠商日趨進步下，這些敏感手段已經逐漸會被主動防禦查殺，不過——萬一作業系統關鍵服務本身早已千瘡百孔呢？駭客手段已經逐漸高明、動刀在記憶體之戰上。', '本議程將簡單帶過 2013 年後出現的新型態記憶體層級注入手法—— PowerLoadEx，並基於此概念上披露三種未曾出現於網路上的全新注入手段，善用了 Windows 本身關鍵記憶體缺陷弱點，藉此來注入惡意行為至系統關鍵服務。內容將涵蓋 Windows 系統程式逆向分析、記憶體弱點分析、如何實作與利用，議程末將會釋出相關的 PoC。'],
            link: '',
            image: 'speaker08.jpg',
            speaker: 'aaaddress1',
            bio: ['Sheng-Hao Ma (aaaddress1) is a core member of CHROOT Security Group and TDOHacker security community in Taiwan. He has over 10-year experience in reverse engineering, machine language, and Intel 8086. He experts in Windows vulnerability, and Reverse Engineering.', 'Moreover, Sheng-Hao Ma was also a speaker at Black Hat, DEFCON USA, beVXCON, VXCON, HITCON (Hackers In Taiwan Conference), SITCON (Students In Taiwan Conference) and iThome#Chatbot.'],
            time: '120',
            id: '2D'
          }
        ],
        breaks: [
          {
            name: '休息',
            id: '1'
          },
          {
            name: 'Break',
            id: '2'
          },
          {
            name: 'Break',
            id: '3'
          },
          {
            name: 'Break',
            id: '4'
          },
          {
            name: 'Break',
            id: '5'
          },
          {
            name: 'Break',
            id: '6'
          },
          {
            name: 'Break',
            id: '7'
          },
          {
            name: 'Break',
            id: '8'
          },
          {
            name: 'Break',
            id: '9'
          },
          {
            name: 'Break',
            id: 'a'
          }
        ]
      }
    }
  },
  components: {
    ...layout
  },
  methods: {
    egg () {
      window.open('https://ioan.isalways.one/', '_blank')
    }
  }
}
</script>
