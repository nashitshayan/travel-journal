import React from 'react';
import images from '../importImages';
function Card({ item }) {
	// console.log(item);
	return (
		<section className='card'>
			<div>
				<img src={item.imageUrl} alt='location' className='card--image' />
			</div>

			<div className='card--content'>
				<div className='card--content_location'>
					<span>
						<img
							src={images['location-icon.svg']}
							alt='icon'
							className='card--content_location-icon'
						/>
					</span>
					<span className='card--content_location-country'>
						{item.location}
					</span>
					<a
						href={item.googleMapsUrl}
						className='card--content_location-maplink'>
						View on Google Maps
					</a>
				</div>
				<h2 className='card--content_title'>{item.title}</h2>
				<span className='card--content_duration'>
					{item.startDate} - {item.endDate}
				</span>
				<p className='card--content_description'>{item.description}</p>
			</div>
		</section>
	);
}

export default Card;
