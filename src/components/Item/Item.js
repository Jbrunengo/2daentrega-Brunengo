import { Link } from 'react-router-dom';
import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ id, name, img, Precio, stock, category }) => {
    return (
        <>
            <div className="container col-6">
              
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{category}</p>
                        </div>
                        <img className='img' src={img} alt={name} />
                        <div className="card-body">
                        <Link className="btn btn-info" to={`/item/${id}`}>Ver detalle</Link>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
export default Item