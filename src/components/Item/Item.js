import ItemDetail from '../ItemDetail/ItemDetail'
import { Link } from 'react-router-dom';
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ id, name, img, price, stock, category }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{category}</p>
                        </div>
                        <img src={img} alt={name} />
                        <div className="card-body">
                        <botton type="button" className="btn btn-info"> <Link to={'/item/${id}'}>Ver detalle</Link></botton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item