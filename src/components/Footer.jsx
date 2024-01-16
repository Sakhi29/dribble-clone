import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <section>
      {/* <div className="animate-marquee">
        <div className="grid gap-[32px] grid-flow-col w-fit overflow-x-hidden">
          <div className="flex items-end bg-profile-card opacity-100 w-[200px] h-[150px] rounded shadow-xl"></div>
          <div className="flex items-end bg-profile-card opacity-100 w-[200px] h-[150px] rounded shadow-xl"></div>
          <div className="flex mt-4">name</div>
        </div>
      </div> */}

      <div class="grid gap-[36px] overflow-hidden relative z-[2] mt-auto mb-auto mx-0 pt-14 px-auto bg-transparent">
        <div className="animate-marquee">
          <div className="grid gap-[32px] grid-flow-col w-fit">
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-50 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card1 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card2 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card3 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card4 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card5 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card6 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card1 bg-cover transform transition-all rounded-md"></div>
            </div>
            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card2 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#E3EBFD] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card3 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#E3EBFD] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card4 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDDDFB] transform transition-all absolute translate-x-3 -translate-y-3 opacity-50 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#E3EBFD] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card5 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card6 bg-cover transform transition-all rounded-md"></div>
            </div>

            <div className="flex relative w-[200px] h-[150px] hover:scale-105">
              <div className="w-[200px] h-[150px] bg-[#EDF3D8] transform transition-all absolute translate-x-3 -translate-y-3 opacity-75 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-[#DDFDE8] transform transition-all absolute translate-x-1.5 -translate-y-1.5 opacity-100 rounded-md"></div>
              <div className="w-[200px] h-[150px] bg-fi-card3 bg-cover transform transition-all rounded-md"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-[32px] overflow-hidden relative z-[2] mt-2 mb-auto mx-0 bg-transparent">
        <div className="animate-marquee">
          <div className="grid gap-[32px] grid-flow-col w-fit">
            <div className="flex relative w-[200px]">Illustration</div>
            <div className="flex relative w-[200px]">Art</div>
            <div className="flex relative w-[200px]">Photography</div>
            <div className="flex relative w-[200px]">Print Design</div>
            <div className="flex relative w-[200px]">Animation</div>
            <div className="flex relative w-[200px]">Mobile</div>
            <div className="flex relative w-[200px]">Illustration</div>
            <div className="flex relative w-[200px]">Art</div>
            <div className="flex relative w-[200px]">Photography</div>
            <div className="flex relative w-[200px]">Print Design</div>
            <div className="flex relative w-[200px]">Animation</div>
            <div className="flex relative w-[200px]">Mobile</div>
            <div className="flex relative w-[200px]">Photogaphy</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 box-content max-w-[1200px]">
        <div className="flex flex-row pt-[72px] pb-4 justify-between">
          <a href="">
            <svg
              width="90px"
              height="90px"
              viewBox="0 -193 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M156.433566,50.3217928 C162.293279,50.3217928 167.043422,45.5700082 167.043422,39.7086531 C167.043422,33.847298 162.293279,29.0955133 156.433566,29.0955133 C150.573305,29.0955133 145.823161,33.847298 145.823161,39.7086531 C145.823161,45.5700082 150.573305,50.3217928 156.433566,50.3217928 L156.433566,50.3217928 Z M506.593862,86.5830801 C504.979842,85.4477947 503.73349,85.2601307 502.69997,87.4644992 C484.879547,126.059824 454.849472,106.80046 457.833494,108.495455 C464.494199,105.447966 482.01261,91.3977841 479.365069,71.9983566 C477.756521,60.1421478 467.581081,54.8831778 456.77973,56.7663837 C437.926334,60.0529663 430.989877,80.3885256 434.521025,98.3933303 C435.139277,101.484589 436.243376,104.035288 437.345834,106.532916 C416.040221,123.858738 407.579473,91.0224561 406.619268,87.0990194 C406.580969,86.8894703 423.070236,73.1451315 427.656242,40.3936542 C432.462739,6.06864392 421.513117,-0.180623125 410.3151,0.0141535402 C389.595459,0.375256346 383.997271,43.6660115 391.518605,79.7456531 C390.889411,79.9097908 387.956818,81.5336592 383.246068,81.7153048 C379.855531,71.0490939 365.371479,61.6992668 361.5799,65.3015409 C352.09165,74.3154329 363.881109,91.9356085 372.175531,93.3181945 C367.19286,124.009197 336.030235,116.407436 341.831406,77.9565529 C351.979489,59.1124576 359.697241,31.091427 358.319579,14.1754019 C357.83209,8.18601947 353.404204,0.161877415 343.389072,0.558543377 C324.128614,1.32123627 322.034765,44.6240282 324.293299,75.3577069 C324.180591,74.6010324 323.10932,79.0918382 315.216488,81.3252044 C313.349149,70.9615538 296.662916,60.5596045 292.734555,65.5608784 C285.382283,74.9211008 298.124288,91.6095217 304.160724,92.7743518 C299.178052,123.464808 268.015974,115.863046 273.817145,77.412163 C283.964681,58.5680678 291.682433,30.5470372 290.304771,13.6310121 C289.817282,7.64162963 285.389943,-0.382512421 275.374264,0.0141535402 C256.113807,0.777393562 254.019957,44.0796384 256.278491,74.8133171 C256.164689,74.0451529 255.06825,78.6831355 246.853161,80.8803914 C246.577957,67.4353302 229.830994,61.2708676 225.80798,65.5608784 C218.638448,73.2069567 227.449904,88.8974208 235.602073,92.7743518 C230.619401,123.464808 199.457323,115.863046 205.258495,77.412163 C215.406031,58.5680678 223.123783,30.5470372 221.746121,13.6310121 C221.258632,7.64162963 216.831293,-0.382512421 206.815614,0.0141535402 C187.555156,0.777393562 186.005697,46.2566506 188.264231,76.9903293 C181.920311,104.170975 160.645337,138.115186 163.408868,70.1178864 C163.681884,65.3485937 163.980067,63.5365141 161.60226,61.7512438 C159.819725,60.3626393 155.767714,61.0301324 153.553497,61.0859392 C150.861093,61.1937229 150.18594,62.7694442 149.591214,65.1499871 C148.204799,71.298036 147.956404,77.2578737 147.758344,85.3897994 C147.628128,89.1939628 147.322832,90.9688378 145.858725,96.1555872 C144.394617,101.342337 136.048765,110.820738 131.478079,109.23681 C125.138536,107.055421 127.217066,89.1583996 128.405969,76.8612077 C129.396266,67.1426181 126.226769,62.7792925 118.104144,61.1920815 C113.349077,60.2006902 110.459707,60.3533382 105.508222,58.7923892 C100.825375,57.3162447 99.7655927,48.4577364 89.7789116,51.4100254 C84.3147696,53.0256869 87.826768,64.6012203 86.514214,73.1806947 C80.0592278,115.381029 66.6278447,116.539841 60.3966328,96.0395966 C88.4597921,27.3102429 68.5148805,0.21440146 56.8414116,0.21440146 C44.681001,0.21440146 30.7807315,8.58979806 36.6667072,62.1818315 C33.8046939,61.346918 32.9249162,60.8971809 29.7920758,60.8971809 C12.0728705,60.8971809 0,75.2214727 0,92.8914367 C0,110.561401 12.0728705,124.885692 29.7920758,124.885692 C40.2525675,124.885692 47.5955384,120.128984 53.1581629,112.769599 C56.786699,117.966744 61.2058314,124.96612 69.2868745,124.650976 C93.3735259,123.713203 100.379467,74.3039433 101.205627,71.5480723 C103.780946,71.9447383 106.217296,72.6959415 108.594556,73.0926075 C112.556839,73.68788 112.84408,75.2559416 112.754898,79.2412035 C111.705512,112.844555 117.906085,124.610488 131.971586,124.610488 C139.808611,124.610488 146.794309,116.911339 151.606278,111.405068 C155.200345,118.822995 160.927107,124.383978 168.609843,124.610488 C187.227428,125.072809 194.354831,95.400554 193.705393,99.3053885 C193.195473,102.369291 199.745111,124.443068 218.910916,124.523495 C242.652332,124.622525 247.064899,98.5147922 247.59178,94.1416183 C247.657435,93.2711417 247.685886,93.3625117 247.59178,94.1416183 C247.585762,94.2225929 247.579197,94.3090387 247.572631,94.4069742 C255.109831,93.0052388 258.999346,88.9641701 258.999346,88.9641701 C258.999346,88.9641701 265.051101,124.929462 287.469567,124.523495 C310.748114,124.101662 315.138249,100.502499 315.715466,95.9000796 C315.790969,94.8080172 315.836381,94.9360445 315.715466,95.9000796 C315.712183,95.945491 315.709448,95.9854312 315.706165,96.0352196 C324.659326,92.7776346 327.013607,89.5085599 327.013607,89.5085599 C327.013607,89.5085599 331.824481,124.758759 355.483828,125.067338 C376.568402,125.342542 384.3819,103.752424 384.427859,94.7150058 C387.984174,94.7527575 394.561717,92.6058372 394.407427,92.4827339 C394.407427,92.4827339 402.13065,123.302858 423.697242,124.885692 C433.823987,125.628689 441.41973,119.188475 445.749681,116.249864 C455.926215,124.491215 489.811336,135.016815 511.206677,98.7418492 C514.226263,93.5359505 507.733525,87.3857131 506.593862,86.5830801 L506.593862,86.5830801 Z M28.9369187,112.918964 C18.598983,112.918964 11.9700109,103.360135 11.9700109,93.0533858 C11.9700109,82.7466363 18.0545932,73.1878073 28.3925288,73.1878073 C33.0452838,73.1878073 35.632093,73.6999168 39.2557049,76.8513594 C39.9133497,79.43981 41.7746705,85.4122316 42.6812574,88.1243325 C43.8947817,91.7528686 45.3386458,94.8419389 46.7950938,98.2040249 C44.7143757,106.827269 37.8960981,112.918964 28.9369187,112.918964 L28.9369187,112.918964 Z M54.1287635,77.1544669 C53.69927,76.4694659 53.7884515,76.8902053 53.3075282,76.2429559 C51.4128327,71.0884869 47.7607702,59.5818913 47.3378423,46.5121582 C46.8596546,31.7288282 49.3239077,14.4002705 56.5880925,14.4002705 C61.5100332,14.4002705 66.7410997,49.5197069 54.1287635,77.1544669 L54.1287635,77.1544669 Z M199.690399,61.7512438 C198.523927,52.9780869 198.463197,13.8679174 207.852417,14.9446603 C213.035883,17.0445279 204.565287,53.9503289 199.690399,61.7512438 L199.690399,61.7512438 Z M268.249049,61.7512438 C267.082578,52.9780869 267.021847,13.8679174 276.411067,14.9446603 C281.594534,17.0445279 273.123937,53.9503289 268.249049,61.7512438 L268.249049,61.7512438 Z M336.263857,62.2956336 C335.096839,53.5224768 335.036655,14.4123072 344.425328,15.4890502 C349.609342,17.5889177 341.138198,54.4947187 336.263857,62.2956336 L336.263857,62.2956336 Z M411.351903,12.6554874 C419.936302,11.7658614 419.581764,49.2521625 402.351689,72.9175273 C400.13036,64.364315 396.723409,15.593004 411.351903,12.6554874 L411.351903,12.6554874 Z M447.432639,93.3181945 C444.675127,79.3911158 451.799247,70.2437252 459.143312,69.2408442 C461.709878,68.8305001 465.429784,70.4937615 466.171686,73.6025284 C467.391776,79.461695 465.994964,88.1522359 449.557674,99.1795496 C449.582295,99.2736552 448.046514,96.4193017 447.432639,93.3181945 L447.432639,93.3181945 Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </a>
          <ul className="flex flex-nowrap justify-center items-center pl-5 text-[100%] font-medium gap-y-3 gap-x-8 leading-5 align-baseline">
            <li>For designers</li>
            <li>Hire talent</li>
            <li>Inspiration</li>
            <li>Advertising</li>
            <li>Blog</li>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
          <div className="grid justify-center items-center grid-flow-col gap-4">
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="flex flex-row py-11 justify-between items-center">
          <ul className="flex flex-nowrap justify-center items-center pl-5 text-md gap-y-1 gap-x-4 leading-5 align-baseline">
            <li className=" text-gray-500">2024 Dribble</li>
            <li className=" text-gray-500">Terms</li>
            <li className=" text-gray-500">Privacy</li>
            <li className=" text-gray-500">Cookies</li>
          </ul>
          <ul className="flex flex-nowrap justify-center items-center pl-5 text-md gap-y-1 gap-x-4 leading-5 align-baseline">
            <li className=" text-gray-500">Jobs</li>
            <li className=" text-gray-500">Designers</li>
            <li className=" text-gray-500">Freelancer</li>
            <li className=" text-gray-500">Tags</li>
            <li className=" text-gray-500">Places</li>
            <li className=" text-gray-500">Resources</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
