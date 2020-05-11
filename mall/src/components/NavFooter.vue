<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/Steven-monkey?tab=repositories" target="_blank">熏悟空GitHub</a><span>|</span>
            <a href="https://github.com/Steven-monkey?tab=repositories" target="_blank">熏悟空GitHub</a><span>|</span>
            <a href="https://github.com/Steven-monkey?tab=repositories" target="_blank">熏悟空GitHub</a><span>|</span>
            <a href="https://github.com/Steven-monkey?tab=repositories" target="_blank">熏悟空GitHub</a><span>|</span>
            <a href="https://github.com/Steven-monkey?tab=repositories" target="_blank">熏悟空GitHub</a>
        </div>
        <div class="copyright">让全球每个人都能享受科技带来的美好生活</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
@import '@/assets/sass/config.scss';
.footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorF;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
        margin-top:46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color:$colorD;
            display: inline-block;
            margin-bottom: 20px;
        }
        span{
            margin: 0 10px;
        }
    }
    .copyright{
        font-size: 20px;
        color: #757575;
    }
}
</style>