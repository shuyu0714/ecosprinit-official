<template>
    <footer>
        <div class="wrapper d-grid justify-content-md-between">
            <div class="brand d-flex justify-content-md-between align-items-center">
                <img class="logo img-fluid" src="../assets/images/icon/logo-ecosprint-h.png" alt="EcoSprint 奔奔 Logo" title="EcoSprint 奔奔" />
                <div class="company">
                    <h2 class="name mb-md-4 mb-2">綠尾有限公司</h2>
                    <div class="info">
                        <div>統一編號 | 96807616</div>
                        <div>地址 | 新北市新店區安興路45巷2號</div>
                        <div>電話 | <a href="tel:+02-77287761">02-77287761</a></div>
                        <div>聯絡信箱 | <a href="mailto:service@greentailpet.com">service@greentailpet.com</a></div>
                    </div>
                </div>
            </div>
            <div class="info d-flex flex-column justify-content-md-between">
                <div class="social d-inline-flex justify-content-md-end">
                    <div class="item">
                        <a class="d-block h-100" href="https://www.facebook.com/ecosprint2024" target="_blank" rel="noopener noreferrer">
                            <div class="icon h-100 facebook text-indent">Facebook</div>
                        </a>
                    </div>
                    <div class="item">
                        <a class="d-block h-100" href="https://www.instagram.com/ecosprintpet" target="_blank" rel="noopener noreferrer">
                            <div class="icon h-100 instagram text-indent">Instagram</div>
                        </a>
                    </div>
                    <div class="item">
                        <a class="d-block h-100" href="" target="_blank" rel="noopener noreferrer">
                            <div class="icon h-100 line text-indent">Line</div>
                        </a>
                    </div>
                </div>
                <div class="copyright text-center text-md-end">Copyright © 2024 eco sprint. All rights reserved.</div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: var(--bs-primary);
    color: var(--bs-white);
    padding: 3.125vw 3.64583vw;
    @media screen and (max-width: 767px) {
        padding: 27px 0 20px
    }
    .wrapper {
        width: 84.11458%;
        margin: auto;
        grid-template-columns: max-content auto;
        @media screen and (max-width: 767px) {
            grid-template-columns: 1fr;
            max-width: 316px;
        }
        a { 
            color: var(--bs-white);
            text-decoration: none;
        }
    }
}
.brand {
    @media screen and (max-width: 767px) {
        justify-content: space-between;
    }
    .logo {
        width: clamp(55px, 7.0834vw, 105px);
        margin-right: 2.5vw;
        @media screen and (max-width: 767px) {
            margin-right: 8px;
            width: clamp(60px, 7.0834vw, 105px);
        }
    }
    .company {
        .name {
            font-size: clamp(18px, 1.25vw, 24px);
            &::after {
                content: '';
                display: block;
                width: 1.875vw;
                height: 4px;
                background-color: var(--bs-white);
                margin-top: 8px;
                @media screen and (max-width: 767px) {
                    width: 16px;
                }
            }
            @media screen and (max-width: 767px) {
                font-size: 20px ;
            }
        }
        .info {
            font-size: clamp(14px, .834vw, 16px);
            line-height: 1.9;
            margin-top: 10px;
            @media screen and (max-width: 767px) {
                font-size: 13px;
            }
        }
    }
}
.info {
    @media screen and (max-width: 767px) {
        align-items: center;
        margin-top: 20px;
    }
    .social {
        gap: 0 1.6667vw;
        position: relative;
        padding-bottom: 1.25vw;
        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--bs-white);
            position: absolute;
            bottom: 0;
            width: 10.8vw;
            @media screen and (max-width: 767px) {
                width: 100%;
            }
        }
        .item {
            width: 2.5vw;
            height: 2.5vw;
            min-width: 36px;
            min-height: 36px;
            @media screen and (max-width: 767px) {
                width: 32px;
                height: 32px;
            }
            .icon {
                width: 100%;
                height: 100%;
                transition: all .25s;
                &:hover {
                    filter: opacity(25%);
                    transition: all .25s;
                }
                &.facebook {
                    background: no-repeat center / 100% url(../assets/images/icon/icon-fb.svg);
                }
                &.instagram {
                    background: no-repeat center / 100% url(../assets/images/icon/icon-ig.svg);
                }
                &.line {
                    background: no-repeat center / 100% url(../assets/images/icon/icon-line.svg);
                }
            }
        }
        @media screen and (max-width: 767px) {
            gap: 0 16px;
            padding-bottom: 16px;
            margin-bottom: 16px;
        }
    }
    .copyright {
        font-size: clamp(12px, .782vw, 15px);
    }
}
</style> 