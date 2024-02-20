import React from 'react';
import './Details.css';
import LinkIcon from '@mui/icons-material/Link';


const Details = ({data,details,attachments,Keywords,prices}) => {
    

  return (
    <div className='details-pricing'>
        <div className='details'>
            <h4>DETAILS</h4>
            <p className='heading'>Features</p>
            {details && Object.keys(details).length > 0 ? (
                
        <ul>
            {Object.keys(details).map((key) => (
                <li key={key}>{`${key}: ${details[key]}`}</li>
            ))}
        </ul>
        ) : (
        <p>No features available</p>
        )}

    <div>
      <p className='heading'>Attachments</p>
      <ul>
        {attachments.map((attachment, index) => (
          
            
            <div className='link'>
                <LinkIcon />
                <a href={attachment.file_link}>{attachment.file_name}</a>
            </div>
          
        ))}
      </ul>
    </div>
    <div>
      <p className='heading'>Keywords</p>
      <div className='keywords'>
        {Keywords.map((keyword) => (
          <div className='keyword'>{keyword}</div>
        ))}
      </div>
    </div>

        </div>
        <div className='pricing'>
            <h4>PRICING & SHIPPING</h4>
            <ul>
                <li>Minimum order:{data.minimum_order_quantity} {data.unit}</li>
                <li>Shipping: 680,96 {data.currency}</li>
                <li>Delivery: {data.delivery_time} days</li>
            </ul>
            
            <p className='heading'>Price breaks</p>
            {Object.entries(prices).map(([quantity, price]) => (
              <div className='prices'>
                <p className='price'>{`ex ${quantity} PCE`}</p>
                <p className='price'>{`${price} EUR/PCE`}</p>
              </div>
            ))}
            
        </div>
    </div>
  )
}

export default Details