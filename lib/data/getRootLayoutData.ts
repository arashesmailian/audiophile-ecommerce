import logo from 'assets/shared/desktop/logo.svg'
import headphones from 'assets/shared/desktop/image-headphones.png'
import earphones from 'assets/shared/desktop/image-earphones.png'
import speakers from 'assets/shared/desktop/image-speakers.png'
import cartIcon from 'assets/shared/desktop/icon-cart.svg'
import facebook from 'assets/shared/desktop/icon-facebook.svg'
import twitter from 'assets/shared/desktop/icon-twitter.svg'
import instagram from 'assets/shared/desktop/icon-instagram.svg'
import mobileMenu from 'assets/shared/tablet/icon-hamburger.svg'
import closeIcon from 'assets/shared/tablet/icons8-close.svg'

export const getRootLayoutData = ()=>{
    const headerData = {
        logo:{
            imageSrc:logo,
            imageAlt:'audiophile logo',
            link: '/',
        },
        menu:[
            {
                title:'HOME',
                link:'/',
                image:{
                    src:headphones,
                    alt:'headphones',
                },
            },
            {
                title:'HEADPHONES',
                link:'/category/headphones',
                image:{
                    src:headphones,
                    alt:'headphones',
                },
            },
            {
                title:'EARPHONES',
                link:'/category/earphones',
                image:{
                    src:earphones,
                    alt:'earphones',
                },
            },
            {
                title:'SPEAKERS',
                link:'/category/speakers',
                image:{
                    src:speakers,
                    alt:'speakers'
                },
            },
        ],
        cart:{
            icon:cartIcon,
            alt:'cart icon',
        },
        mobileMenu:{
            hamburgerIcon:mobileMenu,
            closeIcon: closeIcon,
            alt:'mobile hamburger menu'
        }
    };
    const footerData = {
        footerInfo:{
            description:"Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
            copyright:"Copyright 2021. All Rights Reserved",
        },
        socials:[
            {
                icon:facebook,
                label:'visit our facebook page',
                link:'/',
            },
            {
                icon:twitter,
                label:'visit our twitter page',
                link:'/',
            },
            {
                icon:instagram,
                label:'visit our instagram page',
                link:'/',
            },
        ],
    };

    return {headerData,footerData}
}