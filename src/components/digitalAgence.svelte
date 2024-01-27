<script>
    import digital from '../assets/best5.jpg'
    let isMenuOpen = false
    const toggleMenu = () => isMenuOpen = !isMenuOpen
</script>

<div class="font-poppinsRegular">

    <nav class="bg-[#016170] border-b-[#FFFFFC] border-b border-solid lg:py-6 py-3 lg:px-0 px-4">
        <div class="flex justify-between items-center container mx-auto relative overflow-hidden group">
            <button class="pl-3 pr-[0.79669rem] py-[0.1875rem] logo">
                <svg width="24" height="42" viewBox="0 0 24 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2458 40.3064L13.9608 16.1839C13.6862 15.4058 13.732 14.5361 14.1897 13.8037V13.7579H9.06309C9.52082 14.4903 9.61237 15.4058 9.33773 16.2297L1.00701 40.3064C0.915464 40.6726 0.732371 40.9472 0.549278 41.2219L0 42H4.85196C4.57732 41.2219 4.53155 40.3979 4.80619 39.6198L8.74268 28.268C11.9676 27.6008 15.7345 24.8351 15.7345 24.8351L20.781 39.6198C21.0099 40.3979 21.0099 41.2219 20.6895 42H23.2528L22.7035 41.2219C22.5204 40.9472 22.3373 40.6726 22.2458 40.3064ZM9.10887 27.1237L12.8165 16.4586L15.7345 24.8351C13.0583 26.5954 11.5977 27.1992 9.10887 27.1237Z" fill="#FFFFFC"/><path d="M8.7427 -7.86794e-05H0.366211C0.823943 0.778066 1.05281 1.64776 1.05281 2.51745V25.7245C1.05281 26.5941 0.823943 27.4638 0.366211 28.242H8.7427C16.4784 28.1962 22.7951 21.8795 22.7951 14.0981C22.7951 6.3624 16.4784 0.0456966 8.7427 -7.86794e-05ZM8.69693 27.0519H4.53157V1.19003H8.69693C15.8375 1.19003 19.3163 7.00322 19.3163 14.0981C19.3163 21.2387 15.8375 27.0519 8.69693 27.0519Z" fill="#FFFFFC"/></svg>
            </button>
            <div class="lg:flex hidden items-center gap-8">
                <button class="text-[#FFFFFC] lg:text-base text-sm font-poppinsBold leading-6">Home</button>
                <button class="text-[#FFFFFC] lg:text-base text-sm font-poppinsSemiBold leading-6 opacity-50">Service</button>
                <button class="text-[#FFFFFC] lg:text-base text-sm font-poppinsSemiBold leading-6 opacity-50">Work</button>
                <button class="text-[#FFFFFC] lg:text-base text-sm font-poppinsSemiBold leading-6 opacity-50">Blog</button>
                <button class="text-[#FFFFFC] lg:text-base text-sm font-poppinsSemiBold leading-6 opacity-50">Contact</button>
            </div>
            <button class="lg:hidden p-3" on:click={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5.995C2 5.445 2.446 5 2.995 5H11.005C11.2689 5 11.522 5.10483 11.7086 5.29143C11.8952 5.47803 12 5.73111 12 5.995C12 6.25889 11.8952 6.51197 11.7086 6.69857C11.522 6.88517 11.2689 6.99 11.005 6.99H2.995C2.73111 6.99 2.47803 6.88517 2.29143 6.69857C2.10483 6.51197 2 6.25889 2 5.995ZM2 12C2 11.45 2.446 11.005 2.995 11.005H21.005C21.2689 11.005 21.522 11.1098 21.7086 11.2964C21.8952 11.483 22 11.7361 22 12C22 12.2639 21.8952 12.517 21.7086 12.7036C21.522 12.8902 21.2689 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12ZM2.995 17.01C2.73111 17.01 2.47803 17.1148 2.29143 17.3014C2.10483 17.488 2 17.7411 2 18.005C2 18.2689 2.10483 18.522 2.29143 18.7086C2.47803 18.8952 2.73111 19 2.995 19H15.005C15.2689 19 15.522 18.8952 15.7086 18.7086C15.8952 18.522 16 18.2689 16 18.005C16 17.7411 15.8952 17.488 15.7086 17.3014C15.522 17.1148 15.2689 17.01 15.005 17.01H2.995Z" fill="#FFFFFC"/></svg>
            </button>
            <div class="{isMenuOpen ? 'translate-x-0' : 'translate-x-[9999px]'} z-50 fixed inset-0 bg-[#020E10] h-screen px-4 pt-12 flex flex-col gap-[1.38rem] transition-all duration-150 ease-in-out lg:hidden">
                <button class="p-3" on:click={toggleMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.531C15.0782 6.39017 14.9991 6.19916 14.9991 6C14.9991 5.80084 15.0782 5.60983 15.219 5.469C15.3598 5.32817 15.5508 5.24905 15.75 5.24905C15.9492 5.24905 16.1402 5.32817 16.281 5.469L22.281 11.469C22.3508 11.5387 22.4063 11.6214 22.4441 11.7126C22.4819 11.8037 22.5013 11.9014 22.5013 12C22.5013 12.0987 22.4819 12.1963 22.4441 12.2875C22.4063 12.3786 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3902 14.9991 18.1992 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12Z" fill="#FFFFFC"/></svg>
                </button>
                <div class="flex flex-col items-center gap-2 text-[#FFFFFC] font-poppinsSemiBold">
                    <button class="py-4 px-8 leading-6 w-full opacity-50 hover:opacity-100">Home</button>
                    <button class="py-4 px-8 leading-6 w-full opacity-50 hover:opacity-100">Sevice</button>
                    <button class="py-4 px-8 leading-6 w-full opacity-50 hover:opacity-100">Work</button>
                    <button class="py-4 px-8 leading-6 w-full opacity-50 hover:opacity-100">Blog</button>
                    <button class="py-4 px-8 leading-6 w-full opacity-50 hover:opacity-100">Contact</button>
                </div>
            </div>
        </div>
    </nav>

    <div id="hero" class="bg-[#016170]">
        <div class="flex flex-col items-center container mx-auto pt-[6.44rem] lg:px-0 px-4">
            <h1 class="text-[#FFFFFC] text-center lg:text-7xl text-[2rem] font-poppinsBold lg:leading-[6.125rem] leading-[3rem] lg:tracking-[0.09rem] tracking-tighter lg:max-w-[50rem] mb-4">Digital Agency With Solid Design</h1>
            <p class="text-[#FFFFFC] text-center lg:text-lg lg:leading-8 leading-[1.5rem] lg:tracking-normal tracking-tighter opacity-75 lg:max-w-[50rem]">We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
            <div class="lg:ml-72 lg:-mt-2 mt-4 mb-10">
                <svg class="lg:w-[108px] w-[57px]" width="108" height="107" viewBox="0 0 108 107" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M84.1862 33.9956C84.2934 33.6988 84.3829 33.4577 84.4536 33.1983C84.7882 31.8461 84.6983 30.5175 84.3863 29.1547C83.9387 27.2579 83.087 25.5507 82.0334 23.9383C80.2838 21.2816 78.0591 19.0369 75.5429 17.1282C71.8152 14.2922 67.691 12.2736 63.2064 10.9981C60.6863 10.2898 58.151 9.85874 55.5481 9.94556C54.6066 9.9754 53.6847 10.0973 52.7633 10.2562C52.2289 10.355 51.715 10.6197 51.2007 10.8476C51.0169 10.9236 50.8331 10.9997 50.6836 10.8538C50.5898 10.7257 50.495 10.5237 50.4932 10.3759C50.5074 10.0249 50.7446 9.78194 51.0387 9.66759C51.6264 9.40194 52.1951 9.08113 52.8215 8.96276C53.8346 8.74738 54.8673 8.62411 55.9196 8.59294C57.9125 8.45808 59.9285 8.71075 61.8916 9.16721C68.7441 10.7835 74.7477 13.9798 79.7756 18.9608C82.0186 21.1868 83.859 23.7131 85.0212 26.6723C86.0313 29.2641 86.4505 31.863 85.4125 34.6087C85.6172 34.7355 85.8214 34.8254 86.0074 34.9339C88.4421 36.2157 90.7687 37.7205 92.8591 39.542C94.8934 41.3088 96.6718 43.3003 97.883 45.7234C98.2617 46.4945 98.5669 47.3034 98.7983 48.1132C99.8623 52.1078 98.3531 55.5979 94.7581 57.6358C93.4558 58.3718 92.0578 58.8319 90.6028 59.1634C87.7664 59.7886 84.8863 59.8603 82.0031 59.6735C81.2084 59.6277 80.4316 59.5263 79.6182 59.4622C79.4518 59.4458 79.3041 59.4476 79.0638 59.432C79.1408 59.6896 79.1991 59.929 79.2569 60.1314C79.8528 62.0633 80.1353 64.0544 79.8827 66.0705C79.5806 68.5857 78.5542 70.7588 76.6544 72.4808C75.5216 73.4917 74.2557 74.1903 72.8213 74.6878C70.5592 75.4723 68.2162 75.6667 65.8326 75.5662C65.5185 75.5516 65.2044 75.5369 64.8347 75.5044C64.8378 75.7629 64.8591 76.0028 64.8618 76.2243C64.9629 78.4762 64.5082 80.587 63.1641 82.45C62.2017 83.8097 60.9208 84.7855 59.4338 85.5237C57.5246 86.4701 55.517 86.9191 53.4138 87.0922C50.499 87.349 47.6149 87.0884 44.7633 86.458C44.5413 86.4237 44.3006 86.3712 44.0229 86.3192C44.0448 86.5959 44.0657 86.7988 44.087 87.0386C44.375 89.4729 44.5521 91.9085 44.36 94.3485C44.2812 95.476 44.11 96.5861 43.9017 97.6967C43.7638 98.5109 43.4595 99.3087 42.9879 100.016C42.6435 100.556 42.3138 100.782 41.7982 100.899C41.7977 100.862 41.7786 100.806 41.7786 100.806C42.3815 100.264 42.6497 99.5401 42.8437 98.7806C43.1436 97.6135 43.2401 96.4304 43.2628 95.2482C43.337 92.2186 43.0789 89.1931 42.6548 86.1879C42.6356 86.1328 42.6165 86.0776 42.5965 85.9486C42.4296 85.8952 42.2441 85.8236 42.0403 85.7706C37.1099 84.2788 32.6124 81.9323 28.6212 78.6933C26.4953 76.983 24.6065 75.0298 23.248 72.6454C22.7577 71.8018 22.3964 70.9381 22.145 69.9993C21.9701 69.2812 21.906 68.5617 21.9896 67.8405C22.2103 66.2311 23.0832 65.1126 24.5907 64.5403C25.6385 64.1398 26.7094 64.1269 27.8191 64.2613C30.0941 64.5478 32.1177 65.4282 33.998 66.6798C38.1689 69.5104 40.9673 73.3733 42.3369 78.2138C42.8771 80.1279 43.2153 82.1368 43.6451 84.0891C43.6847 84.3103 43.7243 84.5314 43.764 84.7525C43.8383 84.7886 43.8756 84.8251 43.9313 84.8429C47.3208 85.6699 50.7602 86.0347 54.2449 85.5679C56.2178 85.304 58.0767 84.7829 59.7812 83.7097C62.5852 81.9214 63.915 78.8766 63.3926 75.3741C63.2075 75.3394 62.9668 75.2869 62.7448 75.2526C58.3594 74.5484 54.2429 73.1576 50.4292 70.8583C48.8479 69.8986 47.376 68.8268 46.1222 67.4568C45.3924 66.6715 44.7175 65.8302 44.3361 64.8375C44.1078 64.2862 43.9343 63.6789 43.8902 63.0885C43.763 61.7234 44.4513 60.607 45.6997 60.001C46.4161 59.6784 47.1716 59.54 47.9471 59.5306C49.2766 59.5146 50.5727 59.7944 51.8154 60.2411C54.7458 61.2769 57.2593 62.964 59.428 65.1539C61.8583 67.5993 63.6283 70.4219 64.4818 73.8097C64.5009 73.8648 64.52 73.92 64.5583 74.0304C64.7247 74.0468 64.9098 74.0815 65.0762 74.098C67.017 74.2407 68.9739 74.1802 70.8893 73.7508C72.3812 73.4188 73.7596 72.8666 75.0045 71.9651C76.7073 70.7442 77.7768 69.0876 78.2511 67.0689C78.6386 65.513 78.6564 63.9246 78.3418 62.3401C78.1646 61.4374 77.8772 60.5729 77.6449 59.6892C77.5479 59.3026 77.3059 59.1393 76.8987 59.0703C74.1232 58.6237 71.4189 57.9545 68.7675 57.0816C64.7074 55.7825 60.7723 54.131 57.1438 51.8663C55.376 50.7612 53.7359 49.5252 52.3321 47.9723C51.6393 47.1866 51.0382 46.3443 50.7121 45.3326C50.1937 43.6952 50.8601 42.3021 52.4592 41.6733C52.9002 41.4833 53.3789 41.3668 53.8586 41.324C54.6149 41.2595 55.3535 41.2506 56.093 41.3155C57.7384 41.4619 59.3504 41.9041 60.8904 42.4949C66.3075 44.5349 70.9443 47.7107 74.7099 52.1529C76.0964 53.7983 77.2818 55.6122 78.1917 57.5588C78.3243 57.8342 78.456 58.0358 78.8257 58.0683C81.785 58.4388 84.7239 58.6434 87.6934 58.3306C89.3904 58.1623 91.0486 57.8468 92.6295 57.2368C93.5487 56.8933 94.4297 56.4394 95.1981 55.8392C97.1927 54.3192 98.0549 52.3143 97.8587 49.8235C97.7078 48.034 97.0052 46.4358 96.0637 44.9328C94.8022 42.9351 93.1755 41.2741 91.3294 39.8005C89.4272 38.2722 87.3805 37.0042 85.2065 35.9039C85.0948 35.8314 84.9836 35.7958 84.8354 35.7607C84.726 35.8728 84.6161 35.948 84.5436 36.0597C83.5981 37.2899 82.4084 38.1723 80.9556 38.6885C79.9995 39.0324 79.0059 39.3399 78.0106 39.4996C73.7526 40.1605 69.6453 39.5452 65.7089 37.7829C64.799 37.3692 63.9247 36.8441 63.2146 36.1509C62.9903 35.932 62.7661 35.7131 62.5601 35.4755C61.3413 33.9574 61.6536 32.2916 63.2661 31.2379C63.9442 30.805 64.6983 30.5558 65.4721 30.3987C66.6876 30.1255 67.9428 30.0734 69.2175 30.1134C72.4135 30.2041 75.5241 30.8683 78.5466 31.8845C80.2338 32.4366 81.8676 33.1556 83.5188 33.782C83.7591 33.7976 83.9633 33.8875 84.1862 33.9956ZM42.4665 84.3619C42.3281 83.6064 42.2093 82.943 42.0718 82.2614C41.6206 80.0692 41.1142 77.8961 40.1847 75.8574C38.383 71.9455 35.6679 68.8573 31.8939 66.7791C30.4995 66.0018 28.9973 65.4844 27.3893 65.3745C26.6129 65.31 25.8561 65.3376 25.1024 65.6237C24.0363 66.0429 23.3805 66.7895 23.3022 67.9539C23.272 68.5083 23.2791 69.0992 23.4517 69.6327C23.6827 70.4055 23.9875 71.1775 24.3839 71.8929C25.5163 73.9107 27.0879 75.5908 28.8419 77.0839C32.6671 80.3435 37.0169 82.6917 41.8 84.2222C41.9851 84.2569 42.1884 84.2729 42.4665 84.3619ZM76.8262 57.6492C76.7501 57.4654 76.7305 57.3733 76.674 57.2817C75.918 55.8503 75.0339 54.5128 74.0216 53.2693C71.4351 50.1241 68.3205 47.5947 64.7694 45.6246C62.3712 44.3054 59.8839 43.2643 57.1818 42.7798C56.312 42.6241 55.4065 42.5796 54.5202 42.5903C53.9663 42.597 53.4141 42.7514 52.8811 42.961C52.1091 43.2658 51.8399 43.9154 52.0526 44.7069C52.1496 45.0936 52.3201 45.4424 52.5274 45.7908C53.1121 46.7995 53.9161 47.6208 54.7931 48.3674C56.1181 49.5149 57.5522 50.5133 59.0953 51.3626C64.5062 54.4183 70.3105 56.3982 76.4008 57.5989C76.4934 57.6163 76.6228 57.6332 76.8262 57.6492ZM63.1705 73.807C63.1314 73.6228 63.1296 73.4751 63.0726 73.3465C62.8435 72.7214 62.6695 72.0771 62.3852 71.4711C60.7531 67.8342 58.1523 65.0401 54.8028 62.9383C53.1654 61.9238 51.4573 61.1688 49.5511 60.8409C48.6813 60.6852 47.8128 60.6403 46.9287 60.8357C45.4924 61.1854 44.8949 62.1714 45.2816 63.6072C45.4943 64.3988 45.9459 65.0951 46.4523 65.7353C47.5406 67.1627 48.9573 68.2536 50.4648 69.2142C54.2241 71.6066 58.3412 73.0343 62.7083 73.7572C62.8195 73.7928 62.9672 73.791 63.1705 73.807ZM83.627 35.0919C83.4597 35.0016 83.348 34.9291 83.255 34.8748C79.5602 33.2389 75.7226 32.0109 71.7088 31.4869C70.0256 31.2671 68.3437 31.1582 66.6476 31.4003C65.8917 31.5017 65.1184 31.6957 64.4203 31.9996C62.9137 32.6457 62.7424 33.7559 63.8833 34.9425C64.6126 35.6908 65.4869 36.2159 66.4337 36.6292C69.9425 38.1566 73.5875 38.722 77.3863 38.2699C78.7879 38.1052 80.1316 37.7381 81.3792 37.0582C82.2415 36.5861 82.9912 35.9676 83.627 35.0919Z" fill="#FFFFFC"/></svg>
            </div>
            <button class="lg:mb-[2.59rem] mb-[8.89rem] rounded-full border-2 border-dashed border-[#FFFFFC] w-[7.9rem] h-[7.9rem] grid place-content-center">
                <svg class="lg:w-[44px] w-[34px]" width="44" height="70" viewBox="0 0 44 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.959 69.1059L21.959 0M0 44.8211C5.57831 44.8211 21.959 49.7453 21.959 69.2128C21.959 49.7453 38.3398 44.8211 43.9181 44.8211" stroke="#FFFFFC" stroke-width="2"/></svg>
            </button>
        </div>
    </div>

    <section id="services" class="bg-[#EBE2D9] py-20">
        <div class="flex lg:flex-row flex-col justify-between items-center container mx-auto lg:px-0 px-4 lg:gap-[4.44rem] gap-[3.81rem]">
            <div>
                <h2 class="text-[#020E10] lg:text-5xl text-[2rem] font-poppinsBold lg:leading-[150%] leading-[3rem] lg:tracking-[-0.06rem] tracking-tighter mb-4 lg:max-w-[35.78rem]">Want you to boost your business growth? Solution is here.</h2>
                <p class="text-[#020E10] lg:text-lg lg:leading-8 leading-[1.5rem] opacity-75 lg:max-w-[35.78rem] lg:mb-[3.5rem] mb-[2.62rem] lg:tracking-normal tracking-tighter">We provide various services to make your business grow and get bigger. Your satisfaction is our first priority.</p>
                <button class="rounded-full border-2 border-[#020E10] border-dashed w-[7.9rem] h-[7.9rem] grid place-content-center">
                    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.8652 1.07552L1 49.9408M48.2207 33.7748C44.2762 29.8304 36.1752 14.7656 49.9408 0.999937C36.1752 14.7656 21.1104 6.66452 17.1659 2.72006" stroke="#020E10" stroke-width="2"/></svg>
                </button>
            </div>
            <div class="flex flex-col items-start flex-[1_0_0] lg:gap-0 gap-8">
                <div class="flex items-start lg:flex-row flex-col self-stretch lg:gap-0 gap-8">
                    <div class="flex flex-col items-start border-t-[#020E10] border-r-[#020E10] border-l-[#020E10] border-b lg:border-b-0 border-b-[#020e10] px-4 py-[2.625rem] border-t border-solid border-r border-l relative">
                        <h4 class="text-[#020E10] text-2xl font-poppinsBold leading-8 mb-3">Web Content</h4>
                        <h5 class="text-[#020E10] text-sm leading-6 opacity-75">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <span class="absolute top-[-1.1875rem] px-2 py-1 left-2 bg-[#EBE2D9] text-[#020E10] text-2xl font-poppinsBold leading-8 tracking-[0.03rem]">01</span>
                    </div>
                    <div class="flex flex-col items-start border-t-[#020E10] border-r-[#020E10] border-l-[#020e10] border-l lg:border-l-0 lg:border-b-0 border-b border-b-[#020e10] px-4 py-[2.625rem] border-t border-solid border-r relative">
                        <h4 class="text-[#020E10] text-2xl font-poppinsBold leading-8 mb-3">Branding</h4>
                        <h5 class="text-[#020E10] text-sm leading-6 opacity-75">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <span class="absolute top-[-1.1875rem] px-2 py-1 left-2 bg-[#EBE2D9] text-[#020E10] text-2xl font-poppinsBold leading-8 tracking-[0.03rem]">02</span>
                    </div>
                </div>
                <div class="flex items-start lg:flex-row flex-col self-stretch lg:gap-0 gap-8">
                    <div class="flex flex-col items-start border-[#020E10] px-4 py-[2.625rem] border border-solid relative">
                        <h4 class="text-[#020E10] text-2xl font-poppinsBold leading-8 mb-3">SEO Consultancy</h4>
                        <h5 class="text-[#020E10] text-sm leading-6 opacity-75">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <span class="absolute top-[-1.1875rem] px-2 py-1 left-2 bg-[#EBE2D9] text-[#020E10] text-2xl font-poppinsBold leading-8 tracking-[0.03rem]">03</span>
                    </div>
                    <div class="flex flex-col items-start border-[#020E10] px-4 py-[2.625rem] border-t border-b lg:border-l-0 border-l border-solid border-r relative">
                        <h4 class="text-[#020E10] text-2xl font-poppinsBold leading-8 mb-3">Market Analysis</h4>
                        <h5 class="text-[#020E10] text-sm leading-6 opacity-75">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        <span class="absolute top-[-1.1875rem] px-2 py-1 left-2 bg-[#EBE2D9] text-[#020E10] text-2xl font-poppinsBold leading-8 tracking-[0.03rem]">04</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="stats" class="bg-[#020E10] lg:py-[3.81rem] py-[7.81rem]">
        <div class="container mx-auto flex lg:flex-row flex-col lg:px-0 px-4 flex-wrap justify-between gap-[1.88rem] items-center">
            <div class="flex flex-col flex-1 pb-[1.31rem] border-b border-[#FFFFFC] w-full lg:w-fit lg:items-start items-center">
                <h5 class="text-[#FFFFFC] lg:text-6xl text-[2rem] font-poppinsBold lg:leading-[4.5rem] leading-[3rem] lg:tracking-[-0.075rem] tracking-[0.04rem]">40+</h5>
                <h6 class="text-[#FFFFFC] lg:text-lg lg:leading-8 leading-[1.5rem]">Happy Clients</h6>
            </div>
            <div class="flex flex-col flex-1 pb-[1.31rem] border-b border-[#FFFFFC] w-full lg:w-fit lg:items-start items-center">
                <h5 class="text-[#FFFFFC] lg:text-6xl text-[2rem] font-poppinsBold lg:leading-[4.5rem] leading-[3rem] lg:tracking-[-0.075rem] tracking-[0.04rem]">540</h5>
                <h6 class="text-[#FFFFFC] lg:text-lg lg:leading-8 leading-[1.5rem]">Projects Completed</h6>
            </div>
            <div class="flex flex-col flex-1 pb-[1.31rem] border-b border-[#FFFFFC] w-full lg:w-fit lg:items-start items-center">
                <h5 class="text-[#FFFFFC] lg:text-6xl text-[2rem] font-poppinsBold lg:leading-[4.5rem] leading-[3rem] lg:tracking-[-0.075rem] tracking-[0.04rem]">300</h5>
                <h6 class="text-[#FFFFFC] lg:text-lg lg:leading-8 leading-[1.5rem]">Dedicated Members</h6>
            </div>
            <div class="flex flex-col flex-1 pb-[1.31rem] border-b border-[#FFFFFC] w-full lg:w-fit lg:items-start items-center">
                <h5 class="text-[#FFFFFC] lg:text-6xl text-[2rem] font-poppinsBold lg:leading-[4.5rem] leading-[3rem] lg:tracking-[-0.075rem] tracking-[0.04rem]">25+</h5>
                <h6 class="text-[#FFFFFC] lg:text-lg lg:leading-8 leading-[1.5rem]">Awards Won</h6>
            </div>
        </div>
    </section>

    <section id="work" class="bg-[#EBE2D9] lg:pt-[6.44rem] pt-20 lg:pb-[4.63rem] pb-20">
        <div class="container mx-auto flex flex-col lg:px-0 px-4 items-start lg:gap-12 gap-[2.62rem]">
            <div class="flex items-center lg:gap-4 gap-2">
                <span class="text-[#020E10] lg:text-5xl text-[2rem] font-poppinsBold leading-[150%] tracking-[-0.06rem]">Our works</span>
                <svg class="lg:w-[42px] w-[32px]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9432 35.8922C23.0731 30.9801 21.0736 26.0816 16.6895 23.1252C14.9918 21.9803 12.9806 21.5635 11 21.2171C19.0464 20.9411 21.8399 12.5195 22.9595 6C22.5707 11.8471 25.6277 18.1629 31.875 18.7457C25.656 22.4044 23.5215 29.1181 22.9432 35.8922Z" stroke="#020E10" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 w-full mb-20">
                <img src="{digital}" alt="" class="lg:min-h-[16rem] min-h-[18.6875rem] w-full object-cover h-full border-[#FFC42C] hover:border-[7px] transition-all duration-150 ease-in border-solid">
                <img src="{digital}" alt="" class="lg:min-h-[16rem] min-h-[18.6875rem] w-full object-cover h-full border-[#FFC42C] hover:border-[7px] transition-all duration-150 ease-in border-solid">
                <img src="{digital}" alt="" class="lg:min-h-[16rem] min-h-[18.6875rem] w-full object-cover h-full border-[#FFC42C] hover:border-[7px] transition-all duration-150 ease-in border-solid">
            </div>
            <div class="flex lg:justify-end justify-center w-full">
                <button class="rounded-full border-2 border-dashed border-[#020E10] w-[7.9rem] h-[7.9rem] grid place-content-center">
                    <svg class="lg:w-[70px] w-[58px]" width="70" height="45" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.4995 22.6064L0.393602 22.6064M45.2147 44.5654C45.2147 38.9871 50.1389 22.6064 69.6064 22.6064C50.1389 22.6064 45.2147 6.22565 45.2147 0.647348" stroke="#020E10" stroke-width="2"/></svg>
                </button>
            </div>
        </div>
    </section>

    <section id="testimonials" class="bg-[#016170] py-20">
        <div class="flex flex-col items-start lg:gap-12 gap-[2.66rem] container mx-auto lg:px-0 px-4">
            <div class="flex lg:items-center items-end lg:gap-4 gap-2">
                <span class="text-[#FFFFFC] lg:text-5xl text-[2rem] font-poppinsBold leading-[150%] tracking-[-0.06rem]">What people are saying about us</span>
                <svg class="lg:w-[80px] w-[60px]" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.4047 17.0053C38.7305 14.5184 22.2046 15.4478 11.2091 23.9143C-0.12188 32.6392 2.0543 47.51 15.4302 51.5316C17.4258 52.1317 19.3056 52.8259 21.6857 52.9906C21.823 53.0002 25.5415 62.2985 25.8251 62.3385C26.0498 62.3703 34.3754 53.917 34.4886 53.9187C36.3528 53.9457 38.2287 53.7817 40.1025 53.6105C49.4282 52.7586 58.6998 50.2191 66.1757 46.1199C82.6184 37.1039 69.6647 20.21 56.1684 17.9183M58.9248 18.5966C59.5475 18.1977 60.1355 17.7462 60.7678 17.3625M61.4876 19.5618C62.3546 18.9439 63.21 18.317 64.0875 17.7148M63.8206 20.7862C64.6872 20.1177 65.5378 19.316 66.4838 18.7601M66.1581 22.3213C67.0139 21.5768 67.9818 20.7633 68.9825 20.2084M68.6116 24.4263C69.3845 23.6956 70.2639 23.0983 71.1489 22.512M70.7929 26.9013C71.4487 26.2851 72.1006 25.6786 72.8473 25.1708M72.3789 29.4608C73.0838 28.8054 73.8609 28.1108 74.6964 27.6154M73.5849 32.6394C74.3437 31.9827 75.1685 31.4113 75.9565 30.7913M73.8258 36.4662C74.5914 35.8912 75.3216 35.2489 76.1458 34.7557M15.2239 53.2647C15.7825 52.8084 16.3818 52.3926 16.9837 51.9956M19.2318 54.3991C19.8887 53.9082 20.5749 53.4413 21.2441 52.9666M34.7419 56.3685C35.5691 55.5354 36.3894 54.6961 37.1846 53.8328M33.3911 57.7931C32.7513 58.5266 31.9869 59.1415 31.334 59.8671M30.1228 61.1879C29.0082 62.0067 28.2695 63.262 27.2592 64.1986M38.8233 55.8952C39.9352 55.1144 40.9042 54.1591 42.0411 53.4107M44.2568 55.3646C45.2105 54.4602 46.1126 53.3853 47.1985 52.6358M49.3148 54.3889C50.1475 53.3368 51.1464 52.296 52.2499 51.5153M54.7603 53.2559C55.8353 51.9464 57.0968 50.6164 58.4549 49.5939M60.4439 51.2272C61.8057 49.5513 63.6393 48.0301 65.282 46.6205M66.7428 49.3686C69.5843 45.7244 72.9089 42.4053 75.9712 38.946M71.7629 47.267C73.0285 45.7613 74.3858 44.2925 75.7147 42.8392" stroke="#FFFFFC" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="flex flex-col lg:gap-[1.88rem] gap-8">
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[2.38rem] gap-8 w-full">
                    <div class="flex flex-col items-start gap-6 flex-[1_0_0] lg:p-8 p-4 opacity-75 hover:bg-[#020E10] hover:opacity-100">
                        <div class="flex items-center gap-3">
                            <img src="{digital}" class="w-[3.5rem] h-[3.5rem] rounded-full object-cover" alt="">
                            <div class="flex flex-col gap-[0.12rem]">
                                <span class="text-[#FFFFFC] lg:text-lg font-poppinsBold leading-8">Jerome Bell</span>
                                <h6 class="text-[#FFFFFC] lg:text-sm text-[.75rem] leading-6 opacity-65">Product Designer</h6>
                            </div>
                        </div>
                        <p class="text-[#FFFFFC] text-sm opacity-85 leading-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div class="flex flex-col items-start gap-6 flex-[1_0_0] lg:p-8 p-4 opacity-75 hover:bg-[#020E10] hover:opacity-100">
                        <div class="flex items-center gap-3">
                            <img src="{digital}" class="w-[3.5rem] h-[3.5rem] rounded-full object-cover" alt="">
                            <div class="flex flex-col gap-[0.12rem]">
                                <span class="text-[#FFFFFC] lg:text-lg font-poppinsBold leading-8">Robert Fox</span>
                                <h6 class="text-[#FFFFFC] lg:text-sm text-[.75rem] leading-6 opacity-65">CEO</h6>
                            </div>
                        </div>
                        <p class="text-[#FFFFFC] text-sm opacity-85 leading-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div class="flex flex-col items-start gap-6 flex-[1_0_0] lg:p-8 p-4 opacity-75 hover:bg-[#020E10] hover:opacity-100">
                        <div class="flex items-center gap-3">
                            <img src="{digital}" class="w-[3.5rem] h-[3.5rem] rounded-full object-cover" alt="">
                            <div class="flex flex-col gap-[0.12rem]">
                                <span class="text-[#FFFFFC] lg:text-lg font-poppinsBold leading-8">Leslie Alexander</span>
                                <h6 class="text-[#FFFFFC] lg:text-sm text-[.75rem] leading-6 opacity-65">UX Researcher</h6>
                            </div>
                        </div>
                        <p class="text-[#FFFFFC] text-sm opacity-85 leading-6">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
                <div class="flex items-center lg:gap-8 gap-6 justify-end">
                    <button>
                        <svg class="lg:w-[42px] w-[32px]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.375 7.875L20.2519 9.70331L10.3031 19.6875H36.75V22.3125H10.3031L20.2519 32.2521L18.375 34.125L5.25 21L18.375 7.875Z" fill="#FFFFFC"/></svg>
                    </button>
                    <button>
                        <svg class="lg:w-[42px] w-[32px]" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.625 7.875L21.7481 9.70331L31.6969 19.6875H5.25V22.3125H31.6969L21.7481 32.2521L23.625 34.125L36.75 21L23.625 7.875Z" fill="#FFFFFC"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-[#EBE2D9] py-20">
        <div class="container mx-auto flex flex-col items-start lg:px-0 px-4">
            <div class="flex lg:items-center items-end lg:gap-4 gap-2 lg:mb-12 mb-[2.62rem]">
                <span class="text-[#020E10] lg:text-5xl text-[2rem] font-poppinsBold leading-[150%] tracking-[-0.06rem]">See our blog posts</span>
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0841 15.4302C12.722 13.3373 13.9955 10.901 15.749 8.9331C20.1678 11.5666 35.5667 20.5284 38.8501 22.2101C35.9698 22.2203 33.2467 22.2311 30.1256 22.5191C31.4368 25.1765 32.9387 28.234 33.7124 31.0179C29.0526 27.1938 13.1518 17.2955 11.0841 15.4302Z" stroke="#020E10" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.13438 21.0911C5.04008 20.1619 6.79213 18.8818 8.48448 17.6123C9.89172 19.7916 14.6312 27.7571 16.4043 30.7533C14.5261 29.6393 12.2928 29.0973 10.2726 28.2911C9.93717 29.2838 9.81905 30.3355 9.53763 31.3458C9.26359 32.3299 8.81904 33.2433 8.67272 34.2649C7.15578 32.0203 3.9968 23.2579 3.13438 21.0911Z" stroke="#020E10" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div class="grid md:grid-cols-2 lg:gap-8 gap-6 w-full mb-[3.5rem]">
                <div class="flex lg:flex-row flex-col items-start lg:gap-[1.375rem] gap-4 self-stretch group">
                    <img src="{digital}" class="flex-1 max-w-[17.81rem] lg:h-[14.25rem] h-[15.875rem] object-cover group-hover:border-4 border-[#FFC42C] transition-all duration-150 ease-in-out" alt="">
                    <div class="flex flex-col items-start gap-4 flex-[1_0_0] py-[1.375rem]">
                        <div>
                            <span class="text-[#020E10] opacity-50 lg:text-sm text-[.75rem] font-poppinsSemiBold leading-6">June 19, 2022</span>
                            <h6 class="my-2 text-[#020E10] lg:text-2xl text-[1.25rem] font-poppinsBold leading-8">Micro tips for UI design</h6>
                            <h5 class="text-[#020E10] text-sm font-poppinsSemiBold leading-6 opacity-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
                        </div>
                        <button class="flex items-center gap-2">
                            <span class="text-[#020E10] leading-6 group-hover:text-[#016170] group-hover:font-poppinsBold">Read more</span>
                            <svg class="group-hover:rotate-[-50deg] transition-all duration-150 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-[#016170]" d="M13.5 5.0332L12.4275 6.07795L18.1125 11.7832H3V13.2832H18.1125L12.4275 18.963L13.5 20.0332L21 12.5332L13.5 5.0332Z" fill="#020E10"/></svg>
                        </button>
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-start lg:gap-[1.375rem] gap-4 self-stretch group">
                    <img src="{digital}" class="flex-1 max-w-[17.81rem] lg:h-[14.25rem] h-[15.875rem] object-cover group-hover:border-4 border-[#FFC42C] transition-all duration-150 ease-in-out" alt="">
                    <div class="flex flex-col items-start gap-4 flex-[1_0_0] py-[1.375rem]">
                        <div>
                            <span class="text-[#020E10] opacity-50 lg:text-sm text-[.75rem] font-poppinsSemiBold leading-6">June 18, 2022</span>
                            <h6 class="my-2 text-[#020E10] lg:text-2xl text-[1.25rem] font-poppinsBold leading-8">How to select colors</h6>
                            <h5 class="text-[#020E10] text-sm font-poppinsSemiBold leading-6 opacity-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
                        </div>
                        <button class="flex items-center gap-2">
                            <span class="text-[#020E10] leading-6 group-hover:text-[#016170] group-hover:font-poppinsBold">Read more</span>
                            <svg class="group-hover:rotate-[-50deg] transition-all duration-150 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-[#016170]" d="M13.5 5.0332L12.4275 6.07795L18.1125 11.7832H3V13.2832H18.1125L12.4275 18.963L13.5 20.0332L21 12.5332L13.5 5.0332Z" fill="#020E10"/></svg>
                        </button>
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-start lg:gap-[1.375rem] gap-4 self-stretch group">
                    <img src="{digital}" class="flex-1 max-w-[17.81rem] lg:h-[14.25rem] h-[15.875rem] object-cover group-hover:border-4 border-[#FFC42C] transition-all duration-150 ease-in-out" alt="">
                    <div class="flex flex-col items-start gap-4 flex-[1_0_0] py-[1.375rem]">
                        <div>
                            <span class="text-[#020E10] opacity-50 lg:text-sm text-[.75rem] font-poppinsSemiBold leading-6">June 17, 2022</span>
                            <h6 class="my-2 text-[#020E10] lg:text-2xl text-[1.25rem] font-poppinsBold leading-8">Prototype in figma</h6>
                            <h5 class="text-[#020E10] text-sm font-poppinsSemiBold leading-6 opacity-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
                        </div>
                        <button class="flex items-center gap-2">
                            <span class="text-[#020E10] leading-6 group-hover:text-[#016170] group-hover:font-poppinsBold">Read more</span>
                            <svg class="group-hover:rotate-[-50deg] transition-all duration-150 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-[#016170]" d="M13.5 5.0332L12.4275 6.07795L18.1125 11.7832H3V13.2832H18.1125L12.4275 18.963L13.5 20.0332L21 12.5332L13.5 5.0332Z" fill="#020E10"/></svg>
                        </button>
                    </div>
                </div>
                <div class="flex lg:flex-row flex-col items-start lg:gap-[1.375rem] gap-4 self-stretch group">
                    <img src="{digital}" class="flex-1 max-w-[17.81rem] lg:h-[14.25rem] h-[15.875rem] object-cover group-hover:border-4 border-[#FFC42C] transition-all duration-150 ease-in-out" alt="">
                    <div class="flex flex-col items-start gap-4 flex-[1_0_0] py-[1.375rem]">
                        <div>
                            <span class="text-[#020E10] opacity-50 lg:text-sm text-[.75rem] font-poppinsSemiBold leading-6">June 16, 2022</span>
                            <h6 class="my-2 text-[#020E10] lg:text-2xl text-[1.25rem] font-poppinsBold leading-8">2022 design trends</h6>
                            <h5 class="text-[#020E10] text-sm font-poppinsSemiBold leading-6 opacity-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
                        </div>
                        <button class="flex items-center gap-2">
                            <span class="text-[#020E10] leading-6 group-hover:text-[#016170] group-hover:font-poppinsBold">Read more</span>
                            <svg class="group-hover:rotate-[-50deg] transition-all duration-150 ease-in-out" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="group-hover:fill-[#016170]" d="M13.5 5.0332L12.4275 6.07795L18.1125 11.7832H3V13.2832H18.1125L12.4275 18.963L13.5 20.0332L21 12.5332L13.5 5.0332Z" fill="#020E10"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex self-center">
                <button class="rounded-full border-2 border-[#020E10] border-dashed w-[7.9rem] h-[7.9rem] grid place-content-center">
                <svg class="lg:w-[70px] w-[58px]" width="70" height="45" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69.4995 22.6064L0.393602 22.6064M45.2147 44.5654C45.2147 38.9871 50.1389 22.6064 69.6064 22.6064C50.1389 22.6064 45.2147 6.22565 45.2147 0.647348" stroke="#020E10" stroke-width="2"/></svg>
                </button>
            </div>
        </div>
    </section>

    <footer class="bg-[#020E10] lg:py-[3.88rem] py-[3.5rem]">
        <div class="container mx-auto text-[#FFFFFC] flex lg:flex-row flex-col justify-between lg:px-0 px-4 lg:gap-0 gap-[2.62rem]">
            <div class="w-full max-w-[17.5rem] flex flex-col lg:gap-10 gap-8">
                <span class="logo pl-[1.125rem] pr-[1.19506rem] py-[0.28125rem]">
                    <svg class="lg:w-[35px] w-[28px]" width="35" height="64" viewBox="0 0 35 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.3687 60.9594L20.9412 24.7757C20.5293 23.6085 20.5979 22.3039 21.2845 21.2054V21.1367H13.5946C14.2812 22.2353 14.4186 23.6085 14.0066 24.8443L1.51052 60.9594C1.3732 61.5087 1.09856 61.9206 0.823917 62.3326L0 63.4998H7.27794C6.86598 62.3326 6.79732 61.0967 7.20928 59.9295L13.114 42.9019C17.9514 41.901 23.6018 37.7524 23.6018 37.7524L31.1715 59.9295C31.5148 61.0967 31.5148 62.3326 31.0342 63.4998H34.8792L34.0553 62.3326C33.7806 61.9206 33.506 61.5087 33.3687 60.9594ZM13.6633 41.1854L19.2247 25.1876L23.6018 37.7524C19.5875 40.3929 17.3966 41.2986 13.6633 41.1854Z" fill="#FFFFFC"/><path d="M13.1141 0.499882H0.549316C1.23591 1.6671 1.57921 2.97164 1.57921 4.27617V39.0867C1.57921 40.3912 1.23591 41.6958 0.549316 42.863H13.1141C24.7176 42.7943 34.1926 33.3193 34.1926 21.6471C34.1926 10.0436 24.7176 0.568545 13.1141 0.499882ZM13.0454 41.0778H6.79736V2.28504H13.0454C23.7563 2.28504 28.9745 11.0048 28.9745 21.6471C28.9745 32.358 23.7563 41.0778 13.0454 41.0778Z" fill="#FFFFFC"/></svg>
                </span>
                <div class="flex flex-col gap-2 opacity-75">
                    <span class="lg:text-sm text-[.75rem] lg:leading-6 leading-[150%]">Copyright © 2022 Dezign UI Template.</span>
                    <span class="lg:text-sm text-[.75rem] lg:leading-6 leading-[150%]">All rights reserved</span>
                </div>
                <div class="flex gap-4">
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0009 7.4668C13.6834 7.4668 13.3925 7.47693 12.4823 7.51835C11.5739 7.55995 10.9538 7.70378 10.4112 7.9148C9.84993 8.13276 9.37384 8.42432 8.89952 8.89881C8.42485 9.37313 8.13329 9.84922 7.91462 10.4103C7.70307 10.9531 7.55906 11.5733 7.51818 12.4814C7.47746 13.3917 7.4668 13.6827 7.4668 16.0002C7.4668 18.3178 7.47711 18.6077 7.51835 19.5179C7.56013 20.4264 7.70395 21.0465 7.9148 21.5891C8.13294 22.1503 8.4245 22.6264 8.89899 23.1007C9.37313 23.5754 9.84922 23.8677 10.4101 24.0856C10.9531 24.2967 11.5733 24.4405 12.4816 24.4821C13.3918 24.5235 13.6825 24.5336 15.9999 24.5336C18.3176 24.5336 18.6075 24.5235 19.5178 24.4821C20.4262 24.4405 21.047 24.2967 21.59 24.0856C22.151 23.8677 22.6264 23.5754 23.1006 23.1007C23.5752 22.6264 23.8668 22.1503 24.0855 21.5893C24.2952 21.0465 24.4392 20.4262 24.4819 19.5181C24.5228 18.6079 24.5335 18.3178 24.5335 16.0002C24.5335 13.6827 24.5228 13.3918 24.4819 12.4816C24.4392 11.5732 24.2952 10.9531 24.0855 10.4105C23.8668 9.84922 23.5752 9.37313 23.1006 8.89881C22.6259 8.42414 22.1512 8.13258 21.5894 7.9148C21.0454 7.70378 20.425 7.55995 19.5165 7.51835C18.6063 7.47693 18.3165 7.4668 15.9983 7.4668H16.0009ZM15.2354 9.00457C15.4626 9.00421 15.7161 9.00457 16.0009 9.00457C18.2793 9.00457 18.5494 9.01274 19.4491 9.05363C20.2811 9.09168 20.7327 9.2307 21.0335 9.3475C21.4317 9.50217 21.7156 9.68706 22.0141 9.98573C22.3128 10.2844 22.4977 10.5688 22.6527 10.9671C22.7695 11.2675 22.9087 11.7191 22.9466 12.5511C22.9875 13.4507 22.9963 13.7209 22.9963 15.9982C22.9963 18.2756 22.9875 18.5458 22.9466 19.4454C22.9085 20.2774 22.7695 20.729 22.6527 21.0294C22.498 21.4276 22.3128 21.7112 22.0141 22.0097C21.7154 22.3084 21.4319 22.4932 21.0335 22.6479C20.733 22.7652 20.2811 22.9039 19.4491 22.942C18.5495 22.9828 18.2793 22.9917 16.0009 22.9917C13.7223 22.9917 13.4522 22.9828 12.5527 22.942C11.7207 22.9036 11.2691 22.7645 10.9681 22.6477C10.5699 22.4931 10.2855 22.3082 9.98679 22.0095C9.68812 21.7108 9.50323 21.4271 9.3482 21.0287C9.2314 20.7282 9.0922 20.2767 9.05433 19.4447C9.01344 18.5451 9.00527 18.2749 9.00527 15.9961C9.00527 13.7173 9.01344 13.4485 9.05433 12.549C9.09238 11.717 9.2314 11.2654 9.3482 10.9646C9.50287 10.5664 9.68812 10.2819 9.98679 9.98324C10.2855 9.68457 10.5699 9.49968 10.9681 9.34466C11.2689 9.22732 11.7207 9.08866 12.5527 9.05043C13.3399 9.01488 13.645 9.00421 15.2354 9.00243V9.00457ZM20.556 10.4215C19.9906 10.4215 19.532 10.8796 19.532 11.4451C19.532 12.0105 19.9906 12.4691 20.556 12.4691C21.1213 12.4691 21.58 12.0105 21.58 11.4451C21.58 10.8798 21.1213 10.4215 20.556 10.4215ZM16.0009 11.6179C13.5808 11.6179 11.6187 13.5801 11.6187 16.0002C11.6187 18.4203 13.5808 20.3816 16.0009 20.3816C18.4211 20.3816 20.3825 18.4203 20.3825 16.0002C20.3825 13.5801 18.4211 11.6179 16.0009 11.6179ZM16.0009 13.1557C17.5718 13.1557 18.8454 14.4292 18.8454 16.0002C18.8454 17.5711 17.5718 18.8447 16.0009 18.8447C14.4299 18.8447 13.1564 17.5711 13.1564 16.0002C13.1564 14.4292 14.4299 13.1557 16.0009 13.1557Z" stroke="#FFFFFC" stroke-width="0.5"/></svg>
                    </button>
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.5335 15.9883C24.5335 16.5654 24.4747 17.1417 24.3593 17.7034C24.2468 18.2518 24.0801 18.7902 23.8618 19.3049C23.6485 19.8105 23.3839 20.2977 23.0747 20.7521C22.7701 21.2036 22.4192 21.6271 22.0338 22.0133C21.6475 22.3977 21.2225 22.7476 20.7712 23.0535C20.3154 23.3605 19.8275 23.6247 19.3216 23.8391C18.8061 24.0562 18.2665 24.2227 17.7186 24.335C17.1561 24.4507 16.5777 24.5098 15.9997 24.5098C15.4214 24.5098 14.843 24.4507 14.2813 24.335C13.7326 24.2227 13.1929 24.0562 12.6779 23.8391C12.1721 23.6247 11.6837 23.3605 11.2278 23.0535C10.7766 22.7476 10.3516 22.3977 9.96611 22.0133C9.58027 21.6271 9.2294 21.2036 8.92439 20.7521C8.61687 20.2977 8.35184 19.8105 8.13768 19.3049C7.9193 18.7902 7.75224 18.2518 7.63931 17.7034C7.52515 17.1417 7.4668 16.5654 7.4668 15.9883C7.4668 15.4108 7.52511 14.8332 7.63934 14.2727C7.75227 13.7243 7.91934 13.1851 8.13771 12.6712C8.35187 12.1653 8.6169 11.6776 8.92442 11.2232C9.22943 10.7714 9.5803 10.3486 9.96614 9.96207C10.3516 9.57759 10.7766 9.22852 11.2279 8.92312C11.6837 8.61478 12.1721 8.35059 12.6779 8.13587C13.193 7.91822 13.7326 7.75139 14.2814 7.63989C14.8431 7.52506 15.4214 7.4668 15.9998 7.4668C16.5777 7.4668 17.1561 7.52506 17.7186 7.63989C18.2665 7.75142 18.8061 7.91825 19.3216 8.13587C19.8275 8.35056 20.3154 8.61478 20.7713 8.92312C21.2225 9.22852 21.6476 9.57759 22.0338 9.96207C22.4193 10.3486 22.7701 10.7714 23.0747 11.2232C23.3839 11.6776 23.6485 12.1653 23.8618 12.6712C24.0801 13.1851 24.2468 13.7243 24.3593 14.2727C24.4747 14.8332 24.5335 15.4108 24.5335 15.9883ZM12.8904 9.40618C10.8582 10.3645 9.34143 12.2343 8.86848 14.4879C9.0606 14.4895 12.0974 14.5278 15.5963 13.5995C14.335 11.3618 12.9875 9.53562 12.8904 9.40618ZM16.2001 14.7201C12.4479 15.8418 8.84724 15.7611 8.71808 15.7561C8.71597 15.8343 8.71223 15.91 8.71223 15.9883C8.71223 17.8577 9.41851 19.562 10.5794 20.8507C10.5769 20.8469 12.5712 17.3139 16.5039 16.0441C16.5989 16.0124 16.6956 15.9841 16.7914 15.9567C16.6085 15.5431 16.4089 15.1287 16.2001 14.7201ZM20.8125 10.5267C19.5295 9.39701 17.8448 8.71176 15.9997 8.71176C15.4076 8.71176 14.833 8.78333 14.2825 8.91564C14.3917 9.06212 15.7605 10.8754 17.0068 13.1605C19.7566 12.1312 20.7945 10.5533 20.8125 10.5267ZM17.2882 17.1625C17.2719 17.1679 17.2557 17.1725 17.2398 17.1783C12.9401 18.6751 11.536 21.6915 11.5208 21.7245C12.7579 22.6852 14.3097 23.2648 15.9998 23.2648C17.009 23.2648 17.9703 23.0596 18.8449 22.6881C18.737 22.0523 18.3136 19.8238 17.2882 17.1625ZM20.072 22.0232C21.7083 20.9206 22.8705 19.1697 23.1946 17.1416C23.0446 17.0934 21.0058 16.4489 18.6536 16.8254C19.6095 19.4485 19.9978 21.5847 20.072 22.0232ZM17.5678 14.2449C17.7369 14.5919 17.9007 14.9451 18.0519 15.3001C18.1057 15.4274 18.1582 15.5522 18.2095 15.677C20.7129 15.3625 23.1793 15.8917 23.2847 15.9133C23.2681 14.1883 22.6501 12.6051 21.6276 11.3656C21.6138 11.3851 20.445 13.0715 17.5678 14.2449Z" stroke="#FFFFFC" stroke-width="0.5"/></svg>
                    </button>
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z" stroke="#FFFFFC" stroke-width="0.5"/></svg>
                    </button>
                    <button>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6679 10.4995C23.4022 10.701 23.9805 11.2948 24.1768 12.0488C24.5335 13.4153 24.5335 16.2666 24.5335 16.2666C24.5335 16.2666 24.5335 19.1178 24.1768 20.4845C23.9805 21.2385 23.4022 21.8322 22.6679 22.0338C21.3371 22.4 16.0001 22.4 16.0001 22.4C16.0001 22.4 10.6632 22.4 9.3323 22.0338C8.59795 21.8322 8.01962 21.2385 7.82335 20.4845C7.4668 19.1178 7.4668 16.2666 7.4668 16.2666C7.4668 16.2666 7.4668 13.4153 7.82335 12.0488C8.01962 11.2948 8.59795 10.701 9.3323 10.4995C10.6632 10.1333 16.0001 10.1333 16.0001 10.1333C16.0001 10.1333 21.3371 10.1333 22.6679 10.4995ZM14.4001 13.8666V19.1999L18.6668 16.5333L14.4001 13.8666Z" stroke="#FFFFFC" stroke-width="0.5"/></svg>
                    </button>
                </div>
            </div>
            <div class="grid lg:grid-cols-3 sm:grid-cols-3 gap-[1.88rem]">
                <div class="w-full min-w-[12.20rem] flex flex-col gap-6 items-center md:items-start">
                    <h4 class="lg:text-xl text-lg font-poppinsSemiBold leading-[1.875rem]">Company</h4>
                    <div class="flex flex-col md:items-start items-center gap-3 opacity-50 lg:text-base text-sm">
                        <button class="leading-6">Contact</button>
                        <button class="leading-6">Blog</button>
                        <button class="leading-6">Work</button>
                        <button class="leading-6">Service</button>
                    </div>
                </div>
                <div class="w-full min-w-[12.20rem] flex flex-col gap-6 items-center md:items-start">
                    <h4 class="lg:text-xl text-lg font-poppinsSemiBold leading-[1.875rem]">Support</h4>
                    <div class="flex flex-col md:items-start items-center gap-3 opacity-50 lg:text-base text-sm">
                        <button class="leading-6">Help center</button>
                        <button class="leading-6">Terms of service</button>
                        <button class="leading-6">Privacy policy</button>
                    </div>
                </div>
                <div class="w-full lg:max-w-[12.20rem] flex flex-col gap-6 items-center md:items-start">
                    <h4 class="lg:text-xl text-lg font-poppinsSemiBold leading-[1.875rem]">Stay up to date</h4>
                    <div class="flex relative">
                        <input type="text" name="" class="w-full border border-[#FFFFFC] bg-inherit outline-none opacity-90 px-3 py-2 pr-9 border-solid text-sm leading-6" id="" placeholder="Your email address">
                        <button class="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_87_1203)"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M17.0301 0.969691C17.2338 1.17342 17.3028 1.47584 17.2077 1.74778L11.9577 16.7478C11.8561 17.038 11.5876 17.2369 11.2803 17.2494C10.9731 17.2619 10.6893 17.0856 10.5644 16.8046L7.68156 10.3182L1.19516 7.43538C0.914145 7.31049 0.737848 7.02671 0.750383 6.71945C0.762918 6.41219 0.961747 6.14371 1.252 6.04213L16.252 0.792127C16.5239 0.696948 16.8264 0.765962 17.0301 0.969691ZM9.14432 9.91612L11.1668 14.4667L14.7062 4.35429L9.14432 9.91612ZM13.6455 3.29362L3.53307 6.83297L8.08366 8.85546L13.6455 3.29362Z" fill="#FFFFFC"/></g><defs><clipPath id="clip0_87_1203"><rect width="18" height="18" fill="white" transform="translate(-0.000244141)"/></clipPath></defs></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</div>