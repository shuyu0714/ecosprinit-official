<template>
    <header>
        <nav class="navbar">
            <div class="d-flex flex-column flex-md-row align-items-center">
                <a class="navbar-brand" href="/">
                    <img src="../assets/images/icon/logo-ecosprint.svg" width="120" height="48" alt="EcoSprint 奔奔 Logo" />
                </a>
                <div class="navbar-collapse">
                    <ul class="navbar-nav d-flex align-items-center list-unstyled mb-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">關於奔奔</a>
                        </li>
                        <img src="../assets/images/icon/icon-slash.svg" class="slash" width="8" height="24" alt="" />
                        <li class="nav-item">
                            <a class="nav-link" href="#">果肉泥餐包</a>
                        </li>
                        <img src="../assets/images/icon/icon-slash.svg" class="slash" width="8" height="24" alt="" />
                        <li class="nav-item">
                            <a class="nav-link" href="#">檢驗報告</a>
                        </li>
                        <img src="../assets/images/icon/icon-slash.svg" class="slash" width="8" height="24" alt="" />
                        <li class="nav-item">
                            <a class="nav-link" href="#">食材溯源</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    width: inherit;
    background-color: var(--bs-primary);
    color: var(--bs-white);
}
.navbar {
    padding: 12px 0 12px 32px;
    @media screen and (max-width: 767px) {
        padding: 12px 4px;
    }
    &-brand {
        @media screen and (max-width: 767px) {
            margin-bottom: 14px;
        }
        img {
            height: auto;
            @media screen and (max-width: 767px) {
                width: 100px;
                height: auto;
            }
        }
    }
    > .d-flex {
        justify-content: space-between;
        li {
            a {
                font-size: 16px;
                padding: 0 max(28px, 2.5vw);
                
                @media screen and (max-width: 767px) {
                    font-size: 14px;
                    padding: 0 14px;
                }
            }
        }
        .slash {
            @media screen and (max-width: 767px) {
                width: 5px;
                height: 13px;
            }
        }
    }
}
</style>