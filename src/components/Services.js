import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'



export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:'free coctails',
                info:'Dolor irure id exercitation et irure voluptate aliquip quis. Consectetur commodo est reprehenderit deserunt nisi quis et. Amet non do elit commodo veniam amet veniam exercitation do dolore. In consequat nostrud consequat dolor et qui est ipsum. Excepteur ad et consequat tempor deserunt exercitation ipsum occaecat laboris Lorem dolore pariatur.' 
            },
            {
                icon:<FaHiking/>,
                title:'endless hiking',
                info:'Duis cillum laboris quis mollit adipisicing pariatur cupidatat et. Esse veniam irure id ut et tempor ullamco laborum. In do magna quis sint commodo sunt dolor tempor nostrud do. Tempor nostrud adipisicing sint est aliqua. Tempor aliquip proident eiusmod laboris irure.' 
            },
            {
                icon:<FaShuttleVan/>,
                title:'free shuttle',
                info:'Velit nulla nulla ea aliqua velit minim nulla est adipisicing adipisicing amet aliqua. Reprehenderit laboris ea et qui. Occaecat do pariatur nulla adipisicing proident sunt proident non cillum id veniam. Eiusmod est ut qui et quis ea culpa magna velit minim voluptate. Non ipsum eiusmod eu culpa laborum ad id laborum dolore. Labore reprehenderit proident excepteur aute officia occaecat velit. Aliqua non fugiat excepteur laborum amet anim.' 
            },
            {
                icon:<FaBeer/>,
                title:'strongest beer',
                info:'Dolor occaecat quis in culpa ut adipisicing qui est. Cillum esse qui consectetur labore nisi. Ipsum culpa reprehenderit exercitation aliquip sit proident reprehenderit commodo dolor.' 
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, i) => {
                        return <article key={i} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p> 
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
