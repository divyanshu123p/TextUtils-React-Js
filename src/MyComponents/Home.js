import React from 'react'

export default function Home({color}) {
    const items = [
        {ItemName: "Atomic Habits", Price: 139, MRP: 400, Location: "https://i.imgur.com/V3eZyRK.jpeg"},
        {ItemName: "ET Bangalore", Price: 9, MRP: 10, Location: "https://i.imgur.com/g9uPWiV.png"},
        {ItemName: "Mint Bangalore", Price: 9, MRP: 10, Location: "https://i.imgur.com/lgB2yZX.png"},
    ];

    return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* {console.log(color)} */}
        {items.map((item, index) => ( 
                    <div key = {index} className="card" style={{ width: '15%', height: 'auto', margin: '10px', backgroundColor: color==='light'?'white':'#1C1C1C', color: color==='light'?'black':'white'}}>
                        <img src= {item.Location} className="card-img-top" alt="ET" style={{ width: '100%', height: '220px', padding: '5px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.ItemName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type='button' className="btn btn-primary" onClick={() => window.alert("Pareshan mat kar")}>Go somewhere</button>
                        </div>
                    </div>        
            ))
        }
    </div>
  )
}
