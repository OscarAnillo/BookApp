import React from 'react'
import BestSellers from './BestSellers'
import './BookList.css'

function BookList(props){
    return(
        <div className="container">
            <h1>Best Sellers Lists</h1>
            <div className="row">
                <div className="col">
                    <BestSellers 
                        title="7 Deadly Sins"
                        author="Corey Taylor"
                        weeks={15}
                        cover=<img src="https://rosesopinion.files.wordpress.com/2012/05/7-deadly-sins.jpg" alt="" />
                    />
                </div>
                <div className="col">
                    <BestSellers 
                        title="Where the crossdads sing"
                        author="Delia Owens"
                        weeks={25}
                        cover=<img src="http://barnabasartshouse.co.uk/wp-content/uploads/2018/07/crawdadsbk.jpg" alt="" />
                    />
                </div>
                <div className="col">
                    <BestSellers 
                        title="The Guardian"
                        author="Karris Callahan"
                        weeks={19}
                        cover=<img src="https://books.litfirepublishing.com/wp-content/uploads/2017/08/The-Guardian.jpg" alt="" />
                    />
                </div>
                <div className="col">
                    <BestSellers 
                        title="The English Spy"
                        author="Daniel Silva"
                        weeks={25}
                        cover=<img src="https://i.thenile.io/r1000/9780062320162.jpg?r=5e7b324e7e78c" alt="" />
                    />
                </div>
                <div className="col">
                    <BestSellers 
                        title="Peace Talks"
                        author="Jim Butcher"
                        weeks={35}
                        cover=<img src="https://www.jim-butcher.com/wp-content/uploads/2020/01/Peace-Talks_Jim-Butcher.jpg" alt="" />
                    />
                </div>
                <div className="col">
                    <BestSellers 
                        title="Vanishing Half"
                        author="Brit Bennett"
                        weeks={15}
                        cover=<img src="https://www.hachette.co.uk/wp-content/uploads/2019/08/hbg-title-9780349701448-26.jpg?fit=1556%2C2400" alt="" />
                    />
                </div>

            </div>

        </div>
    )
}


export default BookList;