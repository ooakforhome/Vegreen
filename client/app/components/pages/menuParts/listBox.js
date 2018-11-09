import React from 'react'

const ListBox = ({_id, category, dishId, name, nameCH, price, description, spicy, garlic, nuts}) => (
	<div className="flip-container">
		<div className="flipper listInner col-12">
			<p>{_id}</p>
			<div className="col-12">
				<p className="listFix">{dishId}</p>
				<img className="sgn listFix" src={spicy} />
				<img className="sgn listFix" src={garlic}/>
				<img className="sgn listFix" src={nuts}/>
				<p className="listFix">{price}</p>
			</div>
			<div className="front col-12">
				<p className="listEng">{name}</p>
				<p className="listCh">{nameCH}</p>
			</div>

			<div className="back col-12">
				<p className="listDescription">{description}</p>
			</div>

		</div>
	</div>
);

export default ListBox
