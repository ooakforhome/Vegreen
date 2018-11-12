import React from 'react'

const ListBox = ({_id, category, dishId, name, nameCH, price, description, spicy, garlic, nuts}) => (
	<div className="dish-container" key={_id}>
		<div className="fix-flip">
			<div className="listFix p-lb col-9">
				<p className="col-4">{dishId}</p>
				{spicy ==="TRUE" || spicy === "true"? <img className="sgn col-4" src="api/image/spicy.jpg"/>: null}
				{nuts ==="TRUE" || nuts ==="true"? <img className="sgn col-4" src="api/image/nut.jpg"/>: null}
				{garlic ==="TRUE" || garlic ==="true"? <img className="sgn col-4" src="api/image/garlic.jpg"/>: null}
			</div>
			<div className="price-lb col-3">
				<p className="price-p">$ {price}</p>
			</div>
		</div>

		<div className="vertical flip-container col-12">
			<div className="vertical flipper col-12">
				<div className="vertical front col-12">
					<p className="listEng">{name}</p>
					<p className="listCh">{nameCH}</p>
				</div>
				<div className="vertical back col-12">
					<p className="listDescription">{description}</p>
				</div>
			</div>
		</div>
	</div>
);

export default ListBox
